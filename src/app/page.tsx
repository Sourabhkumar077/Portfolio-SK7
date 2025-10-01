"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Code, GraduationCap, Laptop, Sparkles, Rocket, Zap } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Floating particle component
const FloatingParticle = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="absolute w-2 h-2 bg-primary/20 rounded-full"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        x: [0, Math.random() * 100 - 50],
        y: [0, -100],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: delay,
        ease: "easeOut",
      }}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );
};

// Animated gradient orb
const GradientOrb = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden" ref={containerRef}>
      <Header />
      
      {/* Hero Section with Advanced Animations */}
      <section className="relative flex-1 container mx-auto px-4 lg:px-8 py-20 md:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <GradientOrb className="w-96 h-96 bg-gradient-to-r from-primary/30 to-purple-500/30 top-0 -left-48" />
          <GradientOrb className="w-96 h-96 bg-gradient-to-r from-blue-500/30 to-primary/30 bottom-0 -right-48" />
          
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <FloatingParticle key={i} delay={i * 0.2} />
          ))}

          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>

        {/* Cursor follower effect */}
        <motion.div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300"
          animate={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
          }}
        />

        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          style={{ y, opacity, scale }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge className="mb-4 px-4 py-2 backdrop-blur-sm bg-primary/10 border-primary/20" variant="secondary">
              <Sparkles className="w-3 h-3 mr-2 inline animate-pulse" />
              Available for opportunities
            </Badge>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="inline-block bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Web Developer
            </span>
            <br />
            <motion.span
              className="inline-block bg-gradient-to-r from-blue-500 via-primary to-purple-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% auto",
              }}
            >
              Software Engineer
            </motion.span>
            <br />
            <span className="inline-block text-foreground/80">
              & Student
            </span>
            
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-8 -right-8 w-16 h-16 bg-primary/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Passionate about creating innovative digital solutions and learning
            cutting-edge technologies. Currently pursuing Computer Science while
            building real-world projects.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" asChild className="group relative overflow-hidden">
                <Link href="/projects">
                  <span className="relative z-10 flex items-center">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-primary/50 to-purple-500/50"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" asChild className="backdrop-blur-sm">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <motion.div
                className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* What I Do Section with 3D Card Effects */}
      <section className="bg-muted/30 py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What I Do
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Code,
                title: "Web Development",
                description: "Building responsive, modern web applications using React, Next.js, and TypeScript with focus on user experience and performance.",
                gradient: "from-blue-500/20 to-cyan-500/20",
                delay: 0,
              },
              {
                icon: Laptop,
                title: "Software Engineering",
                description: "Developing scalable software solutions with clean code architecture, implementing algorithms, and working with various tech stacks.",
                gradient: "from-purple-500/20 to-pink-500/20",
                delay: 0.2,
              },
              {
                icon: GraduationCap,
                title: "Continuous Learning",
                description: "Currently pursuing Computer Science degree, constantly learning new technologies, and staying updated with industry trends.",
                gradient: "from-orange-500/20 to-red-500/20",
                delay: 0.4,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
                whileHover={{ y: -10 }}
              >
                <Card className="group relative overflow-hidden border-primary/10 bg-card/50 backdrop-blur-sm h-full hover:border-primary/30 transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <CardHeader className="relative z-10">
                    <motion.div
                      className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="h-7 w-7 text-primary group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                    </motion.div>
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
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: item.delay + 0.3 }}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section with Animated Badges */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Tech Stack
          </motion.h2>
          
          <motion.div
            className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
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
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge
                  variant="secondary"
                  className="px-5 py-2.5 text-sm font-medium backdrop-blur-sm bg-secondary/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated stats or features */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              { icon: Rocket, label: "Projects", value: "20+" },
              { icon: Code, label: "Languages", value: "10+" },
              { icon: Zap, label: "Experience", value: "3+ Years" },
              { icon: Sparkles, label: "Happy Clients", value: "15+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <motion.div
                  className="text-3xl font-bold text-foreground mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}