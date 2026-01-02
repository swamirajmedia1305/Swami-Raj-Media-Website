import { Landmark, Smartphone, Rocket } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const services = [
  {
    icon: Landmark,
    titleKey: "services.card1.title",
    descriptionKey: "services.card1.description",
    featureKeys: [
      "services.card1.feature1",
      "services.card1.feature2",
      "services.card1.feature3",
      "services.card1.feature4",
    ],
  },
  {
    icon: Smartphone,
    titleKey: "services.card2.title",
    descriptionKey: "services.card2.description",
    featureKeys: [
      "services.card2.feature1",
      "services.card2.feature2",
      "services.card2.feature3",
      "services.card2.feature4",
    ],
  },
  {
    icon: Rocket,
    titleKey: "services.card3.title",
    descriptionKey: "services.card3.description",
    featureKeys: [
      "services.card3.feature1",
      "services.card3.feature2",
      "services.card3.feature3",
      "services.card3.feature4",
    ],
  },
];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              {t("services.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t("services.title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("services.description")}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.titleKey}
                className="group p-8 bg-card rounded-2xl shadow-card hover:shadow-lg transition-all duration-300 border border-border hover:border-accent/30 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t(service.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6">
                  {t(service.descriptionKey)}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.featureKeys.map((featureKey) => (
                    <li key={featureKey} className="flex items-center gap-3 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {t(featureKey)}
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
