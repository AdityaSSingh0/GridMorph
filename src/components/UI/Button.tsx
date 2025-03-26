
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
  isLoading?: boolean;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  className,
  children,
  isLoading = false,
  disabled,
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
        isLoading && 'opacity-70 cursor-not-allowed',
        className
      )}
      disabled={isLoading || disabled}
      aria-disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {children}
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className={iconSpacing} aria-hidden="true">{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span className={iconSpacing} aria-hidden="true">{icon}</span>}
        </>
      )}
    </button>
  );
};
