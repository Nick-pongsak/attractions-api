const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
require('dotenv').config()

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

const app = express()

app.use(cors())

app.get('/test-api', function (req, res, next) {
    res.json({ msg: 'hello world' })
})

app.get('/test-query', function (req, res, next) {
    pool.query('select * from attractions', function (err, rows, fields) {
        console.log(err)
        res.json(rows)
    })

})

app.listen(4200, function () {
    console.log('web listen port 4200')
})