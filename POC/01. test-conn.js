// With CallBack:
// const mysql = require('mysql2')
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'senha',
//     database: 'cat-products'
// })
// connection.query('select * from categories', (err, res, fields) => {
//     console.log(err, res, fields)
// })

// With Async/Await:
const mysql = require('mysql2/promise')
const run = async () => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'senha',
            database: 'cat-products'
        })

        try {
            const [results, fields] = await connection.query('select * from categories')
            console.log(results, fields)
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        console.log(error)
    }
}

run()