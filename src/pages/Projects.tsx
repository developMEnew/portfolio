import React from 'react';
import { SEO } from '../components/SEO';

export function Projects() {
  return (
    <>
      <SEO 
        title="Projects | Hasitha Sandakelum"
        description="Explore my portfolio of web development and software engineering projects. See how I solve real-world problems with code."
        keywords="web development projects, software portfolio, React projects, full-stack applications"
      />
      <main className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Projects
            </span>
          </h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </main>
    </>
  );
}