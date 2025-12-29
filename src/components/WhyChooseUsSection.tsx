import { Check } from "lucide-react";

const reasons = [
  {
    title: "Experience in Political & Business Fields",
    description: "Years of proven expertise in both political campaigning and business development.",
  },
  {
    title: "Strong Ground + Digital Presence",
    description: "Combined on-ground campaign support with powerful digital marketing strategies.",
  },
  {
    title: "Professional Creatives & Content",
    description: "High-quality designs, videos, and content that capture attention and drive engagement.",
  },
  {
    title: "Local Audience Targeting Expertise",
    description: "Deep understanding of local demographics and effective regional marketing.",
  },
  {
    title: "Trust, Transparency & Reliability",
    description: "We build lasting relationships based on honest communication and consistent results.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Why Swamiraj Media?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                We combine traditional campaign strategies with modern digital marketing 
                to create impactful campaigns that resonate with your audience.
              </p>

              {/* CTA */}
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent">95%</div>
                  <div className="text-sm text-primary-foreground/70">Client Satisfaction</div>
                </div>
                <div className="w-px h-16 bg-primary-foreground/20" />
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent">50+</div>
                  <div className="text-sm text-primary-foreground/70">Successful Campaigns</div>
                </div>
              </div>
            </div>

            {/* Right - Reasons List */}
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="flex gap-4 p-5 bg-primary-foreground/5 backdrop-blur-sm rounded-xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
