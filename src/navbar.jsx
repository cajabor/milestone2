import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/list">My To-do List</Link></li>
        <li><Link to="/detail">View Task Detail</Link></li>
        <li><Link to="/createNew">Create New Task</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;