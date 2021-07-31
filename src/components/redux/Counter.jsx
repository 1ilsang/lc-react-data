import { useDispatch, useSelector } from "react-redux";
import {
  counterSelector,
  decrement,
  increment,
  nameSelector,
} from "../../redux/store/counter";
import Test from "./Test";

const Counter = () => {
  const number = useSelector(counterSelector);
  const name = useSelector(nameSelector);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Name: {name}, Count: {number}
      </h1>
      <Test />
      <div>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
