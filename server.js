const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')

//Route Files
const users = require('./routes/users')

//Load environmental variables
dotenv.config ({ path: './config/config.env'})

//Connect to Database
connectDB()

const app = express()

//Body Parser
app.use(express.json())

// Developer Logging Middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//Mount Routers
app.use('/api/v1/users', users)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}}`))