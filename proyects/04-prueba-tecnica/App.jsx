import './App.css';

import { useEffect, useState } from "react";

const CAT_ENDPOINT_FACT_URL = 'https://catfact.ninja/fact'

const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com'


export default function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
 


//Effect para recuperar  la cita al caragar la pagina  
  useEffect(() => {
    fetch(CAT_ENDPOINT_FACT_URL)
      .then(res => {
        if (!res.ok) {
          throw new Error('No se pudo obtener la cita del gato')
        }
        return res.json();
      })
      .then(data => {
        const { fact } = data;
        setFact(fact);
      })

      .catch((err) => {
        console.error(err)
        // En caso de error, mostramos un mensaje en la interfaz
        setFact('No se pudo obtener la cita del gato')
        //si hay un error con la respuesta
        // como si hay un error con la peticion a la API
        
      })
   
   
  }, [])

//Effect para recuperar la imagen cada vez que tenemos una cita nueva
useEffect(() => {
  //if para que no se ejecute si no hay una cita
  if (!fact) return
  const threeFirstWords = fact.split(' ').slice(0, 3).join(' ');

  const imageUrl = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red?json=true`;
  setImageUrl(imageUrl);

} ,[fact])


  return (
    <>
      <header>
        <h1>Prueba técnica</h1>
        <p>Este es el contenido de la prueba técnica</p>
      </header>
      <main>
        <section>

          {fact && <p>{fact}</p>}
      
          {imageUrl && <img src={imageUrl} alt="Cat saying fact" />}
        </section>
      </main>

    </>
  );
}