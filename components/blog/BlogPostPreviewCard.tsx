import { format } from 'date-fns'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Button } from '../button'
import { Card } from '../card'
import { LabelBadges } from '../labelBadges'

interface BlogPostPreviewCardProps {
  date: string
  title: string
  preview: string
  slug: string
  number: number
  labels?: string
}

export const BlogPostPreviewCard = ({
  date,
  title,
  preview,
  slug,
  number,
  labels = '',
}: BlogPostPreviewCardProps) => {
  const router = useRouter()

  return (
    <Card border="filled">
      <div className="text-center">
        <div className="text-gray-700 mb-1">
          {format(new Date(date), 'MMMM do, y')}
        </div>
        <h3>
          <Link href={`/post/${slug}`}>
            <a title={title} className="no-underline">
              {number}. {title}
            </a>
          </Link>
        </h3>
        <div className="mt-2">
          <LabelBadges labels={labels} />
        </div>
        <p className="text-left mt-4 text-lg">{preview}</p>
        <div className="mt-2 md:mt-4">
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
