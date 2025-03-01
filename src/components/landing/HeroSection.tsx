import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "AI-Powered Essential Commodities Price Prediction",
  subtitle = "Monitoring 22 essential food commodities across 550 price reporting centers to stabilize market prices and support strategic interventions.",
  ctaText = "Try for Free",
  onCtaClick = () => console.log("CTA clicked"),
  backgroundImage = "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[800px] bg-black overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
      </div>

      {/* Animated data visualization elements */}
      <div className="absolute inset-0 z-10 opacity-40">
        <motion.div
          className="absolute w-24 h-24 rounded-full bg-blue-500/30 blur-xl"
          animate={{
            x: [0, 100, 200, 100, 0],
            y: [0, 50, 100, 150, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          style={{ top: "20%", left: "10%" }}
        />
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-green-500/30 blur-xl"
          animate={{
            x: [200, 100, 0, 100, 200],
            y: [100, 150, 200, 150, 100],
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          style={{ top: "30%", right: "15%" }}
        />
        <motion.div
          className="absolute w-40 h-40 rounded-full bg-purple-500/30 blur-xl"
          animate={{
            x: [100, 200, 300, 200, 100],
            y: [300, 250, 200, 250, 300],
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          style={{ bottom: "20%", left: "25%" }}
        />
      </div>

      {/* Grid lines overlay for tech effect */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 md:px-8 lg:px-16 text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-3xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Glassmorphism CTA button */}
          <Button
            onClick={onCtaClick}
            className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-6 rounded-lg text-lg font-medium transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            size="lg"
          >
            {ctaText}
          </Button>
        </motion.div>

        {/* Animated arrow indicator */}
        <motion.div
          className="absolute bottom-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
