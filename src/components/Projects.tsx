import { useEffect, useRef } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { portfolioData } from '@/data/portfolio';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

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

      // Projects animation with stagger
      gsap.from(projectsRef.current?.children, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const featuredProject = portfolioData.projects.find(project => project.featured);
  const otherProjects = portfolioData.projects.filter(project => !project.featured);

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and technical capabilities
            </p>
          </div>

          <div ref={projectsRef} className="space-y-12">
            {/* Featured Project */}
            {featuredProject && (
              <Card className="card-shadow border-0 overflow-hidden bg-card">
                <div className="grid lg:grid-cols-2">
                  {/* Project Image */}
                  <div className="relative">
                    <img 
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-64 lg:h-full object-fill"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-accent-foreground font-medium">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {featuredProject.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl font-bold mb-3">
                        {featuredProject.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {featuredProject.longDescription}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0">
                      {/* Tech Stack */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold mb-3 text-muted-foreground">
                          TECH STACK
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {featuredProject.tech.map((tech) => (
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

                      {/* Key Features */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold mb-3 text-muted-foreground">
                          KEY FEATURES
                        </h4>
                        <ul className="space-y-2">
                          {featuredProject.features.slice(0, 4).map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <Button asChild className="flex-1">
                          <a 
                            href={featuredProject.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button variant="outline" asChild className="flex-1">
                          <a 
                            href={featuredProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Source Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            )}

            {/* Other Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project) => (
                <Card 
                  key={project.id}
                  className="card-shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-card"
                >
                  <div className="relative">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl font-bold">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 4).map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.tech.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button size="sm" asChild className="flex-1">
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-3 h-3 mr-2" />
                          Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-3 h-3 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
