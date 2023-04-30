import React from 'react';
import "./list_style.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Createnew = () => {
  const [taskName, setName] = useState("");
  const [taskCategory, setCategory] = useState("");
  const [dueDate, setDate] = useState("");
  const [status, setStatus] = useState("Not started");
  const [location, setLocation] = useState("");

  const createNewTask = async () =>{
    const response = await axios.post('/api/createnew/', {
      taskName: taskName,
      taskCategory: taskCategory,
      dueDate: dueDate,
      status: status,
      location: location
    });
    setName("");
    setCategory("");
    setDate("");
    setLocation("");
    setStatus("");

  }
  
  return (
    <div>
      <div className="createNew">
        <form className="createNew">
          <label htmlFor="taskName">Task name</label><br />
          <input type="text" id="taskName" value = {taskName} onChange={e => setName(e.target.value)} name="taskName" required /><br />

          <label htmlFor="taskCategory">Task category</label><br />
          <input type="text" id="taskCategory" value = {taskCategory} onChange={e => setCategory(e.target.value)} name="taskCategory" required /><br />

          <label htmlFor="dueDate">Due date</label><br />
          <input type="date" id="dueDate" value = {dueDate} onChange={e => setDate(e.target.value)} name="dueDate" className="dueDate" required /><br />

          <label htmlFor="status">Status</label><br />
          <select id="status" name="status" value = {status} onChange={e => setStatus(e.target.value)}  required>
            {/* <option value="" disabled selected>Select status</option> */}
            <option value="notStarted">Not started</option>
            <option value="inProgress">In progress</option>
            <option value="completed">Completed</option>
          </select><br />

          <label htmlFor="location">Location</label><br />
          <input type="text" id="location" value = {location} onChange={e => setLocation(e.target.value)}  name="location" required /><br />

          <input type="submit" value="Submit" onClick={createNewTask} />
        </form>
      </div>

      <footer>Â© 2023 Must Do It</footer>
    </div>
  );
}

export default Createnew;