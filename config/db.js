const mongoose = require('mongoose');
require('dotenv').config();

const connection=mongoose.connect(process.env.URI)

connection.then(()=>{
    console.log("MongoDb conected")
})
.catch(()=>{
    console.log("Connection failed")
})

module.exports=connection;