const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())
const dotenv=require('dotenv')
dotenv.config()
const mongoose=require('mongoose')
const rout=require('./RouterPage/UserRouter')
const auth=require('./RouterPage/AuthRouter')
mongoose.connect(process.env.mongourl).then(()=>{
    console.log("database are connected");
    
})

app.use(express.json())
app.use('/router',rout)
app.use('/authrouter',auth)

app.listen(8000,()=>{
    console.log("port is connected");
    

})