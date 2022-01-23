import { ReactNode } from 'react'
import { Layout } from '../components/layout'

export default function Home() {
  return <div></div>
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}
