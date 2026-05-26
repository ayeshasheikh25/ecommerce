import React, { useState } from 'react'

function NestedDropdown() {
    const [subMenu, setSubMenu] = useState(null)
    console.log(subMenu)
  return (
    <div className=''>
        <div className='w-50 z-20 ml-3 absolute right-0 left-0 pt-1 pr-1 rounded-md bg-slate-50 '>
          {
            menuData.map((items, index)=>{
                return(
                <div 
                onMouseEnter={()=>{setSubMenu(index)}}
                onMouseLeave={()=>setSubMenu(null)}
                key={index} className= 'p-3 flex border-b-[1px] border-gray-100 hover:text-green-600 cursor-pointer justify-between items-center'>
                    <p className='text-sm font-normal'> {items.text} </p>
                    <i class="fa-solid fa-angle-right"></i>
                </div>
                )
            })
          }
        </div>
       {subMenu == 0 ? 
      ( <DropdownMenu subData={foodData} top='top-[20px]' />) : 
      subMenu == 1 ? (<DropdownMenu subData={cleaning} top='top-6' /> ): 
      subMenu == 2 ? (<DropdownMenu subData={PersonalCares} /> ) : 
      subMenu == 3 ? (<DropdownMenu subData={healthCare} /> ) : 
      subMenu == 4 ? (<DropdownMenu subData={babyCare} /> ) : 
      subMenu == 5 ? (<DropdownMenu subData={homeKitchen} /> ) :  "" 
    }
        
    </div>
  )
  
}

const DropdownMenu = ({subData, top})=>{
    const [fmenu, fshowMenu] = useState(null)
    console.log(fmenu)
    return (
   
        <div className = {` absolute right-[-100%] left-full z-10  pt-1  rounded-md bg-slate-50`} >
         {
          subData.map((items, index)=>{
              return(
              <div 
              onClick={()=>fshowMenu(index)}
              key={index} className= 'p-3 px-5 flex border-b-[1px] border-gray-100 hover:text-green-600 cursor-pointer justify-between items-center'>
                  <p className='text-sm font-normal'> {items.text} </p>
                  <i class="fa-solid fa-angle-right"></i>
              </div>
              )
          })
        }
       {fmenu == 0 ? (<fDropdown moredata = {FruitsVege} />): "" 
       }
      </div>

 
    )
}

const fDropdown = ({moredata})=>{
      return (
        <div className = {`w-52 absolute right-[-200%] left-full z-20  pt-1  rounded-md bg-slate-50`} >
         {
          moredata.map((items, index)=>{
              return(
              <div 
              key={index} className= 'p-3 px-5 flex border-b-[1px] border-gray-100 hover:text-green-600 cursor-pointer justify-between items-center'>
                  <p className='text-sm font-normal'> {items.text} </p>
                  <i class="fa-solid fa-angle-right"></i>
              </div>
              )
          })
        }
      </div>
       )
  
}

const menuData =[
    {
        text: 'Food'
    },
    {
        text: 'Cleaning Supplies'
    },
    {
        text: 'Personal Care'
    },
    {
        text: 'Health & Wealth'
    },
    {
        text: 'Baby Care'
    },
    {
        text: 'Home & Kitchen'
    },
]
const foodData = [
    {
        text: 'Fruits & Vegetables'
    },
    {
        text: 'Cleaning Supplies'
    },
    {
        text: 'Personal Care'
    },
    {
        text: 'Health & Wealth'
    },
    {
        text: 'Baby Care'
    },

]
const cleaning = [
    {
        text: 'Cleans'
    },
    {
        text: 'Cleaning Supplies'
    },
    {
        text: 'Personal Care'
    },
    {
        text: 'Health & Wealth'
    },

]
const PersonalCares = [
    {
        text: 'Personal Cares'
    },
    {
        text: 'Cleaning Supplies'
    },
    {
        text: 'Personal Care'
    },
    {
        text: 'Health & Wealth'
    },
    {
        text: 'Baby Care'
    },
    {
        text: 'Home & Kitchen'
    },
]

const healthCare = [
    {
        text: 'Health Cares'
    },
    {
        text: 'Cleaning Supplies'
    },
    {
        text: 'Personal Care'
    },
    {
        text: 'Health & Wealth'
    },
    {
        text: 'Baby Care'
    },
    {
        text: 'Home & Kitchen'
    },
]
const babyCare = [
    {
        text: 'Baby Cares'
    },
    {
        text: 'Cleaning Supplies'
    },
    {
        text: 'Personal Care'
    },
    {
        text: 'Health & Wealth'
    },
 
]
const homeKitchen = [
    {
        text: 'Home Kitchen'
    },
    {
        text: 'Cleaning Supplies'
    },

    {
        text: 'Baby Care'
    },
    {
        text: 'Home & Kitchen'
    },
]
const FruitsVege = [
    {
        text: 'Fruits Vegetables'
    },
    {
        text: 'Cleaning Supplies'
    },
    {
        text: 'Personal Care'
    },
    {
        text: 'Health & Wealth'
    },
    {
        text: 'Baby Care'
    },
    {
        text: 'Home & Kitchen'
    },
]
export default NestedDropdown