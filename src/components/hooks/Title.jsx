const Title = ({ color, onClickHandler, isSelected }) => {
  const handleClick = (event) => onClickHandler(event);

  return (
    <h3
      style={{ fontSize: `${isSelected ? "30px" : "15px"}` }}
      onClick={handleClick}
      onMouseOver={(event) => {
        const { currentTarget } = event;
        currentTarget.style.textDecoration = `underline`;
        currentTarget.style.cursor = `pointer`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.textDecoration = `none`;
      }}
    >
      {color}
    </h3>
  );
};

export default Title;
