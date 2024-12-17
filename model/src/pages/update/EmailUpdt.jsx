import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { UPDATE } from '../../Api';
import styled from 'styled-components';

const MAIN=styled.div`
    width: 100%;
    min-height: 100vh;
    background: #2986db;
    display: flex;
    align-items: center;
    justify-content: center;
`
const EmailUpdt = () => {
    const localvalue=useSelector((state)=>state.login.loginData)
    console.log("local valuess",localvalue);
    const Id=localvalue?.userid
    
     const[Email,setemail]=useState()
    function display(){
        console.log("ageee",Email);
        
        UPDATE(Id,{Email})
    }

  return (
    <MAIN>

 
    <div>
    <h3>Enter Your New Email</h3>
      <input type="email" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
      <button onClick={display}>update</button>
    </div>
    </MAIN>
  )
}

export default EmailUpdt
