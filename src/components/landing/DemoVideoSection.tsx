import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Maximize2, Volume2, VolumeX } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";

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
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleOpenVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const handleCloseVideoModal = () => {
    setIsVideoModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,0 L100,0 L100,100 L0,100 Z"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
            {[...Array(10)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 10}
                x2="100"
                y2={i * 10}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.2"
                vectorEffect="non-scaling-stroke"
              />
            ))}
            {[...Array(10)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 10}
                y1="0"
                x2={i * 10}
                y2="100"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.2"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
            {title}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Video Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-emerald-900/30 to-blue-900/30 border border-emerald-800/30 group shadow-2xl transform-gpu">
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm group-hover:bg-black/30 transition-all duration-300"></div>

              {/* Video thumbnail */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-80 transition-opacity duration-300"
                style={{ backgroundImage: `url(${posterImage})` }}
              ></div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full w-20 h-20 bg-emerald-500/20 border-emerald-500/50 hover:bg-emerald-500/30 hover:border-emerald-500/70 backdrop-blur-sm shadow-lg shadow-emerald-500/20"
                    onClick={handleOpenVideoModal}
                  >
                    <Play className="h-10 w-10 text-white" />
                  </Button>
                </motion.div>
              </div>

              {/* Video title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-lg font-medium text-white">
                  AI Price Prediction Demo
                </h3>
                <p className="text-sm text-gray-300">
                  3:45 • Watch the full demonstration
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse delay-300"></div>
              </div>

              {/* Plant decorations */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 opacity-20">
                <svg
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-emerald-500"
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
                  className="w-full h-full text-blue-500"
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

            {/* 3D effect shadow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 blur-xl opacity-50 -z-10 rounded-xl"></div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
              Department of Consumer Affairs Price Monitoring
            </h3>
            <p className="text-gray-300">
              The Department of Consumer Affairs monitors the daily prices of 22
              essential food commodities through 550 price reporting centres
              across the country.
            </p>
            <div className="space-y-4">
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1 border border-emerald-500/30">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <p className="text-gray-300">
                  Maintains buffer stock of pulses (gram, tur, urad, moon,
                  masur) and onion for strategic market interventions
                </p>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1 border border-blue-500/30">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                </div>
                <p className="text-gray-300">
                  Decisions for market interventions based on price trends,
                  seasonality, and market intelligence
                </p>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1 border border-purple-500/30">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                </div>
                <p className="text-gray-300">
                  Uses ARIMA based economic models to examine and forecast
                  prices of pulses
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={handleOpenVideoModal}
                className="mt-4 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white font-medium rounded-lg px-6 py-3 shadow-lg hover:shadow-emerald-500/20"
              >
                <Play className="mr-2 h-4 w-4" /> Watch Full Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogOverlay className="bg-black/80 backdrop-blur-sm" />
        <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none shadow-none">
          <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              poster={posterImage}
              preload="metadata"
              onClick={handlePlayVideo}
              controls={false}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom video controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-center">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={handlePlayVideo}
              >
                {isPlaying ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="6"
                      y="4"
                      width="4"
                      height="16"
                      rx="1"
                      fill="white"
                    />
                    <rect
                      x="14"
                      y="4"
                      width="4"
                      height="16"
                      rx="1"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <Play className="h-6 w-6" />
                )}
              </Button>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                  onClick={toggleMute}
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                  onClick={handleCloseVideoModal}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Play overlay when paused */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full w-20 h-20 bg-white/10 border-white/20 hover:bg-white/20 backdrop-blur-sm"
                    onClick={handlePlayVideo}
                  >
                    <Play className="h-10 w-10 text-white" />
                  </Button>
                </motion.div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DemoVideoSection;
