import React from 'react'
import { removedata } from '../Redux/Loginslice'
import { useDispatch } from 'react-redux'

const Logout = () => {
  const dispatch= useDispatch()

  function display(){
    dispatch(removedata())
    }
  return (
    <div>
        <button className='logout'  onClick={display}>LOGOUT</button>
    </div>
  )
}




export default Logout
