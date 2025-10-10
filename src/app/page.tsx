"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Code, GraduationCap, Laptop, Sparkles, Rocket, Zap } from "lucide-react";
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
    tl.fromTo(badgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
      .fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")
      .fromTo(descRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")
      .fromTo(buttonsRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6");

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

    gsap.fromTo(cardsRef.current?.children || [], { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
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
      gsap.set(particle, { opacity: 0, scale: 0 });
      gsap.to(particle, {
        opacity: 1,
        scale: 1,
        // Remove horizontal movement to avoid clash with cursor effect
        // x: Math.random() * 100 - 50,
        y: -100,
        duration: 6, // slower duration for smoother movement
        repeat: -1,
        delay: i * 0.4,
        ease: "power2.inOut",
        yoyo: true
      });
    });

    // Gradient orbs animation
    const orbs = document.querySelectorAll('.gradient-orb');
    orbs.forEach((orb) => {
      gsap.to(orb, {
        scale: 1.2,
        rotate: 90,
        duration: 8,
        repeat: -1,
        ease: "power2.inOut",
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
      <Header />
      <AnimatedBackground />

      {/* Hero Section with GSAP Animations */}
      <section className="relative flex-1 container mx-auto px-4 lg:px-8 py-20 md:py-32 overflow-hidden">

        {/* Cursor follower effect */}
        <div
          ref={cursorRef}
          className="pointer-events-none fixed inset-0 z-30 transition duration-1000"

        />

        <div
          className="max-w-4xl mx-auto text-center relative z-10"
          ref={heroRef}
        >
          <div ref={badgeRef}>
            <Badge className="mb-4 px-4 py-2 backdrop-blur-sm bg-primary/10 border-primary/20" variant="secondary">
              <Sparkles className="w-3 h-3 mr-2 inline animate-pulse" />
              // Available for opportunities
            </Badge>
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 relative"
            ref={titleRef}
          >
            <span className="inline-block bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Web Developer
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-blue-500 via-primary to-purple-500 bg-clip-text text-transparent">
              Software Engineer
            </span>
            <br />
            <span className="inline-block text-foreground/80">

            </span>

            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse" />
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            ref={descRef}
          >
            Passionate about creating innovative digital solutions and learning
            cutting-edge technologies. Currently pursuing Computer Science while
            building real-world projects.
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
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section with GSAP Card Effects */}
      <section className=" py-20 relative overflow-hidden" ref={whatIDoRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent"
            ref={whatIDoTitleRef}
          >
            What I Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" ref={cardsRef}>
            {[
              {
                icon: Code,
                title: "Web Development",
                description: "Building responsive, modern web applications using React, Next.js, and TypeScript with focus on user experience and performance.",
                gradient: "from-blue-500/20 to-cyan-500/20",
              },
              {
                icon: Laptop,
                title: "Software Engineering",
                description: "Developing scalable software solutions with clean code architecture, implementing algorithms, and working with various tech stacks.",
                gradient: "from-purple-500/20 to-pink-500/20",
              },
              {
                icon: GraduationCap,
                title: "Continuous Learning",
                description: "Currently pursuing Computer Science degree, constantly learning new technologies, and staying updated with industry trends.",
                gradient: "from-orange-500/20 to-red-500/20",
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
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent"
            ref={techStackTitleRef}
          >
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto" ref={skillsRef}>
            {[

              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "Java",
              "Git",
              "Tailwind CSS",
              "SQL",
              "MongoDB",
              "REST APIs",
            ].map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-5 py-2.5 text-sm font-medium backdrop-blur-sm bg-secondary/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer hover:scale-110"
              >
                {skill}
              </Badge>
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

      <Footer />
    </div>
  );
}
