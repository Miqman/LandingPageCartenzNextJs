import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'flat'
  size?: 'small' | 'medium' | 'large'
  rounded?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  rounded = false,
  className,
  ...props
}) => {
  const sizeStyles = {
    small: 'px-2 py-2 text-sm',
    medium: 'px-4 py-2 text-base font-semibold',
    large: 'px-6 py-3 text-lg font-semibold'
  }

  const baseStyles = `rounded focus:outline-none focus:shadow-outline ${rounded ? 'rounded-full' : ''}`
  const variantStyles = {
    primary: 'bg-button text-button-text',
    secondary: 'bg-button-secondary text-secondary ring-secondary ring-2',
    outline:
      'bg-transparent hover:bg-blue-400 text-blue-400 font-semibold hover:text-white py-2 px-4 border-2 border-blue-400 hover:border-transparent',
    flat: 'bg-transparent hover:bg-blue-400 font-semibold hover:text-white py-2 px-4 hover:border-transparent'
  }

  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  )
}

export default Button
