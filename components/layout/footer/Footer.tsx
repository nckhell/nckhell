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
        <div>
          Website built by{' '}
          <Tooltip text="Me, myself, and I" direction="top">
            <span className="cursor-pointer">🙋‍♂️</span>
          </Tooltip>
          . &#169; Until forever and ever.
        </div>
        <div>
          <Tooltip text="Inspiration from" direction="top">
            <span className="cursor-pointer">👀</span>
          </Tooltip>{' '}
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
        </div>
      </div>
    </footer>
  )
}
