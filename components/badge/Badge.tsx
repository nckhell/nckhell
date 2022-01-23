import { BadgeColorType, BadgeSizeType } from './badge.types'
import {
  badgeColors,
  badgeSizes,
  baseStyles,
  DEFAULT_BADGE_COLOR,
  DEFAULT_BADGE_SIZE,
  withIconStyle,
} from './badgeStyles'

interface ButtonProps {
  label: string
  color?: BadgeColorType
  withIcon?: boolean
  size?: BadgeSizeType
}

export const Badge = ({
  label,
  color = DEFAULT_BADGE_COLOR,
  size = DEFAULT_BADGE_SIZE,
  withIcon = false,
}: ButtonProps) => {
  return (
    <span
      className={`${baseStyles} ${badgeSizes[size]} ${badgeColors[color]} ${
        withIcon ? withIconStyle : ''
      }`}
    >
      {withIcon && (
        <svg
          className="mr-1 w-3 h-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
      {label}
    </span>
  )
}
