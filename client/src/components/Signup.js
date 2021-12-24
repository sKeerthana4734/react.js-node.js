//Sign up page

import React, { useState } from 'react'
import Axios from 'axios';
import './loginSignup.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Signup = () => {
    const paperStyle = { padding: 50, height: '80vh', width: 460, backgroundColor: "#000000", marginTop: "-3px" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#00a596' }
    const Sign = { margin: '10px 0' }
    const Space = { margin: '22px 0' }

    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = (e) => {
        Axios.post("http://localhost:5000/register/newUser", {
            email: email,
            username: username,
            password: password
        }).then((response) => {
            console.log(response);
            if (response.data === "user found") {
                toast.warning('Account already exists!', {
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
                }, 5000);
            }
            else
                if (response.data) {
                    // alert("Signup successful");
                    toast.success('Account created successfully!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    window.setTimeout(function () {
                        window.location.href = '/signup/otp';
                    }, 2000);
                }
                else {
                    toast.error('Sign-Up Failed. Try Again Later!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    window.setTimeout(function () {
                        window.location.href = '/';
                    }, 2000);
                }
        })
        e.preventDefault();
    };


    return (
        <div id="card" align="center">
            <Card sx={{ display: 'flex', margin: '60px', marginTop: "70px", width: '899px', height: '510px' }}>
                <Box id='box2' sx={{ display: 'flex', flexDirection: 'column', width: '440px', height: '0px', margin: '0px' }}>

                </Box>
                <CardMedia>
                    <Paper style={paperStyle}>
                        <Grid align='center'>
                            <Avatar style={avatarStyle}>

                            </Avatar>&nbsp;
                            <h2 id="psd" style={headerStyle}>Sign Up</h2>&nbsp;
                            <Typography id="psd" variant='caption' style={Space}>Please fill this form to create an account!</Typography>&nbsp;
                        </Grid>&nbsp;
                        <form>
                            <TextField
                                fullWidth id='psd'
                                name='email'
                                type='email'
                                value={email}
                                placeholder="Email"
                                onChange={(e) => { setEmail(e.target.value); }}
                            />&nbsp;
                            <TextField
                                fullWidth id='psd'
                                name='username'
                                type='text'
                                value={username}
                                placeholder="Username"
                                onChange={(e) => { setUserName(e.target.value); }}
                            />&nbsp;
                            <TextField
                                fullWidth id='psd'
                                name='password'
                                type='password'
                                value={password}
                                placeholder="Password"
                                onChange={(e) => { setPassword(e.target.value); }}
                            />&nbsp;
                            <Button
                                type='submit'
                                color='secondary'
                                variant="contained"
                                id="btn3"
                                style={Object.assign({}, !email | !username | !password ? { pointerEvents: "none" } : null, Sign)}
                                onClick={handleSignUp}
                                disabled={!email | !username | !password} >Sign up</Button>
                            <Grid align="center">
                                <p>Already a member ?</p>
                                <Typography display="block" >&nbsp;
                                    <Link to="/login" style={{ color: "#00a596" }} >
                                        Sign In
                                    </Link>
                                </Typography>
                            </Grid>
                        </form>
                    </Paper>
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

export default Signup;