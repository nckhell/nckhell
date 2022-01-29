import type { GetStaticProps } from 'next'
import { ReactNode } from 'react'

import { BlogPostPreviewCard, SubscribeCard } from '../components/blog'
import { Layout } from '../components/layout'
import { Post } from '../types/Post.types'
import { getAllPosts } from '../utils/postUtils'

type BlogPageProps = {
  posts: Post[]
}

export default function Blog({ posts }: BlogPageProps) {
  return (
    <div className="max-w-4xl mx-auto text-center px-4 sm:px-8">
      <h1 className="font-mono-space text-4xl md:text-5xl">The Blog</h1>
      <div className="pt-4 md:pt-6 lg:pt-8 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
        <p>
          I&apos;m <i>continiously learning</i> and like to write stuff about
          building digital products, product management, and life.
        </p>
      </div>
      <div className="max-w-xl mx-auto my-10">
        <SubscribeCard />
      </div>
      <div className="pt-6 max-w-3xl mx-auto">
        {posts.map((post, index, arr) => (
          <div key={post.slug} className="mb-6">
            <BlogPostPreviewCard
              title={post.frontMatter.title}
              date={post.frontMatter.date}
              preview={post.frontMatter.preview}
              slug={post.slug}
              number={arr.length - arr.indexOf(post)}
            />
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
