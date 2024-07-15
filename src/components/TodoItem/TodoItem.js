import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import '../TodoItem/TodoItem.css';

function TodoItem({task, deleteTask, completeTask}) {
    return (
        <li style={{textDecoration: task.completed ? 'line-through' : ''}}>
            {task.task}
            <button onClick={() => completeTask(task.id)}>Complete</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
};

export default TodoItem;