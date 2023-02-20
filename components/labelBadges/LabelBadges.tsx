import { FC } from 'react'

interface LabelBadgesProps {
  labels: string
}

export const LabelBadges: FC<LabelBadgesProps> = ({ labels }) => {
  const labelsArray = labels.split(',').map((label) => label.trim())

  return (
    <>
      <div className="flex gap-3 justify-center">
        {labelsArray.map((label) => (
          <div className="label" key={label}>
            {label}
          </div>
        ))}
      </div>
    </>
  )
}
