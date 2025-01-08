import React, { useState } from 'react'
import { OTPPSW } from '../../Api'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const MAIN=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
`

const Forgotpsw = () => {
  
    const[EMAIL,setEMAIL]=useState('')
function display(){
    console.log("first",EMAIL);
    OTPPSW({EMAIL})

    }

  return (
    <MAIN>
      <div style={{width:"335px",height:"145px",backgroundColor:'lightgrey',paddingTop:'124px',paddingLeft:"89px"}}>

     
   <input type="text" placeholder="EMAIL" onChange={(e)=>setEMAIL(e.target.value)}/>
   <Link to={'/otps'}><button onClick={display}>Submit</button></Link>
   </div>
    </MAIN>
  )
}

export default Forgotpsw
