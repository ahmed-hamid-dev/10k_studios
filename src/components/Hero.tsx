import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowDownRight } from "lucide-react";

// Dynamically import all images from the hero folder
const imageModules = import.meta.glob('@/assets/hero/*.{jpg,jpeg,png,gif,webp}', { eager: true });
const heroImages = Object.values(imageModules).map((module: any) => module.default);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Auto-cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-background"
    >
      {/* Background Images with Fade Transition */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            alt="Cinematic photography"
            className="w-full h-full object-cover opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      </motion.div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--gold-muted)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--gold-muted)) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }} />
      </div>

      {/* Main Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
          >
            <span className="font-mono text-xs tracking-[0.4em] uppercase text-primary">
              Photography & Film Studio
            </span>
          </motion.div>

          {/* Main Title */}
          <div className="relative mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.85] tracking-tight text-foreground"
            >
              CAPTURING
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.85] tracking-tight text-outline"
            >
              TIMELESS
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.85] tracking-tight"
            >
              <span className="text-primary italic">Moments</span>
            </motion.h1>

            {/* Floating Badge */}
          </div>

          {/* Bottom Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <p className="font-mono text-sm text-muted-foreground max-w-md leading-relaxed">
              We don't just take photos. We craft visual stories that echo 
              through generations. Specializing in weddings, engagements, 
              and milestone celebrations.
            </p>

            <a
              href="#portfolio"
              className="group flex items-center gap-4 text-foreground hover:text-primary transition-colors"
            >
              <span className="font-mono text-sm tracking-wider uppercase">View Our Work</span>
              <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                <ArrowDownRight className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
          />
        </div>
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute top-8 right-8 w-24 h-24 border-t border-r border-primary/20" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-b border-l border-primary/20" />
    </section>
  );
};

export default Hero;