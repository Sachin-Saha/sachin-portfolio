import { useEffect, useRef } from 'react';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolio';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline for hero animations
      const tl = gsap.timeline();

      // Animate title with stagger effect
      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
      .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5")
      .from(bioRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.3")
      .from(buttonsRef.current?.children, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.2");

      // Floating animation for the hero section
      gsap.to(heroRef.current, {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div ref={heroRef}>
            {/* Main heading */}
            <h1 
              ref={titleRef}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="gradient-text">
                {portfolioData.personal.name}
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-medium"
            >
              {portfolioData.personal.title}
            </p>

            {/* Bio */}
            <p 
              ref={bioRef}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              {portfolioData.personal.bio}
            </p>

            {/* CTA Buttons */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                View My Work
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
              >
                Get In Touch
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToProjects}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label="Scroll to projects"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;