import React, { useState } from 'react'
import { nav } from '../components/Css/nav'
import NestedDropdown from '../components/NestedDropdown'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Nav() {
  const [count, setcount] = useState(0)
  const [menu, showmenu] = useState(false)

  return (

    <div className={nav.container}>
      <div className='relative'>
        <button onClick={() => { showmenu(!menu) }} className={nav.navButtonPrimary}>Browser Category <i class="fa-solid fa-angle-down p-1"></i>  </button>
        {menu && <NestedDropdown />}
      </div>

      <div >
        <ul className={nav.navItems} >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-green-500' : 'text-black'
            }
          >
            <li className='hover:text-green-500'>Home</li>
          </NavLink>
          <NavLink 
          to='/offers'
          className={({isActive})=>
           isActive? 'text-green-500' : 'text-black'
          }
          >
            <li className='hover:text-green-500'>Offers</li>
          </NavLink>
          <li className='hover:text-green-500'>Daily Deals</li>
          <li className='hover:text-green-500'>Flash Sale</li>
        </ul>
      </div>


      <div className={nav.headerRightSec}>
        <div className={`${nav.contactInfo}`} onClick={() => { alert("Contact us"); }}>
          <i class="fa-solid fa-headset pl-7"></i>
          <span>+8801333384628</span>
        </div>


        <button onClick={() => { setcount(count + 1) }} className={nav.cartInfo} >
          <i class="fa-solid fa-bag-shopping"></i>
          <a href="">My Cart {`(${count})`} </a>
        </button>

      </div>
    </div>
  )
}
export default Nav