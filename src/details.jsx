import React from 'react';
import "./list_style.css";
import axios from 'axios';
import { useState, useEffect } from 'react';

const Details = () => {
  const [tasksData, setData] = useState([]); 
  
  useEffect(() =>{
    const loadData = async () =>{
      const response = await axios.get('/api/tasks');
      const newTaskData = response.data;
      setData(newTaskData);

    }

     loadData();
  } ); 
  
  const newdata = tasksData.map((item) => {
    return (
      <>
      <tr key={item.taskName}>
        <td>{item.taskName}</td>
        <td>{item.taskCategory}</td>
        <td>{item.dueDate}</td>
        <td>{item.status}</td>
        <td>{item.location}</td>
      </tr></>
      
    );
  });

  return (
    <div>
  <table className="steven">
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

