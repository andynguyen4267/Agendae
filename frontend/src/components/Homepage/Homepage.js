import React from 'react';
import { useNavigate } from 'react-router-dom';
import Agendae_logo from './Agendae_logo.png';

function Homepage() {
    const history = useNavigate();

    const navigateToTodoList = () => {
        history('/todo'); 
    };

    const navigateToLogin = () => {
        history('/login'); 
    };

    return (
        <div>
            <img src={Agendae_logo} alt="Agendae Logo" style={{ width: '100px', height: 'auto' }}/>
            <h1>Welcome to Your Todo List App</h1>
            <button onClick={navigateToTodoList}>Go to Todo List</button>
            <button onClick={navigateToLogin}>Log in</button>
        </div>
    );
}

export default Homepage;
