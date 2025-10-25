"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { ArrowRight, Code, GraduationCap, Laptop, Sparkles, Rocket, Zap, Phone, Database, Server, Palette, GitBranch, Cpu, Globe } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useRef, useEffect, useState } from "react";
import BeyondCode from "@/components/BeyondCode";
import TechJourney from "@/components/TechJourney";
import ProblemSolvingShowcase from "@/components/ProblemSolvingShowcase";
import { AnimatedBackground } from "@/components/AnimatedBackground";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const whatIDoRef = useRef<HTMLElement>(null);
  const whatIDoTitleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLElement>(null);
  const techStackTitleRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(29,78,216,0.15), transparent 80%)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  useEffect(() => {
    // Hero animations
    const tl = gsap.timeline();
    tl.fromTo(badgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
      .fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
      .fromTo(descRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
      .fromTo(buttonsRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3");


    // Scroll animations
    gsap.fromTo(whatIDoTitleRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
      scrollTrigger: {
        trigger: whatIDoRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.fromTo(cardsRef.current?.children || [],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });


    gsap.fromTo(techStackTitleRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
      scrollTrigger: {
        trigger: techStackRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.fromTo(skillsRef.current?.children || [], { opacity: 0, scale: 0 }, {
      opacity: 1, scale: 1, duration: 0.5, stagger: 0.05, ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.fromTo(statsRef.current?.children || [], { opacity: 0, scale: 0.8 }, {
      opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Floating particles animation
    const particles = document.querySelectorAll('.floating-particle');
    particles.forEach((particle, i) => {
      gsap.set(particle, { opacity: 0, scale: 0, y: 0 });
      gsap.to(particle, {
        opacity: 1,
        scale: 1,
        y: Math.random() * -200 - 50, // random upward float
        duration: 6 + Math.random() * 4, // vary speed
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3
      });
    });

    // Gradient orbs animation
    const orbs = document.querySelectorAll('.gradient-orb');
    orbs.forEach((orb) => {
      gsap.to(orb, {
        x: "+=30",
        y: "-=20",
        scale: 1.1,
        rotate: 360,
        duration: 10 + Math.random() * 5,
        repeat: -1,
        ease: "sine.inOut",
        yoyo: true
      });
    });


    // Scroll indicator animation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      gsap.set(scrollIndicator, { opacity: 0 });
      gsap.to(scrollIndicator, {
        opacity: 1,
        y: 10,
        duration: 2,
        repeat: -1,
        ease: "power2.inOut",
        yoyo: true
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (

    <div className="relative flex flex-col min-h-screen overflow-hidden" ref={containerRef}>
      <AnimatedBackground />

      {/* Hero Section with GSAP Animations */}
      <section className="relative flex-1 container mx-auto px-4 lg:px-8 py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Cursor follower effect */}
        <div
          ref={cursorRef}
          className="pointer-events-none fixed inset-0 z-30 transition duration-1000"

        />

        <div
          className="max-w-6xl mx-auto text-center relative z-10 pb-8 md:pb-12"
          ref={heroRef}
        >

          <h1
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 relative"
            ref={titleRef}
          >
            <span className="inline-block text-sm md:text-lg lg:text-xl font-light text-muted-foreground">
              <i> Hi I'm Sourabh </i>
            </span>
          </h1>
          <span className="inline-block text-4xl md:text-6xl lg:text-8xl font-bold text-foreground tracking-tight leading-tight bbh-sans-bartle-regular">
             FULL &nbsp; STACK DEVELOPER
          </span>
          <span className="block font-light text-base md:text-lg lg:text-xl text-muted-foreground mt-2 md:mt-4">
            who is
          </span>
          {/* <span className=" block font-light text-[20px] text-muted-foreground ">and</span>
           <span className="inline-block text-3xl md:text-6xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight bbh-sans-bartle-regular">
             Product designer
          </span> */}
          <p
            className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed mt-4 md:mt-6"
            ref={descRef}
          >
            <i> Building digital experiences that blend logic, design, and emotion.</i>
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            ref={buttonsRef}
          >
            <Button size="lg" asChild className="group relative overflow-hidden">
              <Link href="/projects">
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-purple-500/50 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="backdrop-blur-sm">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0">

          </div>
        </div>

      </section>

      {/* What I Do Section with GSAP Card Effects */}
      <section className=" py-20 relative overflow-hidden" ref={whatIDoRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <h2
            className="bbh-sans-bartle-regular text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent"
            ref={whatIDoTitleRef}
          >
            What I Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" ref={cardsRef}>
            {[
              {
                icon: Code,
                title: "Web Development",
                description: "Modern, responsive web applications using React, Next.js, and TypeScript.",
                gradient: "from-blue-500/20 to-cyan-500/20",
              },
              {
                icon: Laptop,
                title: "Backend & APIs",
                description: "Building scalable backend solutions with Node.js, Express, MongoDB/PostgreSQL.",
                gradient: "from-purple-500/20 to-pink-500/20",
              },
              {
                icon: GraduationCap,
                title: "UI/UX & Product Design",
                description: "Intuitive interfaces and prototypes using Figma & Tailwind CSS.",
                gradient: "from-orange-500/20 to-red-500/20",
              },
              {
                icon: Rocket,
                title: "Automation & DevOps",
                description: "CI/CD, cloud deployment, and workflow automation for efficient development.",
                gradient: "from-green-500/20 to-teal-500/20",
              },
              {
                icon: Phone,
                title: "Mobile & PWA",
                description: "Cross-platform apps with React Native and Progressive Web Apps.",
                gradient: "from-yellow-400/20 to-orange-400/20",
              },
              {
                icon: Zap,
                title: "Consulting & Mentoring",
                description: "Technical guidance, code reviews, and mentorship for developers or startups.",
                gradient: "from-pink-500/20 to-purple-500/20",
              },
            ].map((item, index) => (
              <Card key={index} className="group relative overflow-hidden border-primary/10 bg-card/50 backdrop-blur-sm h-full hover:border-primary/30 transition-all duration-300 hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <CardHeader className="relative z-10">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
                    <item.icon className="h-7 w-7 text-primary group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>

                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full scale-0 group-hover:scale-100 transition-transform duration-300" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section with GSAP Animated Badges */}
      <section className="py-20 relative overflow-hidden" ref={techStackRef}>

        <div className="container mx-auto px-4 lg:px-8">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent bbh-sans-bartle-regular"
            ref={techStackTitleRef}
          >
            Tech Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center max-w-5xl mx-auto" ref={skillsRef}>
            {[
              { name: "JavaScript", icon: Code, color: "from-yellow-400 to-yellow-600" },
              { name: "TypeScript", icon: Cpu, color: "from-blue-400 to-blue-600" },
              { name: "React", icon: Zap, color: "from-cyan-400 to-cyan-600" },
              { name: "Next.js", icon: Rocket, color: "from-gray-400 to-gray-600" },
              { name: "Node.js", icon: Server, color: "from-green-400 to-green-600" },
              { name: "Python", icon: Code, color: "from-blue-500 to-blue-700" },
              { name: "Java", icon: Cpu, color: "from-red-400 to-red-600" },
              { name: "Git", icon: GitBranch, color: "from-orange-400 to-orange-600" },
              { name: "Tailwind CSS", icon: Palette, color: "from-teal-400 to-teal-600" },
              { name: "SQL", icon: Database, color: "from-purple-400 to-purple-600" },
              { name: "MongoDB", icon: Database, color: "from-green-500 to-green-700" },
              { name: "REST APIs", icon: Globe, color: "from-indigo-400 to-indigo-600" },
            ].map((skill, index) => (
              <div
                key={skill.name}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:-translate-y-1 cursor-pointer shadow-lg hover:shadow-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="relative p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
                    <skill.icon className="h-6 w-6 text-primary group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                  </div>
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-primary/10 rounded-bl-full scale-0 group-hover:scale-100 transition-transform duration-300" />
              </div>
            ))}
          </div>

          {/* Animated stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20" ref={statsRef}>
            {[

              { icon: Rocket, label: "Projects", value: "20+" },
              { icon: Code, label: "Languages", value: "10+" },
              { icon: Zap, label: "Experience", value: "1+ Years" },
              { icon: Sparkles, label: "Happy Clients", value: "15+" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3 group-hover:rotate-360 transition-transform duration-500">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add ProblemSolvingShowcase here */}
      <section>
        <ProblemSolvingShowcase />
      </section>

      {/* Add BeyondCode here */}
      <section>
        <BeyondCode />
      </section>

      <Footer />
    </div>
  );
}
