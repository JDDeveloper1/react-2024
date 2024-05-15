import "./App.css";
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";
// import { Otro } from "./Components/Otro";


export default function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact()
  };



  return (
    <>
      <header>
        <h1>Prueba técnica</h1>
        <p>Este es el contenido de la prueba técnica</p>
        <button onClick={handleClick}>Get new fact</button>
      </header>
      <main>
        <section>
          {fact && <p>{fact}</p>}
          {imageUrl && <img src={imageUrl} alt="Cat saying fact" />}
          {/* <Otro /> */}
        </section>
      </main>
    </>
  );
}
