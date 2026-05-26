import React, { useState } from 'react'
import myImage from './images/myImage.png'
import { header } from './Css/header'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'

function Header() {
  const [show, setShow] = useState(false)
  return (
    <div className= {header.container} >
        <img src= {myImage}  className='w-[8%]'/>

        <div className= {header.search}>
            <i className="fa-solid fa-magnifying-glass "></i>
            <input type="text" placeholder='Search' className= {header.input} />
        </div>

        <div className='flex w-80 justify-between '>
          <button onClick={()=>setShow(!show)} className= {`${header.dropdown} relative`}><span><i class="fa-solid fa-flag-usa  border rounded-3xl bg-[#0033A0]  py-1 px-2  text-white text-sm"></i>English<i class="fa-solid fa-angle-down p-1"></i> </span> {show && <Dropdown />} </button>
          <p className={header.dropdown}><i className="fa-solid fa-heart  border rounded-3xl bg-green-600 py-1 px-2  text-white text-sm"></i> Favourite</p>
          <Link to="/account" >
          <p className={header.dropdown}><i className="fa-solid fa-user border rounded-3xl bg-green-600  py-1 px-2  text-white text-sm"></i> Account</p>
          </Link>
        </div>
    </div>
  )
}

export default Header