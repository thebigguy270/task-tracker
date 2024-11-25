import React, { useState } from "react";
import TaskList from "../components/Task/TaskList";
import TaskForm from "../components/Task/TaskForm";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, task]);
  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default Dashboard;
