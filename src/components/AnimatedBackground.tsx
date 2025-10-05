"use client"; // Important: Add this to use hooks

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
export const AnimatedBackground = () => {
    const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const particles = gsap.utils.toArray('.floating-particle', backgroundRef.current);
    particles.forEach((particle: any, i) => {
      gsap.set(particle, { opacity: 0, scale: 0 });
      gsap.to(particle, {
        opacity: 1,
        scale: 1,
        y: -100, // Moves particle up by 100px
        duration: 6,
        repeat: -1,
        delay: i * 0.4,
        ease: "power2.inOut",
        yoyo: true, // Animates back and forth
      });
    });

    const orbs = gsap.utils.toArray('.gradient-orb', backgroundRef.current);
    orbs.forEach((orb: any) => {
      gsap.to(orb, {
        scale: 1.2,
        rotate: 90,
        duration: 8,
        repeat: -1,
        ease: "power2.inOut",
        yoyo: true
      });
    });
  }, []);
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute gradient-orb w-96 h-96 bg-gradient-to-r from-primary/20 to-purple-500/20 top-0 -left-48 rounded-full blur-3xl opacity-40" />
      <div className="absolute gradient-orb w-96 h-96 bg-gradient-to-r from-blue-500/20 to-primary/20 bottom-0 -right-48 rounded-full blur-3xl opacity-40" />

      {/* Floating Particles (You can add the GSAP logic for these if they need to be dynamic across the whole page) */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="floating-particle absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            // right:`${Math.random() * 100}%`,
            // bottom:`${Math.random() * 100}%`
          }}
        />
      ))}

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
    </div>
  );
};