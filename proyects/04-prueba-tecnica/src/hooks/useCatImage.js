// Custom hook para obtener la imagen del gato
import { useState, useEffect } from "react";
export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();
  //Effect para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    //if para que no se ejecute si no hay una cita
    if (!fact) return;
    const threeFirstWords = fact.split(" ").slice(0, 3).join(" ");

    const imageUrl = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red?json=true`;
    setImageUrl(imageUrl);
  }, [fact]);

  return { imageUrl };
}