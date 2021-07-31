import Item from "./Item";
import data from "../../data.json";
import { useEffect, useState } from "react";
import { storageKey } from "../../common/storage";

const List = () => {
  const [clickCount, setClickCount] = useState(0);
  const [colors, setColors] = useState({});
  const [bestColor, setBestColor] = useState();
  const [selectedIndex, setSelectedIndex] = useState(
    Number(localStorage.getItem(storageKey.selectedIndex) || 0)
  );

  useEffect(() => {
    const preCount = Number(localStorage.getItem(storageKey.refreshCount) || 0);
    localStorage.setItem(storageKey.refreshCount, preCount + 1);
    const refinedColors = data.list.reduce((acc, cur) => {
      return { ...acc, [cur.color]: 0 };
    }, {});
    setColors(refinedColors);
  }, []);

  const handleItemClick = ({ event, index, selectedItem }) => {
    const { target } = event;
    console.log(`Index: ${index}`, target);
    setSelectedIndex(index);

    // INFO: 값을 넘기는 것과 함수를 넘기는 것의 차이 이해
    setClickCount(clickCount + 1);
    // setClickCount(clickCount + 1);
    // setClickCount((prev) => prev + 1);
    // setClickCount((prev) => prev + 1);
    localStorage.setItem(storageKey.selectedIndex, index);

    console.log("item >>", selectedItem);
    const selectedColor = {
      [selectedItem.color]: selectedItem.clickCount,
    };
    const refinedColors = { ...colors, ...selectedColor };
    setColors(refinedColors);
    const curBestColor = Object.entries(refinedColors).reduce(
      (acc, cur) => {
        const [colorKey, clickCount] = cur;
        if (acc.maxValue < clickCount) {
          acc.color = colorKey;
          acc.maxValue = clickCount;
        }
        return acc;
      },
      { color: undefined, maxValue: 0 }
    );
    setBestColor(curBestColor.color);
  };

  return (
    <>
      <div>
        <div>Click count: {clickCount}</div>
        <div>Best color: {bestColor}</div>
      </div>
      <ul className="flex-container">
        {data.list.map((item, index) => {
          const { color } = item;
          return (
            <Item
              index={index}
              key={color}
              color={color}
              totalCount={clickCount}
              isSelected={index === selectedIndex}
              onClickHandler={handleItemClick}
            />
          );
        })}
      </ul>
    </>
  );
};

export default List;
