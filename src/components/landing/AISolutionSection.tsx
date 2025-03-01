import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Brain, Database, LineChart, Zap } from "lucide-react";

interface AISolutionSectionProps {
  title?: string;
  description?: string;
}

const AISolutionSection = ({
  title = "How Our AI Powers Essential Commodities Price Monitoring",
  description = "Our advanced artificial intelligence analyzes data from 550 price reporting centers to monitor 22 essential food commodities, supporting strategic market interventions and buffer stock management.",
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
      title: "Data Collection",
      description:
        "Gathering historical price data, weather patterns, supply chain information, and global market trends.",
    },
    {
      icon: <Brain className="h-10 w-10 text-purple-400" />,
      title: "AI Processing",
      description:
        "Our machine learning algorithms analyze patterns and correlations across multiple data points.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-green-400" />,
      title: "Prediction Generation",
      description:
        "Creating accurate price forecasts with confidence intervals for various agricultural commodities.",
    },
    {
      icon: <Zap className="h-10 w-10 text-yellow-400" />,
      title: "Real-time Updates",
      description:
        "Continuously refining predictions as new market data becomes available.",
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
      className="relative py-24 bg-gray-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20 z-0" />

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
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
              <Card className="h-full bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300 overflow-hidden group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-full bg-gray-700/50 group-hover:bg-gray-700 transition-colors duration-300">
                      {step.icon}
                    </div>
                    {index < flowSteps.length - 1 && (
                      <ArrowRight className="h-6 w-6 text-gray-500 hidden lg:block" />
                    )}
                  </div>
                  <CardTitle className="mt-4 text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated data flow visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 relative h-64 rounded-xl overflow-hidden border border-gray-700 bg-gray-800/30 backdrop-blur-sm"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">
                Real-time Data Processing
              </h3>
              <p className="text-gray-400">
                Watch how our AI transforms raw data into actionable insights
              </p>
            </div>
          </div>

          {/* Animated data particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-blue-500"
                initial={{
                  x: -10,
                  y: Math.random() * 300,
                  opacity: 0.7,
                  backgroundColor: ["#3B82F6", "#A855F7", "#22C55E", "#EAB308"][
                    Math.floor(Math.random() * 4)
                  ],
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
