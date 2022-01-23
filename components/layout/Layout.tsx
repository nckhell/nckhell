import { ReactNode } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../contexts/app/AppContext'
import Head from 'next/head'
import { Footer } from './footer'
import { Header } from './header'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const { appState } = useContext(AppContext)

  return (
    <>
      <Head>
        <title>Nick Hellemans</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <main
          className={`mb-auto ${
            appState.isMobileMenuOpen ? 'hidden' : 'block'
          }`}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}