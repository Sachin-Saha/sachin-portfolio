import { useEffect, useRef } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolio';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        }
      });

      // Content animation with stagger
      gsap.from(contentRef.current?.children, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
      description: "Send me an email"
    },
    {
      icon: Phone,
      label: "Phone",
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone}`,
      description: "Give me a call"
    },
    {
      icon: MapPin,
      label: "Location",
      value: portfolioData.personal.location,
      href: "#",
      description: "Based in"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: portfolioData.social.github,
      description: "View my repositories"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: portfolioData.social.linkedin,
      description: "Connect professionally"
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      href: portfolioData.social.portfolio,
      description: "Visit my website"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate? Let's discuss your next project or opportunity
            </p>
          </div>

          <div ref={contentRef} className="space-y-8">
            {/* Call to Action */}
            <Card className="card-shadow border-0 bg-card text-center p-8">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">
                  Let's Build Something Amazing Together
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and development. Whether you have 
                  a project in mind or want to collaborate, I'd love to hear from you.
                </p>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  asChild
                >
                  <a href={`mailto:${portfolioData.personal.email}`}>
                    <Mail className="w-5 h-5 mr-2" />
                    Start a Conversation
                  </a>
                </Button>
              </div>
            </Card>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((contact, index) => (
                <Card 
                  key={contact.label}
                  className="card-shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-card"
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                      <contact.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{contact.label}</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {contact.description}
                    </p>
                    {contact.href !== "#" ? (
                      <a 
                        href={contact.href}
                        className="text-primary hover:text-primary-dark font-medium transition-colors break-all"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <span className="text-foreground font-medium">
                        {contact.value}
                      </span>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="card-shadow border-0 bg-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-center mb-8">
                  Find Me Online
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <social.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold group-hover:text-primary transition-colors">
                            {social.label}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {social.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="card-shadow border-0 bg-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Available for new opportunities</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    •
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Response time: 24 hours
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;