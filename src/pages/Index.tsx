import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeText from "@/components/MarqueeText";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import VideoShowcase from "@/components/VideoShowcase";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background grain-overlay">
      <Navbar />
      <Hero />
      <MarqueeText text="Weddings • Engagements • Graduations • Films" />
      <Services />
      <Portfolio />
      <VideoShowcase />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;