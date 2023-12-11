const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',     
    password: 'itsyashofficial_()1',
    database: 'lmao',
    insecureAuth: true      
});
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as ID: ' + connection.threadId);
});

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/addEmployee', (req, res) => {
    const employeeData = req.body;

    // Insert employee data into the MySQL database
    connection.query('INSERT INTO employees SET ?', employeeData, (error, results, fields) => {
        if (error) {
            console.error('Error inserting employee data: ' + error);
            res.status(500).send('Error inserting employee data');
            return;
        }
        console.log('Employee added successfully!');
        res.send('Employee added successfully!');
    });
});

connection.on('error', (err) => {
    console.error('MySQL database error: ' + err.message);
});

process.on('SIGINT', () => {
    connection.end((err) => {
        if (err) {
            console.error('Error closing MySQL connection: ' + err.message);
        }
        process.exit(0);
    });
});
const PORT = 5500;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
