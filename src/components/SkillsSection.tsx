
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, Terminal, GitBranch, Database, Cloud, Code } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Code className="h-6 w-6" />,
      skills: ["Node.js", "Python", "RESTful APIs", "AdonisJS", "FastAPI", "TypeScript", "Postman API", "API Cache", "API Rate Limiting", "RabbitMQ"]
    },
    {
      title: "DevOps",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["CI/CD", "Git", "Bitbucket Pipeline", "Docker", "Terraform", "Infrastructure as Code"]
    },
    {
      title: "Cloud Technologies",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["GCP", "Compute Engine", "Cloud Run", "Cloud Build", "Cloud Trigger", "Cloud Storage", "Secret Manager", "Cloud Pub/Sub", "Cloud BigQuery"]
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["SQL", "PostgreSQL", "MySQL", "Redis", "ClickHouse","Data Modeling", "Query Optimization"]
    },
    {
      title: "Server Management",
      icon: <Server className="h-6 w-6" />,
      skills: ["Linux", "Nginx", "Load Balancing", "Monitoring", "Logging", "Troubleshooting", "Performance Tuning", "PM2 Process Manager"]
    },
    {
      title: "Scripting & Automation",
      icon: <Terminal className="h-6 w-6" />,
      skills: ["Bash", "Automation", "Cron Jobs", "Task Scheduling", "Process Monitoring", "n8n Workflow"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Technical Skills</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My technical toolkit encompasses a range of backend development and DevOps technologies
            that I've honed over my professional experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="bg-secondary/50 flex flex-row items-center gap-2">
                {category.icon}
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
