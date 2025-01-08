import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { UPDATE } from '../../Api';
import styled from 'styled-components';
import {  useNavigate } from 'react-router-dom';
import './update.css'
const MAIN=styled.div`
    width: 100%;
   height:681px;
    background: #2986db;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30480.jpg?t=st=1736318338~exp=1736321938~hmac=f225e41998c56c482486158c762d4cd95f3783de8278c4ef134e5c97b52ca3f5&w=740");
    background-size: cover;
    background-position: center;
    overflow: hidden;
`
const NameUpdt = () => {
    const localvalue=useSelector((state)=>state.login.loginData)
    console.log("local valuess",localvalue);
    const Id=localvalue?.userid
    
     const[Name,setname]=useState()
     const[Email,setemail]=useState()
     const[Mobile,setmobile]=useState()
     const[Place,setplace]=useState()
     const[Age,setage]=useState()
     const[Password,setpassword]=useState()

     const Navigate = useNavigate()
    function display(){
        console.log("ageee",Name,Email,Mobile,Place,Age,Password);
        
        UPDATE(Id,{Name,Email,Mobile,Place,Age,Password}).then((data)=>{
          if(data.message=="updated"){
            Navigate('/profile')
          
          }

        })
    }

  return (
    <MAIN>

 
    <div>

    <form className='gap'>
     <fieldset className='fil'>
      <br />
      <legend className="leg">UPDATE YOUR PROFILE</legend>
<div className='nam'>
<p> Name:</p>
<input type="text"  onChange={(e)=>setname(e.target.value)}/> <br />
</div>
    <div className='nam'>
    <p> Email:</p>
    <input type="text"  onChange={(e)=>setemail(e.target.value)}/> <br />
    </div>

  <div className='nam'>
  <p> Mobile:</p>
  <input type="number"  onChange={(e)=>setmobile(e.target.value)}/> <br />
  </div>

  <div className='nam'>
  <p> Place:</p>
  <input type="text"  onChange={(e)=>setplace(e.target.value)}/>  <br />
  </div>

 <div className='nam'>
 <p>  Age:</p>
 <input type="number"  onChange={(e)=>setage(e.target.value)}/> <br />
 </div>
  
  <div className='nam'>
  <p> Password:</p>
  <input type="password"  onChange={(e)=>setpassword(e.target.value)}/> <br />
  </div>
   
     </fieldset><br />
     <button className='upbtn' onClick={display}>UPDATE</button>
    </form>
     

    </div>

    </MAIN>
    
  )
}

export default NameUpdt
