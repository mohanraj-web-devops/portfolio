
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Power of N Techstudio Pvt. Ltd.",
      period: "December 2024 - Present",
      location: "India, Tamilnadu, Chennai",
      description: [
        "Designed and developed RESTful APIs using Node.js and AdonisJS for a SaaS platform",
        "Implemented microservices architecture to enhance system scalability and maintainability",
        "Optimized database queries and indexing strategies for PostgreSQL, improving data retrieval speed by 30%",
        "Implemented caching strategies using Redis and NodeCache to reduce API response times",
        "Developed data pipelines for processing and analyzing large datasets using Google BigQuery",
        "Handled millions data points per day with RabbitMQ for message queuing and processing",
        "Designed and implemented CI/CD pipelines using Bitbucket for automated deployment",
      ],
      technologies: ["Node.js", "AdonisJS", "REST APIs", "Microservices", "PostgreSQL", "Redis", "NodeCache", "BigQuery", "RabbitMQ", "Data Pipeline", "Bitbucket Pipeline"]
    },
    {
      title: "Software Developer",
      company: "NGP Websmart Pvt. Ltd.",
      period: "June 2024 - December 2024",
      location: "India, Tamilnadu, Chennai",
      description: [
        "Developed and maintained RESTful APIs using AdonisJS for a SaaS platform",
        "Implemented microservices architecture reducing system latency by 40%",
        "Designed and implemented caching strategies using Redis",
        "Written click house queries for data analysis and reporting purposes",
        "Designed and optimized PostgreSQL schemas and queries for improved performance",
        "Collaborated with frontend team to integrate APIs and solve cross-functional challenges"
      ],
      technologies: ["Node.js", "AdonisJS", "PostgreSQL", "REST APIs", "Microservices", "ClickHouse", "Query Optimization"]
    },
    {
      title: "Software Developer Intern",
      company: "NGP Websmart Pvt. Ltd.",
      period: "January 2024 - June 2024",
      location: "India, Tamilnadu, Chennai",
      description: [
        "Assisted in the development of RESTful APIs using Node.js and AdonisJS",
        "Developed role based authentication and authorization mechanisms in both frontend and backend",
        "Containerized applications using Docker and Infrastructure as Code using Terraform",
        "Implemented CI/CD pipelines using Bitbucket pipeline for automated deployment",
        "Implemented infrastructure as code using Terraform for GCP resources",
        "Used Percona Xtrabackup for database backup and restore to minimize downtime and increase speed of backup",
        "Monitored system performance in Teleport, Build n8n workflow for automation",
      ],
      technologies: ["Javascript", "Typescript", "AdonisJS", "VueJS", "Database", "PostgreSQL", "Percona Xtrabackup", "Terraform", "GCP", "CI/CD", "n8n", "Docker", "Bitbucket Pipeline"]
    },
    {
      title: "AI & Embedded System Intern",
      company: "Vividobots Pvt. Ltd.",
      period: "July 2022 - January 2023",
      location: "India, Tamilnadu, Chennai",
      description: [
        "Developed an AI-powered embedded system for real-time object detection using Raspberry Pi and Ultrasonic sensors",
        "Configured and programmed Arduino boards for sensor data acquisition",
        "Setup RealVNC for remote access and monitoring of embedded systems",
        "Collaborated with cross-functional teams to integrate hardware and software components",
      ],
      technologies: ["Python", "Arduino Programming", "Arduino Uno", "Arduino Nano", "Raspberry Pi 4", "Ultrasonic Sensor (HC-SR04)", "Bash", "Networking", "RealVNC"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Professional Experience</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My journey as a backend developer and DevOps engineer, showcasing my professional growth and contributions.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-primary animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.title} at {exp.company}
                    </CardTitle>
                    <div className="flex items-center text-muted-foreground mt-1 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period} | {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1 mt-4">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
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

export default ExperienceSection;
