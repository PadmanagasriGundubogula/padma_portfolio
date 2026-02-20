import { useState } from 'react';
import { Rocket, Github, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  shortTitle: string;
  description: string;
  abstract: string;
  techStack: string[];
  githubUrl: string;
  color: string;
  emoji: string;
}

const projects: Project[] = [
  {
    title: 'Recipe Generator (Agentic AI)',
    shortTitle: 'Recipe Generator',
    description: 'AI-powered system to generate structured cooking instructions from minimal user input.',
    abstract: 'An intelligent recipe generation platform that leverages Agentic AI and NLP to help users contribute traditional recipes. The system generates grammatically correct, meaningful sentences from semantic structures. Built with a full-stack architecture using React frontend and Flask/MongoDB backend, with integrated speech processing and coreference resolution capabilities.',
    techStack: ['Python', 'NLP', 'Flask', 'MongoDB', 'React'],
    githubUrl: 'https://github.com/PadmanagasriGundubogula/Recipe-generator',
    color: 'from-violet-500 via-purple-500 to-fuchsia-500',
    emoji: '🍳',
  },
  {
    title: 'Speech to Text Converter',
    shortTitle: 'Speech to Text',
    description: 'Converts spoken audio into accurate text with summarization and Q&A capabilities.',
    abstract: 'A Speech-to-Text system that converts spoken audio into accurate textual output with advanced post-processing. Features include text summarization of converted transcripts and an interactive Q&A module that allows users to ask questions about the transcribed content. Focused on improving transcription accuracy and real-time speech recognition for accessibility applications.',
    techStack: ['Python', 'NLP', 'Speech Recognition', 'AI'],
    githubUrl: 'https://github.com/PadmanagasriGundubogula/4-1-project-speech-to-text--TEAM-10',
    color: 'from-cyan-500 via-blue-500 to-indigo-500',
    emoji: '🎤',
  },
  {
    title: 'NLP Digits Automated Speech',
    shortTitle: 'NLP Digital Speech',
    description: 'NLP-based speech analytics platform for evaluating speech accuracy and fluency.',
    abstract: 'An NLP-based speech analytics platform that evaluates speech accuracy and fluency while providing insights into regional language usage. The system processes audio input to identify digits and patterns in automated speech, leveraging natural language processing techniques for accurate recognition and analysis of spoken numerical data.',
    techStack: ['Python', 'NLP', 'FastAPI', 'Speech Processing'],
    githubUrl: 'https://github.com/PadmanagasriGundubogula/NLP_Digits-Automated-speech',
    color: 'from-emerald-500 via-teal-500 to-cyan-500',
    emoji: '🔢',
  },
  {
    title: 'Password Generator',
    shortTitle: 'Password Generator',
    description: 'Secure password generator with customizable strength options.',
    abstract: 'A robust password generator application that creates strong, secure passwords with customizable options. Users can specify length, include uppercase/lowercase letters, numbers, and special characters. Features a clean interface with instant password generation and copy-to-clipboard functionality for enhanced security and convenience.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/PadmanagasriGundubogula/pasword-genarator',
    color: 'from-amber-500 via-orange-500 to-red-500',
    emoji: '🔐',
  },
  {
    title: 'To-Do List',
    shortTitle: 'To-Do List',
    description: 'Task management app to add, delete, and track tasks with reminders.',
    abstract: 'A feature-rich task management web application enabling users to add, delete, and track tasks efficiently. Includes reminder functionality for productivity, with an intuitive user interface that makes daily task organization simple and effective. Built with core web technologies for a lightweight, fast experience.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/PadmanagasriGundubogula/to-do-list',
    color: 'from-rose-500 via-pink-500 to-fuchsia-500',
    emoji: '✅',
  },
  {
    title: 'Color Palette Generator',
    shortTitle: 'Color Palette',
    description: 'Generate beautiful color palettes for design projects instantly.',
    abstract: 'A creative color palette generator that helps designers and developers discover harmonious color combinations. Generate, customize, and export stunning color palettes with a visually appealing interface. Features include random palette generation, color locking, and easy copying of hex codes for seamless integration into design workflows.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/PadmanagasriGundubogula/color-palette-generator',
    color: 'from-pink-500 via-violet-500 to-indigo-500',
    emoji: '🎨',
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective cursor-pointer group"
      style={{ animationDelay: `${index * 0.1}s`, height: '420px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Front Side */}
        <div className="flip-card-front rounded-2xl bg-card shadow-soft hover:shadow-hover transition-shadow duration-300 overflow-hidden border border-border">
          {/* Gradient Header with emoji */}
          <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/10" />
            <span className="text-6xl relative z-10 drop-shadow-lg">{project.emoji}</span>
            {/* Flip hint */}
            <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <RotateCcw className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="p-6 flex flex-col" style={{ height: 'calc(420px - 128px)' }}>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono font-medium bg-secondary text-primary rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* View on GitHub Button */}
            <div className="pt-3 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.githubUrl, '_blank');
                }}
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="flip-card-back rounded-2xl bg-card shadow-hover overflow-hidden border border-primary/30">
          <div className={`h-16 bg-gradient-to-br ${project.color} flex items-center px-6`}>
            <h3 className="text-lg font-bold text-white">{project.shortTitle}</h3>
          </div>

          <div className="p-6 flex flex-col" style={{ height: 'calc(420px - 64px)' }}>
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Project Overview</p>
            <p className="text-sm text-muted-foreground leading-relaxed flex-grow overflow-y-auto">
              {project.abstract}
            </p>

            {/* Tech Stack on back */}
            <div className="flex flex-wrap gap-1.5 my-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-2 pt-3 border-t border-border">
              <Button
                variant="default"
                size="sm"
                className="gap-2 flex-1"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.githubUrl, '_blank');
                }}
              >
                <Github className="w-4 h-4" />
                View Git Repo
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="gap-1 text-xs text-muted-foreground"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
              >
                <RotateCcw className="w-3 h-3" />
                Flip
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-28 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-4">
            <Rocket className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Projects
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Click on any card to flip and read the project abstract. Each project links directly to its GitHub repository.
          </p>

          {/* Project Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
