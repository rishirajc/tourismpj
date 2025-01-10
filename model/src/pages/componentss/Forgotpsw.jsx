import React, { useState } from 'react'
import { OTPPSW } from '../../Api'

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const MAIN=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: aqua;
`
const FOR=styled.div`
width: 439px;
height: 223px;
background-color: lightgray;
padding-top: 72px;
padding-left: 89px;
border-radius: 15px;
border: 2px solid;
`


const Forgotpsw = () => {

  const navigate= useNavigate()
    const[EMAIL,setEMAIL]=useState('')
function display(){
    console.log("first",EMAIL);
    OTPPSW({EMAIL}).then((data)=>{
      if(data.message=="mail send successfully"){
        navigate('/password')

      }

    })
    

   

    }

  return (
    <MAIN>
   
      <FOR>
      <p>ENTER YOUR EMAIL</p>
     
   <input type="text" placeholder="EMAIL" onChange={(e)=>setEMAIL(e.target.value)}/>
  <button onClick={display}>Submit</button>
   </FOR>
    </MAIN>
  )
}

export default Forgotpsw
