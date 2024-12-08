import React from 'react';
import { Hero } from '../components/Hero';
import { SEO } from '../components/SEO';

export function Home() {
  return (
    <>
      <SEO 
        title="Hasitha Sandakelum | Full-Stack Developer"
        description="Full-Stack Developer specializing in creating beautiful, functional, and user-centered digital experiences. Explore my portfolio and projects."
        keywords="full-stack developer, web development, React, Node.js, TypeScript"
      />
      <main>
        <Hero />
      </main>
    </>
  );
}