import { Link } from '../Link'

function AboutPage() {
  return (
    <>
      <h1>About page</h1>
      <div>
        <img src='https://pbs.twimg.com/profile_images/1770118016434409472/NDzb4p05_400x400.jpg' alt='Foto David Soto' />
        <p>!Hola¡ Me llamo David soto y estoy creando un clon de React Router </p>
      </div>

      <Link to='/'>Ir a la Home </Link>

    </>
  )
}

export default AboutPage
