import React, { useEffect, useState } from 'react'
import { GETDATAS } from '../../Api'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './prof.css'

const MAIN=styled.div`
  width: 100%;
  min-height: 110vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://cdn.pixabay.com/photo/2019/07/18/14/36/ocean-4346633_1280.jpg');
  background-size: cover;
    background-position: center;
    overflow: hidden;
`
const SEC=styled.div`
       padding-top: 63px;
    padding-left: 28px;
    width: 384px;
    height: 411px;
    border-radius: 18px;
    backdrop-filter: #474783(30px);
    box-shadow: 0px 0px 30px rgba(227, 228, 237,0.37);
    border: 2px solid rgba(121, 155, 155, 0.37);
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
    <div style={{width:"100%",height:"100px"}}>

    
    <MAIN>
          <SEC>
            <div width={"200px"} height={'200px'}>
            <p className='pfo' >PROFILE</p>
            </div>
          
   <p className="name1">NAME:   <h1 className='name2'>{state?.Name} </h1> </p>
         
            <p className="email">EMAIL: <h1 className='email1'>{state?.Email}</h1></p>
           
            <p className="mob">MOBILE:<h1 className='mob1'>{state?.Mobile}</h1></p>
            
            <p className="place">PLACE: <h1 className='place1'> {state?.Place}</h1></p>
           
            <p className="age">AGE:    <h1 className='age1'>{state?.Age} </h1></p>
        
         <Link to={'/name'}> <button className='edit'>EDIT</button></Link>  
          

      
          </SEC>
         


    </MAIN>
    


</div>
  )
}

export default Profile
