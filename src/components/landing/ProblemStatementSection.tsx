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
} from "lucide-react";

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ProblemCard = ({
  icon = <AlertTriangle className="h-8 w-8 text-amber-500" />,
  title = "Market Challenge",
  description = "Agricultural markets face unpredictable price fluctuations that impact farmer livelihoods.",
  delay = 0,
}: ProblemCardProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

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
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className="h-full"
    >
      <Card className="h-full bg-gray-900 border-gray-800 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-transparent pointer-events-none" />
        <CardHeader>
          <div className="rounded-full bg-gray-800 w-12 h-12 flex items-center justify-center mb-2">
            {icon}
          </div>
          <CardTitle className="text-xl text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-400 text-base">
            {description}
          </CardDescription>
        </CardContent>
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
  title = "Essential Commodities Market Challenges",
  subtitle = "The Department of Consumer Affairs faces critical challenges in monitoring and stabilizing prices of essential food commodities.",
  problems = [
    {
      icon: <TrendingDown className="h-8 w-8 text-red-500" />,
      title: "Price Volatility",
      description:
        "Unpredictable market fluctuations make planning difficult and reduce profit margins for farmers.",
      delay: 0.1,
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-amber-500" />,
      title: "Information Gaps",
      description:
        "Limited access to accurate market data leads to uninformed decisions and missed opportunities.",
      delay: 0.2,
    },
    {
      icon: <DollarSign className="h-8 w-8 text-emerald-500" />,
      title: "Middleman Markups",
      description:
        "Multiple intermediaries in the supply chain reduce farmer earnings and increase consumer prices.",
      delay: 0.3,
    },
  ],
}: ProblemStatementSectionProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 bg-black text-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            {title}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              delay={problem.delay}
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
                delay: 0.4,
                ease: "easeOut",
              },
            },
          }}
          className="mt-16 text-center"
        >
          <a
            href="#ai-solution"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
          >
            <span className="mr-2">Discover our AI solution</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatementSection;
