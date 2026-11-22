import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/PadmanagasriGundubogula', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/padmanagasri-gundubogula/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:padmanagasrigundubogula@gmail.com', label: 'Email' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <span className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold shadow-xs">
                  P
                </span>
                <p className="text-lg font-bold text-foreground">
                  <span className="gradient-text">Padma Nagasri G.</span>
                </p>
              </div>
              <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1.5">
                <span>Designed & Built by</span>
                <span className="font-semibold text-foreground">Padma Nagasri</span>
                <span>© {currentYear}</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 pt-8 border-t border-border flex flex-wrap justify-center gap-6 text-sm">
            {['Home', 'About', 'Experience', 'Projects', 'Activities', 'Certificates', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
