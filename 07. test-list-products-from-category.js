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
            const [results] = await connection.query('select * from products where id in (select product_id from categories_products where category_id = ?)', [1])
            console.log('Products: ', results)
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        console.log(error)
    }
}

run()