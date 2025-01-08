import React, { useState } from 'react'
import { SIGNUP } from '../Api'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
const MAIN=styled.div`
    padding-top: 105px;
    padding-left: 238px;
    width: 428px;
    min-height: 65vh;
  background: url("https://apps.keralatourism.org/images/hri/large/mangala_hills_thekkady_71.jpg");
     color: #d80404;
    border-radius: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.75);
    background-size: cover;
    background-position: center;
    overflow: hidden;

  
`


const FMAIN=styled.div`
    display: flex;
 width: 100%;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    background: #2986db;
`
const BTN=styled.div`

box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    color: white;
    background: rgba(45, 126, 231);
    height: 31px;
    width: 92px;
    line-height: 30px;
    border-radius: 8px;
    border: none;
    margin: 16px 25px;
    padding-left: 26px;


`

const SignupPage = () => {
  const[Name,setname]=useState('')
  const[Email,setemail]=useState('')
  const[Mobile,setmobile]=useState(Number)
  const[Place,setplace]=useState('')
  const[Age,setage]=useState(Number)
  const[Password,setpassword]=useState('')

const navigate= useNavigate()
  function display(){
    console.log("first",Name,Email,Mobile,Place,Age,Password);
    SIGNUP({Name,Email,Mobile,Place,Age,Password}).then((data)=>{
      if(data.status=="SIGNUP SUCCESSFULL"){
navigate("/")
      }

    })
   
      

   
  
      
  }
  return (
    <FMAIN>

 
    <MAIN>
     
   
  
    
      <div>
      <h1 style={{marginTop:"-42px",marginLeft:"-89px",fontFamily:"math"}}>SIGNUP YOUR DETAILS</h1>

      </div>
      <div style={{marginTop:"100px"}}>
      <input type="text" placeholder='name' onChange={(e)=>setname(e.target.value)}/>
      </div>

      <div>
      <input style={{marginTop:"17px"}} type="email" placeholder='email'  onChange={(e)=>setemail(e.target.value)}/>
      </div>

      <div>
      <input style={{marginTop:"17px"}}  type="mobile" placeholder='mobile'  onChange={(e)=>setmobile(e.target.value)}/>
      </div>

      <div>
      <input style={{marginTop:"17px"}}  type="text" placeholder='place'  onChange={(e)=>setplace(e.target.value)}/>
      </div>

      <div>
      <input style={{marginTop:"17px"}}  type="text" placeholder='age'  onChange={(e)=>setage(e.target.value)}/>
      </div>

      <div>
      <input style={{marginTop:"17px"}}  type="password" placeholder='password'  onChange={(e)=>setpassword(e.target.value)}/>
      </div>

      <div>
      <BTN  onClick={display}>SIGNUP</BTN>
      </div>
     

    
   
    </MAIN>
    </FMAIN>
  )
}

export default SignupPage
