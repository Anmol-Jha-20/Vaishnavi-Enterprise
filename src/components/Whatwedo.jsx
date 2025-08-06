// import React from "react";

// const services = [
//   {
//     title: "Laminate Flooring",
//     image:
//       "https://wpcharming.com/construction/wp-content/uploads/sites/8/2015/02/laminate-floor-covering-600x300.jpg",
//     description:
//       "The flooring professionals at Construction offering laminate flooring and timber flooring with award winning flooring installation services.",
//   },
//   {
//     title: "Green Building",
//     image:
//       "https://wpcharming.com/construction/wp-content/uploads/sites/8/2015/02/green-building-600x300.jpg",
//     description:
//       "Green construction refers to a structure and using process that is environmentally responsible and resource-efficient throughout a building’s life-cycle.",
//   },
//   {
//     title: "House Renovation",
//     image:
//       "https://wpcharming.com/construction/wp-content/uploads/sites/8/2015/02/House-renovation-600x300.jpg",
//     description:
//       "With over thirty years of experience in residential renovation design and over 16,000 renovation plans delivered to this day.",
//   },
// ];

// const WhatWeDo = () => {
//   return (
//     <section className="py-12 bg-white">
//       <div className="max-w-screen-xl mx-auto px-4">
//         <div className="flex justify-between items-center mb-8">
//           <div>
//             <h2 className="text-3xl font-bold text-gray-800 mb-1">
//               What We Do
//             </h2>
//             <div className="w-16 h-1 bg-yellow-500"></div>
//           </div>
//           <div className="space-x-2 hidden md:block">
//             <button className="border p-2 rounded hover:bg-gray-100">
//               &#8592;
//             </button>
//             <button className="border p-2 rounded hover:bg-gray-100">
//               &#8594;
//             </button>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <article key={index} className="text-center md:text-left">
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-56 object-cover mb-4 rounded shadow"
//               />
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600 text-sm mb-3">
//                 {service.description}
//               </p>
//               <a
//                 href="#"
//                 className="text-yellow-500 font-semibold text-sm hover:underline"
//               >
//                 SERVICE DETAIL
//               </a>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatWeDo;

import React, { useState } from "react";
import ConstructionWorkImage from "../assets/constructionwork.webp";
import { Link, useNavigate } from "react-router-dom";

const services = [
  {
    title: "Construction Services",
    image: ConstructionWorkImage,
    description:
      "Our range of products include Commercial Building Construction Services, Rcc Construction Work, House Building Construction Services and Highway Road Construction Service.",
    link: "/construction-service",
  },
  {
    title: "Industrial Roofing service",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/12/474399897/VV/VO/DT/93162307/industrial-roofing-services-500x500.jpg",
    description:
      "We provide durable and high-performance Industrial Roofing Services tailored to meet the demands of factories, warehouses, and large-scale facilities. Our roofing solutions are designed for long-term weather resistance, thermal efficiency, and minimal maintenance, ensuring the protection and safety of your industrial operations.",
    link: "/industrial-roofing",
  },
  {
    title: "Factory contruction service",
    image:
      "https://img.freepik.com/free-photo/construction-site-sunset_23-2152006125.jpg?t=st=1754307215~exp=1754310815~hmac=52a7df39f2c8e54dfe89576fe676c0c1c7a6c5440d10c79311867cd1852a8e56&w=1060",
    description:
      "Our Factory Construction Services cover everything from design and planning to full-scale execution. With a focus on structural strength, functionality, and compliance, we build custom factory spaces that support productivity, safety, and seamless industrial workflows.",
    link: "/factory-construction",
  },
  {
    title: "T.B service",
    image: "https://dailycivil.com/wp-content/uploads/2018/02/Top-Down.jpg",
    description:
      "T.B service(Top and Bottom Service) is a standard practice in construction, particularly for larger projects involving significant underground utility work. It ensures that these systems are installed to meet the required specifications for proper operation and long-term reliability.",
    link: "/tb-service",
  },
  {
    title: "Waterproofing Service",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/12/474399608/OZ/GN/TN/93162307/industrial-roofing-services-250x250.jpg",
    description:
      "We offer a wide range of high-quality Industrial Roofing Services, designed to provide durable, weather-resistant, and cost-effective roofing solutions for various industrial applications. Our expert team ensures reliable installation and long-term performance tailored to your project needs.",
    link: "/waterproffing-service",
  },
  {
    title: "Residential Building construction service",
    image:
      "https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?t=st=1754307552~exp=1754311152~hmac=0a717e9a85306b74444666f4e2d3bfa0fc36995ccdfe165f64f783e935a540d2&w=1060",
    description:
      "We offer end-to-end Residential Building Construction Services, from initial planning to final handover. Whether it’s a single home or a multi-unit project, our team ensures high-quality construction, aesthetic design, and timely delivery to meet your lifestyle and budget.",
    link: "/residental-building",
  },
  {
    title: "Resort Construction Service",
    image:
      "https://img.freepik.com/free-photo/light-garden-luxury-pool-nature_1203-4908.jpg?t=st=1754307647~exp=1754311247~hmac=0cbae764f5f1a6f876e38168e749d8b52d32553d0b4f102a53fe4d919e296508&w=1060",
    description:
      "Our Resort Construction Services combine functionality with aesthetic appeal to create relaxing, well-designed spaces for hospitality projects. From eco-friendly materials to luxurious finishes, we build resorts that offer comfort, elegance, and operational efficiency for both owners and guests.",
    link: "/resort-construction",
  },
];

const ITEMS_PER_PAGE = 3;

const WhatWeDo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex - ITEMS_PER_PAGE >= 0) {
      setCurrentIndex(currentIndex - ITEMS_PER_PAGE);
    }
  };

  const handleNext = () => {
    if (currentIndex + ITEMS_PER_PAGE < services.length) {
      setCurrentIndex(currentIndex + ITEMS_PER_PAGE);
    }
  };

  const visibleServices = services.slice(
    currentIndex,
    currentIndex + ITEMS_PER_PAGE
  );

  const navigate = useNavigate();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-1">
              What We Do
            </h2>
            <div className="w-16 h-1 bg-yellow-500"></div>
          </div>
          <div className="space-x-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`border p-2 rounded hover:bg-gray-100 ${
                currentIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
              }`}
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex + ITEMS_PER_PAGE >= services.length}
              className={`border p-2 rounded hover:bg-gray-100 ${
                currentIndex + ITEMS_PER_PAGE >= services.length
                  ? "opacity-30 cursor-not-allowed"
                  : ""
              }`}
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {visibleServices.map((service, index) => (
            <article key={index} className="text-center md:text-left">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover mb-4 rounded shadow"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="text-yellow-500 font-semibold text-sm hover:underline"
              >
                SERVICE DETAIL
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
