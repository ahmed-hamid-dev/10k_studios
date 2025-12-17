import { motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import weddingCeremony from "@/assets/wedding-ceremony.jpg";
import engagementCouple from "@/assets/engagement-couple.jpg";
import graduationPortrait from "@/assets/graduation-portrait.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";
import engagementRing from "@/assets/engagement-ring.jpg";
import weddingDance from "@/assets/wedding-dance.jpg";

const portfolioItems = [
  { 
    id: 1, 
    image: heroWedding, 
    category: "Wedding", 
    title: "Sarah & Michael",
    location: "Napa Valley",
    year: "2024"
  },
  { 
    id: 2, 
    image: engagementCouple, 
    category: "Engagement", 
    title: "Emma & James",
    location: "Golden Gate Park",
    year: "2024"
  },
  { 
    id: 3, 
    image: graduationPortrait, 
    category: "Graduation", 
    title: "Jessica Chen",
    location: "Stanford University",
    year: "2024"
  },
  { 
    id: 4, 
    image: weddingCeremony, 
    category: "Wedding", 
    title: "The Anderson Wedding",
    location: "Monterey Bay",
    year: "2024"
  },
  { 
    id: 5, 
    image: engagementRing, 
    category: "Engagement", 
    title: "The Proposal",
    location: "Big Sur",
    year: "2024"
  },
  { 
    id: 6, 
    image: weddingDance, 
    category: "Wedding", 
    title: "First Dance",
    location: "The Ritz Carlton",
    year: "2024"
  },
];

const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Number */}
      <div className="absolute top-20 -right-20 font-display text-[30vw] leading-none text-foreground/[0.02] pointer-events-none select-none">
        W
      </div>

      {/* Section Header */}
      <div className="container mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            Selected Works
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-8">
            Featured<br />
            <span className="text-outline">Gallery</span>
          </h2>
          <p className="font-mono text-sm text-muted-foreground max-w-md leading-relaxed">
            A curated collection of our most cherished captures. 
            Each image tells a story of love, joy, and unforgettable moments.
          </p>
        </motion.div>
      </div>

      {/* Asymmetric Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Large Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 md:col-span-8 aspect-[16/10] relative group cursor-pointer"
            onMouseEnter={() => setHoveredId(1)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={portfolioItems[0].image}
              alt={portfolioItems[0].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="font-mono text-xs tracking-widest uppercase text-primary">{portfolioItems[0].category}</span>
              <h3 className="font-display text-3xl md:text-4xl text-cream mt-2">{portfolioItems[0].title}</h3>
              <p className="font-mono text-sm text-cream/60 mt-2">{portfolioItems[0].location} — {portfolioItems[0].year}</p>
            </div>
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
              <Plus className="w-6 h-6 text-primary-foreground" />
            </div>
          </motion.div>

          {/* Tall Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="col-span-6 md:col-span-4 aspect-[3/4] md:aspect-[3/5] relative group cursor-pointer"
            onMouseEnter={() => setHoveredId(2)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={portfolioItems[1].image}
              alt={portfolioItems[1].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="font-mono text-xs tracking-widest uppercase text-primary">{portfolioItems[1].category}</span>
              <h3 className="font-display text-xl md:text-2xl text-cream mt-1">{portfolioItems[1].title}</h3>
            </div>
          </motion.div>

          {/* Square Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-6 md:col-span-4 aspect-square relative group cursor-pointer"
            onMouseEnter={() => setHoveredId(3)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={portfolioItems[2].image}
              alt={portfolioItems[2].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="font-mono text-xs tracking-widest uppercase text-primary">{portfolioItems[2].category}</span>
              <h3 className="font-display text-xl md:text-2xl text-cream mt-1">{portfolioItems[2].title}</h3>
            </div>
          </motion.div>

          {/* Wide Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-12 md:col-span-8 aspect-[16/9] relative group cursor-pointer"
            onMouseEnter={() => setHoveredId(4)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={portfolioItems[3].image}
              alt={portfolioItems[3].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="font-mono text-xs tracking-widest uppercase text-primary">{portfolioItems[3].category}</span>
              <h3 className="font-display text-2xl md:text-3xl text-cream mt-2">{portfolioItems[3].title}</h3>
            </div>
          </motion.div>

          {/* Small Images */}
          {portfolioItems.slice(4).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="col-span-6 aspect-[4/5] relative group cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="font-mono text-xs tracking-widest uppercase text-primary">{item.category}</span>
                <h3 className="font-display text-xl text-cream mt-1">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* View All CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 mt-16 text-center"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary font-mono text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          View Full Gallery
          <Plus className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
};

export default Portfolio;