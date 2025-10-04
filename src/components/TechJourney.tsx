import { Badge } from "@/components/ui/badge";
import { Rocket, Code, Trophy, Target } from "lucide-react";

const timelineData = [
  {
    year: "2021",
    title: "First Line of Code",
    description: "Wrote my first line of code in C, discovered problem-solving passion.",
    icon: Code,
  },
  {
    year: "2022",
    title: "Web Basics",
    description: "Learned web basics (HTML, CSS, JS), built my first static site.",
    icon: Rocket,
  },
  {
    year: "2023",
    title: "MERN Stack Exploration",
    description: "Explored MERN stack, created full-stack apps with MongoDB, Express, Node.",
    icon: Target,
  },
  {
    year: "2024",
    title: "AI Mental Therapy App",
    description: "Built 'Zenora' (AI mental therapy app), won a hackathon prize.",
    icon: Trophy,
  },
  {
    year: "2025",
    title: "Placement Preparation",
    description: "Preparing for placements, mastering DSA, building impactful projects.",
    icon: Rocket,
  },
];

export default function TechJourney() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            🚀 My Tech Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline that shows my growth as a developer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>

            {timelineData.map((item, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="relative bg-card/50 backdrop-blur-sm border-l-4 border-primary/20 hover:border-primary/40 transition-all duration-300 rounded-r-lg p-6 shadow-lg">
                    {/* Speech bubble tail */}
                    <div className="absolute left-0 top-4 w-0 h-0 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-primary/20 transform -translate-x-full"></div>
                    <div className="flex items-center gap-4 mb-3">
                      <Badge variant="secondary" className="px-3 py-1 text-sm font-semibold">
                        {item.year}
                      </Badge>
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground italic">
              👉 This journey isn't just about code. It's about growth, curiosity, and building things that matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
