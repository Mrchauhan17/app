var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const { Pool } = require('pg'); // Import Pool once

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({ extended: true })); 

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'app',
    password: '1234',
    port: 5432, // Default PostgreSQL port
});

var server = app.listen(4545, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Start");
    
    // console.log("Server running on port", port);
});

app.get('/trucker_register', function(req, res){
    pool.query("SELECT * FROM trucker_register", function(error, result){
        if(error) {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log(result.rows);
            res.json(result.rows); // Send the data retrieved from the database
        }
    });
});


export default pool;

