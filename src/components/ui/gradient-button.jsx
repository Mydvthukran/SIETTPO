import React from 'react'

export function GradientButton({ 
  children, 
  className = '', 
  variant = 'default',
  style,
  ...props 
}) {
  const baseClass = 'gradient-button'
  const variantClass = variant === 'secondary' || variant === 'variant' ? 'variant' : ''
  const mergedStyle = { ...style }

  return (
    <button 
      className={`${baseClass} ${variantClass} ${className}`.trim()}
      style={mergedStyle}
      {...props}
    >
      {children}
    </button>
  )
}
