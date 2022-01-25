import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { ParsedUrlQuery } from 'querystring'
import { ReactNode } from 'react'

import { Layout } from '../../components/layout'
import { getAllPosts, getPost } from '../../utils/postUtils'

// props type
type PostPageProps = {
  frontMatter: {
    title: string
    date: string
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
    <div>
      <article className="prose prose-green">
        {frontMatter.title}
        {slug}
        <MDXRemote {...mdxSource} />
      </article>
    </div>
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
