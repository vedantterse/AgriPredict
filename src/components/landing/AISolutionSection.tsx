import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Brain,
  Database,
  LineChart,
  Zap,
  Calendar,
  BarChart2,
  TrendingUp,
  CloudRain,
} from "lucide-react";

interface AISolutionSectionProps {
  title?: string;
  description?: string;
}

const AISolutionSection = ({
  title = "AI-Powered Price Prediction Model",
  description = "Our machine learning model is trained on historical data from 550 price reporting centers to predict future prices for 22 essential food commodities, helping with strategic planning and buffer stock management.",
}: AISolutionSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const flowSteps = [
    {
      icon: <Database className="h-10 w-10 text-blue-400" />,
      title: "Historical Data Training",
      description:
        "Training our model on extensive historical price data from 550 reporting centers to establish baseline patterns and trends.",
    },
    {
      icon: <Brain className="h-10 w-10 text-purple-400" />,
      title: "Pattern Recognition",
      description:
        "Our algorithms learn to identify recurring patterns and correlations in price fluctuations across different agricultural commodities.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-green-400" />,
      title: "Price Prediction",
      description:
        "Generating future price forecasts for 22 essential food commodities based on learned patterns and seasonal factors.",
    },
    {
      icon: <Zap className="h-10 w-10 text-yellow-400" />,
      title: "Model Refinement",
      description:
        "Continuously improving our prediction model by incorporating new historical data and refining our algorithms.",
    },
  ];

  const predictionFactors = [
    {
      icon: <Calendar className="h-6 w-6 text-emerald-400" />,
      title: "Seasonal Patterns",
      description:
        "Analyzing historical crop cycles and seasonal price fluctuations",
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-400" />,
      title: "Production Estimates",
      description:
        "Incorporating current and projected crop sowing and yield data",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-purple-400" />,
      title: "Market Trends",
      description: "Identifying emerging price patterns and market dynamics",
    },
    {
      icon: <CloudRain className="h-6 w-6 text-cyan-400" />,
      title: "Environmental Factors",
      description:
        "Accounting for weather patterns and climate impacts on production",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const dataFlowVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20 z-0" />

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.25, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {description}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Connecting lines between cards */}
          <svg
            className="absolute top-1/2 left-0 w-full h-4 -translate-y-1/2 hidden lg:block"
            viewBox="0 0 1000 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M0 5 H1000"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              variants={dataFlowVariants}
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1000" y2="0">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="33%" stopColor="#A855F7" />
                <stop offset="66%" stopColor="#22C55E" />
                <stop offset="100%" stopColor="#EAB308" />
              </linearGradient>
            </defs>
          </svg>

          {flowSteps.map((step, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300 overflow-hidden group hover:shadow-lg hover:shadow-blue-500/10">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-full bg-gray-700/50 group-hover:bg-gray-700 transition-colors duration-300 shadow-inner">
                      {step.icon}
                    </div>
                    {index < flowSteps.length - 1 && (
                      <ArrowRight className="h-6 w-6 text-gray-500 hidden lg:block group-hover:text-gray-400 transition-colors duration-300" />
                    )}
                  </div>
                  <CardTitle className="mt-4 text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Prediction Factors Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
            Key Inputs for Our Prediction Model
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {predictionFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-lg p-5 hover:bg-gray-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-gray-700/50 flex-shrink-0">
                    {factor.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white">
                      {factor.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {factor.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animated data flow visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 relative h-64 rounded-xl overflow-hidden border border-gray-700 bg-gray-800/30 backdrop-blur-sm shadow-lg shadow-blue-500/5"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Predictive Model Training
              </h3>
              <p className="text-gray-400 max-w-2xl">
                Our machine learning model is trained on historical data to
                identify patterns and predict future prices for 22 essential
                commodities, supporting informed decision-making
              </p>
            </div>
          </div>

          {/* Animated data particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-blue-500"
                initial={{
                  x: -10,
                  y: Math.random() * 300,
                  opacity: 0.7,
                  backgroundColor: [
                    "#3B82F6",
                    "#A855F7",
                    "#22C55E",
                    "#EAB308",
                    "#06B6D4",
                  ][Math.floor(Math.random() * 5)],
                }}
                animate={{
                  x: [null, 1000],
                  opacity: [0.7, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AISolutionSection;
