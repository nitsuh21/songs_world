const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middlewares/errorMiddlewares')
const port = process.env.port

const app = express()
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/songs',require('./routes/songRoutes'))
app.use(errorHandler)

app.listen(port,()=>{
    console.log('hi lets goooooooo')
})