import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
        Explore <span className="text-primary">SWG Events</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12">
        Your gateway to mentorship, career growth, and campus life at IIT Kharagpur.
      </p>
      <a
        href="#events"
        className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
      >
        <span>Scroll to explore</span>
        <ChevronDown className="w-6 h-6 animate-bounce-slow" />
      </a>
    </section>
  );
};

export default HeroSection;
