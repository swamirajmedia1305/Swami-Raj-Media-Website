import { Target, Award, Users } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              {t("about.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t("about.title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("about.subtitle")}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div className="space-y-6">
              <p className="text-foreground/80 text-lg leading-relaxed">
                {t("about.p1")}
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                {t("about.p2")}
              </p>

              {/* Mission Statement */}
              <div className="bg-primary/5 border-l-4 border-accent p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-primary mb-2">{t("about.mission.title")}</h3>
                <p className="text-foreground/80 italic">"{t("about.mission.quote")}"</p>
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
                    {t("about.feature1.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("about.feature1.desc")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {t("about.feature2.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("about.feature2.desc")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {t("about.feature3.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("about.feature3.desc")}
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
