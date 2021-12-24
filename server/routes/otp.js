const express = require('express');
const router = express.Router();
const db = require("../db");
const { verifyOTP, sendEmail } = require('../otpMailer');

// otp verification route
router.post("/verifyOtp", function (req, res) {
    console.log("--------Inside otp verification--------");
    const otp = req.body.otp;
    console.log(otp);
    if (otp != null) {
        if (verifyOTP(otp)) {
            res.send(true);
        }
        else {
            db.query("DELETE FROM register ORDER BY id DESC LIMIT 1", function (err, result, fields) {
                console.log(result)
                if (result.affectedRows > 0) {
                    console.log("user removed successfully")
                }
                else {
                    console.log("error");
                }
            });
            res.send(false);
        }
    }
});

router.post("/resend-Otp", function (req, res) {
    console.log("------Inside re-send OTP------");
    sendEmail();
});

module.exports = router;