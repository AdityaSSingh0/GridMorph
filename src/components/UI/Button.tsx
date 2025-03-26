
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-energify-blue focus-visible:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-energify-blue text-white hover:bg-energify-blue-dark shadow-sm hover:shadow-md',
    secondary: 'bg-energify-blue-light text-energify-blue-dark hover:bg-blue-100 shadow-sm',
    outline: 'border border-energify-blue text-energify-blue hover:bg-energify-blue hover:text-white',
    ghost: 'text-energify-blue hover:bg-blue-50',
    link: 'text-energify-blue underline-offset-4 hover:underline hover:text-energify-blue-dark p-0'
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const iconSpacing = iconPosition === 'left' ? 'mr-2' : 'ml-2';

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        variant !== 'link' && sizeStyles[size],
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className={iconSpacing}>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className={iconSpacing}>{icon}</span>}
    </button>
  );
};
