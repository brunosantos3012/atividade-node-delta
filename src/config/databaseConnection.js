const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createConnection({
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
}, );

module.exports = connection;