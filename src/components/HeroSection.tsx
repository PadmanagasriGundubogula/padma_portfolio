import { ArrowRight, Download, Sparkles, Award, Briefcase, FolderGit2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TechStack from './TechStack';

const stats = [
  { label: 'Research & SDE Internships', value: '3+', icon: Briefcase },
  { label: 'Funded Research Fellowship', value: '₹15k/mo', icon: Award },
  { label: 'AI & Web Projects', value: '8+', icon: FolderGit2 },
  { label: 'Toastmasters Mastery', value: '5 Levels', icon: Sparkles },
];

const HeroSection = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      <div className="bg-decorative">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/80 border border-border shadow-soft mb-6 animate-fade-up backdrop-blur-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-foreground">
              Research Developer @ <strong className="text-primary font-semibold">LTRC, IIIT Hyderabad</strong> • Open to Roles
            </span>
          </div>

          {/* Greeting */}
          <p className="text-primary font-mono text-sm md:text-base mb-3 animate-fade-up font-semibold" style={{ animationDelay: '0.1s' }}>
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-4 tracking-tight animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Padma Nagasri{' '}
            <span className="gradient-text">Gundubogula</span>
          </h1>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            AI / NLP Research Developer & Full Stack Engineer
          </h2>

          {/* Tagline */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Engineering state-of-the-art <span className="text-foreground font-semibold">Agentic AI</span>,{' '}
            <span className="text-foreground font-semibold">RAG Systems</span>, and{' '}
            <span className="text-foreground font-semibold">Make.com Automations</span> alongside robust full-stack applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <Button
              size="lg"
              className="gap-2 px-8 shadow-soft hover:shadow-hover transition-all w-full sm:w-auto"
              onClick={() => handleScroll('#projects')}
            >
              Explore Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
            <a href="./padmanagasri_resume_.pdf" download className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="gap-2 px-8 w-full border-border hover:bg-secondary transition-all">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </a>
            <Button
              size="lg"
              variant="ghost"
              className="px-6 text-muted-foreground hover:text-foreground w-full sm:w-auto"
              onClick={() => handleScroll('#contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Stats Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-2xl bg-card/70 border border-border shadow-soft backdrop-blur-sm flex flex-col items-center justify-center text-center hover:border-primary/40 transition-colors"
              >
                <stat.icon className="w-5 h-5 text-primary mb-1.5 opacity-80" />
                <span className="text-2xl font-bold text-foreground mb-0.5">{stat.value}</span>
                <span className="text-xs text-muted-foreground font-medium leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <TechStack />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
