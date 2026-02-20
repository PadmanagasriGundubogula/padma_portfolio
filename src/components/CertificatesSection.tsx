import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: 'UI/UX Development',
    issuer: 'NXTWAVE',
    category: 'Design',
    icon: '🎨',
    link: './certificates/uiux certificate.jpg',
  },
  {
    title: 'Generative AI Virtual Internship',
    issuer: 'Eduskills / Google Cloud',
    category: 'AI / GenAI',
    icon: '🤖',
    link: './certificates/Genarative ai internship certificate EDU.pdf',
  },
  {
    title: 'Foundations of Machine Learning',
    issuer: 'IIIT RCTS / iHUB-data',
    category: 'AI / ML',
    icon: '📊',
    link: './certificates/FMML  CERTIFICATTE.png',
  },
  {
    title: 'Presentation Mastery (5 Levels)',
    issuer: 'Toastmasters International',
    category: 'Soft Skills',
    icon: '🎤',
    link: './certificates/l5 presentation mastery.pdf',
  },
  {
    title: 'Python Programming',
    issuer: 'Udemy',
    category: 'Programming',
    icon: '🐍',
    link: './certificates/python certificate.pdf',
  },
  {
    title: 'Research Internship Certificate',
    issuer: 'LTRC Lab, IIIT Hyderabad',
    category: 'Research',
    icon: '🔬',
    link: './certificates/LTRC Participation certificate .pdf',
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 md:py-28 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <Award className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Certificates
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Certificates Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, index) => (
              <div
                key={cert.title}
                className="group p-5 rounded-xl bg-card shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => cert.link && window.open(cert.link, '_blank')}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{cert.icon}</span>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                      {cert.category}
                    </span>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                  {cert.link && <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
