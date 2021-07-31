import { useDispatch, useSelector } from "react-redux";
import {
  counterSelector,
  decrement,
  increment,
} from "../../redux/store/counter";

const Counter = () => {
  const number = useSelector(counterSelector);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
