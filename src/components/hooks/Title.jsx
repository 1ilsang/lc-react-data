const Title = ({ color, onClickHandler, isSelected }) => {
  const handleClick = (event) => onClickHandler(event);

  return (
    <h3
      style={{ fontSize: `${isSelected ? "30px" : "15px"}` }}
      onClick={handleClick}
    >
      {color}
    </h3>
  );
};

export default Title;
