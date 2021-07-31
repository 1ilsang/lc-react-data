import { useSelector } from "react-redux";
import { counterSelector } from "../../redux/store/counter";

const Test4 = () => {
  const number = useSelector(counterSelector);

  return (
    <>
      <h3>Test4: {number}</h3>
    </>
  );
};

export default Test4;
