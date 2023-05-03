import React, { useState, useEffect } from 'react';
import "./list_style.css";
import axios from 'axios';

const Details = () => {
  const [tasksData, setData] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  
  useEffect(() =>{
    const loadData = async () =>{
      const response = await axios.get('https://react-backend-nv65.onrender.com/api/tasks');
      const newTaskData = response.data;
      setData(newTaskData);
    }
    loadData();
  }, []); 
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tasksData.slice(indexOfFirstItem, indexOfLastItem);
  
  const newdata = currentItems.map((item) => {
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

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(tasksData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li key={number} onClick={() => setCurrentPage(number)}>
        {number}
      </li>
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
      <ul id="page-numbers">
        {renderPageNumbers}
      </ul>
      <footer>&copy; 2023 Must Do It</footer>
    </div>
  );
}

export default Details;