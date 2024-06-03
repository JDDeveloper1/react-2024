import { match } from 'path-to-regexp'
import { EVENTS } from './const'
import { useEffect, useState } from 'react'
export function Router({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
  // navegación entre rutas
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    // El popstate es un evento que se dispara cuando se navega hacia adelante o hacia atrás en la historia del navegador
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  const Page = routes.find(({ path }) => {
    if (path === currentPath) { return true }

    // hemos usado path-to-regexp
    // para poder detectar las rutas dinámicas y extraer los parámetros
    // ejemplo: /search/:query <- :query es una ruta dinámica
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false

    // Guardar los parámetros de la url que eran dinámicos}
    // y que se han extraído con path-to-regexp
    // por ejemplo si la ruta es /search/:query
    // y la url es /search/javascript
    // matched.params.query === 'javascript'
    routeParams = matched.params // params from the matched route { query: 'javascript' } // /search/javascript
    return true
  })?.Component
  return Page
    ? <Page routeParams={routeParams} />
    : <DefaultComponent routeParams={routeParams} />
}
