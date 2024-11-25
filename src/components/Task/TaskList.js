import React from "react";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ marginBottom: "10px" }}>
          <span>
            {task.title} - Due: {task.dueDate}
          </span>
          <button
            onClick={() => deleteTask(task.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
