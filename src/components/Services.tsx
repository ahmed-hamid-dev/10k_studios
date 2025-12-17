import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import weddingImage from "@/assets/wedding-ceremony.jpg";
import graduationImage from "@/assets/graduation-portrait.jpg";
import engagementImage from "@/assets/engagement-couple.jpg";

const services = [
  {
    num: "01",
    title: "Wedding",
    subtitle: "Photography",
    description: "From intimate elopements to grand celebrations, we capture every tear, laugh, and stolen glance.",
    image: weddingImage,
    features: ["Full Day Coverage", "Second Shooter", "Edited Gallery", "Wedding Film"],
  },
  {
    num: "02",
    title: "Engagement",
    subtitle: "Sessions",
    description: "Tell your love story in the most beautiful way. Perfect for save-the-dates or simply celebrating your journey.",
    image: engagementImage,
    features: ["2 Hour Session", "Multiple Locations", "50+ Edited Photos", "Prints Available"],
  },
  {
    num: "03",
    title: "Graduation",
    subtitle: "Portraits",
    description: "Celebrate your academic achievements with stunning portraits that capture this milestone moment.",
    image: graduationImage,
    features: ["Cap & Gown Shots", "Campus Locations", "30+ Edited Photos", "Quick Turnaround"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-background relative">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
              What We Do
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-foreground">
              Our<br />
              <span className="italic text-primary">Services</span>
            </h2>
          </div>
          <p className="font-mono text-sm text-muted-foreground max-w-sm leading-relaxed">
            Every moment deserves to be captured with intention, artistry, and an eye for the extraordinary.
          </p>
        </motion.div>
      </div>

      {/* Services List */}
      <div className="container mx-auto px-6">
        {services.map((service, index) => (
          <motion.div
            key={service.num}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative py-12 border-t border-border/50 last:border-b"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Number */}
              <div className="lg:col-span-1">
                <span className="font-mono text-sm text-primary">{service.num}</span>
              </div>

              {/* Title */}
              <div className="lg:col-span-4">
                <h3 className="font-display text-4xl md:text-5xl text-foreground group-hover:text-primary transition-colors duration-500">
                  {service.title}
                  <span className="block text-2xl md:text-3xl italic text-muted-foreground group-hover:text-primary/70 transition-colors duration-500">
                    {service.subtitle}
                  </span>
                </h3>
              </div>

              {/* Description */}
              <div className="lg:col-span-4">
                <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 border border-border text-xs font-mono text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image & Link */}
              <div className="lg:col-span-3 flex items-center justify-end gap-6">
                {/* Hidden image that appears on hover */}
                <div className="hidden lg:block relative w-32 h-40 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <a
                  href="#contact"
                  className="w-14 h-14 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500"
                >
                  <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;