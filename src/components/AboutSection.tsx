import { User, Mic, Code, Lightbulb } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'Strong foundation in backend development, NLP pipelines, and semantic validation tools.',
  },
  {
    icon: Lightbulb,
    title: 'Research Focus',
    description: 'Passionate about NLP, Semantic Analysis, and AI-powered applications that solve real problems.',
  },
  {
    icon: Mic,
    title: 'Communication',
    description: 'Toastmasters member with Presentation Mastery Path completed. Strong public speaking skills.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <User className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              About Me
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-medium">Computer Science undergraduate</span> with strong hands-on experience in
                <span className="text-primary font-medium"> Full Stack Development</span>, NLP, and Natural Language Generation (NLG).
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Proficient in <span className="text-foreground font-medium">Python, FastAPI, Flask, MongoDB, and React</span>,
                I have a research-oriented mindset gained through internships at IIIT Hyderabad labs.
                I specialize in building intelligent, language-driven applications and scalable backend systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm also an active <span className="text-foreground font-medium">Toastmasters member</span> who
                has completed the Presentation Mastery Path, ensuring I can bridge the gap between complex
                technical research and clear, effective communication.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="group p-6 rounded-2xl card-gradient border border-border shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1.5">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
