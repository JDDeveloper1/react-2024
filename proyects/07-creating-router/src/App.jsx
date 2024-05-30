import { useEffect, useState } from 'react'
import { EVENTS } from './const'

function navigateTo(href) {
  window.history.pushState({}, '', href)
  // Crear un evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

function HomePage() {
  return (
    <>
      <h1>Home page</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero </p>
      <button onClick={() => navigateTo('/about')}>Ir a Nosotros </button>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About page</h1>
      <div>
        <img src='https://pbs.twimg.com/profile_images/1770118016434409472/NDzb4p05_400x400.jpg' alt='Foto David Soto' />
        <p>!Hola¡ Me llamo David soto y estoy creando un clon de React Router </p>
      </div>

      <button onClick={() => navigateTo('/')}>Ir a la Home </button>

    </>
  )
}

function App() {
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

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
