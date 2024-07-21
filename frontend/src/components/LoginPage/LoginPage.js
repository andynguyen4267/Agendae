// src/components/LoginPage/LoginPage.js

import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography, Avatar, CssBaseline, Paper, Link as Muilink } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledPaper = styled(Paper)(({ theme }) => ({
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
    boxShadow: theme.shadows[5],
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
}));

const StyledForm = styled('form')(({ theme }) => ({
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(3, 0, 2),
}));

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <StyledPaper elevation={6}>
                <StyledAvatar>
                    <LockOutlinedIcon />
                </StyledAvatar>
                <Typography component="h1" variant="h5">
                    Log in
                </Typography>
                <StyledForm onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <StyledButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Log in
                    </StyledButton>
                    <Typography variant="body2" align="center">
                        Don't have an account?{' '}
                        <Muilink component={Link} to="/signup" variant="body2">
                            Sign up here
                        </Muilink>
                    </Typography>
                </StyledForm>
            </StyledPaper>
        </Container>
    );
}

export default LoginPage;
