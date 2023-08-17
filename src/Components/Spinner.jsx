import React from 'react';
import "./Spinner.css";
function Spinner() {
  return (
    <div className='flex justify-center items-center min-h-[60vh]'>
      <div className="custom-loader"></div>
    </div>
  )
}

export default Spinner