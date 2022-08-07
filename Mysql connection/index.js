require('dotenv').config({ path: 'C:\\Users\\admin\\Desktop\\backend\\mysqlconnection\\config\\.env' });

const mysql = require('mysql2');

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

con.connect(function(err) {
    if(err)
        throw err;

    else {
        console.log(`Database : MySql connected at port ${process.env.DB_PORT} \n`);
    }
});
