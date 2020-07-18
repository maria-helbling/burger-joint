const mysql = require('mysql');

//define connection as a variable to be used later
const connection = mysql.createConnection({
    host: 'localhost',
    port:3306,
    user:'root',
    password: 'password',
    database: 'burgers_db'
});

connection.connect((err)=>{
    if (err) {
        console.log(`Error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id: ${connection.threadId}`);
    
});

module.exports = connection;