import { Badge } from "@/components/ui/badge";
import { Lightbulb, Wrench, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const caseStudies = [
  {
    problem: "Mental health apps lacked personalization.",
    solution: "Built 'Zenora' — an AI-powered therapy app with ML-based suggestions.",
    impact: "Helped 50+ testers improve journaling consistency, won a hackathon.",
    icon: Lightbulb,
  },
  {
    problem: "Manual posting across multiple platforms wasted time.",
    solution: "Developed an automation system for scheduling + publishing posts.",
    impact: "Saved teams hours of repetitive work.",
    icon: Wrench,
  },
  {
    problem: "Students struggled with structured prep for aptitude & DSA.",
    solution: "Built 'PrepStack' — a curated practice platform.",
    impact: "Helped peers prepare smarter and track progress.",
    icon: TrendingUp,
  },
];

export default function ProblemSolvingShowcase() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            🛠 Problem-Solving Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Instead of just showing projects, I want to highlight problems solved.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>

            {caseStudies.map((study, index) => (
              <div key={index} className="relative mb-8 last:mb-0">
                {/* Step indicator */}
                <div className="flex items-center mb-4">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                      <study.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-semibold text-foreground">
                      Case Study {index + 1}
                    </h3>
                  </div>
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="ml-4 p-2 rounded-full hover:bg-primary/10 transition-colors"
                  >
                    {expandedIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary" />
                    )}
                  </button>
                </div>

                {/* Expandable content */}
                <div className={`ml-20 transition-all duration-300 overflow-hidden ${
                  expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-primary/10">
                    <div className="space-y-4">
                      <div>
                        <Badge variant="destructive" className="mb-2">Problem</Badge>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.problem}
                        </p>
                      </div>

                      <div>
                        <Badge variant="default" className="mb-2">Solution</Badge>
                        <p className="text-foreground leading-relaxed">
                          {study.solution}
                        </p>
                      </div>

                      <div>
                        <Badge variant="secondary" className="mb-2">Impact</Badge>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            👉 For me, code = impact. Every project is a solution waiting to scale.
          </p>
        </div>
      </div>
    </section>
  );
}
