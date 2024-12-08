import { Card, CardContent, CardProps } from '@mui/material';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const MotionCard = motion(Card);

interface MaterialCardProps extends CardProps {
  children: React.ReactNode;
}

export const MaterialCard = forwardRef<HTMLDivElement, MaterialCardProps>(
  ({ children, ...props }, ref) => {
    return (
      <MotionCard
        ref={ref}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
        {...props}
      >
        <CardContent>{children}</CardContent>
      </MotionCard>
    );
  }
);