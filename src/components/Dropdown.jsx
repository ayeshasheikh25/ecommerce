import React from 'react'

const Dropdown = ()=>{
    const country =[
        {
            name: 'PK'
        },
        {
            name: "IND"
        },
        {
            name: "UAE"
        }
    ]
    return(
        <div className='border rounded p-2 bg-gray-50 w-24 absolute top-8 right-0'>
          {
            country.map((item)=>(
                <div>
                   <p>{item.name} </p>       
                </div>
            ))
          }
        </div>
    )
}

export default Dropdown