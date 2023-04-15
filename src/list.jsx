import React from 'react'
import './list_style.css';
function List() {
    return (
      <>
        

<h2><span >Must Do List</span></h2>
<div className="list_container">
    <div className="item" id="item-1">
        <span><a href="#default">Do this</a></span>
        <div class="category">Work</div>
        
        <div class="button_container">
            <form className='action_button_container' action="detail.html" method="get">
                <button className="action_button">
                Update 
                </button> |
            </form>
            <form className='action_button_container' action="detail.html" method="get">
                <button className="action_button">
                Delete
                </button>
            </form>
        </div>
        <div className="priority">c</div>
    </div>

    <div className="item" id="item-2">
        <span><a href="#default">Do these</a></span>
        <div className="category">personal</div>
        
        <div className="button_container">
            <form className='action_button_container' action="detail.html" method="get">
                <button className="action_button">
                Update 
                </button> |
            </form>
            <form className='action_button_container' action="detail.html" method="get">
                <button className="action_button">
                Delete
                </button>
            </form>
        </div>
        <div className="priority">c</div>
    </div>

    <div className="item" id="item-3">
        <span><a href="#default">Do them</a></span>
        <div className="category">School</div>
        
        <div class="button_container">
            <form className='action_button_container' action="detail.html" method="get">
                <button class="action_button">
                Update 
                </button> |
            </form>
            <form className='action_button_container' action="detail.html" method="get">
                <button className="action_button">
                Delete
                </button>
            </form>
        </div>
        <div className="priority">c</div>
    </div>

    <div className="item" id="item-4">
        <span><a href="#default">Do that</a></span>
        <div className="category">personal</div>
        
        <div className="button_container">
            <form className='action_button_container' action="detail.html" method="get">
                <button className="action_button">
                Update 
                </button> |
            </form>
            <form className='action_button_container' action="detail.html" method="get">
                <button className="action_button">
                Delete
                </button>
            </form>
        </div>
        <div className="priority">c</div>
    </div>
</div>
<footer>© 2023 Must Do It</footer>
      </>
    );
  
  }

export default List;
