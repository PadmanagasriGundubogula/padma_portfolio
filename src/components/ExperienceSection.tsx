import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Research Developer Intern',
    organization: 'LTRC Lab, IIIT Hyderabad',
    period: 'Sept - Present (6 Months)',
    description: 'Working on Full Stack development and NLP/NLG-based research systems. Contributing to language technology tools involving semantic processing, sentence generation, and backend API development.',
    skills: ['Full Stack', 'NLP', 'NLG', 'Semantic Processing', 'API Development'],
  },
  {
    title: 'Research Developer Intern',
    organization: 'IIIT Hyderabad',
    period: '3 Months',
    description: 'Worked on NLP research projects involving semantic annotation and sentence generation. Contributed to AI systems integrating speech and text processing pipelines.',
    skills: ['NLP', 'Semantic Annotation', 'Sentence Generation', 'AI Systems'],
  },
  {
    title: 'Junior Developer Intern',
    organization: 'RCTS, IIIT Hyderabad',
    period: '8 Months',
    description: 'Developed full-stack web applications using React and Flask. Improved UI/UX, optimized backend APIs, and integrated NLP-based speech analytics for efficient data processing.',
    skills: ['React', 'Flask', 'UI/UX', 'API Optimization', 'Speech Analytics'],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-28 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Experience
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-auto md:right-0 top-2 w-3 h-3 rounded-full bg-primary md:translate-x-1.5 md:-right-1.5" />
                {index % 2 !== 0 && (
                  <div className="hidden md:block absolute left-0 top-2 w-3 h-3 rounded-full bg-primary -translate-x-1.5" />
                )}

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 p-6 rounded-xl bg-card shadow-soft hover:shadow-card transition-all duration-300 ${
                  index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'
                }`}>
                  <div className={`flex items-center gap-2 text-sm text-primary mb-2 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    <Calendar className="w-4 h-4" />
                    <span className="font-mono">{exp.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium mb-3">{exp.organization}</p>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <div className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
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
