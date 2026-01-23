import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TechStack from './TechStack';

const HeroSection = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
      <div className="bg-decorative">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Padma Nagasri{' '}
            <span className="gradient-text">Gundubogula</span>
          </h1>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Software Developer & Research Enthusiast
          </h2>

          {/* Tagline */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Building intelligent systems using <span className="text-primary font-medium">NLP</span>,{' '}
            <span className="text-primary font-medium">AI</span>, and{' '}
            <span className="text-primary font-medium">Web Technologies</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <Button
              size="lg"
              className="gap-2 px-8"
              onClick={() => handleScroll('#projects')}
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 px-8">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </div>

          {/* Tech Stack */}
          <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <TechStack />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
