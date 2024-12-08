import { motion } from 'framer-motion';
import { Card } from './Card';
import { fadeIn } from '../utils/animations';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ delay }}
    >
      <Card className={className}>{children}</Card>
    </motion.div>
  );
}