const express = require('express')
const morgan = require('morgan')
const homeRouter = require('./routes/home')
const usersRouter = require('./routes/users')
const errorRouter = require('./routes/error')


const app = express()
const PORT = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

// ROUTES
// app.use('/users', usersRouter)
// app.use('/', homeRouter)
// app.use('*', errorRouter)


app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))

