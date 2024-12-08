import React from 'react';
import { SEO } from '../components/SEO';
import { AnimatedContainer } from '../components/AnimatedContainer';
import { AnimatedCard } from '../components/AnimatedCard';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/animations';

export function Projects() {
  return (
    <>
      <SEO 
        title="Projects | Hasitha Sandakelum"
        description="Explore my portfolio of web development and software engineering projects. See how I solve real-world problems with code."
        keywords="web development projects, software portfolio, React projects, full-stack applications"
      />
      <main className="pt-16 min-h-screen">
        <AnimatedContainer className="py-12">
          <motion.h1 
            className="text-4xl font-bold mb-8"
            variants={slideIn}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Projects
            </span>
          </motion.h1>
          <AnimatedCard delay={0.2}>
            <p className="text-gray-300">Coming soon...</p>
          </AnimatedCard>
        </AnimatedContainer>
      </main>
    </>
  );
}