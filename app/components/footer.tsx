
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-black h-[120vh] lg:h-[40vh] mt-40 p-20 flex'>
        <div className="w-full lg:w-5/6 m-auto flex justify-center flex-col lg:flex-row gap-20 lg:gap-0">

          <div className="flex justify-center flex-col lg:flex-row items-center lg:items-start lg:justify-start w-full lg:w-1/3 gap-20 ">
            <div className="flex items-center justify-center lg:items-start lg:justify-start flex-col  gap-5">
              <h1 className='text-white text-lg font-bold'>Navegação</h1>
              <div className="flex items-center justify-center lg:items-start lg:justify-start flex-col gap-2 text-slate-600 font-semibold text-base">
                <Link target="_blank" className='hover:underline hover:text-slate-400' href="/" >Bem-vindo</Link>
                <Link target="_blank" className='hover:underline hover:text-slate-400' href="/tecnologias" >Linguagens</Link>
                <Link target="_blank" className='hover:underline hover:text-slate-400' href="/projetos" >Projetos</Link>
              </div>
            </div>
            <div className="flex items-center justify-center lg:items-start lg:justify-start flex-col gap-5">
              <h1 className='text-white text-lg font-bold'>Redes Sociais</h1>
              <div className="flex items-center justify-center lg:items-start lg:justify-start flex-col gap-2 text-slate-600 font-semibold text-base ">
                <Link target="_blank" className='hover:underline hover:text-slate-400' href="https://github.com/matpitas" >Github</Link>
                <Link target="_blank" className='hover:underline hover:text-slate-400' href="https://www.linkedin.com/in/matheus-pitas-baptista-1b2b73227/" >Linkedin</Link>
                <Link target="_blank" className='hover:underline hover:text-slate-400' href="https://twitter.com/dev_pitzas" >Twitter</Link>
                <Link target="_blank" className='hover:underline hover:text-slate-400' href="mailto:pitas.matheus4@gmail.com" >E-mail</Link>
                <Link target="_blank" className='hover:underline hover:text-slate-400' href="https://api.whatsapp.com/send?phone=14991111982" >Whatsapp</Link>
              </div>
            </div>
          </div>

          <div className="text-white  flex flex-col items-center justify-center p-5 lg:p-10 w-full lg:w-2/4">
              <cite className='text-2xl text-center'>"A felicidade pode ser encontrada mesmo nas horas mais sombrias, se você se lembrar de acender a luz."</cite>
              <h1 className='font-bold text-lg mt-5 text-slate-600'>Alvo Dumbledore</h1>
          </div>  
          
        </div> 
    </div>
  )
}

export default Footer