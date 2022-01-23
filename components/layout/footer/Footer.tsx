import { ReactNode } from 'react'
import { useContext } from 'react'

import { AppContext } from '../../../contexts/app/AppContext'
import { getDayName } from '../../../utils'
import { Tooltip } from '../../tooltip'

interface FooterProps {
  children?: ReactNode
}

export const Footer = ({ children }: FooterProps) => {
  const { appState } = useContext(AppContext)

  return (
    <footer
      className={`w-full px-4 py-8 sm:px-8 text-center ${
        appState.isMobileMenuOpen ? 'hidden' : 'block'
      }`}
    >
      <div className="inline-block text-3xl shake">🚀</div>
      <h3 className="font-inter font-bold text-2xl lg:text-3xl text-slate-900">
        Have a great {getDayName(new Date())}!
      </h3>
      {children}
      <div className="mt-2 text-slate-800 text-sm leading-5">
        <p>
          Website built by{' '}
          <Tooltip text="Me, myself, and I">
            <span className="cursor-pointer">🙋‍♂️</span>
          </Tooltip>{' '}
          with{' '}
          <a
            href="https://nextjs.org/"
            title="NextJS"
            target="_blank"
            rel="noreferrer"
          >
            NextJS
          </a>{' '}
          and{' '}
          <a
            href="https://tailwindcss.com/"
            title="Tailwind"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind
          </a>
          . &#169; Until forever and ever.
        </p>
        <p>
          👀{' '}
          <a
            href="https://basecamp.com/"
            title="Basecamp"
            target="_blank"
            rel="noreferrer"
          >
            Basecamp
          </a>
          ,{' '}
          <a
            href="https://statamic.com/"
            title="Tailwind"
            target="_blank"
            rel="noreferrer"
          >
            Statamic
          </a>
          ,{' '}
          <a
            href="https://hey.com/"
            title="HEY"
            target="_blank"
            rel="noreferrer"
          >
            HEY
          </a>
        </p>
      </div>
    </footer>
  )
}
