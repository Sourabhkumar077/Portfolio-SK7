import { Sparkles } from "lucide-react";

interface CreativeTextCardProps {
  title?: string;
  description?: string;
  quote?: string;
  className?: string;
}

export default function CreativeTextCard({
  title = "Crafting Digital Magic",
  description = "Where code meets creativity and innovation becomes reality.",
  quote = "\"Every pixel, every line of code, tells a story of innovation and passion.\"",
  className = ""
}: CreativeTextCardProps) {
  return (
    <div className={`relative max-w-md ${className}`}>
      {/* Background decorative elements */}
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full blur-xl"></div>
      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-xl"></div>

      <div className="relative bg-card/30 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 shadow-2xl">
        <div className="text-center space-y-6">
          <div className="inline-block">
            <Sparkles className="h-8 w-8 text-red-500 mx-auto mb-4 animate-pulse" />
          </div>

          <div className="space-y-4">
            <h3 className="bbh-sans-bartle-regular text-2xl md:text-3xl font-bold gradient-red-white">
              {title}
            </h3>

            <p className="text-muted-foreground leading-relaxed text-lg">
              Where <span className="font-semibold text-red-500">code meets creativity</span> and
              <span className="font-semibold text-red-500"> innovation</span> becomes reality.
            </p>

            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>

            <p className="text-sm text-muted-foreground italic">
              {quote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
