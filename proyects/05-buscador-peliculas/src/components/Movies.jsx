

function ListOfMovies({ movies }) {
  return (
    <ul className='movies'>
      {
        movies.map((movie, id) => (
          <li className='movie' key={id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <p>{movie.type}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

function NoMoviesResults() {
  return (
    <p>No se encontraron películas para esta búsqueda</p>
  )
}

export function MoviesList({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResults />
  )
}