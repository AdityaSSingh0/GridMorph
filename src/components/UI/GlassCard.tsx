
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
}

export const GlassCard = ({ 
  children, 
  className, 
  intensity = 'medium' 
}: GlassCardProps) => {
  const baseStyles = 'backdrop-filter backdrop-blur border border-white border-opacity-20 shadow-lg rounded-xl overflow-hidden';
  
  const intensityStyles = {
    light: 'bg-white/10',
    medium: 'bg-white/20',
    heavy: 'bg-white/30'
  };

  return (
    <div className={cn(baseStyles, intensityStyles[intensity], className)}>
      {children}
    </div>
  );
};
