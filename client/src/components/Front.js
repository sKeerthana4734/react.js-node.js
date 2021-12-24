//Home page

import React, { useEffect, useState } from 'react';
import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

import { CssBaseline, Paper } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
const Front = () => {
    const top = { background: 'transparent', boxShadow: 'none' }
    const footer = { height: "12vh", backgroundColor: "#00a596", flexGrow: '1' }
    const icon = { margin: "10px" }
    const icon2 = { marginTop: "8px" }
    const Homeicon = {
        fontSize: "35px"
    }
    const title = {
        flexGrow: '0.9',
        marginRight: "70%",
        color: 'black',
        fontFamily: "nunito",
    }
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, [])

    return (
        <div id="frontbg">
            <div id="frontimg" >
                <CssBaseline />
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar style={top} position="static">
                        <Toolbar>
                            <IconButton>
                                <Link to="/" className='text-link'>
                                    <HomeIcon style={Homeicon} />
                                </Link>
                            </IconButton>
                            <h3 style={title}>Chat<span style={{ color: "#00a596" }}>ly.</span></h3>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            </Typography>
                            <Link to="/login" className='text-link'>
                                <Button id="btnfront" color="inherit">Login</Button>
                            </Link>
                            <Link to="/signup" className='text-link'>
                                <Button id="btnfront" color="inherit">Sign up</Button>
                            </Link>
                        </Toolbar>
                    </AppBar>
                    <Slide direction="up" in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedheight={30}>
                        <p id="chatly"><span style={{ color: "#00a596" }}>G</span>etting <span style={{ color: "#00a596" }}>S</span>tarted with<br /> Chat
                            <span style={{ color: "#00a596" }}>ly</span></p></Slide>
                </Box>
            </div>
            <div>
                <Card sx={{ display: 'flex', backgroundColor: "black", height: "80vh" }}>
                    <Slide direction="up" in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedheight={30}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', height: "40vh" }}>
                            <CardContent sx={{ flex: '1 0 auto', width: "450px", height: "100vh" }}>
                                <p id="frontimgdown"></p>
                            </CardContent>
                        </Box>
                    </Slide>
                    <Slide direction="up" in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedheight={30}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', height: "40vh" }}>
                            <CardContent sx={{ flex: '1 0 auto', width: "750px", height: "800px" }}>
                                <Typography component="div" id="txt" variant="h5">
                                    <h2>Chatly</h2>
                                    Chatly is an online chatting application created using react.js and node.js. The application uses the socket.io module to create the chat functions. Login is the initial step to access the chat window. If new user, they are asked for sign up first which is authenticated by one time password verification sent to the registered mail id by the node-mailer module. This is now a basic version of the chatting interface wherein the attractive features are about to be added on later versions of this application.
                                </Typography>
                            </CardContent>
                        </Box>
                    </Slide>
                    <Box sx={{ display: 'flex', flexDirection: 'column', height: "40vh", marginTop: '10%' }}>
                        <CardContent sx={{ flex: '1 0 auto', width: "150px", height: "800px" }}>
                            <WhatsAppIcon id="whatsapp" fontSize="large" style={icon} />&nbsp;&nbsp;
                            <InstagramIcon id="whatsapp" fontSize="large" style={icon} />&nbsp;&nbsp;
                            <TwitterIcon id="whatsapp" fontSize="large" style={icon} />&nbsp;&nbsp;
                            <FacebookIcon id="whatsapp" fontSize="large" style={icon} />
                        </CardContent>
                    </Box>
                </Card>
            </div>
            <div>
                <Paper style={footer}>
                    <Typography id="contact">
                        Contact us &nbsp;
                        <EmailIcon fontSize="medium" style={icon2} />
                        :  ivtl.internship@gmail.com</Typography>
                    <Typography id="foot">
                        @all rights reserved</Typography>

                </Paper>
            </div>
        </div>
    );
}
export default Front;