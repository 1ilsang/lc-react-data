import { useSelector } from "react-redux";
import { counterSelector } from "../../redux/store/counter";
import Test3 from "./Test3";

const Test2 = () => {
  const number = useSelector(counterSelector);

  return (
    <>
      <h3>Test2: {number}</h3>
      <Test3 />
    </>
  );
};

export default Test2;
