import { Link } from '../Link'

function HomePage() {
  return (
    <>
      <h1>Home page</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero </p>
      <Link to='/about'>Ir a Nosotros </Link>
    </>
  )
}

export default HomePage
