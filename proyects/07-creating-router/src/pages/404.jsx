import React from 'react'
import { Link } from '../Link'

function Page404() {
  return (
    <>
      <div>
        <h1>404</h1>
        <p>La página que buscas no existe</p>
        <img
          src='https://i.kym-cdn.com/photos/images/newsfeed/001/435/941/317.gif'
          alt='Not found page'
        />
      </div>
      <Link to='/'>Volver a la Home</Link>
    </>
  )
}

export default Page404
