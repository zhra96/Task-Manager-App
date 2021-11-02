const mongoose = require('mongoose')

//const connectionString = "mongodb+srv://zhra:robertlangdon@sandbox.a1hut.mongodb.net/TASK-MANAGER-APP?retryWrites=true&w=majority"


const connectDB = (uri)=>{
    return mongoose
    .connect(uri,{useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })
    .then(()=>console.log("connected to db.."))
}

 
// .catch((err)=>console.log(err))

module.exports = connectDB ;
