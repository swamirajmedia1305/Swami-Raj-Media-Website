import { useState } from "react";
import { X, Play } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const categories = ["Political", "Social Media", "Business"] as const;
const filters = ["All", ...categories] as const;

type ReelItem = {
  src: string;
  categories: (typeof categories)[number][];
  title: string;
  order: number;
  thumbnail?: string;
};

const manualCategoryMap: Record<number, (typeof categories)[number][]> = {
  0: ["Political"],
  1: ["Business"],
  2: ["Political"],
  3: ["Political"],
  4: ["Political"],
  5: ["Political"],
  6: ["Political"],
};

// Direct references to videos in public folder
const reelItems: ReelItem[] = [
  {
    src: "/reels/v0.mp4",
    categories: manualCategoryMap[0] ?? ["Political"],
    title: "0",
    order: 0,
  },
  {
    src: "/reels/v1.mp4",
    categories: manualCategoryMap[1] ?? ["Political"],
    title: "1",
    order: 1,
  },
  {
    src: "/reels/v2.mp4",
    categories: manualCategoryMap[2] ?? ["Political"],
    title: "2",
    order: 2,
  },
  {
    src: "/reels/v3.mp4",
    categories: manualCategoryMap[3] ?? ["Political"],
    title: "3",
    order: 3,
  },
 
  {
    src: "/reels/v5.mp4",
    categories: manualCategoryMap[5] ?? ["Political"],
    title: "5",
    order: 5,
  },
  {
    src: "/reels/v6.mp4",
    categories: manualCategoryMap[6] ?? ["Political"],
    title: "6",
    order: 6,
  },
].sort((a, b) => a.order - b.order);

const ReelSection = () => {
  const { t } = useLanguage();
  const [selectedReel, setSelectedReel] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>(
    "All",
  );
  const [showAll, setShowAll] = useState(false);

  const filteredItems =
    activeFilter === "All"
      ? reelItems
      : reelItems.filter((item) => item.categories.includes(activeFilter));

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <section id="reels" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              {t('reels.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('reels.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('reels.description')}
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

          {/* Reels Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {visibleItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-[9/16] bg-card rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedReel(index)}
              >
                <video
                  src={item.src}
                  className="absolute inset-0 h-full w-full object-cover"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground ml-1" />
                  </div>
                </div>

                {/* Info Overlay on Hover */}
                <div className="absolute inset-0 flex items-end justify-between p-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/70">
                  <div>
                    <span className="block text-xs uppercase tracking-wider mb-1 text-accent">
                      {item.categories
                        .map((c) => t(`category.${c.toLowerCase().replace(" ", "")}`))
                        .join(" • ")}
                    </span>
                    <span className="font-semibold">{t("reels.reel")} {item.title}</span>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/70 text-primary-foreground">
                    <Play className="w-5 h-5 fill-primary-foreground" />
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
                {t('reels.viewAll')}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Video Modal */}
      {selectedReel !== null && filteredItems[selectedReel] && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedReel(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors z-10"
            onClick={() => setSelectedReel(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="max-w-md md:max-w-lg lg:max-w-xl w-full overflow-hidden rounded-xl bg-card shadow-2xl max-h-[90vh] flex flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative bg-black flex-1 min-h-0">
              <video
                src={filteredItems[selectedReel].src}
                className="h-full w-full object-contain"
                controls
                autoPlay
                loop
              />
            </div>
            <div className="flex items-center justify-between px-5 py-4 border-t border-border">
              <div>
                <p className="text-xs uppercase tracking-wide text-accent mb-1">
                  {filteredItems[selectedReel].categories
                    .map((c) => t(`category.${c.toLowerCase().replace(" ", "")}`))
                    .join(" • ")}
                </p>
                <p className="text-foreground font-semibold">
                  {t("reels.reel")} {filteredItems[selectedReel].title}
                </p>
              </div>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                onClick={() => setSelectedReel(null)}
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

export default ReelSection;
