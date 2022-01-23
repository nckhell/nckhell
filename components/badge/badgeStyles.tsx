import { BadgeColorType,BadgeSizeType } from './badge.types'

export const DEFAULT_BADGE_SIZE: BadgeSizeType = 'base'
export const DEFAULT_BADGE_COLOR: BadgeColorType = 'gray'

export const baseStyles = 'mr-2 px-2.5 py-0.5 rounded font-semibold'

export const badgeSizes: { [key in BadgeSizeType]: string } = {
  base: 'text-xs',
  lg: 'text-sm',
}

export const withIconStyle = 'inline-flex items-center'

export const badgeColors: { [key in BadgeColorType]: string } = {
  blue: 'bg-blue-100 text-blue-800',
  gray: 'bg-gray-100 text-gray-800',
  red: 'bg-red-100 text-red-800',
  green: 'bg-green-100 text-green-800',
  yellow: 'bg-yellow-100 text-yellow-800',
  indigo: 'bg-indigo-100 text-indigo-800',
  purple: 'bg-purple-100 text-purple-800',
  pink: 'bg-pink-100 text-pink-800',
}
