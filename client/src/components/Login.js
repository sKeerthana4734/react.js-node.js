//Login page

import React, { useState } from 'react'
import Axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import './loginSignup.css';
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core';

const Login = () => {
    const paperStyle = { padding: 50, height: '80vh', width: 460, backgroundColor: "black" }
    const avatarStyle = { backgroundColor: '#00a596' }
    const txt = { margin: '4px' }

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        Axios.post("http://localhost:5000/login", {
            username: username,
            password: password
        }).then(function (response) {
            console.log("response------", response);
            if (response.data.message) {
                // alert("successful");
                toast.success('Login successful!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                window.setTimeout(function () {
                    window.location.href = '/join';
                }, 2000);
            }
            else {
                // alert("invalid");
                toast.error('Invalid Login Credentials!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                window.setTimeout(function () {
                    window.location.href = '/login';
                }, 2000);
            }
        }).catch(function (error) {
            console.log(error);
        })
        e.preventDefault();
    };



    return (
        <div id="card" align="center">
            <Card sx={{ display: 'flex', margin: '60px', marginTop: "70px", width: '899px', height: '510px' }}>
                <Box id='box1' sx={{ display: 'flex', flexDirection: 'column', width: '440px', height: '0px', margin: '0px' }}>
                </Box>
                <CardMedia>
                    <Grid container justifyContent="flex-end">

                        <Paper elevation={10} style={paperStyle}>
                            <Grid align='center'>
                                <Avatar style={avatarStyle}>

                                </Avatar>
                            </Grid>
                            <Grid align="center">
                                <h2 > Sign In</h2>
                            </Grid>&nbsp;
                            <TextField
                                id="psd"
                                name='username'
                                value={username}
                                style={txt}
                                placeholder='Enter username'
                                onChange={(e) => { setUserName(e.target.value); }}
                                fullWidth />&nbsp;&nbsp;
                            <TextField
                                id="psd"
                                name='password'
                                value={password}
                                style={txt}
                                placeholder='Enter password'
                                type='password'
                                onChange={(e) => { setPassword(e.target.value); }}
                                fullWidth />&nbsp;
                            <Button
                                type='submit'
                                color='secondary'
                                variant="contained"
                                id="btn3" style={Object.assign({}, !username | !password ? { pointerEvents: "none" } : null, txt)}
                                onClick={handleLogin}
                                disabled={!password | !username}
                                fullWidth>
                                Login
                            </Button>&nbsp;
                            <Grid align="center">
                                <p>Not a member ?</p>
                                <Typography display="block" >
                                    <Link to="/signup" style={{ color: "#00a596" }} >
                                        Sign Up
                                    </Link>
                                </Typography>
                            </Grid>
                        </Paper>
                    </Grid>
                </CardMedia>
            </Card>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}
export default Login