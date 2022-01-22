import type { NextPage } from 'next'
import { ReactNode } from 'react'
import { Layout } from '../components/layout'
import { Button } from '../components/button'
import { Badge } from '../components/badge'
import { Input } from '../components/form/input'

export default function Home() {
  return (
    <div>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
