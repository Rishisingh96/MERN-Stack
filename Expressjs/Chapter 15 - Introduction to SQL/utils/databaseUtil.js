const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user:'root',
    password: 'Rishi@9838',
    database: 'StayNest'
});

module.exports = pool.promise();