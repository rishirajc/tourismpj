import React, { useState } from 'react'
import { LOGIN1 } from '../Api'
import {useDispatch} from "react-redux"
import {styled} from "styled-components"
import {Link} from 'react-router-dom'
const MAIN=styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
`
const NAV=styled.div`
    width: 100%;
    height: 50px;
    background: #2986db;
    padding-left: 590px;
    margin-top: -21px;

`
const CONT=styled.div`
    width: 300px;
    height: 200px;
    background: #2986db;
    padding-left: 130px;
    padding-top: 64px;
   
`

const Loginpage = () => {
  const  dispatch=useDispatch()
  const[Email,setemail]=useState('')
  const[Password,setpassword]=useState('')
    function display(){
        console.log("first",Email,Password);
        
        LOGIN1({Email,Password},dispatch)

    }
  return (
    <div>

  <NAV>
    <h1  style={{paddingTop:"11px",fontFamily:"math"}}>KERALA TOURISM</h1>
  </NAV>
      
    <MAIN>
     
        <CONT>

     <div>
     <input type="email" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>


     </div>
     <div>
     <input style={{marginTop:"18px"}} type="password" placeholder='password'  onChange={(e)=>setpassword(e.target.value)} />


     </div>
   <Link to={'/home'}><button style={{marginLeft:"50px",marginTop:"10px"}} onClick={display}>LOGIN</button></Link> 
       <Link to={'/sign'}><h4>CREATE ACCOUNT</h4></Link> 
        </CONT>
      
    </MAIN>
    </div>
  )
}

export default Loginpage
