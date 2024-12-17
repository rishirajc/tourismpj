import React, { useState } from 'react'
import { UPDATE } from '../../Api'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
const MAIN=styled.div`
    width: 100%;
    min-height: 100vh;
    background: #2986db;
    display: flex;
    align-items: center;
    justify-content: center;
`
const AgeUpdt = () => {
    const localvalue=useSelector((state)=>state.login.loginData)
    console.log("local valuess",localvalue);
    const Id=localvalue?.userid
    
     const[Age,setage]=useState()
    function display(){
        console.log("ageee",Age);
        
        UPDATE(Id,{Age})
    }

  return (
    <MAIN>

 
    <div>
    <h3>Enter Your Age</h3>
      <input type="number" placeholder='age' onChange={(e)=>setage(e.target.value)}/>
      <button onClick={display}>update</button>
    </div>
    </MAIN>
  )
}

export default AgeUpdt
