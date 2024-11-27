import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, toggleComplete, removeTask }) => {
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          index={index}
          toggleComplete={toggleComplete}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
