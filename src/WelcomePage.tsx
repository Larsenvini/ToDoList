// WelcomePage.tsx

import React from 'react';
import './WelcomePage.css'; // Import external CSS stylesheet
import logo from './logo.png'; // Import your logo image
import profileIcon from './profile.png'; // Import your profile icon image

const WelcomePage: React.FC = () => {
  return (
    <div className="WelcomePage">
      <header className="WelcomePage-header">
        <img src={logo} className="Logo" alt="Logo" />
        <h1>Welcome to V's Todo List</h1>
        <div className="ProfileIcon">
          <img src={profileIcon} alt="Profile" />
        </div>
      </header>
      <main className="WelcomePage-content">
        <section className="TodoSection">
          <h2>Your Tasks</h2>
          <form className="TodoForm">
            <input type="text" placeholder="Write your task..." />
            <button type="submit">Add Task</button>
          </form>
          <ul className="TodoList">
            <li>
              <input type="checkbox" id="task1" />
              <label htmlFor="task1">Task 1</label>
            </li>
            <li>
              <input type="checkbox" id="task2" />
              <label htmlFor="task2">Task 2</label>
            </li>
            <li>
              <input type="checkbox" id="task3" />
              <label htmlFor="task3">Task 3</label>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default WelcomePage;
