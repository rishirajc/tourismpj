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
const NameUpdt = () => {
    const localvalue=useSelector((state)=>state.login.loginData)
    console.log("local valuess",localvalue);
    const Id=localvalue?.userid
    
     const[Name,setname]=useState()
    function display(){
        console.log("ageee",Name);
        
        UPDATE(Id,{Name})
    }

  return (
    <MAIN>

 
    <div>
    <h3>Enter Your New Name</h3>
      <input type="text" placeholder='name' onChange={(e)=>setname(e.target.value)}/>
      <button onClick={display}>update</button>
    </div>
    </MAIN>
  )
}

export default NameUpdt
