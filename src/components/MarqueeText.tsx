import { motion } from "framer-motion";

interface MarqueeTextProps {
  text: string;
  speed?: number;
}

const MarqueeText = ({ text, speed = 20 }: MarqueeTextProps) => {
  const repeatedText = Array(4).fill(text).join(" • ");

  return (
    <div className="overflow-hidden py-8 bg-primary">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >
        <span className="font-display text-4xl md:text-6xl text-primary-foreground px-4">
          {repeatedText}
        </span>
        <span className="font-display text-4xl md:text-6xl text-primary-foreground px-4">
          {repeatedText}
        </span>
      </motion.div>
    </div>
  );
};

export default MarqueeText;