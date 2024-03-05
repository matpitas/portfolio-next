'use client'

import Link from 'next/link'
import React from 'react'

const LinkedButtons = ({ link, logo } : { link: string, logo: React.ReactNode}) => {
  return (
    <Link target="_blank" href={link} className="bg-black text-white p-3 md:p-6 rounded-2xl">
        {logo}
    </Link>
  )
}

export default LinkedButtons