// Dependencies
import { useCallback, useEffect, useRef, useState } from 'react'
//css
import './App.css'
//components
import { MoviesList } from './components/Movies'
//custom hooks
import { useMovies } from './hooks/useMovies'
//debounce
import debounce from "just-debounce-it"



function useSearch() {
  const [search, setSearch] = useState('')
  //  validación de errores con estado
  const [error, setError] = useState(null)
  //  validación de campo vacío con referencia
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === '' // true
      return
    }

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
  const [sort, setSort] = useState(false)


  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  //debounce para evitar llamadas innecesarias al API
  const debouncedGetMovies = useCallback(
    debounce((search) => {
      console.log('search', search);
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  const handleSubmit = (event) => {
    event.preventDefault()
    //console.log({ search });
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }


  // const handleChange = (event) => {
  //   const newQuery = event.target.value
  //   if (newQuery.startsWith(' ')) return //validación de espacios en blanco al iniciar el campo
  // esta validación ocurre antes de cambiar el estado para evitar que se muestre el error
  //   setSearch(event.target.value)
  //   getMoviesDebounced({ search: event.target.value }) // se llama a la función getMovies para que se actualice la lista de películas al escribir
  // }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
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
          <label htmlFor="sort">Ordenar alfabéticamente</label>
          <input type="checkbox" onChange={handleSort} checked={sort} />

          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {loading ? <p>Cargando...</p> : <MoviesList movies={movies} />}
      </main>
    </div>
  )
}

export default App
