import { Landmark, Smartphone, Rocket, TrendingUp, Users, Video, Target, Award } from "lucide-react";

const services = [
  {
    icon: Landmark,
    title: "Political Campaigning",
    description: "Strategic election campaigns that connect candidates with voters.",
    features: [
      "Election strategy planning",
      "Candidate branding",
      "Political content creation",
      "Ground campaign support",
    ],
  },
  {
    icon: Smartphone,
    title: "Social Media Marketing",
    description: "Build your digital presence across all major platforms.",
    features: [
      "Facebook, Instagram, YouTube",
      "Reels & short videos",
      "Paid advertisements",
      "WhatsApp marketing",
    ],
  },
  {
    icon: Rocket,
    title: "Business Development",
    description: "Grow your business with strategic marketing solutions.",
    features: [
      "Brand identity creation",
      "Lead generation",
      "Local business marketing",
      "Growth consulting",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What We Offer
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solutions for political campaigns, digital marketing, 
              and business growth tailored to your needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-8 bg-card rounded-2xl shadow-card hover:shadow-lg transition-all duration-300 border border-border hover:border-accent/30 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
