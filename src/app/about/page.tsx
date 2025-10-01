"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, BookOpen, Code2, Trophy } from "lucide-react";

const skills = [
  { name: "JavaScript/TypeScript", level: 90 },
  { name: "React & Next.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "Java", level: 70 },
  { name: "SQL & Databases", level: 80 },
  { name: "Git & Version Control", level: 85 },
  { name: "REST APIs", level: 85 },
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University Name",
    period: "2021 - 2025",
    description: "Focus on software engineering, data structures, algorithms, and web development.",
    gpa: "3.8/4.0",
  },
];

const achievements = [
  {
    title: "Dean's List",
    description: "Maintained high academic standing for multiple semesters",
    icon: Trophy,
  },
  {
    title: "Hackathon Winner",
    description: "First place in university coding competition",
    icon: Award,
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to several open source projects",
    icon: Code2,
  },
  {
    title: "Research Assistant",
    description: "Assisted in machine learning research project",
    icon: BookOpen,
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Learn more about my background, skills, and journey in tech
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Hello! 👋</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate Computer Science student and aspiring software engineer
                with a strong foundation in web development and software engineering principles.
                My journey in tech started with curiosity about how websites work, and it has
                evolved into a deep passion for creating impactful digital solutions.
              </p>
              <p>
                As a student, I'm constantly learning and applying new concepts, from advanced
                algorithms to modern web frameworks. I believe in writing clean, maintainable
                code and building user-centric applications that solve real-world problems.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing
                to open source projects, or mentoring fellow students in programming fundamentals.
              </p>
            </CardContent>
          </Card>

          {/* Education */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle>{edu.degree}</CardTitle>
                      <CardDescription>{edu.school}</CardDescription>
                    </div>
                    <Badge variant="secondary">{edu.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{edu.description}</p>
                  <p className="font-semibold">GPA: {edu.gpa}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card key={index}>
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <CardDescription>{achievement.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}