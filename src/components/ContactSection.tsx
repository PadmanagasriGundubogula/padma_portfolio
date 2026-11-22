import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'padmanagasrigundubogula@gmail.com',
    href: 'mailto:padmanagasrigundubogula@gmail.com',
    canCopy: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/padmanagasri-gundubogula',
    href: 'https://www.linkedin.com/in/padmanagasri-gundubogula/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/PadmanagasriGundubogula',
    href: 'https://github.com/PadmanagasriGundubogula',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9515377149',
    href: 'tel:+919515377149',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Hyderabad, India',
    href: '#',
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('padmanagasrigundubogula@gmail.com');
    setCopied(true);
    toast({
      title: 'Email Copied!',
      description: 'padmanagasrigundubogula@gmail.com copied to clipboard.',
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:padmanagasrigundubogula@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: 'Email client opened!',
      description: 'Please send the email from your application.',
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-4">
            <Mail className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Get In Touch
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Whether you have a research inquiry, full-time/internship opportunity, or want to discuss AI automation and NLP — I'd love to connect!
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-6">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Currently open to <strong className="text-foreground">Research Engineering, AI/NLP Developer, and Software Engineering</strong> opportunities. Reach out via email or connect on LinkedIn directly.
              </p>

              <div className="space-y-3">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="group flex items-center justify-between p-4 rounded-xl bg-card border border-border shadow-soft hover:shadow-card hover:border-primary/40 transition-all duration-300"
                  >
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 flex-1 min-w-0"
                    >
                      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-muted-foreground font-medium">{info.label}</p>
                        <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors truncate">
                          {info.value}
                        </p>
                      </div>
                    </a>

                    {info.canCopy && (
                      <button
                        onClick={handleCopyEmail}
                        className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                        title="Copy Email"
                        aria-label="Copy Email"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-6 md:p-8 rounded-2xl bg-card border border-border shadow-card">
              <h3 className="text-xl font-bold text-foreground mb-2">Send a Message</h3>
              <p className="text-xs text-muted-foreground mb-6">Fill in your details and I will get back to you promptly.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="e.g. Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-border focus-visible:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane.doe@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border focus-visible:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Let's collaborate on an AI or engineering project..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-background border-border focus-visible:ring-primary resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2 shadow-soft hover:shadow-hover" disabled={isSubmitting}>
                  {isSubmitting ? (
                    'Opening Email...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
