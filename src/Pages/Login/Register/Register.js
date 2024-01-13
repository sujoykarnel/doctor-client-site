import { Alert, Box, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../../../images/login.png'
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [registerData, setRegisterData] = useState({});

    const { user, registerUser, isLoading, authError } = useAuth();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...registerData }
        newLoginData[field] = value;
        setRegisterData(newLoginData);
    }
    const handleRegisterSubmit = e => {
        if (registerData.password !== registerData.rePassword) {
            alert('Password does not match.')
            return
        };
        registerUser(registerData.email, registerData.password);
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 10 }} xs={12} md={6}>
                    <Typography>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleRegisterSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            required
                            label="Enter Email"
                            name='email'
                            type='email'
                            onChange={handleOnChange}
                            variant="standard" />
                        <br />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            required
                            label="Enter Password"
                            name='password'
                            type='password'
                            onChange={handleOnChange}
                            variant="standard" />
                        <br />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            required
                            label="Re-Enter Password"
                            name='rePassword'
                            type='password'
                            onChange={handleOnChange}
                            variant="standard" />
                        <br />
                        <Button type='onSubmit' sx={{ width: '75%', m: 1 }} variant='contained'>Register</Button>
                        <Link to='/login'><Button variant="text">Already Register? Login Here.</Button></Link>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Registration Successfully.</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '75%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;