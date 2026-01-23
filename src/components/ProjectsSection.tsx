import { Rocket, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Recipe Generator (Agentic AI)',
    description: 'An AI-powered system that generates structured cooking instructions from minimal user input. Designed to help users contribute traditional recipes using grammatically correct and meaningful sentences.',
    features: ['Agentic AI', 'Grammar Correction', 'Meaningful sentence generation', 'Full-stack integration'],
    techStack: ['Python', 'NLP', 'Flask', 'MongoDB', 'React'],
    color: 'from-primary to-accent',
  },
  {
    title: 'Speech to Text Converter',
    description: 'Developed a Speech-to-Text system that converts spoken audio into accurate textual output. Focused on improving transcription accuracy and real-time speech recognition for accessibility.',
    features: ['Speech Recognition', 'Accuracy Improvement', 'Accessibility-focused', 'Real-time conversion'],
    techStack: ['Python', 'NLP', 'Speech Recognition'],
    color: 'from-accent to-primary',
  },
  {
    title: 'Data Dialect',
    description: 'An NLP-based speech analytics platform that evaluates speech accuracy and fluency while providing insights into regional language usage.',
    features: ['Speech Analytics', 'Fluency Evaluation', 'Regional insights', 'High performance'],
    techStack: ['Python', 'NLP', 'FastAPI'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Mental Health AI',
    description: 'An AI tool that analyzes speech patterns such as tone and pitch to assess emotional states and support early mental health insights.',
    features: ['Tone Analysis', 'Emotion Assessment', 'Mental Health Support', 'Acoustic Processing'],
    techStack: ['Python', 'NLP', 'Speech Recognition'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'To-Do List',
    description: 'A task management web application enabling users to add, delete, and track tasks with reminders for productivity.',
    features: ['Task Management', 'Reminders', 'Productivity tool', 'Simple UI'],
    techStack: ['HTML', 'CSS', 'Java'],
    color: 'from-rose-500 to-orange-500',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-28 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <Rocket className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Projects
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative rounded-2xl bg-card shadow-soft hover:shadow-hover transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground mb-2">Key Features</p>
                    <ul className="space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-xs text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono bg-secondary text-primary rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 text-muted-foreground hover:text-primary"
                      onClick={() => window.open('https://github.com/PadmanagasriGundubogula?tab=repositories', '_blank')}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
