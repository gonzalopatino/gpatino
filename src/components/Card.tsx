import { ReactNode, CSSProperties } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  style?: CSSProperties
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export default function Card({
  children,
  className = '',
  hover = false,
  padding = 'md',
  style,
}: CardProps) {
  const hoverStyles = hover
    ? 'hover:border-cyan-500/50 hover:shadow-glow transition-all duration-300'
    : ''

  return (
    <div
      className={`bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-dark-700/50 ${paddingStyles[padding]} ${hoverStyles} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: ReactNode
  className?: string
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>
}

interface CardTitleProps {
  children: ReactNode
  className?: string
  as?: 'h2' | 'h3' | 'h4'
}

export function CardTitle({ children, className = '', as: Tag = 'h3' }: CardTitleProps) {
  return (
    <Tag className={`text-lg font-semibold text-white ${className}`}>
      {children}
    </Tag>
  )
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return <div className={`text-dark-300 ${className}`}>{children}</div>
}

interface CardFooterProps {
  children: ReactNode
  className?: string
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`mt-4 pt-4 border-t border-dark-700/50 ${className}`}>
      {children}
    </div>
  )
}
