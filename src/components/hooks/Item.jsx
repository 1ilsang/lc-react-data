import { useState } from "react";
import { storageKey } from "../../common/storage";
import Body from "./Body";
import Title from "./Title";

const Item = ({ index, totalCount, color, isSelected, onClickHandler }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = (event) => {
    setClickCount(clickCount + 1);

    const selectedItem = { clickCount: clickCount + 1, color };
    onClickHandler({ event, index, selectedItem });
  };

  const handleTitleClick = (event) => {
    const { target } = event;
    console.log("Title click!", target.style.fontSize);

    localStorage.setItem(storageKey.totalTitleCount, totalCount + 1);
  };

  return (
    <li
      className="flex-item"
      style={{
        backgroundColor: color,
        border: `${isSelected ? "5px solid blue" : ""}`,
      }}
      onClick={handleClick}
    >
      <Title
        color={color}
        isSelected={isSelected}
        onClickHandler={handleTitleClick}
      />
      <Body clickCount={clickCount} />
    </li>
  );
};

export default Item;
