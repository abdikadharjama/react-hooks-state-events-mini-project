import React, { useState } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import { TASKS, CATEGORIES } from "../data"; 

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState('All');

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (text) => {
    setTasks(tasks.filter(task => task.text !== text));
  };

  const handleCategorySelect = (category) => {
    setCategory(category);
  };

  const getFilteredTasks = () => {
    return category === 'All' ? tasks : tasks.filter(task => task.category === category);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} currentCategory={category} onSelectCategory={handleCategorySelect} />
      <NewTaskForm categories={CATEGORIES.filter(cat => cat !== 'All')} onTaskFormSubmit={addTask} />
      <TaskList tasks={getFilteredTasks()} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
