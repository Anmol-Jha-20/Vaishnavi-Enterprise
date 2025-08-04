import React from "react";
import ConstructionWorkImage from "../assets/constructionwork.webp";

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
    img: "https://5.imimg.com/data5/SELLER/Default/2024/12/474396640/NR/JP/KV/93162307/industrial-maintenance-service-250x250.jpg",
  },
  {
    title: "Structural Fabrication Service",
    category: "Office",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/12/474396026/FQ/NV/OG/93162307/peb-structures-fabrication-service-250x250.jpg",
  },
  {
    title: "Waterproofing Service",
    category: "Interior Design",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/12/474399201/XS/NM/QC/93162307/roof-waterproofing-services-250x250.jpg",
  },
  {
    title: "Roofing Service",
    category: "Healthcare",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/12/474399608/OZ/GN/TN/93162307/industrial-roofing-services-250x250.jpg",
  },
  {
    title: "Organic Jaggery",
    category: "Green Building",
    img: "https://5.imimg.com/data5/IOS/Default/2025/4/506602094/VO/CS/FN/93162307/product-jpeg-250x250.png",
  },
  {
    title: "jaggery",
    category: "Education",
    img: "https://5.imimg.com/data5/IOS/Default/2025/4/506601102/GO/FF/CK/93162307/product-jpeg-250x250.png",
  },
  // {
  //   title: "Smart Office Space",
  //   category: "Office",
  //   img: "https://wpcharming.com/construction/wp-content/uploads/sites/8/2015/02/House1-600x300.jpg",
  // },
];

const FeaturedWorks = () => {
  return (
    <section className="bg-gray-900 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-center text-white text-3xl font-bold mb-4">
          Our Services
        </h2>
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
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-lg px-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mt-1 mb-3 px-4">
                  Short description about the project...
                </p>
                <button className="bg-yellow-500 text-white px-4 py-1 rounded font-medium hover:bg-yellow-600">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
