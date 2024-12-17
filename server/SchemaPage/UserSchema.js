const mongoose=require('mongoose')
const Schemadata=new mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String,required:true},
    Mobile:{type:Number,required:true},
    Place:{type:String,required:true},
    Age:{type:Number,required:true},
    Password:{type:String,required:true},


})
module.exports=mongoose.model('project',Schemadata)