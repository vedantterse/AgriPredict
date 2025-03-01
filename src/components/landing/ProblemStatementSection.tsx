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
  TrendingDown,
  AlertTriangle,
  DollarSign,
  BarChart2,
  Clock,
} from "lucide-react";

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  color?: string;
}

const ProblemCard = ({
  icon = <AlertTriangle className="h-8 w-8 text-amber-500" />,
  title = "Market Challenge",
  description = "Agricultural markets face unpredictable price fluctuations that impact farmer livelihoods.",
  delay = 0,
  color = "amber",
}: ProblemCardProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  const gradientMap = {
    red: "from-red-900/30 via-red-800/20 to-transparent",
    amber: "from-amber-900/30 via-amber-800/20 to-transparent",
    emerald: "from-emerald-900/30 via-emerald-800/20 to-transparent",
    blue: "from-blue-900/30 via-blue-800/20 to-transparent",
    purple: "from-purple-900/30 via-purple-800/20 to-transparent",
  };

  const borderMap = {
    red: "border-red-800/30",
    amber: "border-amber-800/30",
    emerald: "border-emerald-800/30",
    blue: "border-blue-800/30",
    purple: "border-purple-800/30",
  };

  const gradient = gradientMap[color] || gradientMap.amber;
  const borderColor = borderMap[color] || borderMap.amber;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50, rotateY: 15 },
        visible: {
          opacity: 1,
          y: 0,
          rotateY: 0,
          transition: {
            duration: 0.7,
            delay: delay,
            ease: [0.25, 0.1, 0.25, 1.0],
          },
        },
      }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        z: 20,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className="h-full transform-gpu"
    >
      <Card
        className={`h-full bg-gray-900/80 backdrop-blur-sm border ${borderColor} overflow-hidden relative`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} pointer-events-none`}
        />
        <CardHeader>
          <div className="rounded-full bg-gray-800/80 backdrop-blur-sm w-14 h-14 flex items-center justify-center mb-3 shadow-inner border border-gray-700/50">
            {icon}
          </div>
          <CardTitle className="text-xl text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-300 text-base">
            {description}
          </CardDescription>
        </CardContent>

        {/* Decorative elements */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gray-800/20 backdrop-blur-sm z-0 opacity-30"></div>
        <div className="absolute top-1/2 right-4 w-1 h-1 rounded-full bg-white opacity-30"></div>
        <div className="absolute bottom-1/3 left-4 w-2 h-2 rounded-full bg-white opacity-20"></div>
      </Card>
    </motion.div>
  );
};

interface ProblemStatementSectionProps {
  title?: string;
  subtitle?: string;
  problems?: ProblemCardProps[];
}

const ProblemStatementSection = ({
  title = "Critical Market Challenges We're Solving",
  subtitle = "The Department of Consumer Affairs faces significant obstacles in monitoring and stabilizing prices of essential food commodities that impact millions of lives daily.",
  problems = [
    {
      icon: <TrendingDown className="h-8 w-8 text-red-500" />,
      title: "Extreme Price Volatility",
      description:
        "Unpredictable market fluctuations create planning uncertainty, reduce profit margins for farmers, and cause financial instability throughout the agricultural sector.",
      delay: 0.1,
      color: "red",
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-amber-500" />,
      title: "Critical Information Gaps",
      description:
        "Limited access to accurate, real-time market data leads to uninformed decisions, missed opportunities, and inefficient resource allocation across the supply chain.",
      delay: 0.2,
      color: "amber",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-emerald-500" />,
      title: "Supply Chain Inefficiency",
      description:
        "Multiple intermediaries in the supply chain significantly reduce farmer earnings while increasing consumer prices, creating market distortions and economic inequity.",
      delay: 0.3,
      color: "emerald",
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-blue-500" />,
      title: "Inadequate Forecasting",
      description:
        "Traditional prediction methods fail to account for complex market variables, leading to inaccurate projections and poor strategic planning for buffer stock management.",
      delay: 0.4,
      color: "blue",
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-500" />,
      title: "Delayed Market Interventions",
      description:
        "Slow response to market fluctuations prevents timely interventions, allowing price spikes to impact vulnerable populations before corrective measures can be implemented.",
      delay: 0.5,
      color: "purple",
    },
  ],
}: ProblemStatementSectionProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 bg-black text-white overflow-hidden relative"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black/80 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')] bg-cover bg-center opacity-5 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: "easeOut",
              },
            },
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-amber-400 to-emerald-400">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1000px]">
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              delay={problem.delay}
              color={problem.color}
            />
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: 0.6,
                ease: "easeOut",
              },
            },
          }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#solution"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/20 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="mr-2 font-medium">Discover our AI solution</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatementSection;
