const mysql = require('mysql');

const db  = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'cosmo3211',
    database: 'prioritytasks',
    /* charset: 'utf8mb4_general_ci', */
});

module.exports = db ;    