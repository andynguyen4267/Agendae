import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography, Avatar, CssBaseline, Paper, Link as MuiLink } from '@mui/material';
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

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        // Handle sign up logic here
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
                    Sign up
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
                        autoComplete="new-password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        autoComplete="new-password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                    <StyledButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign Up
                    </StyledButton>
                    <Typography variant="body2" align="center">
                        Already have an account?{' '}
                        <MuiLink component={Link} to="/login" variant="body2">
                            Sign in here
                        </MuiLink>
                    </Typography>
                </StyledForm>
            </StyledPaper>
        </Container>
    );
}

export default Signup;