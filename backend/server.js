const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middlewares/errorMiddlewares')
const connectDB = require('./config/db')
const port = process.env.port

const app = express()

connectDB()
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/songs',require('./routes/songRoutes'))
app.use(errorHandler)

app.listen(port,()=>{
    console.log('hi lets goooooooo')
})