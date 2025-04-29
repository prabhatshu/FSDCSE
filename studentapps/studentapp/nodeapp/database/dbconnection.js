const mongoose=require("mongoose");

async function dbconn(){
    try{
    await mongoose.connect('mongodb://localhost:27017/studentappcseb');
    console.log("Database Connected successfully");
    }
    catch(err){
        console.log(err.message);
    }
}

module.exports=dbconn 