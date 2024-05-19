//css
import { useEffect, useState } from 'react'
import './App.css'
//components
import { MoviesList } from './components/Movies'
//hooks
import { useMovies } from './hooks/useMovies'

function useSearch() {
  const [search, setSearch] = useState('')
  //  validación de errores con estado
  const [error, setError] = useState(null)

  useEffect(() => {
    if (search === '') { //validación de campo vacío
      setError("Debes ingresar un texto para buscar películas")
      return
    }

    if (search.length < 3) { //validación de longitud de caracteres
      setError("Debes ingresar al menos 3 caracteres")
      return
    }

    if (/^\d+$/.exec(search)) { //expresión regular para validar si es un número
      setError("Debes ingresar un texto válido")
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}

function App() {
  const { movies } = useMovies()

  const { search, setSearch, error } = useSearch()


  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ search });
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return //validación de espacios en blanco al iniciar el campo
    // esta validación ocurre antes de cambiar el estado para evitar que se muestre el error
    setSearch(event.target.value)
  }



  return (
    <div className='page'>
      <header>
        <h1>Buscador de Películas</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Buscar película</label>
          <input style={{
            border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' //cambio de color de borde 
          }} onChange={handleChange} value={search} name='query' type="text"
            placeholder="Avengers, Star Wars ..."
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <h2>Películas</h2>
        <section>
          <div >
            <MoviesList className='component-movie' movies={movies} />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
