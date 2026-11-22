import { User, Mic, Code, Lightbulb, Zap, GraduationCap } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Research Fellowship (IIIT-H)',
    description: 'Funded researcher (₹15,000/mo) at LTRC under Prof. Soma Paul, building Agentic AI & RAG systems.',
  },
  {
    icon: Zap,
    title: 'AI Automation & Agents',
    description: 'Expertise in Make.com automation workflows, OpenAI API prompt chaining, and autonomous pipelines.',
  },
  {
    icon: Code,
    title: 'Full Stack Engineering',
    description: 'Strong foundation in Python, FastAPI, Flask, React, and MongoDB for scalable production tools.',
  },
  {
    icon: Mic,
    title: 'Executive Communication',
    description: 'Toastmasters member with 5-level Presentation Mastery completed. Experienced in technical talks.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-4">
            <User className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              About Me
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Passionate about transforming cutting-edge computational linguistics and AI research into real-world, automated applications.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-semibold">Computer Science undergraduate</span> and{' '}
                <span className="text-primary font-semibold">Research Developer</span> currently working at the{' '}
                <span className="text-foreground font-semibold">Language Technologies Research Centre (LTRC), IIIT Hyderabad</span>{' '}
                under the mentorship of <span className="text-foreground font-semibold">Prof. Soma Paul</span>.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                My primary research centers on <span className="text-foreground font-semibold">Agentic AI systems</span>,{' '}
                <span className="text-foreground font-semibold">Recipe Generation</span>, and{' '}
                <span className="text-foreground font-semibold">Next-Gen RAG (Retrieval-Augmented Generation)</span> architectures that minimize hallucinations and ensure accurate semantic grounding.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Beyond core NLP, I build end-to-end applications and <span className="text-foreground font-semibold">AI automation pipelines on Make.com</span> (such as automated content and post generation systems). I am proficient in <span className="text-foreground font-semibold">Python, FastAPI, Flask, React, and MongoDB</span>.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I am also a proud <span className="text-foreground font-semibold">Toastmasters International</span> achiever who has completed all 5 levels of the <span className="text-foreground font-semibold">Presentation Mastery Path</span>, combining rigorous research depth with exceptional presentation and leadership skills.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="group p-5 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                      <item.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
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
