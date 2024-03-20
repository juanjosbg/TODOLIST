const mysql = require('mysql');

const db = mysql.createConnection({
    queueLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'cosmo3211',
    database: 'prioritytasks',
    waitForConnections: true,
});

connection.connect((error) => {
    if (error) {
        console.error('Error al conectar a MySQL:', error);
    } else {
        console.log('Conexión a MySQL establecida correctamente');
    }
});

module.exports = db;
