var express = require('express');
var router = express.Router();
const db = require("../db");

// Existing user login route
router.post('/login', function (req, res, next) {
  console.log("----------Inside login----------");
  const username = req.body.username;
  const password = req.body.password;
  console.log(username, password);

  db.query("SELECT password as pwd FROM register where username=?", username, function (err, result, fields) {
    console.log(result)
    if (result && result.length) {
      if (password == result[0].pwd) {
        console.log("true sent");
        res.send({ message: true });
      }
      else {
        console.log("false sent");
        res.send({ message: false });
      }
    }
    else {
      console.log("null sent");
      res.send({ message: false });
    }
  });
});

module.exports = router;
