import React, { useState } from 'react';
import './App.css'; // Assuming your CSS is in App.css

const App = () => {
  const [newTodo, setNewTodo] = useState('');
  const [newTodoDate, setNewTodoDate] = useState('');
  const [newTodoTime, setNewTodoTime] = useState('');

  const handleAddTodo = () => {
    // Handle adding the new todo item
    console.log('Todo:', newTodo, 'Date:', newTodoDate, 'Time:', newTodoTime);
  };

  return (
    <div className="app">
      <header className="header">
<img src="/logo.png" alt="Logo" className="logo" />
        <img src="/profile.png" alt="Profile" className="profile" />
      </header>
      <main className="main-content">
        <div className="todo-section">
          <h1>Welcome to V's Todo List</h1>
          <div className="todo-input">
            <label htmlFor="new-todo">Add your todo</label>
            <input
              id="new-todo"
              type="text"
              placeholder="Add your todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <label htmlFor="new-todo-date">Date</label>
            <input
              id="new-todo-date"
              type="date"
              value={newTodoDate}
              onChange={(e) => setNewTodoDate(e.target.value)}
            />
            <label htmlFor="new-todo-time">Time</label>
            <input
              id="new-todo-time"
              type="time"
              value={newTodoTime}
              onChange={(e) => setNewTodoTime(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add</button>
          </div>
          <div className="todo-list">
            <div className="todo-item">
              <input type="checkbox" id="todo-1" />
              <label htmlFor="todo-1">Sample todo item</label>
            </div>
            {/* Add more todo items here */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
