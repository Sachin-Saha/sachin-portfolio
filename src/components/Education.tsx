import { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { portfolioData } from '@/data/portfolio';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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

      // Card animation
      gsap.from(cardRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const education = portfolioData.education[0]; // Primary education

  return (
    <section id="education" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic foundation and continuous learning journey
            </p>
          </div>

          {/* Education Card */}
          <div ref={cardRef}>
            <Card className="card-shadow border-0 bg-card overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 border-b border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold mb-2">
                      {education.degree}
                    </CardTitle>
                    <p className="text-lg font-semibold text-muted-foreground mb-4">
                      {education.institution}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{education.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{education.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Award className="w-4 h-4" />
                        <span>GPA: {education.gpa}</span>
                      </div>
                    </div>
                  </div>

                  <Badge 
                    className="bg-accent text-accent-foreground font-medium"
                  >
                    {education.status}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Relevant Courses */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">
                    Relevant Coursework
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {education.relevant_courses.map((course, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                        <span className="text-sm font-medium">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4 text-center">
                    Academic Highlights
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold gradient-text mb-1">
                        8.2/10
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Current GPA
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold gradient-text mb-1">
                        2026
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Graduation Year
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold gradient-text mb-1">
                        CSE
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Specialization
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current Status */}
                <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <div>
                      <p className="font-medium text-primary">Currently Pursuing</p>
                      <p className="text-sm text-muted-foreground">
                        Final year student graduating in May 2026
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Learning */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-6">
              Continuous <span className="gradient-text">Learning</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Web Development Bootcamp",
                "React.js Advanced Patterns",
                "Node.js Best Practices",
                "Database Design & Optimization",
                "Git & Version Control"
              ].map((course, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="text-xs px-3 py-1"
                >
                  {course}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;