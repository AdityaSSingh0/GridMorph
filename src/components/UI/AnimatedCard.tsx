
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'scale-in' | 'slide-in' | 'float';
  delay?: number;
}

export const AnimatedCard = ({ 
  children, 
  className, 
  animation = 'fade-in',
  delay = 0
}: AnimatedCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const animationStyles = {
    'fade-in': 'opacity-0 animate-fade-in',
    'scale-in': 'opacity-0 animate-scale-in',
    'slide-in': 'opacity-0 animate-fade-in-up',
    'float': 'animate-float'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        isVisible ? animationStyles[animation] : 'opacity-0',
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
};
