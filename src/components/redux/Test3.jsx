import { useSelector } from "react-redux";
import { counterSelector } from "../../redux/store/counter";
import Test4 from "./Test4";

const Test3 = () => {
  const number = useSelector(counterSelector);

  return (
    <>
      <h3>Test3: {number}</h3>
      <Test4 />
    </>
  );
};

export default Test3;
