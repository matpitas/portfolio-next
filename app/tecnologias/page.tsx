import React from 'react'

import { ChevronsDown } from 'lucide-react'
import MyTechs from '../components/my-techs'
import { SiNextdotjs, SiOracle, SiMysql, SiInsomnia, SiXampp, SiRadixui } from 'react-icons/si'
import { BiLogoJavascript, BiLogoTypescript, BiLogoReact, BiLogoPhp, BiLogoJava, BiLogoCss3, BiLogoHtml5, BiLogoSass, BiLogoGit, BiLogoFigma, BiLogoNodejs, BiLogoMongodb, BiLogoTailwindCss, BiLogoJquery, BiLogoVisualStudio } from 'react-icons/bi'

const page = () => {
  return (
    <div className='w-5/6 m-auto'>
        <div className="w-full flex items-center justify-center flex-col gap-5">
          <h1 className='text-center text-lg md:text-2xl font-black text-slate-800 mt-20'>Essas são as tecnologias que tenho conhecimento</h1>
          <ChevronsDown className='size-6' />
        </div>
        <div className="mt-16 flex flex-wrap gap-5">
          <MyTechs logo={<SiNextdotjs className='size-16'/>} tech="NextJS" />
          <MyTechs logo={<BiLogoJavascript className='size-16'/>} tech="Javascript" />
          <MyTechs logo={<BiLogoTypescript className='size-16'/>} tech="Typescript" />
          <MyTechs logo={<BiLogoReact className='size-16'/>} tech="React" />
          <MyTechs logo={<BiLogoPhp className='size-16'/>} tech="PHP" />
          <MyTechs logo={<BiLogoJava className='size-16'/>} tech="Java" />
          <MyTechs logo={<BiLogoCss3 className='size-16'/>} tech="CSS3" />
          <MyTechs logo={<BiLogoHtml5 className='size-16'/>} tech="HTML5" />
          <MyTechs logo={<BiLogoSass className='size-16'/>} tech="SASS" />
          <MyTechs logo={<BiLogoGit className='size-16'/>} tech="GIT" />
          <MyTechs logo={<BiLogoFigma className='size-16'/>} tech="Figma" />
          <MyTechs logo={<BiLogoNodejs className='size-16'/>} tech="NodeJS" />
          <MyTechs logo={<SiOracle className='size-16'/>} tech="Oracle" />
          <MyTechs logo={<SiMysql className='size-16'/>} tech="Mysql" />
          <MyTechs logo={<BiLogoMongodb className='size-16'/>} tech="MongoDB" />
          <MyTechs logo={<BiLogoTailwindCss className='size-16'/>} tech="Tailwind" /> 
          <MyTechs logo={<SiInsomnia className='size-16'/>} tech="Insomnia" />
          <MyTechs logo={<SiXampp className='size-16'/>} tech="Xampp" />
          <MyTechs logo={<BiLogoVisualStudio className='size-16'/>} tech="Visual Studio Code" />
          <MyTechs logo={<BiLogoJquery className='size-16'/>} tech="Jquery" />
          <MyTechs logo={<SiRadixui className='size-16'/>} tech="Radix" />
        </div>
    </div>
  )
}

export default page