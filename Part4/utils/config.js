require('dotenv').config()
const logger=require('./logger')
const mongoose = require('mongoose')
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

// mongoose.connect(MONGODB_URI)
// .then(result=>{
//     logger.info('connected to mongodb')
// })
// .catch((error)=>{
//     logger.error('error connecting to mongodb',error.message)
// })
module.exports = {
  MONGODB_URI,
  PORT
}