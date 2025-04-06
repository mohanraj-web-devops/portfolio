
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownCircle, Terminal, Server, GitBranch } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-[90vh] flex items-center py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 text-9xl opacity-10 animate-pulse-slow">
          <Terminal size={200} />
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-9xl opacity-10 animate-pulse-slow" style={{ animationDelay: '1s' }}>
          <Server size={200} />
        </div>
        <div className="absolute top-2/3 left-1/4 text-9xl opacity-10 animate-pulse-slow" style={{ animationDelay: '2s' }}>
          <GitBranch size={200} />
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fade-in">
          <h2 className="text-lg md:text-xl font-medium text-primary mb-2">Hello, I'm Mohanraj</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Backend Developer & DevOps Engineer</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            With 1 year of professional experience building robust backend systems and implementing efficient DevOps workflows.
            I specialize in creating scalable solutions and optimizing deployment pipelines.
          </p>
          <div className="flex flex-wrap gap-4">
            {/* <Button asChild size="lg">
              <a href="#projects">View My Skills</a>
            </Button> */}
            {/* <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button> */}
          </div>
        </div>
      </div>
      
      <a 
        href="#skills" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-primary/80 transition-colors animate-bounce"
        aria-label="Scroll to Skills section"
      >
        <ArrowDownCircle size={36} />
      </a>
    </section>
  );
};

export default HeroSection;
