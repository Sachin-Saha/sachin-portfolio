import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { portfolioData } from '@/data/portfolio';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  gradient: string;
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      // Cards animation with stagger
      gsap.from(cardsRef.current?.children, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: portfolioData.skills.frontend,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Backend Development", 
      skills: portfolioData.skills.backend,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Tools & Technologies",
      skills: portfolioData.skills.tools,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-500/20 text-green-700 dark:text-green-300';
      case 'Advanced':
        return 'bg-blue-500/20 text-blue-700 dark:text-blue-300';
      case 'Intermediate':
        return 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-300';
      case 'Basic':
        return 'bg-gray-500/20 text-gray-700 dark:text-gray-300';
      default:
        return 'bg-gray-500/20 text-gray-700 dark:text-gray-300';
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category: SkillCategory, categoryIndex: number) => (
              <Card key={category.title} className="bg-transparent">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 bg-white dark:bg-transparent rounded-b-lg">
                  {category.skills.map((skill: Skill, skillIndex: number) => (
                    <div 
                      key={skill.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl" role="img" aria-label={skill.name}>
                          {skill.icon}
                        </span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      
                      <Badge 
                        variant="secondary"
                        className={`${getLevelColor(skill.level)} border-0 font-medium`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Projects" },
              { number: "2+", label: "Years Experience" },
              { number: "15+", label: "Technologies" },
              { number: "100%", label: "Dedication" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;