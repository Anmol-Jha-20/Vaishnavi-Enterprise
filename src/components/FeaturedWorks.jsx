import React from "react";
import ConstructionWorkImage from "../assets/constructionwork.webp";
import ImageOne from "../assets/image1.webp";
import ImageTwo from "../assets/image2.webp";
import ImageThree from "../assets/image3.webp";
import ImageFour from "../assets/image4.webp";
import ImageFive from "../assets/image5.webp";
import ImageSix from "../assets/image6.webp";
import ImageSeven from "../assets/image7.webp";

const categories = [
  "All",
  "Education",
  "Green Building",
  "Healthcare",
  "Interior Design",
  "Office",
];

const projects = [
  {
    title: "Construction Services",
    category: "Green Building",
    img: ConstructionWorkImage,
  },
  {
    title: "Maintenance Service",
    category: "Interior Design",
    img: ImageOne,
  },
  {
    title: "Structural Fabrication Service",
    category: "Office",
    img: ImageTwo,
  },
  {
    title: "Waterproofing Service",
    category: "Interior Design",
    img: ImageThree,
  },
  {
    title: "Roofing Service",
    category: "Healthcare",
    img: ImageFour,
  },
  {
    title: "Organic Jaggery",
    category: "Green Building",
    img: ImageFive,
  },
  {
    title: "jaggery",
    category: "Education",
    img: ImageSix,
  },
  {
    title: "jaggery",
    category: "Education",
    img: ImageSeven,
  },
];

const FeaturedWorks = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* <h2 className="text-center text-white text-3xl font-bold mb-4">
          Our Services
        </h2> */}
        {/* <div className="text-center text-gray-300 space-x-4 mb-10">
          <span className="text-yellow-400 font-semibold">Filter - All</span>
          {categories.slice(1).map((cat, idx) => (
            <span key={idx} className="hover:text-white cursor-pointer">
              {cat}
            </span>
          ))}
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <article key={index} className="relative group overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-lg px-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mt-1 mb-3 px-4">
                  Short description about the project...
                </p>
                <button className="bg-yellow-500 text-white px-4 py-1 rounded font-medium hover:bg-yellow-600">
                  Read More
                </button>
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
