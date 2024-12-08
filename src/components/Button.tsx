import React from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md',
  children, 
  className,
  ...props 
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={cn(
        'rounded-md transition-all duration-300 transform hover:scale-105 w-full sm:w-auto font-medium',
        sizeClasses[size],
        variant === 'primary' 
          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-blue-500/25' 
          : 'bg-transparent border border-blue-400/30 hover:border-blue-400 text-blue-400 hover:text-white hover:bg-blue-400/10',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}