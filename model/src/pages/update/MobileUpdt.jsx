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
const MobileUpdt = () => {
    const localvalue=useSelector((state)=>state.login.loginData)
    console.log("local valuess",localvalue);
    const Id=localvalue?.userid
    
     const[Mobile,setmobile]=useState()
    function display(){
        console.log("ageee",Mobile);
        
        UPDATE(Id,{Mobile})
    }

  return (
    <MAIN>

 
    <div>
    <h3>Enter Your New Mobile</h3>
      <input type="number" placeholder='mobile' onChange={(e)=>setmobile(e.target.value)}/>
      <button onClick={display}>update</button>
    </div>
    </MAIN>
  )
}

export default MobileUpdt
