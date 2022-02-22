import { format } from 'date-fns'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { ParsedUrlQuery } from 'querystring'
import { ReactNode } from 'react'

import { SubscribeCard } from '../../components/blog/SubscribeCard'
import { Comments } from '../../components/comments'
import { Layout } from '../../components/layout'
import { SEO } from '../../components/seo'
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
      <SEO
        title={frontMatter.title}
        description={frontMatter.preview}
        url={`/post/${slug}`}
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center">
          <div className="text-gray-700 md:text-lg">
            {format(new Date(frontMatter.date), 'MMMM do, y')}
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl">{frontMatter.title}</h2>
          <div className="markdown-content mt-6 md:mt-10 text-left text-lg">
            <MDXRemote {...mdxSource} />
          </div>
        </div>
        <div className="relative">
          <hr className="sketched-hr opacity-90" />
        </div>
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-space-mono mb-8 inline-block text-gray-800 leading-relaxed txt-clipping txt-clipping--affirmative">
            Comments 📣
          </h3>
          <Comments slug={slug} title={frontMatter.title} />
        </div>
      </article>
      <div className="max-w-xl mx-auto mt-16 mb-10 px-4 sm:px-8">
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
