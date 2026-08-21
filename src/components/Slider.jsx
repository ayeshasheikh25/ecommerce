import React, { useEffect } from 'react'
import myImage1 from './images/slider_one-cover.png'
import myImage2 from './images/slider_two-cover.png'
import myImage3 from './images/slider_three-cover.png'
import { useState } from 'react'
function Slider() {
   
    const [show, setShow] = useState(0)

    const data = [
      { img: myImage1 },
      { img: myImage2 },
      { img: myImage3 }
    ]
  
    const nextSlide = () => {
      setShow((show) => (show + 1) % data.length)
    }
  
    const prevSlide = () => {
      setShow((show) => (show - 1 + data.length) % data.length)
    }


    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide()
      }, 3000);
    
      return () => clearInterval(interval)
    }, [])
    
    return (
      <div className='w-full m-auto p-3 '>
        <div className='relative 
        '
        >
          <img src={data[show].img} className='w-full rounded-xl  ' alt='slider' />

          <i
            onClick={prevSlide}
            className="fa-solid fa-angle-left absolute left-5 top-1/2  px-4 py-2 rounded-full bg-slate-200 text-lg text-black cursor-pointer hover:bg-green-400 hover:text-white"
          ></i>

          <i
            onClick={nextSlide}
            className="fa-solid fa-angle-right absolute right-5 top-1/2  px-4 py-2 rounded-full bg-slate-200 text-lg text-black cursor-pointer hover:bg-green-400 hover:text-white"
          ></i>
        </div>
      </div>
   
    )
  }
  




export default Slider