import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png'
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData); 
    }
    const handleLoginSubmit = e => {
        e.preventDefault()
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt:10}} xs={12} md={6}>
                    <Typography>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            required
                            label="Your Email"
                            name='email'
                            type='email'
                            onChange={handleOnChange}
                            variant="standard" />
                        <br />
                        <TextField
                            required
                            sx={{ width: '75%', m: 1 }}
                            label="Your Password"
                            name='password'
                            type='password'
                            onChange={handleOnChange}
                            variant="standard" />
                        <br />
                        <Button type='onSubmit' sx={{ width: '75%', m: 1 }} variant='contained'>Login</Button>
                    </form>
                    <Link to='/register'><Button variant="text">New User? Register Here.</Button></Link>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '75%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;