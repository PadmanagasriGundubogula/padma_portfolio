import { Code2, Database, Globe, Brain, FileCode2, Sparkles, Workflow } from 'lucide-react';

const technologies = [
  { name: 'Python', icon: Code2 },
  { name: 'NLP & NLG', icon: Brain },
  { name: 'RAG & LLMs', icon: Sparkles },
  { name: 'Make.com', icon: Workflow },
  { name: 'FastAPI', icon: FileCode2 },
  { name: 'React', icon: Globe },
  { name: 'MongoDB', icon: Database },
  { name: 'Flask', icon: FileCode2 },
];

const TechStack = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-xs md:text-sm text-muted-foreground mb-4 font-mono tracking-wider uppercase">Key Technologies & Frameworks</p>
      <div className="flex flex-wrap justify-center gap-3 md:gap-5">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="group flex flex-col items-center gap-2 p-3.5 md:p-4 rounded-xl bg-card border border-border shadow-soft hover:shadow-card hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 min-w-[85px] md:min-w-[95px]"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <tech.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            </div>
            <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
