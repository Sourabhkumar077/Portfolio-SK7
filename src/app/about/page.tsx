"use client";

import Footer from "@/components/Footer";
import { Award, BookOpen, Code2, Trophy, Code, Cpu, Database, GitBranch, Globe, Server, Zap } from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "JavaScript/TypeScript", level: 90, icon: Code, color: "from-yellow-400 to-yellow-600" },
  { name: "React & Next.js", level: 85, icon: Zap, color: "from-cyan-400 to-cyan-600" },
  { name: "Node.js", level: 80, icon: Server, color: "from-green-400 to-green-600" },
  { name: "Python", level: 75, icon: Code, color: "from-blue-500 to-blue-700" },
  { name: "Java", level: 70, icon: Cpu, color: "from-red-400 to-red-600" },
  { name: "SQL & Databases", level: 80, icon: Database, color: "from-purple-400 to-purple-600" },
  { name: "Git & Version Control", level: 85, icon: GitBranch, color: "from-orange-400 to-orange-600" },
  { name: "REST APIs", level: 85, icon: Globe, color: "from-indigo-400 to-indigo-600" },
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
    title: "Head Coordinator - BGI TIMEPLAPSE 2024",
    description: "Led and coordinated the BGI TIMEPLAPSE event, managing teams and ensuring smooth execution.",
    icon: Award,
  },
  {
    title: "Technical Lead - Bansalotsav 2025",
    description: "Served as the technical lead for the institute’s annual fest, overseeing technical setups, events, and team coordination.",
    icon: Code2,
  },
];


export default function AboutPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation
    gsap.fromTo(headerRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, ease: "power2.out"
    });

    // Introduction animation
    gsap.fromTo(introRef.current, { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
      scrollTrigger: {
        trigger: introRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Education animation
    gsap.fromTo(educationRef.current, { opacity: 0, x: -50 }, {
      opacity: 1, x: 0, duration: 0.8, ease: "power2.out",
      scrollTrigger: {
        trigger: educationRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Skills animation
    gsap.fromTo(skillsRef.current?.children || [], { opacity: 0, scale: 0.8 }, {
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Achievements animation
    gsap.fromTo(achievementsRef.current?.children || [], { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out",
      scrollTrigger: {
        trigger: achievementsRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1 container mx-auto px-4 lg:px-8 py-20">
        <AnimatedBackground />
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16" ref={headerRef}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-xl ">
              Learn more about my background, skills, and journey in tech
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-20" ref={introRef}>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Hello! 👋</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>I’m <span className="font-semibold text-foreground">Sourabh Kumar</span> — a calm hustler, a curious mind, and a builder who believes growth isn't a destination, it's a daily practice.</p>
                  <p>
                    <span className="font-semibold text-foreground">I don't chase perfection — I chase progress.</span>
                    Every line of code, every project, every quiet reflection is a step forward in becoming better than yesterday.
                    I find joy in creating meaningful things, learning deeply, and evolving through every experience.
                    Whether it's building a product or pursuing a personal goal, I show up with consistency, intention, and heart.</p>
                  <p>I find joy in creating meaningful things, learning deeply, and evolving through every experience.
                    Whether it's building a product or pursuing a personal goal, I show up with consistency, intention, and heart.
                    <br />
                    I value <span className="font-semibold text-foreground">depth over noise, purpose over pressure, and mindset over momentary motivation.</span> My world revolves around late-night ideas,
                    thoughtful journaling, and the thrill of learning something new every day.</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <Image
                    src="/dp-img.jpeg"
                    alt="Sourabh Kumar"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-20" ref={educationRef}>
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.school}</p>
                  </div>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full self-start">{edu.period}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-3">{edu.description}</p>
                <p className="text-sm font-semibold text-foreground">GPA: {edu.gpa}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="mb-20" ref={skillsRef}>
            <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
            <div className="flex flex-wrap gap-6 justify-center">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center text-center p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                  >
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </span>
                    <div className="w-20 bg-muted rounded-full h-1.5">
                      <div
                        className="bg-gradient-to-r from-primary to-primary/60 h-1.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground mt-1">{skill.level}%</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Achievements */}
          <div ref={achievementsRef}>
            <h2 className="text-3xl font-bold mb-8">Achievements</h2>
            <div className="space-y-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{achievement.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
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