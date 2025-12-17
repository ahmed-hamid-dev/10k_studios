import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 bg-background border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h3 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              10K STUDIO
            </h3>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-sm">
              Capturing timeless moments through the art of light.
              Wedding, engagement, and graduation photography.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <h4 className="font-mono text-xs tracking-widest uppercase text-primary mb-6">
              Navigation
            </h4>
            <nav className="space-y-3">
              {["Work", "Services", "Films", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="font-mono text-xs tracking-widest uppercase text-primary mb-6">
              Services
            </h4>
            <nav className="space-y-3">
              {["Weddings", "Engagements", "Graduations", "Films"].map((service) => (
                <span
                  key={service}
                  className="block font-mono text-sm text-muted-foreground"
                >
                  {service}
                </span>
              ))}
            </nav>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <h4 className="font-mono text-xs tracking-widest uppercase text-primary mb-6">
              Social
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { name: "Instagram", handle: "@10kstudio" },
                { name: "Facebook", handle: "/10kstudio" },
                { name: "Pinterest", handle: "/10kstudio" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/30">
          <p className="font-mono text-xs text-muted-foreground">
            © {currentYear} 10K Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;