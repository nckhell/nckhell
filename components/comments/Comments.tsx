import { DiscussionEmbed } from 'disqus-react'

interface CommentsProps {
  slug: string
  title: string
}

export const Comments = ({ slug, title }: CommentsProps) => {
  const disqusShortname = 'nckhell'
  const disqusConfig = {
    url: `https://nckhell.com/post/${slug}`,
    identifier: slug, // Single post id
    title: title, // Single post title
  }

  return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
}
