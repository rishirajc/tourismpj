const mongoose=require("mongoose")
const img=new mongoose.Schema({
    Image:{type:String,required:true}
 
})
module.exports=mongoose.model('image',img)