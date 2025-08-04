import React from "react";

const ConstructionDesign = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://wpcharming.com/construction/wp-content/uploads/sites/8/2015/02/new_slider06.jpg')",
      }}
    >
      <div className="absolute inset-0"></div>

      <div className="relative z-10 flex items-center h-full px-6 md:px-20">
        <div className="text-white max-w-xl space-y-5">
          <p className="text-sm uppercase tracking-wider">Working With Us</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Roofing & Construction
            <br /> Specialists Since 2019
          </h1>
          <button className="mt-4 px-6 py-3 border border-white text-white hover:bg-white hover:text-yellow-600 transition">
            Get A Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConstructionDesign;
