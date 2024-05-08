import { useState } from "react";
// import canvas
import confetti from "canvas-confetti";
// import component Square
import { Square } from "./components/Square";
// import constants
import { TURNS } from "./constants";
// import function checkWinner
import { checkWinnerFrom, checikEndGame } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { saveGameToStorage, resetGameStorage } from "./logic/storage";

function App() {
  // initialize the board
  const [board, setBoard] = useState(() => {
    // initialize the board from localStorage
    // se hace dentro de la funcion para que se ejecuta solo una vez
    // si se hace fuera de la funcion se ejecutara cada vez que se renderice el componente y es lento porque se ejecuta cada vez que se renderiza el componente
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  // initialize the turn
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X; // si turnFromStorage es null o undefined se asigna TURNS.X
  });
  // initialize the winner
  const [winner, setWinner] = useState(null); // null es que no hay ganador, false es que hay un empate

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
   
    // resetear el tablero en localStorage
    resetGameStorage();
  };

  const updateBoard = (index) => {
    // no permitir que se actualice el tablero si ya hay un valor en esa casilla y si hay un ganador
    if (board[index] || winner) return;
    //actualizar el tablero
    const newBoard = [...board]; // los estados siempre deben pasarse como inmutables - porque ? es una buena practica y ayuda a evitar errores
    newBoard[index] = turn;
    setBoard(newBoard);
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    // revisar si hay un ganador
    setTurn(newTurn);
    // save game local storage
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
    const newWinner = checkWinnerFrom(newBoard); // pasando el valor que se acaba de actualizar nos aseguramos que se esta revisando el tablero actualizado
    if (newWinner) {
      confetti(); // se dispara la animacion de confetti
      //alert(`El ganador es ${newWinner}`) // mostramos un alert con el ganador // esto no es una buena practica porque los estados son asincronos que se actualizan despues de que se ejecuta el codigo
      // tambien podriamos pasarle un callback a setWinner para mostrar el alert podriamos acceder al estado actualizado y estado anterior
      setWinner(newWinner); // actualizamos el estado del ganador
    } else if (checikEndGame(newBoard)) {
      setWinner(false); // empate
    }
  };

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reiniciar el juego</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
