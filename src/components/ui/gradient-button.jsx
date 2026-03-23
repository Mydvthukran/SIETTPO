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
  // Ensure a fallback gradient if CSS is overridden or not loaded
  const fallbackStyle = variantClass ? {} : { backgroundImage: 'var(--accent-gradient)' }
  const mergedStyle = { ...fallbackStyle, ...style }

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
