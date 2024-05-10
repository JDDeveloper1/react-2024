import { WINNER_COMBOS } from "../constants";

// funcion para verificar si hay un ganador
export const checkWinnerFrom = (boardToCheck) => {
  // revisamos todas las combinaciones ganadoras
  //para ver si X u O ganó
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] && // check 0 -> x u o
      boardToCheck[a] === boardToCheck[b] && // check 0 y 3 -> x u o -> o
      boardToCheck[a] === boardToCheck[c] // check si hay un ganador
    ) {
      return boardToCheck[a];
    }
  }
  // si no hay ganador
  return null;
};

// function para verificar si hay un empate
export const checikEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null);
  //revisamos si hay un empate
  //si no hay más espacio vacios en el board
};
