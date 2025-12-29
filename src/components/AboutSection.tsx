import { Target, Award, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Swamiraj Media is a modern, result-oriented media agency combining 
              strategy, creativity, and technology to deliver winning outcomes.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div className="space-y-6">
              <p className="text-foreground/80 text-lg leading-relaxed">
                At <strong className="text-primary">Swamiraj Media</strong>, we specialize in 
                political campaigning, social media marketing, and business development. 
                Our team understands the pulse of the audience and crafts strategies that 
                resonate with them.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                With years of experience in both political and business fields, we combine 
                ground campaign support with cutting-edge digital strategies to ensure your 
                message reaches the right people at the right time.
              </p>

              {/* Mission Statement */}
              <div className="bg-primary/5 border-l-4 border-accent p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-primary mb-2">Our Mission</h3>
                <p className="text-foreground/80 italic">
                  "To deliver your message to the right audience, at the right time, 
                  in the most effective way."
                </p>
              </div>
            </div>

            {/* Right - Features */}
            <div className="grid gap-6">
              <div className="flex gap-4 p-6 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    Strategic Approach
                  </h3>
                  <p className="text-muted-foreground">
                    Data-driven strategies tailored to your specific goals and target audience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    Proven Results
                  </h3>
                  <p className="text-muted-foreground">
                    Track record of successful campaigns across political and business sectors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    Expert Team
                  </h3>
                  <p className="text-muted-foreground">
                    Experienced professionals in campaigning, content creation, and digital marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
