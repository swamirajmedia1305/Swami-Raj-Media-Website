import { useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const categories = ["Political", "Social Media", "Business"] as const;
const filters = ["All", ...categories] as const;

type WorkItem = {
  src: string;
  categories: (typeof categories)[number][];
  title: string;
  order: number;
};

const manualCategoryMap: Record<number, (typeof categories)[number][]> = {
  1: ["Business", "Social Media"],
  2: ["Political"],
  3: ["Political"],
  4: ["Political"],
  5: ["Political"],
  6: ["Political"],
  7: ["Political"],
  8: ["Social Media", "Business"],
  9: ["Political"],
  10: ["Political"],
  11: ["Political"],
  12: ["Political"],
  13: ["Social Media"],
  14: ["Political"],
  15: ["Social Media", "Business"],
  16: ["Political"],
  17: ["Political"],
  18: ["Political"],
  19: ["Political"],
  20: ["Political"],
  21: ["Political"],
};

// Direct references to images in public folder
const workItems: WorkItem[] = Array.from({ length: 21 }, (_, i) => {
  const order = i + 1;
  return {
    src: `/images/${order}.jpeg`,
    categories: manualCategoryMap[order] ?? ["Political"],
    title: order.toString(),
    order,
  };
}).sort((a, b) => a.order - b.order);

const WorkSection = () => {
  const { t } = useLanguage();
  const [selectedWork, setSelectedWork] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>(
    "All",
  );
  const [showAll, setShowAll] = useState(false);

  const filteredItems =
    activeFilter === "All"
      ? workItems
      : workItems.filter((item) => item.categories.includes(activeFilter));

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <section id="work" className="py-20 md:py-28 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              {t('work.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('work.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('work.description')}
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-primary/10 border border-border"
                }`}
              >
                {t(`category.${filter.toLowerCase().replace(' ', '')}`)}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {visibleItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-square bg-card rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedWork(index)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply" />

                <div className="absolute inset-0 flex items-end justify-between p-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <span className="block text-xs uppercase tracking-wider mb-1 text-accent">
                      {item.categories.map((c) => t(`category.${c.toLowerCase().replace(" ", "")}`)).join(" • ")}
                    </span>
                    <span className="font-semibold">{t("work.project")} {item.title}</span>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/70 text-primary-foreground">
                    <span className="text-lg">↗</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!showAll && filteredItems.length > visibleItems.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                {t('work.viewAll')}
              </button>
            </div>
          )}

          {/* Note */}
          {/* <p className="text-center text-muted-foreground mt-8 text-sm">
            Upload your campaign images and videos to showcase your best work here.
          </p> */}
        </div>
      </div>

      {/* Lightbox */}
      {selectedWork !== null && filteredItems[selectedWork] && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedWork(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            onClick={() => setSelectedWork(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="max-w-5xl w-full overflow-hidden rounded-xl bg-card shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-video bg-black">
              <img
                src={filteredItems[selectedWork].src}
                alt={filteredItems[selectedWork].title}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-between px-5 py-4 border-t border-border">
              <div>
                <p className="text-xs uppercase tracking-wide text-accent mb-1">
                  {filteredItems[selectedWork].categories
                    .map((c) => t(`category.${c.toLowerCase().replace(" ", "")}`))
                    .join(" • ")}
                </p>
                <p className="text-foreground font-semibold">
                  {t("work.project")} {filteredItems[selectedWork].title}
                </p>
              </div>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                onClick={() => setSelectedWork(null)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkSection;
