import { motion } from 'framer-motion';
import { fadeIn, staggerChildren } from '../utils/animations';
import { Container } from './Container';

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedContainer({ children, className }: AnimatedContainerProps) {
  return (
    <motion.div
      variants={staggerChildren}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Container className={className}>
        <motion.div variants={fadeIn}>
          {children}
        </motion.div>
      </Container>
    </motion.div>
  );
}