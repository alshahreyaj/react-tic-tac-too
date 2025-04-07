import { createSlice } from '@reduxjs/toolkit';

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const initialState = {
  isNextX: true,
  squares: Array(9).fill(null),
  status: null,
};

const ticTacToeSlice = createSlice({
  name: 'ticTacToe',
  initialState,
  reducers: {
    handleClick: (state, action) => {
      const i = action.payload;
      if (state.squares[i] || state.status) {
        return;
      }

      const nextSquares = state.squares.slice();
      if (state.isNextX) {
        nextSquares[i] = 'X';
      } else {
        nextSquares[i] = 'O';
      }

      state.isNextX = !state.isNextX;
      state.squares = nextSquares;
      const winner = calculateWinner(nextSquares);
      if (winner) {
        state.status = 'Winner is ' + winner;
      }
      else if (!nextSquares.includes(null)) {
        state.status = "It's a draw!";
      }
    },
    resetBoard: (state) => {
      state.squares = Array(9).fill(null);
      state.isNextX = true;
      state.status = null;
    }
  }
});

export const { handleClick, resetBoard } = ticTacToeSlice.actions;
export default ticTacToeSlice.reducer;
