var express = require('express');
var app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "camgabkun",
  port: 3306
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

/*app.get('/comment/:id/:platform/:ownerId', function(request, response) {
    con.query('SELECT * FROM Comment WHERE id:' + request.parameters.id +
        ' AND platform: ' + request.parameters.id +
        ' AND ownerId: ' + request.parameters.id, function(error, results) {
        if ( error ) {
            response.status(400).send('Error when trying to retrieve comment in database operation');
        } else {
            response.send(results);
        }
    });
});*/

app.get('/', function (req, res, next) {
    console.log("IT WORKS!");
    next();
});



