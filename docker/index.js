const mysql = require('mysql2')

const connect = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'xeyyam071105',
    database: 'x_db'
})

connect.connect(function (err, conn) {
    if (err) {
        console.log(err);
    }
    console.log(conn);
})