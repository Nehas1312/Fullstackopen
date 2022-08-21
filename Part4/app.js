const mongoose =require('mongoose')
const express=require('express')
const app=express()
const cors=require('cors')
const blogsRouter = require('./controllers/blogs')
const middleware =require('./utils/middleware')
const logger=require('./utils/logger')
const config = require('./utils/config')

 
logger.info('connecting to',config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
.then(result=>{
    logger.info('connected to mongodb')
})
.catch((error)=>{
    logger.error('error connecting to mongodb',error.message)
})
app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)
app.use('/api/blogs',blogsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)
module.exports=app