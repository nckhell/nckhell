import { format } from 'date-fns'
import { useRouter } from 'next/router'

import { Button } from '../button'
import { Card } from '../card'
import { CommentsCount } from '../comments/CommentsCount'

interface BlogPostPreviewCardProps {
  date: string
  title: string
  preview: string
  slug: string
}

export const BlogPostPreviewCard = ({
  date,
  title,
  preview,
  slug,
}: BlogPostPreviewCardProps) => {
  const router = useRouter()

  return (
    <Card border="filled">
      <div className="text-center">
        <div className="text-gray-700">
          {format(new Date(date), 'MMMM do, y')}
        </div>
        <h3>{title}</h3>
        <p className="text-left mt-4 text-lg">{preview}</p>
        <CommentsCount title={title} slug={slug} />
        <div className="mt-2">
          <Button
            label="Read more"
            onClick={() => router.push(`/post/${slug}`)}
            color="lime"
          />
        </div>
      </div>
    </Card>
  )
}
