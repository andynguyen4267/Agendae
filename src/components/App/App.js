import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from '../Homepage/Homepage';
import TodoPage from "../TodoPage/TodoPage";
import LoginPage from '../LoginPage/LoginPage';
import Signup from '../Signup/Signup';
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/todo' element={<TodoPage/>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}


export default App;
