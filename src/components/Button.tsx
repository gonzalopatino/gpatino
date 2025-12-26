import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button'
    href?: never
    to?: never
  }

type ButtonAsLink = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a'
    href: string
    to?: never
  }

type ButtonAsRouterLink = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    as: 'link'
    to: string
    href?: never
  }

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsRouterLink

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-500 focus-visible:ring-primary-500 shadow-lg shadow-primary-500/25',
  secondary:
    'bg-dark-800 text-white hover:bg-dark-700 focus-visible:ring-dark-500 border border-dark-600',
  outline:
    'border border-primary-500/50 text-primary-400 hover:bg-primary-500/10 hover:border-primary-400 focus-visible:ring-primary-500',
  ghost:
    'text-dark-300 hover:text-white hover:bg-dark-800 focus-visible:ring-dark-500',
  glow:
    'bg-gradient-to-r from-primary-600 to-accent-cyan text-white hover:shadow-glow-lg transition-shadow duration-300',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

    if (props.as === 'a') {
      const { as: _, ...anchorProps } = props
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...anchorProps}
        >
          {children}
        </a>
      )
    }

    if (props.as === 'link') {
      const { as: _, to, ...linkProps } = props
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          to={to}
          className={classes}
          {...linkProps}
        >
          {children}
        </Link>
      )
    }

    const { as: _, ...buttonProps } = props as ButtonAsButton
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...buttonProps}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
