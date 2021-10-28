const pgp = require('pg-promise')()

const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const host = process.env.DB_HOST
const port = process.env.DB_PORT
const database = process.env.DB_DATABASE

// CONNECTION STRING
const connection = `postgres://${user}:${password}@${host}:${port}/${database}`

const db = pgp(connection)

module.exports = db

