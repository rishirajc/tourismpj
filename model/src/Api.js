import axios from 'axios'
import {  addtoUserdata, removedata } from './pages/Redux/Loginslice';
import { PublicRequest } from './Axioscreate';

export const LOGIN1=async(data,dispatch)=>{
    console.log("second",data);
    
    try {
        const logdata=await PublicRequest.post('/authrouter/login',data)
        console.log("third",logdata.data);
        dispatch(addtoUserdata(logdata.data))
        return logdata.data
        
    } catch (error) {
       console.log(error);
       
        
    }
}
export const SIGNUP=async(data)=>{
    console.log("second",data);
    
    try {
        const hello=await PublicRequest.post('/router/postdata',data)
        console.log(" third messege",hello.data);
        return hello.data
        
   
        
    } catch (error) {
        console.log(error);
        
        
    }
}
export const GETDATAS=async(id)=>{
    try {
    const hai=await SecureRequest.get(`/router/getdata/${id}`)
    console.log("%%%%%%%",hai.data);
    return hai.data
    
    } catch (error) {
        console.log(error);
        
    }
}
export const UPDATE=async(id,data)=>{
    console.log("seond",data);
    
    try {
        const updateinfos=await SecureRequest.put(`/router/update/${id}`,data)
        console.log("third",updateinfos.data);
        return updateinfos.data
        
    } catch (error) {
        console.log(error);
        
        
    }
}
export const GETOTPE=async(data)=>{
    console.log("seond",data);
    
    try {
        const getinfo=await SecureRequest.put('/router/otpemail',data)
        console.log("third",getinfo.data);
        return getinfo.data
        
    } catch (error) {
        console.log(error);
        
        
    }
}
export const DELETE=async(id,dispatch)=>{
    try {
        const dlt=await SecureRequest.delete(`/router/delete/${id}`)
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
        const otp=await PublicRequest.post('/router/otp',data)
        console.log('third',otp.data);
        return otp.data
    } catch (error) {
        console.log(error);
        
    }
}
