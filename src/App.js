import logo from './logo.png';
import List from './list';
import Createnew from './createNew';
import Details from './details';
import Root from './root';
import {BrowserRouter as Router, Link, 
    Routes, Route} from 'react-router-dom'
 import './list_style.css';
 import Signin from './Signin';

function App() {
  return (
    <>
      <header className='list-header'>
        <div className="logo">
          <img src = {logo} alt="Logo" id="banner_logo" /><br />
          Must Do It
        </div> 
        <aside>
        <Signin />
        </aside>
        <Router>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="list" >My To-do List</Link></li>
              <li><Link to="details">View Task Detail</Link></li>
              <li><Link to="createNew">Create New Task</Link></li>
            </ul>
          </nav> 
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/createNew" element={<Createnew />} />
            <Route path="/details" element={<Details />} />
            <Route path="/list" element={<List/>}/>
          </Routes>
        </Router>
      </header>
      
      <footer>© 2023 Must Do It</footer> 
    </>
  );
}

export default App;


//
//const data = response.data;