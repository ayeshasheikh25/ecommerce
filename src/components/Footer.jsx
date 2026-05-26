import React from 'react'
import myImage from './images/themeFooter.png'
import Icons from './Icons'
function Footer() {

  const support =[
    {
      title: 'Support'
    },
    {
      text: 'FAQ'
    },
    {
      text: 'Return & Exchange'
    },
    {
      text: 'Delivery'
    },
    {
      text: 'Contact Us'
    },
  ]
 
  const legal =[
    {
      title: 'Legal'
    },
    {
      text: 'About Us'
    },
    {
      text: 'Cookies Policy'
    },
    {
      text: 'Terms & Conditions'
    },
    {
      text: 'Privacy Policy'
    },
  ]

  const contact =[
    {
      title: 'Contact'
    },
    {
      text: (<>House : 25, Road No: 2, Block A, Mirpur-<br /> 1, Dhaka 1216</>),
      icon: "fa-solid fa-location-dot"
    },
    {
      text: 'info@inilabs.net',
      icon: "fa-solid fa-envelope"
    },
    {
      text: '+8801333384628',
      icon: "fa-solid fa-phone"
    },
  ]



  return (
    <div className='bg-slate-900 py-6 '>
      <div className=' flex items-center px-2'>
         <div className='w-1/4 '>
              <img src={myImage}  alt="" className='w-28 mb-5' />
              <p className='text-white font-medium text-sm flex'>Subscribe to our newsletter</p>
         

            <div className='flex p-[2px]  bg-white rounded-full pl-3 justify-between my-3 ml-2'> 
              <input type="text" placeholder='Your email address'  className='outline-none bg-transparent border-none text-sm p-[2px] text-black '/>
              <button className='bg-green-500 p-2 px-3 rounded-full text-white font-normal text-sm'>Subscribe</button>
            </div>

            <div className='flex w-3/4  '>
               <Icons icon="fa-brands fa-facebook" />
               <Icons icon="fa-brands fa-instagram" />
               <Icons icon="fa-brands fa-x-twitter" />
               <Icons icon="fa-brands fa-youtube" />
            </div>
         </div>
          <div className='w-3/4 flex justify-around items-center '>
             <NavItems footer = {support} />
             <NavItems footer={legal} />
             <NavItems footer={contact} />
          </div>
          
      </div>
      <div className='h-[1px] bg-slate-700 mt-7 ' ></div>
      <p className='text-slate-300 text-xs font-semibold mt-4'>©StoreKing by iNiLabs 2024, All Rights Reserved</p>
    </div>
  )};

 const NavItems = ({footer})=>{
            return(
              <div>
                {
                  footer.map((item) => {
                    return (
                      <>
                      
                      <h3 className='text-white font-medium text-lg'>{item.title} </h3>
                      <div className='flex items-start justify-center '>
                          <i className={`${item.icon} text-white text-sm mt-2 mr-2`} ></i>
                          <p className='text-white cursor-pointer my-2 hover:text-green-500 text-sm'>{item.text} </p>
                      </div>
                      </>

                    )
                  })
                }
              </div>
            )
 }
export default Footer