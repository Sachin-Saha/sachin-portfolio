import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <h3 className="font-bold text-xl gradient-text mb-4">
                Sachin.dev
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                MERN Stack Developer passionate about creating innovative web solutions 
                and bringing ideas to life through clean, efficient code.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                {[
                  { label: 'Home', href: '#home' },
                  { label: 'Skills', href: '#skills' },
                  { label: 'Projects', href: '#projects' },
                  { label: 'Experience', href: '#experience' },
                  { label: 'Contact', href: '#contact' }
                ].map((link) => (
                  <button
                    key={link.label}
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <a 
                  href={`mailto:${portfolioData.personal.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {portfolioData.personal.email}
                </a>
                <p className="text-sm text-muted-foreground">
                  {portfolioData.personal.location}
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground m-auto">
                © {currentYear} Sachin S. Saha. All rights reserved.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;