import React, { useState, useEffect } from 'react';
import { IconButton, Box } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';
import CircularProgress from '@mui/material/CircularProgress';

function VoiceSearch( { addTask, deleteTask }) {
    const [recognition, setRecognition] = useState(null);
    const [listening, setListening] = useState(false);

    useEffect(() => {
        if(!('webkitSpeechRecognition' in window)) {
            alert('Your browser does not support speech recognition. Please try this in a supported browser like Google Chrome.');
            return;
        }
    

    const processVoiceCommand = (command) => {
        if (command.toLowerCase().includes('add task')) {
          const task = command.replace(/add task/i, '').trim();
          if (task) {
            addTask(task);
          }
        }
        else {
          console.log('Command not recognized:', command);
        }
    };

    const recog = new window.webkitSpeechRecognition();
    recog.continuous = false;
    recog.interimResults = false;
    recog.lang = 'en-US';

    recog.onstart = () => {
        console.log('Voice recognition started. Speak now.');
        setListening(true);
    };

    recog.onerror = (event) => {
        console.log('Voice recognition error', event);
    };

    recog.onend = () => {
        console.log('Voice recognition ended.');
        setListening(false);
    };

    recog.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log('Transcript:', transcript);
        processVoiceCommand(transcript);
    };

    setRecognition(recog);
    }, [addTask, deleteTask]);

    const startRecognition = () => {
        if (recognition) {
            recognition.start();
        }
    };

    const stopRecognition = () => {
        if (recognition) {
            recognition.stop();
        }
    };
    
    const toggleRecognition = () => {
        if (listening) {
            stopRecognition();
        } else {
            startRecognition();
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
            <IconButton 
                onClick={toggleRecognition} 
                style={{
                    backgroundColor: listening ? '#ff4081' : '#6200ea',
                    color: '#fff',
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
                }}
            >
                {listening ? <StopIcon /> : <MicIcon />}
            </IconButton>
            {listening && <CircularProgress size={24} style={{ marginLeft: '10px' }} />}
        </Box>
    );
};

export default VoiceSearch;