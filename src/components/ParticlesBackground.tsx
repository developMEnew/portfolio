import React, { useEffect } from 'react';

export function ParticlesBackground() {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'absolute w-2 h-2 bg-white rounded-full';
      
      // Random starting position
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      particle.style.opacity = '0.2';
      
      document.getElementById('particles-container')?.appendChild(particle);
      
      // Animate the particle
      const angle = Math.random() * Math.PI * 2;
      const speed = 1 + Math.random() * 2;
      let x = startX;
      let y = startY;
      
      const animate = () => {
        x += Math.cos(angle) * speed;
        y += Math.sin(angle) * speed;
        
        particle.style.transform = `translate(${x - startX}px, ${y - startY}px)`;
        
        // Remove particle if it's out of bounds
        if (
          x < -100 || x > window.innerWidth + 100 ||
          y < -100 || y > window.innerHeight + 100
        ) {
          particle.remove();
        } else {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    };
    
    // Create initial particles
    for (let i = 0; i < 50; i++) {
      createParticle();
    }
    
    // Create new particles periodically
    const interval = setInterval(createParticle, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return <div id="particles-container" className="absolute inset-0" />;
}