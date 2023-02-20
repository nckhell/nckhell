import '../styles/globals.css'

import type { NextComponentType } from 'next'
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { ReactNode, useEffect } from 'react'

import { AppProvider } from '../contexts/app/AppContext'
import * as gtag from '../utils/gtag'

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>
    </>
  )
}

export default MyApp
