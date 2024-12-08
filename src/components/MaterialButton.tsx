import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const MotionButton = motion(MuiButton);

interface ButtonProps extends MuiButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
}

export const MaterialButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'contained', ...props }, ref) => {
    return (
      <MotionButton
        ref={ref}
        variant={variant}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </MotionButton>
    );
  }
);