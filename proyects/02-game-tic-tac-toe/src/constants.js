// States that should be used in the app
export const TURNS = {
  X: "❌",
  O: "⚪",
};

// maneras de declarar como serian las combinaciones ganadoras - no es de mandera recomendada de hacerlo.
export const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
