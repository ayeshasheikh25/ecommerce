import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Offers from '../pages/Offers'
import Account from '../pages/Account'
function MainStack() {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/offers' element={<Offers />} />
    <Route path='/account' element={<Account />} />
    
   </Routes>
  )
}

export default MainStack