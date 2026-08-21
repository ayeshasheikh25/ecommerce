import React from 'react'

function Icons({icon}) {
   
  return (
    <div>
        <span className='bg-white m-2  w-10 h-10 p-2 flex items-center justify-center rounded-full  hover:bg-green-500 '>
            <i className={`${icon}  text-slate-900 text-2xl  hover:text-white `} ></i>
        </span>
    </div>
  )
}

export default Icons