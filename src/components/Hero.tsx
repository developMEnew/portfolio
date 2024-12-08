import React from 'react';
import { Code, Sparkles } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';
import { GradientText } from './GradientText';
import { Container } from './Container';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-900 to-gray-900" />
      
      <ParticlesBackground />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <Container className="relative z-10">
        <div className="text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="relative">
              <Code className="w-10 h-10 text-blue-400" />
              <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-yellow-400 animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
            <GradientText>HASITHA</GradientText>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            <GradientText>SANDAKELUM</GradientText>
          </h2>
          
          <p className="text-base sm:text-lg md:text-sm text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Learning and growing to craft impactful digital experiences
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button 
              size="sm"
              onClick={() => navigate('/projects')}
            >
              View My Work
            </Button>
            <Button 
              size="sm"
              variant="secondary"
              onClick={() => navigate('/contact')}
            >
              Let's Connect
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">
                →
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}