import '../styles/globals.css'

import type { NextComponentType } from 'next'
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app'
import { ReactNode } from 'react'

import { AppProvider } from '../contexts/app/AppContext'

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>
}

export default MyApp
