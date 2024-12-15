import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/crud/Home';
import AddStudent from './components/crud/AddStudent';
import EditStudent from './components/crud/EditStudent';

function App() {
  return (
    <div className="App">
      
      <Router>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                         <Link to={"/home"} className="btn btn-primary">Home</Link>
                    </li>
                    <li class="nav-item">
                         <Link to={"/add-student"} className="btn btn-warning">Add New Student</Link>
                    </li>
                </ul>
         </nav>

        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/add-student' element={<AddStudent />}></Route>
          <Route path='/edit/:id' element={<EditStudent />}></Route>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
