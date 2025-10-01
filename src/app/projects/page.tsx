"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application displaying current conditions, forecasts, and interactive maps using external APIs.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
    tags: ["React", "API Integration", "Chart.js", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Portfolio CMS",
    description: "Content management system for portfolios with markdown support, image optimization, and SEO features.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
    tags: ["Next.js", "Sanity CMS", "TypeScript", "Vercel"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Algorithm Visualizer",
    description: "Interactive tool for visualizing sorting and pathfinding algorithms with step-by-step animations and explanations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["JavaScript", "D3.js", "Algorithms", "CSS"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Social Media Analytics",
    description: "Dashboard for analyzing social media metrics with data visualization, export functionality, and trend analysis.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Python", "Flask", "React", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of web development and software engineering projects
              showcasing my skills and experience.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}