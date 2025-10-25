"use client";

import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { motion } from "framer-motion";

const projects = [
  {
    title: "PrepStack – Personal Placement Tracker",
    description:
      "A full-featured placement preparation platform with an interactive dashboard, streak tracking, goal progress visualizations, and company-specific checklists. Includes a DSA Prep Hub with 450+ curated questions, smart search, progress tracking, and study logs.",
    image:
      "/Prepstack.png",
    tags: ["React.js", "Tailwind CSS", "Chart.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Sourabhkumar077/PrepStack--Personal-Placement-Tracker",
    demo: "https://prep-stack-eta.vercel.app",
  },
  {
    title: "Sens AI - Career Guidance Platform",
    description: "An AI-powered career guidance platform that helps users build intelligent resumes, practice mock interviews, and receive personalized career insights. Built with Next.js, Tailwind, and Prisma, and integrated with Gemini API for real-time AI assistance and recommendations.",
    image: "/SensAi.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Shadcn UI", "Gemini API"],
    github: "https://github.com/Sourabhkumar077/Sens-AI---AI-Career-Coach",
    demo: "https://sensai-career-coach-three.vercel.app",
  },
  // {
  //   title: "Zenora – AI-Powered Mental Therapy Web App",
  //   description:
  //     "AI wellness platform offering personalized therapy recommendations, daily mood tracking, guided journaling, and mental health quizzes. Developed with Flask backend and React frontend; built as a prize-winning hackathon project.",
  //   image:
  //     "https://images.unsplash.com/photo-1558980664-10ea7c26e911?w=800&h=600&fit=crop",
  //   tags: ["React.js", "Flask", "Python", "Machine Learning", "Tailwind CSS"],
  //   github: "https://github.com/sourabhmahuvar/Zenora",
  //   demo: "https://zenora.vercel.app",
  // },
  {
  title: "Split Milk - Awwwards Winning Website Clone",
  description: "A visually stunning animated clone of the Awwwards-winning 'Split Milk' website, recreated using React, GSAP, and Tailwind CSS. Showcases smooth scroll-based animations, creative transitions, and advanced state management with Zustand to deliver a high-performance, modern web experience that mirrors real-world motion design excellence.",
  image: "/Splyt-milk.png",
  tags: ["React", "GSAP", "Tailwind CSS", "Zustand", "JavaScript"],
  github: "https://github.com/Sourabhkumar077/Spylt_Milk",
  demo: "https://spylt-milk-ten.vercel.app/",
},

  {
    title: "ResuMind – AI Resume Analyzer",
    description:
      "AI-driven resume analyzer that gives job-specific feedback and calculates an ATS compatibility score to enhance job applications. Built using React 19, Zustand, and Puter.js for fast and scalable performance.",
    image:
      "/resumind-project.png",
    tags: ["React", "Tailwind CSS", "Zustand", "Puter.js", "TypeScript",],
    github: "https://github.com/Sourabhkumar077/Resumind-AI-Resume-Analyzer",
    demo: "https://resumind.vercel.app",
  },
  {
    title: "WanderLust -  Modern Travel Listings Platform",
    description: "A full-stack Airbnb-inspired platform that allows users to explore, book, and list unique accommodations worldwide. Built with Node.js, Express, and MongoDB, it features secure authentication, dynamic property management, and a responsive design that delivers a smooth and modern user experience across all devices.",
    image: "/wanderlust.png",
    tags: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap"],
    github: "https://github.com/Sourabhkumar077/WanderLust---The-Travel-Website",
    demo: "https://wanderlust-liveserver.onrender.com/listings",
  },
  {
  title: "TaskNet - Modern Todo Management App",
  description: "A beautifully designed todo management app that lets users create, edit, complete, and delete tasks with instant real-time updates. Features a sleek glassmorphism-inspired UI, responsive layout, smooth animations, and automatic data persistence via LocalStorage for a seamless user experience.",
  image: "/taskNet-mainFace.png",
  tags: ["React", "Tailwind CSS", "LocalStorage", "Framer Motion"],
  github: "https://github.com/Sourabhkumar077/Tasknest-react",
  demo: "https://demo.example.com",
},

  // {
  //   title: "Weather Dashboard",
  //   description: "Real-time weather application displaying current conditions, forecasts, and interactive maps using external APIs.",
  //   image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
  //   tags: ["React", "API Integration", "Chart.js", "Tailwind CSS"],
  //   github: "https://github.com",
  //   demo: "https://demo.example.com",
  // },
  // {
  //   title: "Portfolio CMS",
  //   description: "Content management system for portfolios with markdown support, image optimization, and SEO features.",
  //   image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
  //   tags: ["Next.js", "Sanity CMS", "TypeScript", "Vercel"],
  //   github: "https://github.com",
  //   demo: "https://demo.example.com",
  // },
  // {
  //   title: "Algorithm Visualizer",
  //   description: "Interactive tool for visualizing sorting and pathfinding algorithms with step-by-step animations and explanations.",
  //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  //   tags: ["JavaScript", "D3.js", "Algorithms", "CSS"],
  //   github: "https://github.com",
  //   demo: "https://demo.example.com",
  // },
  // {
  //   title: "Social Media Analytics",
  //   description: "Dashboard for analyzing social media metrics with data visualization, export functionality, and trend analysis.",
  //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  //   tags: ["Python", "Flask", "React", "Chart.js"],
  //   github: "https://github.com",
  //   demo: "https://demo.example.com",
  // },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedBackground/>
      <main className="flex-1 container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className=" bbh-sans-bartle-regular text-4xl md:text-5xl font-bold mb-4 gradient-red-white">My Projects</h1>
            <p className=" text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of web development and software engineering projects
              showcasing my skills and experience.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1 relative bg-gradient-to-br from-card to-card/95 border border-border/50">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="text-white font-semibold text-lg">View Project</span>
                    </div>
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
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}