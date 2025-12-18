import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Received",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", eventType: "", eventDate: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+20 123-4567" },
    { icon: Mail, label: "Email", value: "10kstudios@gmail.com" },
    { icon: MapPin, label: "Studio", value: "Giza, Cairo" },
    { icon: Clock, label: "Hours", value: "Mon - Sat, 9AM - 6PM" },
  ];

  return (
    <section id="contact" className="py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 font-display text-[20vw] leading-none text-foreground/[0.02] pointer-events-none select-none">
        BOOK
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-20"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            Start Your Journey
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-8">
            Let's Create<br />
            <span className="text-outline">Something</span><br />
            <span className="italic text-primary">Beautiful</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="w-12 h-12 border border-border flex items-center justify-center mb-4 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="font-mono text-xs tracking-wider uppercase text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="font-display text-lg text-foreground">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-border pt-12">
              <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
                Ready to capture your story? Fill out the form and we'll reach out 
                within 24 hours to discuss your vision and how we can bring it to life.
              </p>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs tracking-wider uppercase text-foreground">Follow Us</span>
                <div className="flex gap-2">
                  {["IG", "FB", "TW"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 border border-border flex items-center justify-center font-mono text-xs text-muted-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs tracking-wider uppercase text-muted-foreground mb-3">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-border font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="John & Jane"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs tracking-wider uppercase text-muted-foreground mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-border font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="hello@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs tracking-wider uppercase text-muted-foreground mb-3">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-b border-border font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs tracking-wider uppercase text-muted-foreground mb-3">
                    Event Type *
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-border font-mono text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer"
                  >
                    <option value="" className="bg-background">Select</option>
                    <option value="wedding" className="bg-background">Wedding</option>
                    <option value="engagement" className="bg-background">Engagement</option>
                    <option value="graduation" className="bg-background">Graduation</option>
                    <option value="other" className="bg-background">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs tracking-wider uppercase text-muted-foreground mb-3">
                  Event Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-border font-mono text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer"
                />
              </div>

              <div>
                <label className="block font-mono text-xs tracking-wider uppercase text-muted-foreground mb-3">
                  Your Vision
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-0 py-3 bg-transparent border-b border-border font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your event, preferred style, locations..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 bg-primary text-primary-foreground font-mono text-sm tracking-widest uppercase flex items-center justify-center gap-3 hover:shadow-glow transition-all duration-300 mt-8"
              >
                Send Message
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;