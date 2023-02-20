import type { GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import { BlogPostPreviewCard, SubscribeCard } from '../components/blog'
import { Button } from '../components/button'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { Tooltip } from '../components/tooltip'
import profilePic from '../public/images/nick.jpeg'
import { Post } from '../types/Post.types'
import { getAllPosts } from '../utils/postUtils'

type HomePageProps = {
  posts: Post[]
}
export default function Home({ posts }: HomePageProps) {
  const router = useRouter()

  return (
    <>
      <SEO title="Aloha" />
      <header className={`text-center group px-4 sm:px-8`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-2 relative flex justify-center">
          <div className="w-24">
            <Image
              src={profilePic}
              alt="Nick Hellemans"
              className="rounded-full"
            />
          </div>
        </div>
        <h1 className="font-space-inter font-bold text-4xl md:text-5xl text-gray-900">
          Aloha! <span className="wave">👋</span>
        </h1>
        <div className="sm:mt-1 md:mt-2">
          <Tooltip text="Hawaiian word for love, affection, peace, compassion and mercy.">
            <p className="text-sm md:text-base font-space-mono text-gray-800 cursor-pointer">
              {`/ə'loʊhɑː/`}
            </p>
          </Tooltip>
        </div>
        <p className="font-hand text-3xl md:text-4xl -rotate-2 mt-3 md:mt-5 text-gray-800">
          {`I am Nick, `}
          <span className="txt-clipping txt-clipping--subtle">
            Product Developer
          </span>
          , <span className="txt-clipping txt-clipping--subtle">Builder</span>,
          and{' '}
          <span className="txt-clipping txt-clipping--subtle">Engineer</span>{' '}
          from 🇧🇪.
          <br />
          <span className="text-3xl md:text-5xl">C</span>urrently{' '}
          <span className="sketch-underline">Head of Product</span> at{' '}
          <a
            href="https://awell.health"
            rel="noreferrer"
            target="_blank"
            title="Awell Health"
            className="text-blue-700 hover:text-blue-800 no-underline"
          >
            Awell Health
          </a>
          .
        </p>
        <div className="max-w-6xl mx-auto px-4 sm:pt-5 md:pt-10 relative">
          <hr className="sketched-hr opacity-90" />
        </div>
      </header>
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-8">
        <h1 className="font-mono-space text-4xl md:text-5xl">The Blog</h1>
        <div className="py-4 md:py-6 lg:py-8 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
          <p>
            Learning-by-doing and <i>doing-by-learning</i>. I write down my
            learnings, insights, and mistakes as a future reference for myself.
            As a bonus, I hope they are interesting for you too.
          </p>
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
        <div className="mt-8">
          <Button
            label="👀 View all posts"
            onClick={() => router.push('/blog')}
            size="xl"
            color="slate"
          />
        </div>
        <div className="max-w-xl mx-auto mt-16 mb-10">
          <SubscribeCard />
        </div>
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()

  return { props: { posts } }
}
