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
            const [results, fields] = await connection.query('update categories set category = ? where id = ?', ['New Cat Name', 3])
            console.log(results, fields)
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        console.log(error)
    }
}

run()