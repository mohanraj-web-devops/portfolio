
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Microservice Architecture API",
      description: "Designed and implemented a scalable microservice architecture for a Tenant Monthly Bill Generation platform using Node.js, AdonisJS, and PostgreSQL with Docker containerization.",
      tags: ["Node.js", "AdonisJS", "PostgreSQL", "Docker", "Microservices"],
      github: "https://github.com/mohanraj-web-devops/tmbg-api-server",
      liveDemo: "#",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=300"
    },
    // {
    //   title: "CI/CD Pipeline Automation",
    //   description: "Built a comprehensive CI/CD pipeline using GitHub Actions and AWS services to automate testing, building, and deployment for a SaaS application.",
    //   tags: ["GitHub Actions", "AWS", "CI/CD", "Terraform", "Docker"],
    //   github: "#",
    //   liveDemo: "#",
    //   image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=300"
    // },
    // {
    //   title: "Kubernetes Cluster Management",
    //   description: "Set up and managed a Kubernetes cluster for a multi-tenant application, implementing autoscaling, monitoring, and security best practices.",
    //   tags: ["Kubernetes", "Docker", "Prometheus", "Grafana", "Helm"],
    //   github: "#",
    //   liveDemo: "#",
    //   image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&h=300"
    // },
    // {
    //   title: "Distributed Cache System",
    //   description: "Implemented a distributed caching system using Redis to improve performance of a data-intensive application by reducing database load and response times.",
    //   tags: ["Redis", "Node.js", "Performance", "Distributed Systems"],
    //   github: "#",
    //   liveDemo: "#",
    //   image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=300"
    // }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of my recent backend and DevOps projects that showcase my technical expertise and problem-solving skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all animate-fade-in flex flex-col" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="h-40 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
