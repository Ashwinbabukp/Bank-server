//use the pakage 
require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./database/connection')
const router = require('./Routes/router')
const middleware = require('./middlewares/authMiddleware')

// create server(create express application)
const bankServer = express()

//use cors
bankServer.use(cors())

// use json parser in server
bankServer.use(express.json())
bankServer.use(middleware.appMiddleware)

// use router
bankServer.use(router)

//setup the port number
const port = 3000 || process.env.PORT

//run or listen server app

bankServer.listen(port,()=>{
    console.log(`Bank Server Started at port: ${port}........🚀🚀`);
})


// // get request
bankServer.get("/",(req,res)=>{
    res.status(200).send(`<h1>Bank server started..</h1>`)
})
