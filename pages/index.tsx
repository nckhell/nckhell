import { ReactNode } from 'react'

import { Card } from '../components/card'
import { Layout } from '../components/layout'

export default function Home() {
  return (
    <div className='mx-12'>
      <Card border='filled'>
        <p>Hello</p>
      </Card>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}
