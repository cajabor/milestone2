import React from 'react';
import "./list_style.css";
import data from "./data.json"

function Details() {
  const newdata = data.map((item) => {
    return (
      <tr key={item.taskName}>
        <td>{item.taskName}</td>
        <td>{item.taskCategory}</td>
        <td>{item.dueDate}</td>
        <td>{item.status}</td>
        <td>{item.location}</td>
      </tr>
    );
  });

  return (
    <div>
  <table class="steven">
    <thead>
      <tr>
        <th>Task name</th>
        <th>Task category</th>
        <th>Due date</th>
        <th>Status</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>{newdata}</tbody>
  </table>
  <footer>&copy; 2023 Must Do It</footer>
</div>
)
}

export default Details;

