import { Briefcase, Calendar, GraduationCap, Award, CheckCircle2 } from 'lucide-react';

interface Experience {
  title: string;
  organization: string;
  mentor?: string;
  stipend?: string;
  period: string;
  badge?: string;
  highlights: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: 'Research Developer Intern',
    organization: 'Language Technologies Research Centre (LTRC), IIIT Hyderabad',
    mentor: 'Prof. Soma Paul (Head, LTRC Lab)',
    stipend: '₹15,000 / month (Funded Research Fellowship)',
    period: 'Sept - Present (6+ Months)',
    badge: 'Current Research',
    highlights: [
      'Conducting funded NLP research under the mentorship of Prof. Soma Paul on Agentic AI, NLG, and Semantic Processing.',
      'Developed an intelligent Recipe Generation system generating grammatically correct, semantic step-by-step instructions from minimal user input.',
      'Architected Next-Generation RAG-based (Retrieval-Augmented Generation) applications with dense semantic retrieval, context grounding, and hallucination reduction.',
      'Engineered scalable backend REST APIs using FastAPI & Flask with MongoDB, coupled with modern interactive React interfaces.',
    ],
    skills: ['NLP', 'NLG', 'RAG Systems', 'Agentic AI', 'FastAPI', 'Flask', 'React', 'MongoDB', 'Python'],
  },
  {
    title: 'Research Developer Intern',
    organization: 'IIIT Hyderabad',
    period: '3 Months',
    highlights: [
      'Worked on NLP research initiatives involving semantic annotation, sentence parsing, and grammatical structure verification.',
      'Integrated speech-to-text processing pipelines with downstream NLP evaluation engines for automated language assessment.',
    ],
    skills: ['NLP', 'Semantic Annotation', 'Sentence Generation', 'Speech Processing', 'Python'],
  },
  {
    title: 'Junior Developer Intern',
    organization: 'RCTS Lab, IIIT Hyderabad',
    period: '8 Months',
    highlights: [
      'Engineered full-stack web platforms using React and Flask with responsive, intuitive UI/UX design.',
      'Optimized backend API response latencies and integrated automated speech analytics for regional language processing.',
    ],
    skills: ['React', 'Flask', 'UI/UX Design', 'API Optimization', 'Speech Analytics'],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-28 px-4 bg-gradient-to-b from-secondary/30 via-background to-secondary/20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-4">
            <Briefcase className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Experience
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Hands-on research and engineering experience at premier research labs in IIIT Hyderabad, specializing in NLP, RAG systems, and full-stack development.
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title + exp.organization}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-auto md:right-0 top-3 w-3.5 h-3.5 rounded-full bg-primary border-2 border-background shadow-sm md:translate-x-1.5 md:-right-1.5" />
                {index % 2 !== 0 && (
                  <div className="hidden md:block absolute left-0 top-3 w-3.5 h-3.5 rounded-full bg-primary border-2 border-background shadow-sm -translate-x-1.5" />
                )}

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-all duration-300 text-left ${
                  index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'
                }`}>
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <div className="flex items-center gap-1.5 text-xs text-primary font-mono bg-primary/10 px-2.5 py-1 rounded-full">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    {exp.badge && (
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  
                  {/* Title & Org */}
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-2">{exp.organization}</p>

                  {/* Mentor & Stipend Highlights */}
                  {(exp.mentor || exp.stipend) && (
                    <div className="mb-4 space-y-1.5 p-3 rounded-xl bg-secondary/60 border border-border/80 text-xs">
                      {exp.mentor && (
                        <div className="flex items-center gap-2 text-foreground font-medium">
                          <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                          <span>Mentorship: <strong className="text-foreground">{exp.mentor}</strong></span>
                        </div>
                      )}
                      {exp.stipend && (
                        <div className="flex items-center gap-2 text-emerald-800 font-medium">
                          <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Stipend: <strong className="text-emerald-900">{exp.stipend}</strong></span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 text-xs font-mono font-medium bg-secondary text-foreground rounded-full border border-border"
                      >
                        {skill}
                      </span>
                    ))}
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

export default ExperienceSection;
