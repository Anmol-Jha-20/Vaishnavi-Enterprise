import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin, Star, Mail } from "lucide-react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Header from "./Header/Header.jsx";
import ConstructionWorkImage from "../assets/constructionwork.webp";

const ConstructionSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      backgroundImage:
        "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      title: "WELCOME",
      subtitle: "CREATING A BRIGHTER FUTURE, TOGETHER",
      buttonText: "FEATURED PROJECTS",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
    },
    {
      id: 2,
      backgroundImage:
        "url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      title: "YOUR DREAM HOUSE",
      subtitle:
        "If you dream of designing a new home that takes full advantage of the unique geography and views of land that you love",
      buttonText: "OUR SERVICES",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      secondButton: "GET A QUOTE",
      secondButtonColor:
        "border-2 border-white text-white hover:bg-white hover:text-black",
    },
    {
      id: 3,
      backgroundImage: `url(${ConstructionWorkImage})`,
      title: " CONSTRUCTION WORK",
      subtitle:
        "If you dream of designing a new home that takes full advantage of the unique geography and views of land that you love",
      buttonText: "OUR SERVICES",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      secondButton: "GET A QUOTE",
      secondButtonColor:
        "border-2 border-white text-white hover:bg-white hover:text-black",
    },
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Header */}
      <Header />

      {/* Slider Container */}
      <div className="relative w-full h-full">
        <div
          className="flex w-full h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="min-w-full h-full relative flex items-center justify-center"
              style={{
                backgroundImage: slide.backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Content */}
              <div className="text-center text-white px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold md:pt-16 xl:pt-16 mb-6 tracking-wider">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl font-medium mb-8 max-w-2xl mx-auto">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    className={`px-8 py-3 ${slide.buttonColor} text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    {slide.buttonText} →
                  </button>
                  {slide.secondButton && (
                    <button
                      className={`px-8 py-3 ${slide.secondButtonColor} font-semibold text-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      {slide.secondButton} →
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-40 bg-black opacity-30 hover:opacity-60 text-white p-3 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-40 bg-black opacity-30 hover:opacity-60 text-white p-3 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
              setTimeout(() => setIsAutoPlaying(true), 10000);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-orange-500 scale-125"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ConstructionSlider;
