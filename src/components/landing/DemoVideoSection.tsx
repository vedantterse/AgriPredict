import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "../ui/button";

interface DemoVideoSectionProps {
  videoUrl?: string;
  posterImage?: string;
  title?: string;
  description?: string;
}

const DemoVideoSection: React.FC<DemoVideoSectionProps> = ({
  videoUrl = "https://storage.googleapis.com/your-demo-video.mp4", // Replace with your actual video URL
  posterImage = "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  title = "See Our AI in Action",
  description = "Watch how our AI analyzes data from 550 price reporting centers to predict essential food commodity prices",
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="w-full py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Video Player */}
          <div className="relative rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-green-900/30 to-blue-900/30 border border-green-800/30 group">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm group-hover:bg-black/30 transition-all duration-300"></div>

            {/* Video Element */}
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-80 transition-opacity duration-300"
              poster={posterImage}
              preload="metadata"
              onClick={handlePlayVideo}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play Button Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full w-16 h-16 bg-green-500/20 border-green-500/50 hover:bg-green-500/30 hover:border-green-500/70 backdrop-blur-sm"
                    onClick={handlePlayVideo}
                  >
                    <Play className="h-8 w-8 text-white" />
                  </Button>
                </motion.div>
              </div>
            )}

            {/* Plant decorations */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 opacity-20">
              <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-green-500"
              >
                <path
                  d="M20,50 Q50,20 80,50 T140,50 T180,50"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  d="M100,50 L100,180"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  d="M60,80 Q100,60 100,100"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M140,80 Q100,60 100,100"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M60,120 Q100,100 100,140"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M140,120 Q100,100 100,140"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>

            <div className="absolute -top-10 -right-10 w-40 h-40 opacity-20 rotate-180">
              <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-green-500"
              >
                <path
                  d="M20,50 Q50,20 80,50 T140,50 T180,50"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  d="M100,50 L100,180"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  d="M60,80 Q100,60 100,100"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M140,80 Q100,60 100,100"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M60,120 Q100,100 100,140"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M140,120 Q100,100 100,140"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Department of Consumer Affairs Price Monitoring
            </h3>
            <p className="text-gray-300">
              The Department of Consumer Affairs monitors the daily prices of 22
              essential food commodities through 550 price reporting centres
              across the country.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-gray-400">
                  Maintains buffer stock of pulses (gram, tur, urad, moon,
                  masur) and onion for strategic market interventions
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                </div>
                <p className="text-gray-400">
                  Decisions for market interventions based on price trends,
                  seasonality, and market intelligence
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                </div>
                <p className="text-gray-400">
                  Uses ARIMA based economic models to examine and forecast
                  prices of pulses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideoSection;
