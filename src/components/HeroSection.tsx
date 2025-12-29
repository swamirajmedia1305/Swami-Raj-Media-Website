import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-navy-dark/90" />

      {/* Content */}
      <div className="container relative z-10 text-center px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Political Campaigning | Social Media Marketing | Business Development
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Swamiraj Media
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-accent font-semibold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Your Voice. Our Strategy. Winning Impact.
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            A modern & result-oriented media agency specializing in political campaigns, 
            digital marketing, and business development. We deliver your message to the 
            right audience at the right time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              variant="hero"
              size="xl"
              onClick={() => handleNavClick("#contact")}
            >
              Get Started
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => handleNavClick("#contact")}
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-accent">50+</div>
              <div className="text-xs md:text-sm text-primary-foreground/70">Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-accent">100+</div>
              <div className="text-xs md:text-sm text-primary-foreground/70">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-accent">5+</div>
              <div className="text-xs md:text-sm text-primary-foreground/70">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
