import { Badge } from "@/components/ui/badge";
import { Rocket, Code, Trophy, Target, Table } from "lucide-react";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2023",
    title: "The Beginning — C++ & Problem Solving",
    description:
      "Started my programming journey with C++ during my 2nd year of college. Fell in love with logic building and explored the depths of problem-solving and core CS concepts.",
    icon: Code,
  },
  {
    year: "2023-2024",
    title: "Web Development Kickstart",
    description:
      "Discovered web development, mastered frontend fundamentals (HTML, CSS, JavaScript) and built small projects to bring ideas to life on screen.",
    icon: Rocket,
  },
  {
    year: "2024",
    title: "Leveling Up — Java & DSA",
    description:
      "Picked up Java and started my DSA journey. Solved over 500 problems across platforms, sharpening my logic, algorithms, and confidence in structured problem-solving.",
    icon: Target,
  },
  {
    year: "2024 - 2025",
    title: "Backend Mastery",
    description:
      "Dove deep into backend using Node.js, Express, and MongoDB. Built impactful projects like 'PrepStack' — a personal placement tracker app, while exploring SQL and deployment workflows.",
    icon: Table,
  },
  {
    year: "2025",
    title: "Expanding Horizons — Frontend, Design & Frameworks",
    description:
      "Enhanced my UI/UX skills, explored smooth animations, and learned Next.js with TypeScript. Built 'Sensai' — an AI career coach blending web development and artificial intelligence.",
    icon: Trophy,
  },
  {
    year: "2025",
    title: "Automation & AI Era",
    description:
      "Currently exploring workflow automation with n8n, experimenting with AI agents, and continuously optimizing and shipping projects that merge innovation with real-world impact.",
    icon: Rocket,
  },
];


export default function TechJourney() {
  return (
    <section className="mt-10 py-20 relative overflow-hidden">

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="red-white-text bbh-sans-bartle-regular text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            My Tech Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline that shows my growth as a developer.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            ></motion.div>

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex items-start mb-12 last:mb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="relative z-10 flex-shrink-0"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <item.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className="ml-8 flex-1"
                >
                  <motion.div
                    className="relative bg-card/50 backdrop-blur-sm border-l-4 border-primary/20 hover:border-primary/40 rounded-r-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 4 + index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Speech bubble tail */}
                    <div className="absolute left-0 top-4 w-0 h-0 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-primary/20 transform -translate-x-full"></div>
                    <div className="flex items-center gap-4 mb-3">
                      <Badge variant="secondary" className="px-3 py-1 text-sm font-semibold">
                        {item.year}
                      </Badge>
                      <h3 className="inter-medium red-white-text text-[15px] font-semibold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          {/* <div className="text-center mt-12">
            <p className="text-muted-foreground italic">
              👉 This journey isn't just about code. It's about growth, curiosity, and building things that matter.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
