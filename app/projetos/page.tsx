import React from 'react'
import Repositories from '../components/repositories'
import { Link } from 'lucide-react'

interface ReposListProps {
  name: string
  html_url: string
  description: string
  language: string
  updated_at: string
}

async function getRepositories () {
  const repositories = await fetch('https://api.github.com/users/matpitas/repos?sort=updated', {
      next: {
          revalidate: 60 * 60 * 24 
      }
  })
  return repositories.json()
}

async function page ()  { 

  const ReposList: ReposListProps[] = await getRepositories()

  return (
    <div className='flex flex-col items-center'>
      <div className="flex items-center justify-center gap-5 mt-20">
        <Link className='size-5'/>
        <h1 className='text-lg md:text-lg font-black text-slate-800'>Consulta feita na API do GitHub</h1>
      </div>
      <div className='flex flex-wrap gap-10 mt-10 w-5/6 m-auto'>
          {
            ReposList.map((repo) => (
              <Repositories data={repo} key={repo.name}/>
            ))
          }
        </div>
    </div>
  )
}

export default page