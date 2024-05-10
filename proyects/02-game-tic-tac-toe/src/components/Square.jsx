// Square component
export const Square = ({ children, isSelected, updateBoard, index }) => {
  // Create a class name based on the isSelected prop
  const className = `square ${isSelected ? "is-selected" : ""}`;

  // event handlers
  const handleClick = () => {
    updateBoard(index);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      updateBoard(index);
    }
  };

  return (
    <button
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={className}
      tabIndex={0}
    >
      {children}
    </button>
  );
};
