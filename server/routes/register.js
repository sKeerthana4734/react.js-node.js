const express = require('express');
const router = express.Router();
const db = require("../db");
const { sendEmail } = require('../otpMailer');



router.get("/hi", function (req, res) {
  res.send("Hi");
});


// new user registration route
router.post("/newUser", function (req, res) {
  console.log("----------Inside newUser----------");
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  console.log(email, username, password);

  db.query("SELECT count(id) as count FROM register where email=?", email, function (err, result, fields) {
    console.log("count----", result[0].count);
    if (result[0].count == 0) {
      db.query('INSERT IGNORE INTO register(email,username,password,status) VALUES (?,?,?,?)', [email, username, password, 0], function (err, output, fields) {
        if (output.affectedRows > 0) {
          console.log("User inserted");
          sendEmail(email);
          res.send(true);
        }
        else {
          res.send(false);
          console.log("Insert Error");
        }
      });
    }
    else if (result[0].count != 0) {
      console.log("User already exists");
      res.send("user found");
    }
  });
});

module.exports = router;
