import React, { useState } from "react";
import { Container, Typography, List, ListItem, ListItemText, Button, Box, Grid } from '@mui/material';
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import VoiceSearch from "../VoiceSearch/VoiceSearch";


function TodoPage() {
    const [tasks, setTasks] = useState([]);

    function addTask(newTask) {
      const newTasks = [
        ...tasks,
        { id: tasks.length + 1, task: newTask, completed: false },
      ];
  
      setTasks(newTasks);
  
      // DEBUG
      // console.log('Task added:', newTasks);
    }
  
    function deleteTask(id) {
      setTasks(tasks.filter((task) => task.id !== id));
      console.log(tasks)
    }
  
    function completeTask(id) {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
      console.log(tasks)
    }

    return (
        <Container maxWidth="sm">
        <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
            Agendae
        </Typography>
        <VoiceSearch addTask={addTask} />
        <TodoForm addTask={addTask} deleteTask={deleteTask} />
        <List>
            {tasks.map(task => (
            <ListItem key={task.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <ListItemText 
                primary={task.task} 
                style={{ 
                    textDecoration: task.completed ? 'line-through' : '', 
                    wordWrap: 'break-word',
                    flex: 1,
                    marginRight: '16px'
                }}
                />
                <div>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => completeTask(task.id)}
                    style={{ marginRight: '8px' }}
                >
                    {task.completed ? 'Undo' : 'Complete'}
                </Button>
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={() => deleteTask(task.id)}
                >
                    Delete
                </Button>
                </div>
            </ListItem>
            ))}
        </List>
        </Box>
    </Container>
    );
}

export default TodoPage;