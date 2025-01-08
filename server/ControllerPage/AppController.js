const user=require('../SchemaPage/UserSchema')
const pageuser=require('../SchemaPage/PageSchema')
const imge=require('../SchemaPage/imageschem')
const argon=require('argon2')
const nodemailer=require('nodemailer')
const dotenv=require('dotenv')
dotenv.config()
const cloudnary=require('cloudinary').v2;
cloudnary.config({
    cloud_name:process.env.cloudname,
    api_key:process.env.apikey,
    api_secret:process.env.apiseckey
    
    })
const POST=async(req,res)=>{
    console.log("frontend password",req.body.Password);
    req.body.Password=await argon.hash(req.body.Password)
    try {
        const hai=await user.create(req.body)
        return res.status(200).json({status:"SIGNUP SUCCESSFULL"})
    } catch (error) {
        res.status(500).json(error)
    }
}
const GET=async(req,res)=>{
    try {
        const hey=await user.findById(req.params.id)
        return res.status(200).json(hey)
    } catch (error) {
        res.status(500).json(error)
    }
}
const UPDATE=async(req,res)=>{
    try {
       await user.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        return res.status(200).json({message:"updated"})
    } catch (error) {
        res.status(500).json(error)
    }
}
const DELETE=async(req,res)=>{
    try {
       await user.findByIdAndDelete(req.params.id)
        return res.status(200).json("deleted")
    } catch (error) {
        res.status(500).json(error)
    }
}
const transporter = nodemailer.createTransport({

    service:'gmail',
    
      auth: {
        user: process.env.Email,
        pass: process.env.Passwordd
      },
    });
    
    function generateOTP(){
        return Math.round(Math.random() *10000).toString();
    
    }

const Otp=async(req,res)=>{
 const  OTP=generateOTP()
    const OTPEXPIRE=new Date(Date.now()+5*60*1000)
    const {EMAIL}=req.body
    try {
        console.log("33333333333",OTP,OTPEXPIRE,req.body);
        const helloi=await pageuser.create({OTP,OTPEXPIRE,EMAIL})
        const htmlcontent=`
        <h1> Hi Welcome FuturaLabs </h1>
        <h1> Your OTP Code </h1>
        <img src="http://res.cloudinary.com/dxl4dwh5b/image/upload/v1732272817/uci3hr4pp0n4t33ffspv.jpg" width="200px" height="200px" />
        <p>Your OTP is shown below :</p>
        <p><strong>${OTP}</strog></p>
        `
        
        const mailoptions={
            from : process.env.Email,
            to :EMAIL,
            html:htmlcontent
        }
        console.log("email options",mailoptions);
        await transporter.sendMail(mailoptions)
        return res.status(200).json({message:"mail send successfully"})
        
    } catch (error) { 
        res.status(500).json({error:"error sending mail"})
    }
}
const imageupoad=async(req,res)=>{
    try {
      console.log("frontend value ",req.body);
      
      console.log('file***',req.file);
      
      const filedata=await cloudnary.uploader.upload(req.file.path)
      console.log("***********",filedata);
      
      const pic=filedata.secure_url
  
      
      const hai=await imge.create({Image:pic,...req.body})
      console.log("haiiii avaluuue",hai);
      
     return res.status(200).json(hai)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  const forgotpassword=async(req,res)=>{
    try {
        const otpfind=await pageuser.findOne()
       return res.status(200).json(otpfind)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
  }
module.exports={POST,GET,UPDATE,DELETE,Otp,imageupoad,forgotpassword}
