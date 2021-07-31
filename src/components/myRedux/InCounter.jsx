import { useEffect } from "react";
import { store, getState, initAction } from "../../myRedux";

const InCounter = () => {
  const dispatch = store.dispatch;
  const number = getState().count;
  console.log(dispatch(initAction));

  useEffect(() => {}, []);

  return (
    <div>
      <h1>{number}</h1>
      <div>
        TODO
        {/* <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button> */}
      </div>
    </div>
  );
};

export default InCounter;
