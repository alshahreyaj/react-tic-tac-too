import Square from "./Square";
import { useSelector, useDispatch } from 'react-redux';
import { resetBoard } from './ticTacToeSlice';

function Board() {
  const status = useSelector((state) => state.ticTacToe.status);
  const isNextX = useSelector((state) => state.ticTacToe.isNextX);
  const dispatch = useDispatch();

  const renderSquare = (i) => {
    return (
      <Square id={i}/>
    );
  };


    return (
    <>
    <h1>Tic-Tac-Toe</h1>
    <h3>{status || `Next Player: ${isNextX ? 'X' : 'O'}`}</h3>
    <button onClick={() => dispatch(resetBoard())}>Reset Board</button>
    <br />
    <br />
    <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
    );
}

export default Board;