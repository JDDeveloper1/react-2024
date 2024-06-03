import { useEffect } from 'react'

function SearchPage({ routeParams }) {
  useEffect(() => {
    document.title = `Buscando ${routeParams.query}`
  }, [])
  return (
    <h1>¡Has buscado! {routeParams.query}</h1>
  )
}

export default SearchPage
