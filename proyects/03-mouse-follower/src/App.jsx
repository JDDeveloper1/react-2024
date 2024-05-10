// COMPONENT:useEffect 

import { useEffect, useState } from "react"


const FollowMouse = () => {
  //estado que indica si esta habilitado o no
  const [enabled, setEnabled] = useState(false)
  //estado que indica la posicion del mouse
  const [position, setPosition] = useState({ x: 0, y: 0 })

  //pointer move Effecto
  useEffect(() => {
   // console.log('efecto', enabled); // Log the value of 'enabled'
    // funcion que se ejecuta cuando se mueve el mouse
    const handleMove = (event) => {
      const { clientX, clientY } = event
      {/*console.log('handleMove', { clientX, clientY }); */}
      setPosition({ x: clientX, y: clientY })
    }
    // si esta habilitado se agrega el evento
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    //cleanUp useEffect : cuando se ejecuta esto? 
    //  cuando se desmonta el componente o cuando se deshabilita el useEffect 
    //   tambien se ejecuta cundo cambia la dependencia antes de ejecutar el efecto nuevo
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled]);
  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renderiza el componente


  // change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])







  return (
    < >
      <header >
        <h1>Mouse Follower</h1>
      </header>

      {enabled && (
        <div style={{
          position: 'absolute',
          backgroundColor: '#156',
          border: '1px solid #155',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
        />
      )}

      <section>
        <button onClick={() => setEnabled(!enabled)}>
          {enabled ? 'Dejar de seguir' : 'Seguir'} puntero
        </button>
      </section>
    </>
  )
}


function App() {
  //estado que indica si esta montado o no el componente
  const [mounted, setMounted] = useState(false)


  return (
    

    <main> 
      {mounted && <FollowMouse />}
      {/* boton para montar o desmontar el componente */}
      <button onClick={() => setMounted(!mounted)}>Toggle mounted component</button>
    </main>

  )
}

export default App
