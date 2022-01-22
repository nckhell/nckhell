import { ReactNode } from 'react'
import { Nav } from './nav'
import { Tooltip } from '../../tooltip'
import Image from 'next/image'
import profilePic from '../../../public/images/nick.jpeg'

interface HeaderProps {
    children?: ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  return <>
    <Nav />
    <header className="text-center py-24 group">
      <h1 className='font-space-inter font-bold text-5xl text-gray-900'>
        Aloha! 👋
      </h1>
      <div className='mt-2'>
        <Tooltip text='Hawaiian word for love, affection, peace, compassion and mercy.'>
          <span className='text-base font-space-mono text-gray-800'>/əˈloʊhɑː/</span>
        </Tooltip> 
      </div>
      <p className='font-hand text-4xl -rotate-2 mt-5 text-gray-800'>I'm Nick, a Belgium based product manager, <br/>currently working at <a href='#/' title='Awell Health' className='text-blue-700 hover:text-blue-800 hover:underline'>Awell Health</a>.</p>
        <div className='max-w-6xl mx-auto px-4 py-16 relative'>
          <hr className='sketched-hr opacity-90' />
          <div className='w-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Image
              src={profilePic}
              alt="Nick Hellemans"
              className='rounded-full shadow'
            />
          </div>
        </div>
    </header>
  </>
}