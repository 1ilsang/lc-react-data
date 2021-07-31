import { useSelector } from "react-redux";
import { counterSelector } from "../../redux/store/counter";
import Test2 from "./Test2";

const Test = () => {
  const number = useSelector(counterSelector);

  return (
    <>
      <h3>Test1: {number}</h3>
      <Test2 />
    </>
  );
};

export default Test;
