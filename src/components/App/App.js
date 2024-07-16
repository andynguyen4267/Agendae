import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from '../Homepage/Homepage';
import TodoPage from "../TodoPage/TodoPage";
import React, { useState } from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/todo' element={<TodoPage/>} />
      </Routes>
    </Router>
  );
}


export default App;
