import axios from 'axios'
import {  addtoUserdata, removedata } from './pages/Redux/Loginslice';

export const LOGIN1=async(data,dispatch)=>{
    console.log("second",data);
    
    try {
        const logdata=await axios.post('http://localhost:8000/authrouter/login',data)
        console.log("third",logdata.data);
        dispatch(addtoUserdata(logdata.data))
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}
export const SIGNUP=async(data)=>{
    console.log("second",data);
    
    try {
        const hello=await axios.post('http://localhost:8000/router/postdata',data)
        console.log(" third messege",hello.data);
        return hello.data
        
   
        
    } catch (error) {
        console.log(error);
        
        
    }
}
export const GETDATAS=async(id)=>{
    try {
    const hai=await axios.get(`http://localhost:8000/router/getdata/${id}`)
    console.log("%%%%%%%",hai.data);
    return hai.data
    
    } catch (error) {
        console.log(error);
        
    }
}
export const UPDATE=async(id,data)=>{
    try {
        const updateinfos=await axios.put(`http://localhost:8000/router/update/${id}`,data)
        console.log("updatess3",updateinfos.data);
        return updateinfos.data
        
    } catch (error) {
        console.log(error);
        
        
    }
}
export const DELETE=async(id,dispatch)=>{
    try {
        const dlt=await axios.delete(`http://localhost:8000/router/delete/${id}`)
        console.log("datssst2",dlt.data);
        dlt.data? dispatch(removedata()):null
        return dlt.data
    } catch (error) {
        console.log(error);
        
    }
}
export const OTPPSW=async(data)=>{
    console.log("second", data);
    
    try {
        const otp=await axios.post('http://localhost:8000/router/otp',data)
        console.log('third',otp.data);
        return otp.data
    } catch (error) {
        console.log(error);
        
    }
}
export const verifyotp=async(data)=>{
    try {
        const hello1=await axios.get("http://localhost:8000/router/otpverify",data)
        console.log("third",hello1.data);
      
} catch (error) {
        console.log(error);
        
        
    }
}