import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();
  function clickHandler(){
    navigate("/");
  }
  return (
    <div className='w-full border shadow-md py-4 fixed top-0 bg-white'>
     <header className='text-center'>
     <h1 onClick={clickHandler} className='text-3xl font-bold uppercase'>Blog App</h1>
     </header>
    </div>
  )
}

export default Header