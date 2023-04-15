import React from 'react';
import "./list_style.css";

function Createnew() {
  return (
    <div>
      

      <div className="createNew">
        <form className="createNew">
          <label htmlFor="taskName">Task name</label><br />
          <input type="text" id="taskName" name="taskName" required /><br />

          <label htmlFor="taskCategory">Task category</label><br />
          <input type="text" id="taskCategory" name="taskCategory" required /><br />

          <label htmlFor="dueDate">Due date</label><br />
          <input type="date" id="dueDate" name="dueDate" className="dueDate" required /><br />

          <label htmlFor="status">Status</label><br />
          <select id="status" name="status" required>
            <option value="" disabled selected>Select status</option>
            <option value="notStarted">Not started</option>
            <option value="inProgress">In progress</option>
            <option value="completed">Completed</option>
          </select><br />

          <label htmlFor="location">Location</label><br />
          <input type="text" id="location" name="location" required /><br />

          <input type="submit" value="Submit" />
        </form>
      </div>

      <footer>Â© 2023 Must Do It</footer>
    </div>
  );
}

export default Createnew;