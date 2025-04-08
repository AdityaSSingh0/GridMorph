
import React from 'react';
import { cn } from '@/lib/utils';
import { Button as ShadcnButton } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
}: CustomButtonProps) => {
  const getVariant = () => {
    switch (variant) {
      case 'primary': return 'default';
      case 'secondary': return 'secondary';
      case 'outline': return 'outline';
      case 'ghost': return 'ghost';
      case 'link': return 'link';
      default: return 'default';
    }
  };
  
  const getShadcnSize = () => {
    switch (size) {
      case 'sm': return 'sm';
      case 'md': return 'default';
      case 'lg': return 'lg';
      default: return 'default';
    }
  };

  return (
    <ShadcnButton
      className={cn(
        "font-medium transition-all duration-300 rounded-lg",
        isLoading && 'opacity-70 cursor-not-allowed',
        className
      )}
      variant={getVariant()}
      size={getShadcnSize()}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          {children}
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="mr-2" aria-hidden="true">{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span className="ml-2" aria-hidden="true">{icon}</span>}
        </>
      )}
    </ShadcnButton>
  );
};
