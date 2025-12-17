import { motion } from "framer-motion";
import { Play, Volume2 } from "lucide-react";
import { useState } from "react";

const videos = [
  {
    id: 1,
    title: "Sarah & Michael",
    subtitle: "Wedding Film",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop",
    duration: "4:32",
  },
  {
    id: 2,
    title: "Emma & James",
    subtitle: "Love Story",
    thumbnail: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=1200&h=800&fit=crop",
    duration: "2:15",
  },
  {
    id: 3,
    title: "Class of 2024",
    subtitle: "Highlights",
    thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop",
    duration: "3:48",
  },
];

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  return (
    <section id="videos" className="py-32 bg-background relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16"
        >
          <div>
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
              Cinematic Films
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-foreground">
              Motion<br />
              <span className="italic text-primary">Stories</span>
            </h2>
          </div>
          <p className="font-mono text-sm text-muted-foreground max-w-sm leading-relaxed lg:text-right">
            We bring your memories to life through cinematic storytelling. 
            Every frame crafted with intention and emotion.
          </p>
        </motion.div>

        {/* Main Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video mb-8 group cursor-pointer"
        >
          <img
            src={videos[activeVideo].thumbnail}
            alt={videos[activeVideo].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-noir/40 group-hover:bg-noir/50 transition-colors duration-500" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-cream/50 flex items-center justify-center backdrop-blur-sm group-hover:border-primary group-hover:bg-primary/20 transition-all duration-500"
            >
              <Play className="w-8 h-8 md:w-12 md:h-12 text-cream ml-1" fill="currentColor" />
            </motion.div>
          </div>

          {/* Video Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-noir/90 to-transparent">
            <div className="flex items-end justify-between">
              <div>
                <span className="font-mono text-xs tracking-widest uppercase text-primary">
                  {videos[activeVideo].subtitle}
                </span>
                <h3 className="font-display text-3xl md:text-5xl text-cream mt-2">
                  {videos[activeVideo].title}
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <Volume2 className="w-5 h-5 text-cream/60" />
                <span className="font-mono text-sm text-cream/60">{videos[activeVideo].duration}</span>
              </div>
            </div>
          </div>

          {/* Corner Frames */}
          <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary/50" />
          <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-primary/50" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-primary/50" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary/50" />
        </motion.div>

        {/* Video Thumbnails */}
        <div className="grid grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <motion.button
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveVideo(index)}
              className={`relative aspect-video group overflow-hidden ${
                activeVideo === index ? "ring-2 ring-primary" : ""
              }`}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 transition-colors duration-300 ${
                activeVideo === index ? "bg-primary/20" : "bg-noir/50 group-hover:bg-noir/30"
              }`} />
              
              {/* Active Indicator */}
              {activeVideo === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                />
              )}

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-cream/90 flex items-center justify-center">
                  <Play className="w-4 h-4 text-noir ml-0.5" fill="currentColor" />
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-2 left-2 right-2">
                <p className="font-mono text-[10px] text-cream/80 truncate">{video.title}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;