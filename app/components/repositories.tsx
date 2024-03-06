
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArrowUpRight } from 'lucide-react'

interface ReposListProps {
    data: {
        name: string
        html_url: string
        description: string
        language: string
        updated_at: string
    }
}

function Repositories ({ data }: ReposListProps) {

  return (
    <div className="border-2 flex flex-1 min-w-80 flex-col gap-8 p-10 rounded-md group relative hover:border-slate-300" >
        <div className=" flex flex-col items-start gap-2  ">
            <h1 className='font-bold text-2xl group-hover:opacity-20'>{data.name ? data.name : 'Não definido' }</h1>
            <p className='text-lg text-slate-400 group-hover:opacity-20 font-semibold'>{data.description ? data.description : 'Não definido'}</p>
            <p className='text-sm group-hover:opacity-20'>Feito com: <span className='text-sm font-bold'>{data.language ? data.language : 'Não definido'}</span></p>
            <p className='text-sm group-hover:opacity-20'>Ultima atualização em: <span className='text-sm font-bold'>{new Date(data.updated_at).toLocaleString()}</span></p>
            <div className="hidden group-hover:block group-hover:absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] ">
                <Link target="_blank" className='group-hover:opacity-100 font-bold flex items-center gap-3' href={data.html_url}>
                    Ir para Repositório
                    <ArrowUpRight className='size-5'/>
                </Link>
            </div>
        </div>
      </div>
  )
}

export default Repositories