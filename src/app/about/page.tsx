"use client";

import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, BookOpen, Code2, Trophy } from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";

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
    degree: "Bachelor of Technology in Computer Science & Engineering",
    school: "RGPV University, Bhopal, Madhya Pradesh",
    period: "2022 - 2026",
    description:
      "Focused on software engineering principles, data structures and algorithms, database management, and full-stack web development. Completed various academic and personal projects demonstrating practical problem-solving skills.",
    gpa: "8.40 / 10.0",
  },
];

const achievements = [
  {
    title: "Dean's List",
    description: "Consistently maintained top academic performance across multiple semesters, demonstrating discipline and a commitment to excellence.",
    icon: Trophy,
  },
  {
    title: "Hackathon Winner",
    description: "Secured first place in a university-level coding hackathon by building innovative, practical solutions under tight deadlines.",
    icon: Award,
  },
  {
    title: "Open Source Contributor",
    description: "Actively contributed to multiple open-source projects, improving codebases and collaborating with developers worldwide.",
    icon: Code2,
  },
  {
    title: "Research Assistant",
    description: "Assisted in a machine learning research project, contributing to data analysis, model building, and practical experimentation.",
    icon: BookOpen,
  },
];


export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1 container mx-auto px-4 lg:px-8 py-20">
        <AnimatedBackground />
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-xl ">
              Learn more about my background, skills, and journey in tech
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Hello! 👋</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>I’m <b>Sourabh Kumar</b> — a calm hustler, a curious mind, and a builder who believes growth isn’t a destination, it’s a daily practice.</p>
              <p>
                <strong>I don’t chase perfection — I chase progress.</strong>
                Every line of code, every project, every quiet reflection is a step forward in becoming better than yesterday.
                I find joy in creating meaningful things, learning deeply, and evolving through every experience.
                Whether it’s building a product or pursuing a personal goal, I show up with consistency, intention, and heart.</p>

              <p>I find joy in creating meaningful things, learning deeply, and evolving through every experience.
                Whether it’s building a product or pursuing a personal goal, I show up with consistency, intention, and heart.
                <br />
                I value <strong>depth over noise, purpose over pressure, and mindset over momentary motivation.</strong> My world revolves around late-night ideas,
                thoughtful journaling, and the thrill of learning something new every day.</p>
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