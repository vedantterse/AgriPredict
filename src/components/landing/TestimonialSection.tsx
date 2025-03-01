import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
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
}

const defaultTestimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Farm Manager",
    company: "Green Valley Farms",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    content:
      "This AI prediction tool has completely transformed how we plan our harvests. The accuracy is remarkable, and it's saved us thousands in potential losses.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Agricultural Economist",
    company: "AgriTech Solutions",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    content:
      "As someone who analyzes agricultural markets daily, I can confidently say this is the most accurate prediction tool I've encountered. The data visualization is also exceptional.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Small Farm Owner",
    company: "Sunshine Organics",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=elena",
    content:
      "Before using this tool, I was constantly guessing the best time to sell. Now I have data-backed insights that have increased my profit margins by 23%.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Supply Chain Director",
    company: "Global Produce Inc.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    content:
      "The predictive analytics have allowed us to optimize our entire supply chain. We're now able to reduce waste and maximize efficiency across all our operations.",
    rating: 5,
  },
];

const TestimonialSection: React.FC<TestimonialProps> = ({
  testimonials = defaultTestimonials,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how our AI-powered price prediction tool is helping
            agricultural businesses make smarter decisions and increase
            profitability.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <motion.div
                  initial={{ y: 20, opacity: 0.8 }}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                    opacity: 1,
                    transition: { duration: 0.2 },
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="h-full"
                >
                  <Card className="border-0 bg-gray-800/50 backdrop-blur-sm h-full flex flex-col shadow-lg rounded-xl overflow-hidden">
                    <CardHeader className="relative pb-0">
                      <Quote className="text-blue-400 absolute top-4 left-4 opacity-20 w-10 h-10" />
                      <div className="flex items-center space-x-4 pt-6 z-10 relative">
                        <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-blue-500">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow py-6">
                      <p className="text-gray-300">{testimonial.content}</p>
                    </CardContent>
                    <CardFooter className="border-t border-gray-700 pt-4">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                          />
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="relative static left-0 translate-y-0 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700" />
            <CarouselNext className="relative static right-0 translate-y-0 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
