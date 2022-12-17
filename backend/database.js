const mysql = require('mysql2');

const pool = mysql.createPool({
    host : 'localhost',
    user :'root',
    database :'khushal',
    password : '25072002',
    // port :5857
})
module.exports = pool.promise();