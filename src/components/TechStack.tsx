import { Code2, Database, Globe, Smartphone, Brain, FileCode2 } from 'lucide-react';

const technologies = [
  { name: 'Python', icon: Code2 },
  { name: 'NLP', icon: Brain },
  { name: 'FastAPI', icon: FileCode2 },
  { name: 'MongoDB', icon: Database },
  { name: 'React', icon: Globe },
  { name: 'Flask', icon: FileCode2 },
];

const TechStack = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-sm text-muted-foreground mb-6 font-mono">Tech Stack</p>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-card shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <tech.icon className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
