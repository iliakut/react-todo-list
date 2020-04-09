import React from "react";

const TodoListItem = ({label, important = false}) => {
  const textStyle = {
    color: important ? 'tomato' : 'black'
  };

  return (
    <span style={textStyle}>{label}</span>
  );
};

export default TodoListItem;