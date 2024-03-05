
import React from 'react'

const MyTechs = ({ logo, tech } : { logo: React.ReactNode, tech: String }) => {
  return (
    <div className="border-2 p-10 flex items-center min-w-60 justify-center flex-col gap-5 flex-1 rounded-lg">
        <h1 className='font-bold'>{tech}</h1>
        {logo}
    </div>
  )
}

export default MyTechs