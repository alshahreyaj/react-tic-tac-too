import { useSelector, useDispatch } from 'react-redux';
import { handleClick } from './ticTacToeSlice';

function Square({id}) {

    const square = useSelector((state) => state.ticTacToe.squares[id]);
    const dispatch = useDispatch();
    return <button className="square" onClick={() => dispatch(handleClick(id))}>{square}</button>;
}

export default Square;