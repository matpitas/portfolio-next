
import React from 'react'

const Hobbies = ({ logo, title, description } : { logo: React.ReactNode, title: String, description: String }) => {
  return (
    <div className="border-2 flex flex-1 min-w-80 flex-col gap-8 p-10 rounded-md">
        <div className=" flex items-center gap-5">
            {logo}
            <h1 className='font-bold text-xl'>{title}</h1>
        </div>
        <p className='text-lg'>{description}</p>
    </div>
  )
}

export default Hobbies