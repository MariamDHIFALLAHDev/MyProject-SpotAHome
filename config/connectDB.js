const mongoose = require ("mongoose")
const config = require('config')

const connectDB=()=>{
    mongoose.connect(config.get("MONGOURI"),{
        useNewUrlParser: true, 
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    })
    .then(()=>console.log("DataBase connected"))
    .catch(()=>console.log("DataBase error"))
}
module.exports=connectDB;