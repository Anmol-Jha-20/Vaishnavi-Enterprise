import React from "react";
import jktyreimage from "../assets/jktyre.png";
import shreecementimage from "../assets/shreecement.png";
import waveimage from "../assets/waveimage.jpg";
import itcimage from "../assets/itcimage.png";
import campacola from "../assets/campacola.png";

const clients = [
  {
    name: "JK Tyre Image",
    logo: jktyreimage,
  },
  {
    name: "Shree Cement Image",
    logo: shreecementimage,
  },
  {
    name: "Wave Image",
    logo: waveimage,
  },
  {
    name: "ITC Image",
    logo: itcimage,
  },
  {
    name: "Campa Cola",
    logo: campacola,
  },
];

const OurClients = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            Our Trusted Business Partners
          </h2>
          <div className="w-40 h-1 bg-yellow-500 mt-2"></div>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="border border-gray-200 flex items-center justify-center p-4 bg-white hover:shadow-md transition"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-32 rounded object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
