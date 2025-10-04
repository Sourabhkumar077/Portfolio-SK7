import { Mic, BookOpen, Users, Palette } from "lucide-react";

const personalPoints = [
  {
    icon: Mic,
    title: "Public Speaking",
    description: "Love sharing ideas & inspiring others.",
  },
  {
    icon: BookOpen,
    title: "Lifelong Learner",
    description: "Always exploring new tech, books & personal growth.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Thrive in teams, mentoring juniors, building communities.",
  },
  {
    icon: Palette,
    title: "Creativity",
    description: "Passion for design thinking & problem framing, not just coding.",
  },
];

export default function BeyondCode() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            🌍 Beyond Code
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase personality and interests outside coding.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto h-96 md:h-[500px]">
          {/* Central hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌟</span>
              </div>
            </div>
            <p className="text-center mt-2 text-sm text-muted-foreground">My Interests</p>
          </div>

          {/* Radial items */}
          {personalPoints.map((point, index) => {
            const angle = (index * 90) - 45; // Start at -45 degrees for better positioning
            const radius = 180; // Distance from center
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group"
                style={{
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                }}
              >
                <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg p-4 w-48 text-center hover:border-primary/30 transition-all duration-300 hover:scale-105 shadow-lg">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <point.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Connecting lines (optional, for visual effect) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
            {personalPoints.map((_, index) => {
              const angle = (index * 90) - 45;
              const radius = 180;
              const x = 200 + Math.cos((angle * Math.PI) / 180) * radius;
              const y = 200 + Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <line
                  key={index}
                  x1="200"
                  y1="200"
                  x2={x}
                  y2={y}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary/20"
                  opacity="0.3"
                />
              );
            })}
          </svg>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            👉 At the end of the day, code is my tool — but impact is my goal.
          </p>
        </div>
      </div>
    </section>
  );
}
