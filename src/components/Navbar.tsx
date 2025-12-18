import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import logo from "@/assets/10k_logo.png";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Work", href: "#portfolio", num: "01" },
    { name: "Gallery", href: "/gallery", num: "02" },
    { name: "Services", href: "#services", num: "03" },
    { name: "Films", href: "#videos", num: "04" },
    { name: "Contact", href: "#contact", num: "05" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="group relative">
              <img
                src={logo}
                alt="10K Studio Logo"
                className="h-10 w-auto transition-opacity duration-300 group-hover:opacity-80"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <span className="text-primary mr-1">{item.num}</span>
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 px-6 py-3 border border-primary/50 text-primary font-mono text-xs tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              Book Now
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full border border-primary/50 text-primary"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-foreground"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background md:hidden"
          >
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between p-6">
                <a href="/" onClick={() => setIsOpen(false)}>
                  <img
                    src={logo}
                    alt="10K Studio Logo"
                    className="h-10 w-auto"
                  />
                </a>
                <button onClick={() => setIsOpen(false)} className="p-2 text-foreground">
                  <X size={24} />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center px-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="group py-4 border-b border-border/30"
                  >
                    <span className="text-primary font-mono text-sm mr-4">{item.num}</span>
                    <span className="font-display text-5xl text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className="p-6 border-t border-border/30">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-primary-foreground font-mono text-sm tracking-widest uppercase"
                >
                  Book Your Session
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;