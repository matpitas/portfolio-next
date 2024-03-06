'use client'

import Link from '@/node_modules/next/link'
import React, { useState } from 'react'
import { usePathname } from '@/node_modules/next/navigation'
import { Menu, X } from 'lucide-react'

const Navbar = () => {

    const pathname = usePathname()

    const [ isOpenMenu, setIsOpenMenu ] = useState<boolean>(false)

    return (
        <>
            <nav 
            className='w-full hidden md:flex items-center justify-center gap-20 p-10 font-semibold text-md tracking-tighter text-zinc-300 '
            >
                <Link href='/tecnologias' className={`${pathname === '/tecnologias' ? 'text-slate-700 font-bold text-lg' : ''}`} >
                    Tecnologias
                </Link>
                <Link href='/' className={`${pathname === '/' ? 'text-slate-700 font-bold text-lg' : ''}`}>
                    Bem-vindo
                </Link>
                <Link href='/projetos' className={`${pathname === '/projetos' ? 'text-slate-700 font-bold text-lg' : ''}`}>
                    Projetos
                </Link>
            </nav>
            <div className="w-full flex items-center flex-col p-10 md:hidden">
                <div className="flex items-center justify-between w-full">
                    <h1 className='font-bold'>{pathname === '/tecnologias' ? "Tecnologias" : pathname === '/' ? "Bem-vindo" : "Projetos" }</h1>
                    <Menu onClick={() => setIsOpenMenu(!isOpenMenu)} />
                </div>
                {
                    isOpenMenu &&
                    <nav className='w-full m-10 bg-slate-100 flex flex-col items-center gap-32 p-10 rounded-md'>
                        <div className="flex flex-col items-center gap-10">
                            <Link onClick={() => setIsOpenMenu(false)} href='/tecnologias' className={`${pathname === '/tecnologias' ? 'text-slate-700 font-bold text-lg' : ''}`} >
                                Tecnologias
                            </Link>
                            <Link onClick={() => setIsOpenMenu(false)} href='/' className={`${pathname === '/' ? 'text-slate-700 font-bold text-lg' : ''}`}>
                                Bem-vindo
                            </Link>
                            <Link onClick={() => setIsOpenMenu(false)} href='/projetos' className={`${pathname === '/projetos' ? 'text-slate-700 font-bold text-lg' : ''}`}>
                                Projetos
                            </Link>
                        </div>
                    </nav> 
                }
            </div>
        </>
    )
}

export default Navbar