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
            const [results] = await connection.query('select * from products')
            console.log('Products: ', results)
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        console.log(error)
    }
}

run()