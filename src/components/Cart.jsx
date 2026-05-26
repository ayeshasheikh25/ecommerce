import React from 'react'
import myImage1 from './images/myImage1.png'
import guessGirl from './images/guessGirl.png'
import boneSteak from './images/boneSteak.png'
import cookware from './images/cookware.png'
import myImage2 from './images/vanillaAir.png'
import myImage3 from './images/corianderLeaves.png'
import myImage4 from './images/localOnion.png'
import myImag5 from './images/redTomato.png'
import myImage6 from './images/ladiesFinger.png'
import myImage7 from './images/onion_red-cover.png'
function Cart() {
    const carts =[
       {
        img: myImage1,
        title: "Overnight Diapers Size 6",
        text: "Packet",
        price: "$33.25",
        price2: '$35.000'
       },
       {
        img: guessGirl,
        title: "Guess Girl Eau De",
        text: "Packet",
        price: "$33.25"        
       },
       {
        img: boneSteak,
        title: "18 Piece Non-stick Cookware",
        text: "Piece",
        price: "$33.25",
        price2: '$35.000'        
       },
       {
        img: cookware,
        title: "Guess Girl Eau De",
        text: "Packet",
        price: "$33.25" ,
        price2: '$35.000'       
       },
       {
        img: myImage2,
        text: "Vanilla Air Freshener Spray",
        packet: "Piece",
        price: "$33.25"        
       },
       {
        img: myImage3,
        title: "Coriander Leaves",
        text: "Gram",
        price: "$33.25",
        price2: '$35.000'        
       },
       {
        img: myImage4,
        title: "Local Onion",
        text: "kilogram",
        price: "$33.25"        
       },
       {
        img: myImag5,
        title: "Red Tomato",
        text: "Kilogram",
        price: "$33.25",
        price2: '$35.000'      
       },
       {
        img: myImage6,
        title: "Ladies Finger",
        text: "Kilogram",
        price: "$33.25" ,
        price2: '$35.000'       
       },
       {
        img: myImage7,
        title: "Onion Red",
        text: "Kilogram",
        price: "$33.25",
        price2: '$35.000'        
       },

    ]
  return (
 
    <div className='overflow-x-hidden'>
      
          <h1 className='flex ml-3 mt-2 text-[30px] font-bold text-slate-950 '>Most Popular</h1>
          <CartItems cart ={carts} />

    </div>

  )
}
 
const CartItems = ({cart})=>{
    return (
         <div className='flex flex-wrap justify-between items-center m-1'>
            {
             cart.map((items,index)=>{
                return (
                   <>
                   
                     <div key={index} className='w-[19%] border-2  bg-white p-4 rounded-lg my-3  hover:bg-slate-200 hover:shadow-lg transition duration-300 cursor-pointer'>
                      <img src= {items.img} alt="" className='flex justify-center m-2 ' /> 
                      <div className=' m-1 p-2'>
                      <p className='flex font-light text-sm m-1 '>{items.title} </p>  
                      <p className='flex font-light text-sm m-1'>{items.text}</p>
                      <p className='flex font-semibold text-lg m-1 text-green-500'>{items.price}
                         <p className='text-sm font-medium text-gray-700 flex justify-center items-center ml-3'> <strike>{items.price2}</strike> </p> </p> 
                      </div>
                    </div>  
                      
                   </>
                     )
                 })
            }
         </div>
    )
}
export default Cart