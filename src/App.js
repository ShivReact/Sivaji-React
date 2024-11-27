import React, { useState } from "react";
import TaskList from "./Components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Add a new task to the list
  const addTask = () => {
    if (task.trim()) {
      setTasks((prevTasks) => [...prevTasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  // Remove a task from the list
  const removeTask = (indexToRemove) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, index) => index !== indexToRemove)
    );
  };

  // Toggle task completion
  const toggleComplete = (indexToToggle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, index) =>
        index === indexToToggle ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>To-Do List</h1>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          style={{ padding: "5px", marginRight: "5px" }}
        />
        <button onClick={addTask} style={{ padding: "5px 10px" }}>
          Add
        </button>
      </div>
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        removeTask={removeTask}
      />
    </div>
  );
};

export default App;
