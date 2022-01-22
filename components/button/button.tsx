import { ReactNode } from 'react'
import { ButtonSizeType, ButtonColorType } from './button.types'
import { baseStyles, buttonSizes, buttonColors, DEFAULT_BUTTON_COLOR, DEFAULT_BUTTON_SIZE } from './buttonStyles'

interface ButtonProps {
    label: string
    color?: ButtonColorType
    size?: ButtonSizeType
    children?: ReactNode
    disabled?: boolean
    onClick: () => void
}

export const Button = ({ label, color = DEFAULT_BUTTON_COLOR, size = DEFAULT_BUTTON_SIZE, onClick, children, disabled = false }: ButtonProps) => {
  return <button type='button' className={`${baseStyles} ${buttonSizes[size]} ${buttonColors[color]}`}>
      {label}
      {children}
  </button>
}