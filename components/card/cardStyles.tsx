import {
  CardBorderDistanceType,
  CardBorderType,
  CardColorType
} from './card.types'

export const DEFAULT_CARD_COLOR: CardColorType = 'white'
export const DEFAULT_CARD_BORDER: CardBorderType = 'outlined'
export const DEFAULT_CARD_BORDER_DISTANCE: CardBorderDistanceType = 'lg'

export const cardColors: { [key in CardColorType]: string } = {
  amber: 'bg-amber-100',
  white: 'bg-white',
  yellow: 'bg-yellow-200',
  emerald: 'bg-emerald-200',
  pink: 'bg-pink-200',
  blue: 'bg-blue-200',
  lime: 'bg-lime-200',
  slate: 'bg-slate-100',
}

export const cardBorders: { [key in CardBorderType]: string } = {
  filled: 'card-border-filled',
  outlined: 'card-border-outlined',
}

