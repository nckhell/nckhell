import { Nav } from './nav'
import { Tooltip } from '../../tooltip'
import Image from 'next/image'
import profilePic from '../../../public/images/nick.jpeg'
import { Button } from '../../button'

export const Header = () => {
  return (
    <>
      <Nav />
      <header className="text-center py-24 group px-4 sm:px-8">
        <h1 className="font-space-inter font-bold text-5xl text-gray-900">
          Aloha! 👋
        </h1>
        <div className="mt-2">
          <Tooltip text="Hawaiian word for love, affection, peace, compassion and mercy.">
            <span className="text-base font-space-mono text-gray-800">
              {`/ə'loʊhɑː/`}
            </span>
          </Tooltip>
        </div>
        <p className="font-hand text-4xl -rotate-2 mt-5 text-gray-800">
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
          Currently Product Manager at{' '}
          <a
            href="https://awell.health"
            rel="noreferrer"
            target="_blank"
            title="Awell Health"
            className="text-blue-700 hover:text-blue-800 hover:underline"
          >
            Awell Health
          </a>
          .
        </p>
        <div className="max-w-6xl mx-auto px-4 py-16 relative">
          <hr className="sketched-hr opacity-90" />
          <div className="w-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src={profilePic}
              alt="Nick Hellemans"
              className="rounded-full"
            />
          </div>
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
