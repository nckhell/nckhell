import type { GetStaticProps } from 'next'
import { ReactNode } from 'react'

import { Layout } from '../components/layout'
import { Post } from '../types/Post.types'
import { getAllPosts } from '../utils/postUtils'

type BlogPageProps = {
  posts: Post[]
}

export default function Blog({ posts }: BlogPageProps) {
  return (
    <div>
      <div className="space-y-12">
        {posts.map((post) => (
          <div key={post.slug}>
            {post.slug}
            {post.frontMatter.date}
            {post.frontMatter.title}
          </div>
        ))}
      </div>
    </div>
  )
}

Blog.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()

  return { props: { posts } }
}
