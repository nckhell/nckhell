import { ButtonSizeType, ButtonColorType } from './button.types'

export const DEFAULT_BUTTON_SIZE: ButtonSizeType  = 'base'
export const DEFAULT_BUTTON_COLOR: ButtonColorType  = 'primary'

export const baseStyles = 'text-center rounded-lg focus:ring-4 focus:ring-blue-300'

export const buttonSizes: {[key in ButtonSizeType]: string} = {
    xs: 'py-2 px-3 text-xs font-medium',
    sm: 'py-2 px-3 text-sm font-medium',
    base: 'px-5 py-2.5 text-sm font-medium',
    lg: 'py-3 px-5 text-base font-medium',
    xl: 'px-6 py-3.5 text-base font-medium'
}

export const buttonColors: {[key in ButtonColorType]: string} = {
    primary: 'text-white bg-blue-700 hover:bg-blue-800'
}