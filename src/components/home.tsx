import React, { useState } from "react";
import Navbar from "./landing/Navbar";
import HeroSection from "./landing/HeroSection";
import ProblemStatementSection from "./landing/ProblemStatementSection";
import AISolutionSection from "./landing/AISolutionSection";
import DemoVideoSection from "./landing/DemoVideoSection";
import TestimonialSection from "./landing/TestimonialSection";
import Footer from "./landing/Footer";

const Home = () => {
  const handleTryFreeClick = () => {
    // Just redirect to the home page for now
    window.location.href = "#";
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar onTryFreeClick={handleTryFreeClick} />

      {/* Hero Section */}
      <HeroSection onCtaClick={handleTryFreeClick} />

      {/* Problem Statement Section */}
      <div id="features">
        <ProblemStatementSection />
      </div>

      {/* AI Solution Section */}
      <div id="solution">
        <AISolutionSection />
      </div>

      {/* Demo Video Section */}
      <div id="demo">
        <DemoVideoSection />
      </div>

      {/* Testimonial Section */}
      <div id="testimonials">
        <TestimonialSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
