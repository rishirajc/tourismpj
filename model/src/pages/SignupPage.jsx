import React, { useState } from 'react'
import { SIGNUP } from '../Api'
import styled from 'styled-components'
import {  Link } from 'react-router-dom'
const MAIN=styled.div`
    padding-top: 105px;
    padding-left: 238px;
    width: 428px;
    min-height: 65vh;
  background: #2986db;
`
const SMAIN=styled.div`

background: #2986db;
`
const FMAIN=styled.div`
    display: flex;
 width: 100%;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
`

const SignupPage = () => {
  const[Name,setname]=useState('')
  const[Email,setemail]=useState('')
  const[Mobile,setmobile]=useState(Number)
  const[Place,setplace]=useState('')
  const[Age,setage]=useState(Number)
  const[Password,setpassword]=useState('')

  function display(){
    console.log("first",Name,Email,Mobile,Place,Age,Password);
    SIGNUP({Name,Email,Mobile,Place,Age,Password})
  
      
  


  }
  return (
    <FMAIN>

 
    <MAIN>
     
   
  
    <SMAIN>
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
      <button style={{marginTop:"17px",marginLeft:"46px",backgroundColor:"#ffffff"}}  onClick={display}>SIGNUP</button>
      </div>
      <div>
     <Link to={'/'}> <button  style={{marginTop:"17px",marginLeft:"51px",backgroundColor:"#ffffff"}} >LOGIN</button></Link> 
      </div>
   
    
    </SMAIN>
    </MAIN>
    </FMAIN>
  )
}

export default SignupPage
