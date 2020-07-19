const mysql = require('mysql');
let connection;

//define connection as a variable to be used later
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port:3306,
        user:'root',
        password: 'password',
        database: 'burgers_db'
    });
}

connection.connect((err)=>{
    if (err) {
        console.log(`Error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id: ${connection.threadId}`);
    
});

module.exports = connection;