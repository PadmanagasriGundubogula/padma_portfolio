import { useState } from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  category: 'Research & AI' | 'Development' | 'Leadership';
  icon: string;
  link: string;
  verified?: boolean;
}

const certificates: Certificate[] = [
  {
    title: 'Research Internship Certificate',
    issuer: 'LTRC Lab, IIIT Hyderabad',
    category: 'Research & AI',
    icon: '🔬',
    link: './certificates/LTRC Participation certificate .pdf',
    verified: true,
  },
  {
    title: 'Generative AI Virtual Internship',
    issuer: 'Eduskills / Google Cloud',
    category: 'Research & AI',
    icon: '🤖',
    link: './certificates/Genarative ai internship certificate EDU.pdf',
    verified: true,
  },
  {
    title: 'Foundations of Machine Learning',
    issuer: 'IIIT RCTS / iHUB-Data',
    category: 'Research & AI',
    icon: '📊',
    link: './certificates/FMML  CERTIFICATTE.png',
    verified: true,
  },
  {
    title: 'Data Science, AI & ML Certification',
    issuer: 'Industry Recognized Program',
    category: 'Research & AI',
    icon: '🧠',
    link: './certificates/Intro to Data Science, AI & ML-Padma Nagasri Gundubogula.pdf',
    verified: true,
  },
  {
    title: 'Swecha AI Internship',
    issuer: 'Swecha / IIIT-H Collaborative',
    category: 'Research & AI',
    icon: '⚡',
    link: './certificates/swecha AI internship.pdf',
    verified: true,
  },
  {
    title: 'Presentation Mastery (All 5 Levels)',
    issuer: 'Toastmasters International',
    category: 'Leadership',
    icon: '🎤',
    link: './certificates/l5 presentation mastery.pdf',
    verified: true,
  },
  {
    title: 'UI/UX Development',
    issuer: 'NxtWave CCBP 4.0',
    category: 'Development',
    icon: '🎨',
    link: './certificates/uiux certificate.jpg',
    verified: true,
  },
  {
    title: 'Python Programming',
    issuer: 'Udemy',
    category: 'Development',
    icon: '🐍',
    link: './certificates/python certificate.pdf',
    verified: true,
  },
  {
    title: 'SQL Fundamentals & Database Design',
    issuer: 'NxtWave CCBP 4.0',
    category: 'Development',
    icon: '🗄️',
    link: './certificates/sql_certificate.pdf',
    verified: true,
  },
];

const categories = ['All', 'Research & AI', 'Development', 'Leadership'] as const;

const CertificatesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredCerts = selectedCategory === 'All'
    ? certificates
    : certificates.filter((c) => c.category === selectedCategory);

  return (
    <section id="certificates" className="py-20 md:py-28 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-4">
            <Award className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Certificates & Credentials
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Verified credentials in artificial intelligence, machine learning research, software engineering, and executive communication.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-soft scale-105'
                    : 'bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Certificates Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCerts.map((cert) => (
              <div
                key={cert.title}
                className="group p-5 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
                onClick={() => cert.link && window.open(cert.link, '_blank')}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{cert.icon}</span>
                    <div className="flex items-center gap-1.5">
                      {cert.verified && (
                        <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                          <CheckCircle className="w-3 h-3 text-emerald-600" />
                          Verified
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 text-[11px] font-semibold bg-primary/10 text-primary-foreground/90 rounded-full mb-2 border border-primary/20">
                    {cert.category}
                  </span>
                  
                  <h3 className="font-bold text-foreground text-base mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{cert.issuer}</p>
                </div>

                <div className="pt-3 mt-4 border-t border-border/80 flex items-center justify-between text-xs font-medium text-primary">
                  <span>View Credential</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
