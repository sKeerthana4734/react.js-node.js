// join room screen

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Join.css';
import { Grid, Paper } from '@material-ui/core';
import Tooltip from '@mui/material/Tooltip';


const Join = () => {
    const paperStyle = {
        padding: 20, height: '55vh', width: 400, display: "flex",
        flexDirection: "column",
        justifyContent: "center", borderRadius: "35px",
        background: "#171717",
        margin: "-80px"
    }
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (

        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <Grid>
                    <Paper elevation={10} style={paperStyle}>
                        <h1 className="heading">Join</h1>
                        <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
                        <div><Tooltip title="Enter a new room code or existing code to join" placement="top-end" arrow><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /></Tooltip></div>
                        <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                            <button className="button mt-20" type="submit">Join</button>
                        </Link>
                    </Paper>
                </Grid>
            </div>
        </div >

    )
}

export default Join;