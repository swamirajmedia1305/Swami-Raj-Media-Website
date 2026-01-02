import { Check } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const reasons = [
  { titleKey: "whyChooseUs.reason1.title", descKey: "whyChooseUs.reason1.desc" },
  { titleKey: "whyChooseUs.reason2.title", descKey: "whyChooseUs.reason2.desc" },
  { titleKey: "whyChooseUs.reason3.title", descKey: "whyChooseUs.reason3.desc" },
  { titleKey: "whyChooseUs.reason4.title", descKey: "whyChooseUs.reason4.desc" },
  { titleKey: "whyChooseUs.reason5.title", descKey: "whyChooseUs.reason5.desc" },
];

const WhyChooseUsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-4">
                {t("whyChooseUs.badge")}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                {t("whyChooseUs.title")}
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                {t("whyChooseUs.description")}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent">95%</div>
                  <div className="text-sm text-primary-foreground/70">{t("whyChooseUs.stats.satisfaction")}</div>
                </div>
                <div className="w-px h-16 bg-primary-foreground/20" />
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent">50+</div>
                  <div className="text-sm text-primary-foreground/70">{t("whyChooseUs.stats.campaigns")}</div>
                </div>
              </div>
            </div>

            {/* Right - Reasons List */}
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={reason.titleKey}
                  className="flex gap-4 p-5 bg-primary-foreground/5 backdrop-blur-sm rounded-xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-1">
                      {t(reason.titleKey)}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm">
                      {t(reason.descKey)}
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
