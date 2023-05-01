import React from 'react'
import './list_style.css';
import axios from 'axios';
import { useState, useEffect } from 'react';


const List = () => {
    const [tasksData, setData] = useState([]); 
  
  useEffect(() =>{
    const loadData = async () =>{
      const response = await axios.get('https://react-backend-nv65.onrender.com/api/tasks');
      const newTaskData = response.data;
      setData(newTaskData);

    }

     loadData();
    });
    
    const completeTask = async (name) => {
        const response  = await axios.put(`https://react-backend-nv65.onrender.com/api/details/${name}/updateStatus`);
        const updatedTaskData = response.data;
        setData(updatedTaskData);
    }

    const deleTask = async (name) => {
        const response = await axios.put(`https://react-backend-nv65.onrender.com/api/${name}/delete`);
        const updatedTaskData = response.data;
        setData(updatedTaskData);

    }
    
    const newdata = tasksData.map((item) => {
        return (
            <>
                <div className="item">
                    <span><a href="#default">{item.taskName}</a></span>
                    <div className="category">{item.taskCategory}</div>
                    <div className="button_container">
                        <form className='action_button_container'>
                            <button className="action_button" onClick={() => completeTask(item.taskName)}>
                            Complete 
                            </button> |
                        </form>
                        <form className='action_button_container'>
                            <button className="action_button" onClick={() => deleTask(item.taskName)}>
                            Delete
                            </button>
                        </form>
                    </div>
                    <div className="priority">c</div>
                </div>
                
            </>
        );
    });
    
    
    
    return (
        <>
            <h2><span >Must Do List</span></h2>
            <div className="list_container">
                {newdata}
            </div>
            <footer>© 2023 Must Do It</footer>
        </>
    );
  
}

export default List;
