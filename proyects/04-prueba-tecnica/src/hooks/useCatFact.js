import { useEffect, useState } from "react";
import { getRandomCatFact } from "../services/facts";


export function useCatFact()  {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    getRandomCatFact().then(newFact => setFact(newFact));
  }
  //Effect para recuperar  la cita al caragar la pagina
  //Llamamos a la funcion para obtener la cita
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}