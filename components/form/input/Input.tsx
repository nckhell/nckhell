import { InputSizeType, InputTypeType } from './input.types'
import {
  baseStyles,
  DEFAULT_INPUT_SIZE,
  disabledStyles,
  errorDetailsStyles,
  inputHasErrorStyles,
  inputSizesStyles,
  labelHasErrorStyles,
  labelStyles,
} from './inputStyles'

interface ButtonProps {
  id: string
  label?: string
  value?: string
  placeholder?: string
  type: InputTypeType
  size?: InputSizeType
  disabled?: boolean
  onChange: () => void
  errorMessage?: string
}

export const Input = ({
  id,
  label,
  value,
  placeholder,
  onChange,
  size = DEFAULT_INPUT_SIZE,
  disabled = false,
  type,
  errorMessage,
}: ButtonProps) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className={`${labelStyles} ${errorMessage && labelHasErrorStyles}`}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className={`${baseStyles} ${inputSizesStyles[size]} ${
          disabled && disabledStyles
        } ${errorMessage && inputHasErrorStyles}`}
      />
      {errorMessage && <p className={errorDetailsStyles}>{errorMessage}</p>}
    </div>
  )
}
