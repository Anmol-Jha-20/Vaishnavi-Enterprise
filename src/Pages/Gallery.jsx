import React from "react";
import Header from "../components/Header/Header.jsx";
import FeaturedWorks from "../components/FeaturedWorks.jsx";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Gallery
          </h1>
          <p className="text-lg md:text-xl">
            A Glimpse Into Our Craftsmanship – Where Vision Meets Precision
          </p>
        </div>
      </div>

      {/* Main Content */}
      {/* <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> */}
      <FeaturedWorks />
      {/* </main> */}
    </div>
  );
};

export default Gallery;
