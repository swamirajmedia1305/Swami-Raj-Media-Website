import { useState } from "react";
import { X, Play } from "lucide-react";

const workItems = [
  { type: "image", category: "Political", title: "Election Campaign Poster" },
  { type: "image", category: "Social Media", title: "Instagram Marketing" },
  { type: "image", category: "Business", title: "Brand Identity Design" },
  { type: "image", category: "Political", title: "Rally Event Coverage" },
  { type: "image", category: "Social Media", title: "Facebook Ad Campaign" },
  { type: "image", category: "Business", title: "Product Launch Graphics" },
];

const WorkSection = () => {
  const [selectedWork, setSelectedWork] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Political", "Social Media", "Business"];

  const filteredItems =
    activeFilter === "All"
      ? workItems
      : workItems.filter((item) => item.category === activeFilter);

  return (
    <section id="work" className="py-20 md:py-28 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Take a look at some of our successful campaigns, creatives, and projects.
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
                {filter}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-square bg-card rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedWork(index)}
              >
                {/* Placeholder - Replace with actual images */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      {item.type === "video" ? (
                        <Play className="w-6 h-6 text-primary" />
                      ) : (
                        <span className="text-2xl">📸</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                  </div>
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-primary-foreground">
                    <span className="block text-xs uppercase tracking-wider mb-1 text-accent">
                      {item.category}
                    </span>
                    <span className="font-semibold">{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-muted-foreground mt-8 text-sm">
            Upload your campaign images and videos to showcase your best work here.
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {selectedWork !== null && (
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
          <div className="max-w-4xl w-full aspect-video bg-card rounded-xl flex items-center justify-center">
            <p className="text-muted-foreground">
              {filteredItems[selectedWork]?.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkSection;
