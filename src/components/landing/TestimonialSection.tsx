import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TestimonialProps {
  testimonials?: TestimonialType[];
}

interface TestimonialType {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  highlight?: string;
  commodity?: string;
}

const defaultTestimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Agricultural Officer",
    company: "Ministry of Agriculture",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh",
    content:
      "This AI prediction tool has revolutionized how we monitor essential commodity prices. The accuracy of predictions has helped us implement timely market interventions, stabilizing prices during volatile periods.",
    rating: 5,
    highlight: "95% prediction accuracy",
    commodity: "Rice",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Wholesale Trader",
    company: "Kisan Mandi",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
    content:
      "As a wholesale trader dealing with multiple commodities, this tool gives me a competitive edge. I can now anticipate price trends weeks in advance, allowing me to optimize my inventory and maximize profits.",
    rating: 5,
    highlight: "32% profit increase",
    commodity: "Wheat",
  },
  {
    id: 3,
    name: "Anand Verma",
    role: "Small Farm Owner",
    company: "Verma Organic Farms",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=anand",
    content:
      "Before using this platform, I was constantly at the mercy of middlemen for price information. Now I have data-backed insights that have increased my bargaining power and improved my income significantly.",
    rating: 4,
    highlight: "40% better prices",
    commodity: "Pulses",
  },
  {
    id: 4,
    name: "Sunita Reddy",
    role: "Supply Chain Director",
    company: "FreshFoods India Ltd.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sunita",
    content:
      "The predictive analytics have transformed our procurement strategy. We're now able to forecast price trends for pulses and grains with remarkable accuracy, reducing costs and ensuring consistent supply to our customers.",
    rating: 5,
    highlight: "28% cost reduction",
    commodity: "Vegetables",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Policy Researcher",
    company: "National Institute of Agricultural Economics",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=vikram",
    content:
      "This platform provides invaluable data for our policy research. The AI-driven price predictions help us formulate evidence-based recommendations for government interventions in agricultural markets.",
    rating: 5,
    highlight: "Data-driven policy",
    commodity: "Onions",
  },
  {
    id: 6,
    name: "Meera Krishnan",
    role: "Cooperative Society Manager",
    company: "Tamil Nadu Farmers Cooperative",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=meera",
    content:
      "Our cooperative has seen tremendous benefits from using this prediction tool. We can now advise our 2,000+ farmer members on optimal timing for selling their produce, resulting in better collective bargaining and higher returns.",
    rating: 5,
    highlight: "Helped 2,000+ farmers",
    commodity: "Lentils",
  },
  {
    id: 7,
    name: "Arjun Nair",
    role: "Agri-tech Entrepreneur",
    company: "FarmTech Solutions",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=arjun",
    content:
      "We've integrated this AI prediction system into our farm management platform, and our users are seeing incredible results. The price forecasting accuracy has been a game-changer for small farmers.",
    rating: 5,
    highlight: "10,000+ users",
    commodity: "Potatoes",
  },
  {
    id: 8,
    name: "Lakshmi Devi",
    role: "Market Committee Chairperson",
    company: "Karnataka State Agricultural Marketing Board",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lakshmi",
    content:
      "This tool has transformed how we manage our agricultural markets. The predictive insights allow us to better prepare for price fluctuations and ensure fair practices across all our mandis.",
    rating: 5,
    highlight: "Statewide implementation",
    commodity: "Tomatoes",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialType }) => {
  return (
    <motion.div
      className="w-[200px] h-[200px] flex-shrink-0 mx-3 perspective-[1000px] transform-gpu"
      whileHover={{ scale: 1.08, rotateY: 10, z: 30, y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-full w-full">
        {/* 3D Card Effect with deeper shadow */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/95 backdrop-blur-md rounded-lg transform-gpu rotate-x-1 rotate-y-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)]" />

        {/* Card Border Glow with animation */}
        <motion.div
          className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-br from-emerald-500/40 via-transparent to-blue-500/40 backdrop-blur-xl"
          animate={{
            boxShadow: [
              "0 0 5px rgba(16, 185, 129, 0.2)",
              "0 0 15px rgba(59, 130, 246, 0.3)",
              "0 0 5px rgba(16, 185, 129, 0.2)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 p-3 h-full flex flex-col">
          {/* Animated decorative elements */}
          <motion.div
            className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-blue-500/10 blur-xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-emerald-500/10 blur-xl"
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Commodity badge with animation */}
          {testimonial.commodity && (
            <motion.div
              className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500/30 to-emerald-500/30 backdrop-blur-sm px-2 py-1 rounded-full border border-blue-500/30 text-xs font-medium text-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.3)] transform rotate-12"
              animate={{ rotate: [12, 8, 12] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {testimonial.commodity}
            </motion.div>
          )}

          {/* User info at top with improved styling */}
          <div className="flex items-center mb-2">
            <div className="h-8 w-8 rounded-full overflow-hidden border-2 border-emerald-500/50 shadow-lg shadow-emerald-500/20 transform hover:scale-110 transition-transform duration-300">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="ml-2 overflow-hidden">
              <h4 className="font-semibold text-xs text-white truncate bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                {testimonial.name}
              </h4>
              <p className="text-[10px] text-gray-400 truncate">
                {testimonial.role}
              </p>
            </div>
          </div>

          {/* Highlight badge with glow */}
          {testimonial.highlight && (
            <motion.div
              className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm px-2 py-1 rounded-md border border-emerald-500/30 text-[10px] font-medium text-emerald-400 shadow-[0_0_10px_rgba(16,_185,_129,_0.2)] mb-1 inline-block"
              animate={{
                boxShadow: [
                  "0 0 5px rgba(16, 185, 129, 0.2)",
                  "0 0 10px rgba(16, 185, 129, 0.4)",
                  "0 0 5px rgba(16, 185, 129, 0.2)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {testimonial.highlight}
            </motion.div>
          )}

          {/* Content with better styling */}
          <div className="flex-grow overflow-hidden mb-2">
            <p className="text-gray-200 text-[10px] leading-relaxed line-clamp-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              "{testimonial.content}"
            </p>
          </div>

          {/* Rating with animation */}
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                <Star
                  className={`w-2 h-2 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                />
              </motion.div>
            ))}
          </div>

          {/* Quote icon with subtle animation */}
          <motion.div
            className="absolute bottom-2 right-2"
            animate={{ opacity: [0.2, 0.3, 0.2], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Quote className="text-emerald-500/30 w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialSection: React.FC<TestimonialProps> = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  }, [controls]);

  // Auto-scroll animation for floating effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll(".testimonial-card"));
    cards.forEach((card, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.2 + Math.random() * 0.3;
      const delay = Math.random() * 2;
      const amplitude = 5 + Math.random() * 5;

      const cardElement = card as HTMLElement;

      let startTime = Date.now() + delay * 1000;

      const animate = () => {
        const elapsed = (Date.now() - startTime) / 1000;
        const offset = Math.sin(elapsed * speed) * amplitude * direction;
        cardElement.style.transform = `translateY(${offset}px)`;
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 bg-black text-white relative overflow-hidden"
    >
      {/* Background decorative elements with animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px), radial-gradient(circle, rgba(16, 185, 129, 0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px, 50px 50px",
              backgroundPosition: "0 0, 15px 15px",
            }}
          ></div>
        </div>

        {/* Animated glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Additional animated elements */}
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-amber-500/5 blur-3xl"
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-cyan-500/5 blur-3xl"
          animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
      >
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Trusted by Agricultural Experts Across India
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            See how our AI-powered price prediction platform is transforming
            agricultural markets and empowering stakeholders throughout the
            supply chain.
          </motion.p>
        </div>

        {/* Infinite horizontal scroll testimonial cards */}
        <div className="relative mt-10 overflow-hidden">
          <motion.div
            className="flex overflow-x-auto hide-scrollbar py-12 cursor-grab"
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            animate={{ x: [-1000, 0] }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="flex gap-8 px-4 min-w-max"
              animate={{ x: [0, -4000] }}
              transition={{ duration: 120, ease: "linear", repeat: Infinity }}
            >
              {defaultTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="testimonial-card transition-transform duration-1000 ease-in-out hover:z-10"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
              {/* Duplicate cards for infinite scroll effect */}
              {defaultTestimonials.map((testimonial) => (
                <div
                  key={`duplicate-${testimonial.id}`}
                  className="testimonial-card transition-transform duration-1000 ease-in-out hover:z-10"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Gradient overlays for fade effect */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent z-10"></div>

          {/* Scroll indicators */}
          <div className="flex justify-center mt-4 items-center gap-2">
            <motion.div
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronLeft className="h-4 w-4 text-gray-400" />
            </motion.div>
            <span className="text-sm text-gray-400">
              Drag to explore more testimonials
            </span>
            <motion.div
              animate={{ x: [5, -5, 5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </motion.div>
          </div>
        </div>

        {/* CTA with improved styling */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block relative"
          >
            <Button className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white font-medium rounded-xl px-10 py-7 text-lg shadow-[0_10px_25px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_20px_35px_-10px_rgba(16,185,129,0.5)] transition-all duration-300">
              <span className="relative z-10">
                Join Thousands of Satisfied Users
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 backdrop-blur-sm"></span>
              <span className="absolute -inset-[100%] animate-[spin_15s_linear_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent"></span>
            </Button>
            <div className="absolute -inset-1 rounded-xl blur-xl bg-gradient-to-r from-emerald-600/30 to-blue-600/30 opacity-70 -z-10 group-hover:opacity-100 transition-all duration-500"></div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Custom CSS */}
      <style jsx global>{`
        .rotate-x-1 {
          transform: rotateX(1deg);
        }
        .rotate-y-2 {
          transform: rotateY(2deg);
        }
        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
