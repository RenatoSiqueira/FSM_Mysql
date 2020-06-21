const mysql = require('mysql2/promise')

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senha',
    database: 'cat-products'
})
