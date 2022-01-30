import { ReactNode } from 'react'

import { CardBorderType, CardColorType } from './card.types'
import {
  cardBorders,
  cardColors,
  DEFAULT_CARD_BORDER,
  DEFAULT_CARD_COLOR,
} from './cardStyles'

interface CardProps {
  children: ReactNode
  color?: CardColorType
  border?: CardBorderType
  stretch?: boolean
}

export const Card = ({
  children,
  color = DEFAULT_CARD_COLOR,
  border = DEFAULT_CARD_BORDER,
  stretch = false,
}: CardProps) => {
  return (
    <div
      className={`card-base ${cardColors[color]} ${cardBorders[border]} ${
        stretch ? 'min-h-full' : ''
      }`}
    >
      {children}
    </div>
  )
}
