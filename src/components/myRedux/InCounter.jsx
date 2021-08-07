import { useEffect, useState } from "react";
import { store, Increment, Init } from "../../myRedux";

const InCounter = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    Init();

    store.subscribe(() => {
      const { count } = store.getState();
      setNumber(count);
    });
  }, []);

  const handleClick = () => {
    Increment();
  };

  return (
    <div>
      <h1>{number}</h1>
      <div>
        TODO
        <button onClick={handleClick}>+1</button>
        {/* <button onClick={() => dispatch(decrement())}>-1</button> */}
      </div>
    </div>
  );
};

export default InCounter;
