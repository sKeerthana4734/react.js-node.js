const nodemailer = require('nodemailer');
var OTP;
global.g_email = "";


// otp generator
function otpGenerator() {
    var otp = Math.random();
    otp = otp * 1000000;
    otp = parseInt(otp);
    console.log(otp);
    return otp
}

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: 'Gmail',

    auth: {
        user: 'ivtl.internship@gmail.com',
        pass: 'ivtl2021',
    }

});

// Email sending function
function sendEmail(email = global.g_email) {
    OTP = otpGenerator();
    global.g_email = email
    console.log("Email stored in global storage");
    // send mail with defined transport object
    var mailOptions = {
        to: email,
        subject: "Chatly account verification: ",
        html: "<h4>Thank you for Registering with Chatly.</h4><br>" + "<h3>OTP for your account verification is </h3><br>" + "<h1 style='font-weight:bold;'>" + OTP + "</h1><br>" + "<h4>*If you didn't register, Kindly ignore this mail.*</h4>" // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        console.log("mail sent");
    });
}


// otp verification function
function verifyOTP(otp) {
    if (otp == OTP) {
        console.log("You have been successfully registered");
        return true;
    }
    else {
        return false;
    }
}

module.exports = { sendEmail, verifyOTP };