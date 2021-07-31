import Item from "./Item";
import data from "../../data.json";
import { useEffect, useState } from "react";
import { storageKey } from "../../common/storage";

const List = () => {
  const [clickCount, setClickCount] = useState(0);
  const [colors, setColors] = useState({});
  const [bestColor, setBestColor] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    // Refresh local setting
    const preCount = Number(localStorage.getItem(storageKey.refreshCount) || 0);
    localStorage.setItem(storageKey.refreshCount, preCount + 1);

    // Setting Colors
    const refinedColors = data.list.reduce((acc, cur) => {
      /* CASE 1. 최초
        acc = {}, cur = { "color": "red" }
        return { ...{}, [cur.color]: 0 }
        return { ...{}, ["red"]: 0 }
        return { red: 0 } -> acc 가 된다.
      **/
      /* CASE 2.
        acc = { red: 0 }, cur = { "color": "orange" }
        return { ...{ red: 0 }, [cur.color]: 0 }
        return { red: 0, orange: 0 } -> acc 가 된다.
      **/
      // [ ] 객체에서 키값의 대괄호는 "계산된 키값"을 의미한다.
      return { ...acc, [cur.color]: 0 };
    }, {});
    setColors(refinedColors);

    // Setting SelectedIndex
    const selectedIndex = Number(
      localStorage.getItem(storageKey.selectedIndex) || 0
    );
    setSelectedIndex(selectedIndex);
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

    // console.log("item >>", selectedItem);
    const selectedColor = {
      [selectedItem.color]: selectedItem.clickCount,
    };
    // 뒤의 펼침 연산자가 앞의 키값을 덮어쓰게 된다.
    const refinedColors = { ...colors, ...selectedColor };
    setColors(refinedColors);

    // console.log("Refined colors!!", refinedColors);
    // [[key, value], [key, value], ...]
    const entries = Object.entries(refinedColors);
    // console.log("entries!", entries);
    const curBestColor = entries.reduce(
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
      {/* Header Div */}
      <div>
        <div>Click count: {clickCount}</div>
        <div>Best color: {bestColor}</div>
      </div>
      {/* Body ul */}
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
