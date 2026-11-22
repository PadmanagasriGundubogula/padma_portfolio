import { useState } from 'react';
import { Rocket, Github, RotateCcw, Sparkles, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Project {
  title: string;
  shortTitle: string;
  category: 'AI & NLP' | 'Automation' | 'Full Stack';
  description: string;
  abstract: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  linkLabel?: string;
  color: string;
  emoji: string;
  isFeatured?: boolean;
}

const projects: Project[] = [
  {
    title: 'LinkedIn AI Automation Post Generator (Make.com)',
    shortTitle: 'LinkedIn Post Automation',
    category: 'Automation',
    isFeatured: true,
    description: 'Autonomous LinkedIn content generation and scheduling workflow integrating Google Sheets, OpenAI, and Make.com.',
    abstract: 'A live Make.com production scenario that autonomously monitors Google Sheets for new content topics, leverages structured OpenAI prompt chains to draft engaging LinkedIn posts (complete with hook, body, emojis, and hashtags), validates copy quality, and schedules publication while archiving execution status back to Google Sheets.',
    techStack: ['Make.com', 'Google Sheets', 'OpenAI API', 'LinkedIn API', 'Webhooks', 'Automation'],
    githubUrl: 'https://eu1.make.com/public/shared-scenario/wbVhVynnbqw/integration-google-sheets',
    liveUrl: 'https://eu1.make.com/public/shared-scenario/wbVhVynnbqw/integration-google-sheets',
    linkLabel: 'View Make.com Scenario',
    color: 'from-indigo-50 via-violet-50 to-slate-50',
    emoji: '⚡',
  },
  {
    title: 'Recipe Generator (Agentic AI)',
    shortTitle: 'Recipe Generator',
    category: 'AI & NLP',
    isFeatured: true,
    description: 'AI-powered Agentic system generating structured cooking instructions from minimal user input.',
    abstract: 'An intelligent recipe generation platform that leverages Agentic AI and NLP to help users contribute traditional recipes. Developed during research at LTRC IIIT Hyderabad, the system generates grammatically correct, meaningful sentences from semantic structures. Built with a full-stack architecture using React frontend and Flask/MongoDB backend, with integrated speech processing and coreference resolution capabilities.',
    techStack: ['Python', 'NLP', 'Agentic AI', 'Flask', 'MongoDB', 'React'],
    githubUrl: 'https://github.com/PadmanagasriGundubogula/Recipe-generator',
    color: 'from-violet-50 via-indigo-50 to-slate-50',
    emoji: '🍳',
  },
  {
    title: 'Next-Gen RAG Knowledge Assistant',
    shortTitle: 'RAG Assistant',
    category: 'AI & NLP',
    isFeatured: true,
    description: 'Retrieval-Augmented Generation application for high-accuracy document Q&A with zero hallucinations.',
    abstract: 'An advanced RAG-based knowledge retrieval assistant engineered to process unstructured multi-source documentation. Implements semantic chunking, dense vector indexing, contextual reranking, and citation tracking. Enables users to ask natural language questions over research papers and documents with fully grounded, verifiable answers.',
    techStack: ['Python', 'RAG', 'Vector Embeddings', 'FastAPI', 'LangChain', 'React'],
    githubUrl: 'https://github.com/PadmanagasriGundubogula',
    color: 'from-slate-50 via-indigo-50 to-violet-50',
    emoji: '🧠',
  },
  {
    title: 'Speech to Text Converter',
    shortTitle: 'Speech to Text',
    category: 'AI & NLP',
    description: 'Converts spoken audio into accurate text with summarization and Q&A capabilities.',
    abstract: 'A Speech-to-Text system that converts spoken audio into accurate textual output with advanced post-processing. Features include text summarization of converted transcripts and an interactive Q&A module that allows users to ask questions about the transcribed content. Focused on improving transcription accuracy and real-time speech recognition for accessibility applications.',
    techStack: ['Python', 'NLP', 'Speech Recognition', 'AI'],
    githubUrl: 'https://github.com/PadmanagasriGundubogula/4-1-project-speech-to-text--TEAM-10',
    color: 'from-indigo-50 via-slate-50 to-purple-50',
    emoji: '🎤',
  },
  {
    title: 'NLP Digits Automated Speech',
    shortTitle: 'NLP Digital Speech',
    category: 'AI & NLP',
    description: 'NLP-based speech analytics platform for evaluating speech accuracy and fluency.',
    abstract: 'An NLP-based speech analytics platform that evaluates speech accuracy and fluency while providing insights into regional language usage. The system processes audio input to identify digits and patterns in automated speech, leveraging natural language processing techniques for accurate recognition and analysis of spoken numerical data.',
    techStack: ['Python', 'NLP', 'FastAPI', 'Speech Processing'],
    githubUrl: 'https://github.com/PadmanagasriGundubogula/NLP_Digits-Automated-speech',
    color: 'from-purple-50 via-indigo-50 to-slate-50',
    emoji: '🔢',
  },
  {
    title: 'Color Palette Generator',
    shortTitle: 'Color Palette',
    category: 'Full Stack',
    description: 'Generate harmonious color palettes for designers and developers instantly.',
    abstract: 'A creative color palette generator that helps designers and developers discover harmonious color combinations. Generate, customize, and export stunning color palettes with a visually appealing interface. Features include random palette generation, color locking, and easy copying of hex codes for seamless integration into design workflows.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/PadmanagasriGundubogula/color-palette-generator',
    color: 'from-slate-50 via-purple-50 to-indigo-50',
    emoji: '🎨',
  },
  {
    title: 'Password Generator',
    shortTitle: 'Password Generator',
    category: 'Full Stack',
    description: 'Secure password generator with customizable complexity options.',
    abstract: 'A robust password generator application that creates strong, secure passwords with customizable options. Users can specify length, include uppercase/lowercase letters, numbers, and special characters. Features a clean interface with instant password generation and copy-to-clipboard functionality for enhanced security and convenience.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/PadmanagasriGundubogula/pasword-genarator',
    color: 'from-indigo-50 via-slate-50 to-violet-50',
    emoji: '🔐',
  },
  {
    title: 'To-Do List',
    shortTitle: 'To-Do List',
    category: 'Full Stack',
    description: 'Task management app to add, delete, and track tasks with reminders.',
    abstract: 'A feature-rich task management web application enabling users to add, delete, and track tasks efficiently. Includes reminder functionality for productivity, with an intuitive user interface that makes daily task organization simple and effective. Built with core web technologies for a lightweight, fast experience.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/PadmanagasriGundubogula/to-do-list',
    color: 'from-violet-50 via-purple-50 to-slate-50',
    emoji: '✅',
  },
];

const categories = ['All', 'AI & NLP', 'Automation', 'Full Stack'] as const;

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective cursor-pointer group"
      style={{ animationDelay: `${index * 0.1}s`, height: '430px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Front Side */}
        <div className="flip-card-front rounded-2xl bg-card shadow-soft hover:shadow-card hover:border-primary/40 transition-all duration-300 overflow-hidden border border-border flex flex-col">
          {/* Subtle Minimalist Header */}
          <div className={`h-28 bg-gradient-to-br ${project.color} dark:from-secondary dark:to-card flex items-center justify-center relative overflow-hidden border-b border-border/60 shrink-0`}>
            <div className="w-14 h-14 rounded-2xl bg-card/90 border border-border/80 shadow-xs flex items-center justify-center backdrop-blur-sm">
              <span className="text-3xl">{project.emoji}</span>
            </div>
            
            {/* Category tag */}
            <div className="absolute top-3 left-3 bg-card/90 border border-border backdrop-blur-sm rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-foreground shadow-xs flex items-center gap-1">
              {project.isFeatured && <Sparkles className="w-3 h-3 text-primary" />}
              <span>{project.category}</span>
            </div>

            {/* Flip hint */}
            <div className="absolute top-3 right-3 bg-card/90 border border-border backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xs">
              <RotateCcw className="w-3.5 h-3.5 text-muted-foreground" />
            </div>
          </div>

          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-xs md:text-sm mb-4 leading-relaxed flex-grow line-clamp-3">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[11px] font-mono font-medium bg-secondary text-foreground rounded-full border border-border"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-2 py-0.5 text-[11px] font-mono font-medium bg-primary/10 text-primary rounded-full">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>

            {/* Action Button */}
            <div className="pt-3 border-t border-border mt-auto">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 w-full hover:bg-primary hover:text-primary-foreground border-border hover:border-primary transition-all duration-300 font-medium text-xs md:text-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveUrl || project.githubUrl, '_blank');
                }}
              >
                {project.liveUrl ? (
                  <>
                    <ExternalLink className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                    <span>View Make.com Scenario</span>
                  </>
                ) : (
                  <>
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="flip-card-back rounded-2xl bg-card shadow-card overflow-hidden border border-primary/30 flex flex-col">
          <div className="h-14 bg-secondary/80 flex items-center justify-between px-6 border-b border-border shrink-0">
            <h3 className="text-sm font-bold text-foreground line-clamp-1">{project.shortTitle}</h3>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-card border border-border text-foreground">
              {project.category}
            </span>
          </div>

          <div className="p-6 flex flex-col flex-1">
            <p className="text-[11px] font-semibold text-primary uppercase tracking-wider mb-2">Project Architecture & Details</p>
            <p className="text-xs text-muted-foreground leading-relaxed flex-grow overflow-y-auto pr-1">
              {project.abstract}
            </p>

            {/* Tech Stack on back */}
            <div className="flex flex-wrap gap-1 my-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] font-mono bg-secondary text-foreground font-medium rounded border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-2 pt-3 border-t border-border mt-auto">
              <Button
                variant="default"
                size="sm"
                className="gap-2 flex-1 text-xs"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveUrl || project.githubUrl, '_blank');
                }}
              >
                {project.liveUrl ? (
                  <>
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Scenario</span>
                  </>
                ) : (
                  <>
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repo</span>
                  </>
                )}
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
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 px-4 bg-gradient-to-b from-secondary/40 via-background to-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-4">
            <Rocket className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured Projects
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            A curated collection of research-driven Agentic AI systems, enterprise RAG applications, Make.com workflow automations, and full-stack software.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-xs'
                    : 'bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
