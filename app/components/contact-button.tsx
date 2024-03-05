'use client'

import { ArrowUpRightFromSquare } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ContactButton = () => {
  return (
    <Link target="_blank" href="https://www.linkedin.com/in/matheus-pitas-baptista-1b2b73227/" className='w-3/4 lg:w-1/5 bg-slate-100 mt-5 text-slate-900 p-5 flex items-center justify-center gap-5 rounded-md font-bold text-sm md:text-xl hover:bg-slate-200 hover:text-slate-800 transition-all delay-50'>
        Entrar em contato
        <ArrowUpRightFromSquare className='size-6' />
    </Link>
  )
}

export default ContactButton