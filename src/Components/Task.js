import React from "react";

const Task = ({ task, index, toggleComplete, removeTask }) => {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "5px",
      }}
    >
      <span
        onClick={() => toggleComplete(index)}
        style={{
          flex: 1,
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {task.text}
      </span>
      <button
        onClick={() => removeTask(index)}
        style={{
          marginLeft: "10px",
          padding: "5px 10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Remove
      </button>
    </li>
  );
};

export default Task;
