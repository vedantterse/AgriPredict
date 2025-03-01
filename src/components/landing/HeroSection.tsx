import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { TrendingUp, AlertTriangle, BarChart3, LineChart } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Revolutionizing Agricultural Price Prediction with AI",
  subtitle = "Our cutting-edge AI solution addresses critical market volatility by monitoring 22 essential food commodities across 550 price reporting centers, enabling strategic interventions and stabilizing markets.",
  ctaText = "Discover the Solution",
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </div>

      {/* 3D Animated data visualization elements */}
      <div className="absolute inset-0 z-10 opacity-40">
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-emerald-500/30 blur-xl"
          animate={{
            x: [0, 100, 200, 100, 0],
            y: [0, 50, 100, 150, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
          }}
          style={{ top: "20%", left: "10%" }}
        />
        <motion.div
          className="absolute w-40 h-40 rounded-full bg-blue-500/30 blur-xl"
          animate={{
            x: [200, 100, 0, 100, 200],
            y: [100, 150, 200, 150, 100],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut",
          }}
          style={{ top: "30%", right: "15%" }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-purple-500/30 blur-xl"
          animate={{
            x: [100, 200, 300, 200, 100],
            y: [300, 250, 200, 250, 300],
            scale: [1, 1.3, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "easeInOut",
          }}
          style={{ bottom: "20%", left: "25%" }}
        />
      </div>

      {/* Grid lines overlay for tech effect with perspective */}
      <div className="absolute inset-0 z-10 opacity-10 perspective-[1000px]">
        <motion.div
          initial={{ rotateX: 20, rotateY: -10 }}
          animate={{ rotateX: 10, rotateY: 5 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="w-full h-full transform-gpu"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating 3D elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-emerald-500"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.3 + Math.random() * 0.5,
              scale: 0.5 + Math.random() * 2,
            }}
            animate={{
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight - 100,
                Math.random() * window.innerHeight,
              ],
              opacity: [
                0.3 + Math.random() * 0.5,
                0.8,
                0.3 + Math.random() * 0.5,
              ],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 md:px-8 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block"
        >
          <div className="p-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
            <BarChart3 className="h-8 w-8 text-emerald-400" />
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-white to-blue-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-3xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>

        {/* Key challenges section */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
            <TrendingUp className="h-4 w-4 text-red-400" />
            <span className="text-sm text-gray-200">Price Volatility</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
            <AlertTriangle className="h-4 w-4 text-amber-400" />
            <span className="text-sm text-gray-200">Market Uncertainty</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
            <LineChart className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-gray-200">Unpredictable Trends</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          {/* Glassmorphism CTA button with 3D effect */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={onCtaClick}
              className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white px-10 py-7 rounded-xl text-lg font-medium transition-all shadow-[0_10px_25px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_20px_35px_-10px_rgba(16,185,129,0.5)]"
              size="lg"
            >
              <span className="relative z-10">{ctaText}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 backdrop-blur-sm"></span>
              <span className="absolute -inset-[100%] animate-[spin_15s_linear_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent"></span>
            </Button>
          </motion.div>

          {/* Button glow effect */}
          <div className="absolute -inset-1 rounded-xl blur-xl bg-gradient-to-r from-emerald-600/30 to-blue-600/30 opacity-70 -z-10 group-hover:opacity-100 transition-all duration-500"></div>
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
