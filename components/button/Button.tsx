import { ReactNode } from 'react'

import {
  ButtonColorType,
  ButtonShadowDirectionType,
  ButtonSizeType,
} from './button.types'
import {
  buttonColors,
  buttonSizes,
  DEFAULT_BUTTON_COLOR,
  DEFAULT_BUTTON_SIZE,
  DEFAULT_SHADOW_DIRECTION,
} from './buttonStyles'

interface ButtonProps {
  label: string
  color?: ButtonColorType
  size?: ButtonSizeType
  children?: ReactNode
  shadowDirection?: ButtonShadowDirectionType
  disabled?: boolean
  onClick: () => void
}

export const Button = ({
  label,
  color = DEFAULT_BUTTON_COLOR,
  size = DEFAULT_BUTTON_SIZE,
  onClick,
  children,
  disabled = false,
  shadowDirection = DEFAULT_SHADOW_DIRECTION,
}: ButtonProps) => {
  const shadowClasses = shadowDirection === 'ltr' ? 'btn-ltr' : 'btn-rtl'
  return (
    <button
      type="button"
      className={`btn-base ${shadowClasses} ${buttonSizes[size]} ${buttonColors[color]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
      {children}
    </button>
  )
}
