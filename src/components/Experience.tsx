import { useEffect, useRef } from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { portfolioData } from '@/data/portfolio';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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

      // Timeline animation
      gsap.from(timelineRef.current?.children, {
        x: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and contributions to the tech industry
            </p>
          </div>

          {/* Experience Timeline */}
          <div ref={timelineRef} className="space-y-8">
            {portfolioData.experience.map((experience, index) => (
              <div key={experience.id} className="relative">
                {/* Timeline line */}
                {index !== portfolioData.experience.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-full bg-border -z-10"></div>
                )}
                
                <Card className="card-shadow border-0 bg-card ml-12">
                  {/* Timeline dot */}
                  <div className="absolute -left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-2">
                      <CardTitle className="text-xl font-bold">
                        {experience.role}
                      </CardTitle>
                      <Badge 
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 w-fit"
                      >
                        {experience.type}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Key Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-4 text-muted-foreground">
                        KEY RESPONSIBILITIES
                      </h4>
                      <ul className="space-y-3">
                        {experience.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Used */}
                    <div>
                      <h4 className="text-sm font-semibold mb-3 text-muted-foreground">
                        TECHNOLOGIES USED
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Key <span className="gradient-text">Achievements</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {portfolioData.achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border"
                >
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                  <span className="text-sm leading-relaxed">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;