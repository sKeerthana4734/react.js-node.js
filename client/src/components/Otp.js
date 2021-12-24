//Otp page

import * as React from 'react';
import './loginSignup.css';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Filter6Icon from '@mui/icons-material/Filter6';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Otp = () => {
  const button = { margin: '8px 0', marginLeft: '18px', marginRight: '16px' }
  const button1 = { margin: '50px 0', color: "white" }
  const txtf = { margin: '40px 0' }
  const paperStyle = { padding: 50, height: '80vh', width: 460, backgroundColor: "black", marginTop: "-3px" }

  const [otp, setOtp] = React.useState("");

  const handleOtpSubmit = (e) => {
    Axios.post("http://localhost:5000/otp/verifyOtp", {
      otp: otp
    }).then((response) => {
      console.log(response);
      if (response.data) {
        toast.success('Account Verified!', {
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
      else {
        toast.error('Incorrect OTP. Account not verified!', {
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
  }

  const handleResendOtp = (e) => {
    Axios.post("http://localhost:5000/otp/resend-Otp");
    toast.info('OTP Resent', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div id="card" align="center">
      <form>
        <Card sx={{ display: 'flex', margin: '60px', marginTop: "70px", width: '900px', height: '510px', borderRadius: "8px" }}>
          <Box id='box3' sx={{ display: 'flex', flexDirection: 'column', width: '440px', height: '0px', margin: '0px' }}>

          </Box>
          <CardMedia>
            <Grid container justify="flex-end">
              <Paper elevation={10} style={paperStyle}>
                <CardContent>
                  <h2>Enter OTP</h2>
                  <Typography variant="body2" id="psd1">
                    We've sent a verification code to your registered email
                  </Typography>&nbsp;
                  <Filter6Icon fontSize="large" style={button1} />&nbsp;&nbsp;
                  <TextField
                    id="psd"
                    value={otp}
                    label="OTP"
                    variant="standard"
                    color="secondary"
                    placeholder='Enter OTP'
                    onChange={(e) => { setOtp(e.target.value); }}
                    style={txtf} focused />&nbsp;
                </CardContent>
                <Button
                  id="btn3"
                  style={Object.assign({}, !otp ? { pointerEvents: "none" } : null, button)}
                  onClick={handleOtpSubmit}
                  type='submit'
                  disabled={!otp}
                  variant='contained'
                  color='secondary'  >
                  Submit
                </Button>
                <Link to="/signup/otp" className='text-link'>
                  <Button
                    onClick={handleResendOtp}
                    type='submit'
                    id="btn2"
                    variant='contained'
                    color='secondary'>
                    Resend otp
                  </Button>
                </Link>
              </Paper>
            </Grid>
          </CardMedia>
        </Card>
      </form>
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
    </div >
  );
}
export default Otp;