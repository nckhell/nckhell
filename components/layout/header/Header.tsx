import Image from 'next/image'
import { useContext } from 'react'

import { AppContext } from '../../../contexts/app/AppContext'
import profilePic from '../../../public/images/nick.jpeg'
import { Button } from '../../button'
import { Tooltip } from '../../tooltip'
import { Nav } from './nav'

export const Header = () => {
  const { appState } = useContext(AppContext)

  return (
    <>
      <Nav />
      <header
        className={`text-center py-10 md:py-20 group px-4 sm:px-8 ${
          appState.isMobileMenuOpen ? 'hidden' : 'block'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-2 relative flex justify-center">
          <div className="w-20 md:w-24">
            <Image
              src={profilePic}
              alt="Nick Hellemans"
              className="rounded-full"
            />
          </div>
        </div>
        <h1 className="font-space-inter font-bold text-4xl md:text-5xl text-gray-900">
          Aloha! <span className="wave">👋</span>
        </h1>
        <div className="sm:mt-1 md:mt-2">
          <Tooltip text="Hawaiian word for love, affection, peace, compassion and mercy.">
            <p className="text-sm md:text-base font-space-mono text-gray-800 cursor-pointer">
              {`/ə'loʊhɑː/`}
            </p>
          </Tooltip>
        </div>
        <p className="font-hand text-2xl md:text-4xl -rotate-2 mt-3 md:mt-5 text-gray-800">
          {`I'm Nick, `}
          <span className="txt-clipping txt-clipping--subtle">
            Software Designer
          </span>
          , <span className="txt-clipping txt-clipping--subtle">Developer</span>
          , and{' '}
          <span className="txt-clipping txt-clipping--subtle">
            Physiotherapist
          </span>{' '}
          from 🇧🇪.
          <br />
          <span className="text-3xl md:text-5xl">C</span>urrently{' '}
          <span className="sketch-underline">Product Manager</span> at{' '}
          <a
            href="https://awell.health"
            rel="noreferrer"
            target="_blank"
            title="Awell Health"
            className="text-blue-700 hover:text-blue-800 no-underline"
          >
            Awell Health
          </a>
          .
        </p>
        <div className="max-w-6xl mx-auto px-4 py-10 relative">
          <hr className="sketched-hr opacity-90" />
        </div>
        <div>
          <Button
            label="Get in touch"
            color="slate"
            size="xl"
            onClick={() => true}
          />
        </div>
      </header>
    </>
  )
}
