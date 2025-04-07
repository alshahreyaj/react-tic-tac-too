import { configureStore } from '@reduxjs/toolkit';
import ticTacToeReducer from './components/ticTacToeSlice';

export const store = configureStore({
  reducer: {
    ticTacToe: ticTacToeReducer
  }
});
