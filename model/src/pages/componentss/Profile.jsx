import React, { useEffect, useState } from 'react'
import { GETDATAS } from '../../Api'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const MAIN=styled.div`
  width: 100%;
  min-height: 100vh;
  background: #2986db;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SEC=styled.div`
       padding-top: 63px;
    padding-left: 123px;
    width: 378px;
    height: 398px;
    background-color: aliceblue;
`

const Profile = () => {
  const localvalue= useSelector((state)=>state.login.loginData)
  console.log("local storage data",localvalue);
  const Id=localvalue?.userid

  
  const[state,setstate]=useState([])

  useEffect(()=>{
    GETDATAS(Id).then((data)=>{
      console.log("dataaa@@",data);
      setstate(data)
      
    })

  },[])
  return (
    <MAIN>
          <SEC>
      
      <h1>{state?.Name} <Link to={'/name'}> <button style={{backgroundColor:"lightgreen"}}>edit</button></Link></h1> 
      <h1>{state?.Email} <Link to={'/email'}><button style={{backgroundColor:"lightgreen"}}>edit</button></Link>  </h1>  
      <h1>{state?.Mobile} <Link to={'/mobile'}> <button style={{backgroundColor:"lightgreen"}}>edit</button></Link>  </h1>  
      <h1>{state?.Place} <Link to={'/place'}><button style={{backgroundColor:"lightgreen"}}>edit</button></Link>  </h1>  
      <h1>{state?.Age} <Link to={'/age'}> <button style={{backgroundColor:"lightgreen"}}>edit</button></Link>  </h1>  
     <Link to={'/password'}> <button style={{backgroundColor:"lightgreen"}}>CHANGE PASSWORD</button></Link>
          </SEC>

    </MAIN>

  )
}

export default Profile
