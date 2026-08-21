import React from 'react'
import myImage1 from './images/food-thumb.png'
import myImage2 from './images/fresh_fruits-thumb.png'
import { useState } from 'react'
function Categories ()  {
    const [show, setShow] = useState(0)
 const data = [
        {
            img: myImage1,
            text: 'Food'
        },
        {
            img: myImage2,
            text: 'Fruits and Vegetables'
        },
        {
            img: myImage2,
            text: 'Fruits and Vegetables'
        },
        {
            img: myImage2,
            text: 'Fruits and Vegetables'
        },
        {
            img: myImage2,
            text: 'Fruits and Vegetables'
        },
        {
            img: myImage2,
            text: 'Fruits and Vegetables'
        },
    ]
    const nextSlide = () => {
        if (show < data.length - 3) {
          setShow(show + 1);
        }
      };
      const prevSlide = () => {
        if (show > 0) { 
          setShow(show - 1);
        }
      };
    
  return (
    <div className=''>
        <div className='flex justify-between items-center relative'>
             <h2 className='flex ml-3 mt-2 text-[30px] font-bold text-slate-950 '>Browse by Categories 
                
             <i class="fa-solid fa-angle-left absolute right-[50px] text-base px-3 py-1 rounded-full bg-slate-200 cursor-pointer hover:bg-green-400 hover:text-white " onClick={nextSlide}>
                </i> 

             <i class="fa-solid fa-angle-right absolute right-2 text-base px-3 py-1 rounded-full bg-slate-200 cursor-pointer hover:bg-green-400 hover:text-white "
             onClick={prevSlide}></i>
             
             </h2>
        </div>
      <CategoryItems catogery={data} />
    </div>
  )
}


const CategoryItems = ({catogery}) =>{
        return(
          <div className='flex overflow-x-auto  '>
             {
              catogery.map((items, index)=>{
                return(
                    <div key={index} className=' w-1/6 bg-slate-200 border-2 py-4 px-2 rounded-2xl m-3 
                    hover:bg-slate-50
                    '>
                        <img src= {items.img} alt="" className=' w-24 h-24 object-contain mb-2 ml-12 p-2' />
                        <p className='text-center text-md font-semibold '>{items.text} </p>
                    </div>
                )
              })
             }
          </div>
        )
}

export default Categories