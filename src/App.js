import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import './index.css'; // Import Tailwind CSS

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onUpdateTask={updateTask} searchTerm={searchTerm} />
    </div>
  );
};

export default App;
