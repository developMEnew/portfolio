import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
}

export function GradientText({ children }: GradientTextProps) {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
      {children}
    </span>
  );
}