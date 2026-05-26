import React from 'react'
import myImage from '../assets/auth.png'
export default function Account() {
  
    const data =[
        {
            text: 'Admin',
            color: 'bg-orange-500'
        },
        {
            text: 'Customer',
             color: 'bg-green-600'
        },
        {
            text: 'Manager',
            color: 'bg-blue-500'
        },
        {
            text: 'POS operator',
            color: 'bg-purple-600'
        },
        {
            text: 'Delivery boy',
            color: 'bg-red-500'
        }
    ]

  return (
    <div className='flex justify-center items-center gap-2  p-5 '>
         <div className=''>
           <img src={myImage} alt="" className='w-[400px] rounded-md' />
         </div>
            

        <div className='flex flex-col gap-5 w-[24%]'>
            <div className='text-center ml-10 '>
              <h3 className='font-medium text-[25px] text-green-700 p-2'>Sign In</h3>
              <p className=' text-green-700 '>Sign in to continue shopping</p>
            </div>

            <div className=''>
                <div className='py-4 w-10/12' >
                    <h4 className='flex justify-between'>Email *<p className='text-xs font-medium text-green-600'>Use Phone Instead</p></h4>
                    <input type="text" className='flex w-72 px-9 py-2 rounded-md border-2 border-gray-300 outline-none '/>
                </div>
                <div className='py-2'>
                    <h4 className='flex justify-between'>password *</h4>
                    <input type="password" className='flex w-72 px-9 py-2 rounded-md border-2 border-gray-300 outline-none'/>
                </div>
                <button className='bg-green-600 px-9 py-3 w-60 m-2 rounded-3xl'>Sign In</button>
            </div>
            <p>Don’t have an account? <a href="" className='text-green-600'>Sign Up</a></p>
            
            <div>
                <p>For quick demo login click below</p>
                 <AccountItems id={data} />
            </div>
        </div>
    </div>
  )

}

const AccountItems = ({id})=> {
    return(
        <div className='flex justify-between flex-wrap '>
         {
            id.map((items)=>{
                return(
                    <>
                     <div className='w-1/2 p-3'>
                         <button className={`${items.color} text-white px-7 py-2 w-36 rounded-lg text-sm`} >{items.text} </button>
                     </div>
                    </>
                )
            })
         }
        </div>
    )
}
