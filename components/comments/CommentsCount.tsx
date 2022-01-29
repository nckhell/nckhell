import { CommentCount } from 'disqus-react'

interface CommentsProps {
  slug: string
  title: string
}

export const CommentsCount = ({ slug, title }: CommentsProps) => {
  const disqusShortname = 'nckhell'
  const disqusConfig = {
    url: `https://nckhell.com/post/${slug}`,
    identifier: slug, // Single post id
    title: title, // Single post title
  }

  return (
    <CommentCount shortname={disqusShortname} config={disqusConfig}>
      Comments
    </CommentCount>
  )
}
