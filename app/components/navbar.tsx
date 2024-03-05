'use client'

import Link from '@/node_modules/next/link'
import React from 'react'
import { usePathname } from '@/node_modules/next/navigation'

const Navbar = () => {

    const pathname = usePathname()

    return (
        <div 
            className='w-full flex items-center justify-center gap-20 p-10 font-semibold text-md tracking-tighter text-zinc-300'
        >
            <Link href='/linguagens' className={`${pathname === '/linguagens' ? 'text-slate-700 font-bold text-lg' : ''}`} >
                Linguagens
            </Link>
            <Link href='/' className={`${pathname === '/' ? 'text-slate-700 font-bold text-lg' : ''}`}>
                Bem-vindo
            </Link>
            <Link href='/projetos' className={`${pathname === '/projetos' ? 'text-slate-700 font-bold text-lg' : ''}`}>
                Projetos
            </Link>
        </div>
    )
}

export default Navbar