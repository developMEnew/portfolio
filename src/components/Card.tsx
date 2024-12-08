import React from 'react';
import { cn } from '../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      'bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm border border-gray-700/50',
      className
    )}>
      {children}
    </div>
  );
}