import React from 'react';
import { Code, Sparkles } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';
import { GradientText } from './GradientText';

export function Hero() {
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
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex justify-center items-center mb-8">
          <div className="relative">
            <Code className="w-12 h-12 text-blue-400" />
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          <GradientText>HASITHA</GradientText>
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          <GradientText>SANDAKELUM</GradientText>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
          Full-Stack Developer & Digital Craftsman
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto">
            View My Work
          </button>
          <button className="group px-8 py-3 bg-transparent border border-blue-400/30 hover:border-blue-400 text-blue-400 hover:text-white rounded-lg transition-all duration-300 hover:bg-blue-400/10 w-full sm:w-auto">
            Let's Connect
            <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}