
import Image from 'next/image'
import React from 'react'
import AboutMeImage from '@/public/about-me-image.png'
import LinkedButtons from './linked-buttons'
import { Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react'


const AboutMe = () => {
  return (
    <div className='h-[100vh] md:h-[80vh] flex items-center justify-center flex-col md:flex-row p-10 mt-10'>
        <div className='flex items-center flex-col'>
            <div className='w-full md:w-3/4 font-semibold text-slate-600 text-lg md:text-2xl text-center md:indent-20 md:text-justify leading-8 space-y-5'>
                <p>Sou um profissional de programação sediado em Lins, São Paulo. Concentro minhas habilidades na stack JavaScript, dominando tecnologias como React, Next.js e TypeScript, porém, também tenho conhecimento em Java, PHP, C e Python.</p>
                <p>Com formação superior em Análise e Desenvolvimento de Sistemas, também acumulo conhecimentos em Desenvolvimento Web, possuindo certificação técnica em informática.</p>
                <p>Minha dedicação ao aprimoramento constante e minha experiência abrangente fazem de mim um ativo valioso no campo da tecnologia.</p>
            </div>
            <div className='w-3/4 flex flex-1 items-center flex-col md:flex-row justify-between gap-5 mt-10'>
                <h1 className='font-bold text-slate-800 tracking-tight'>Conheça minhas redes sociais: </h1>
                <div className="flex flex-1 items-center justify-between gap-5 md:pl-10">
                    <LinkedButtons link="https://github.com/matpitas" logo={<Github className='size-6' />} />
                    <LinkedButtons link="https://www.linkedin.com/in/matheus-pitas-baptista-1b2b73227/" logo={<Linkedin className='size-6' />} />
                    <LinkedButtons link="/" logo={<Twitter className='size-6' />} />
                    <LinkedButtons link="mailto:pitas.matheus4@gmail.com" logo={<Mail className='size-6' />} />
                    <LinkedButtons link="https://api.whatsapp.com/send?phone=14991111982" logo={<Phone className='size-6' />} />
                </div>
            </div>
        </div>
        <div className='w-full hidden md:block'>
            <Image 
                src={AboutMeImage}
                alt="Imagem sobre mim"
            />
        </div>
    </div>
  )
}

export default AboutMe