import { format } from 'date-fns'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { ParsedUrlQuery } from 'querystring'
import { ReactNode } from 'react'

import { SubscribeCard } from '../../components/blog/SubscribeCard'
import { Comments } from '../../components/comments'
import { Layout } from '../../components/layout'
import { getAllPosts, getPost } from '../../utils/postUtils'

// props type
type PostPageProps = {
  frontMatter: {
    title: string
    date: string
    preview: string
  }
  mdxSource: MDXRemoteSerializeResult
  slug: string
}

export default function PostPage({
  frontMatter,
  mdxSource,
  slug,
}: PostPageProps) {
  return (
    <>
      <article className="max-w-3xl mx-auto">
        <div className="text-center">
          <div className="text-gray-700 text-lg">
            {format(new Date(frontMatter.date), 'MMMM do, y')}
          </div>
          <h2 className="mt-2">{frontMatter.title}</h2>
          <div className="markdown-content mt-6 text-left">
            <MDXRemote {...mdxSource} />
          </div>
        </div>
        <div className="relative">
          <hr className="sketched-hr opacity-90" />
        </div>
        <div className="text-center">
          <h3 className="font-space-mono mb-8 inline-block text-gray-800 leading-relaxed txt-clipping txt-clipping--affirmative">
            Comments 📣
          </h3>
          <Comments slug={slug} title={frontMatter.title} />
        </div>
      </article>
      <div className="max-w-xl mx-auto mt-16 mb-10">
        <SubscribeCard />
      </div>
    </>
  )
}

PostPage.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}

interface Iparams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Iparams
  const { frontMatter, content } = await getPost(slug)

  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      mdxSource,
      slug,
    },
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts()

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
