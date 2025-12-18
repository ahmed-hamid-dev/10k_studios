import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Dynamically import all images from the gallery folder
const imageModules = import.meta.glob('@/assets/gallery/*.{jpg,jpeg,png,gif,webp}', { eager: true });
const galleryImages = Object.entries(imageModules).map(([path, module]: [string, any]) => ({
  src: module.default,
  // Extract filename without extension for alt text
  alt: path.split('/').pop()?.replace(/\.\w+$/, '') || 'Gallery image'
}));

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-background grain-overlay">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
              Complete Collection
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-8">
              Full<br />
              <span className="text-outline">Gallery</span>
            </h1>
            <p className="font-mono text-sm text-muted-foreground max-w-md leading-relaxed">
              Explore our complete portfolio of captured moments. Each photograph
              represents a unique story, emotion, and celebration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid - Asymmetric Masonry Layout */}
      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {galleryImages.map((image, index) => {
              // Create varied layout pattern - cycles through different sizes
              const layoutPattern = [
                "col-span-12 md:col-span-8 aspect-[16/10]",     // Large horizontal
                "col-span-6 md:col-span-4 aspect-[3/4] md:aspect-[3/5]", // Tall
                "col-span-6 md:col-span-4 aspect-square",       // Square
                "col-span-12 md:col-span-8 aspect-[16/9]",      // Wide
                "col-span-6 aspect-[4/5]",                       // Portrait
                "col-span-6 aspect-[4/5]",                       // Portrait
              ];

              const layoutClass = layoutPattern[index % layoutPattern.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: (index % 6) * 0.1 }}
                  className={`${layoutClass} relative group cursor-pointer overflow-hidden`}
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                    <span className="text-primary-foreground text-xs font-mono">VIEW</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Empty State */}
          {galleryImages.length === 0 && (
            <div className="text-center py-20">
              <p className="font-mono text-sm text-muted-foreground">
                No images found in the gallery folder.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-noir/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-cream" />
          </button>
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}

      <Footer />
    </main>
  );
};

export default Gallery;
