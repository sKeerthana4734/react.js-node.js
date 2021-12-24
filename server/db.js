// Database connection

var mysql = require('mysql');
var con = mysql.createConnection({
    host: "sql6.freesqldatabase.com",
    user: "sql6457457",
    password: "BhSai96sEg",
    database: "sql6457457"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;