// import React from "react";
import jktyreimage from "../assets/jktyre.png";
import shreecementimage from "../assets/shreecement.png";
import waveimage from "../assets/waveimage.jpg";
import itcimage from "../assets/itcimage.png";
import campacola from "../assets/campacola.png";

// const clients = [
//   {
//     name: "JK Tyre Image",
//     logo: jktyreimage,
//   },
//   {
//     name: "Shree Cement Image",
//     logo: shreecementimage,
//   },
//   {
//     name: "Wave Image",
//     logo: waveimage,
//   },
//   {
//     name: "ITC Image",
//     logo: itcimage,
//   },
//   {
//     name: "Campa Cola",
//     logo: campacola,
//   },
// ];

// const OurClients = () => {
//   return (
//     <section className="py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Title */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//             Our Trusted Business Partners
//           </h2>
//           <div className="w-40 h-1 bg-yellow-500 mt-2"></div>
//         </div>

//         {/* Logos Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
//           {clients.map((client, index) => (
//             <div
//               key={index}
//               className="border border-gray-200 flex items-center justify-center p-4 bg-white hover:shadow-md transition"
//             >
//               <img
//                 src={client.logo}
//                 alt={client.name}
//                 className="max-h-32 rounded object-contain"
//                 loading="lazy"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurClients;

import React from "react";

const clients = [
  {
    name: "JK Tyre Total Control",
    logo: jktyreimage,
    description:
      "JK Organisation, the Rs 21,000-crore conglomerate with a workforce of over 40,000, has business interests across the globe, spanning over 90 countries. The JK Organisation traces its origin in the 18th century, when it came into being under the leadership of Lala Kamlapatji and his father Lala Juggilalji, therefore the name ‘J.K.’.",
  },
  {
    name: "Shree Cement",
    logo: shreecementimage,
    description:
      "Shree Cement manufactures cement, and through it, we touch the lives of millions of people every day. From the houses you live in, the roads you drive on, to the bridges you cross — we strive to deliver unparalleled quality through our customised products and value-added solutions.",
  },
  {
    name: "Wave Industries",
    logo: waveimage,
    description:
      "Wave Industries is a reputed business conglomerate whose foundation was laid in 1963 by Late Shri.Kulwant Singh Chadha. The legacy was very ably carried forward by his son and the erstwhile Chairman Late Shri. Gurpreet Singh Chadha. It was his wide vision that steered the Company into the direction of excellence and carved a niche for itself. ",
  },
  {
    name: "ITC Limited",
    logo: itcimage,
    description:
      "ITC Limited is an Indian conglomerate, headquartered in Kolkata. It has a presence across six business segments, namely FMCG, agribusiness, information technology, paper products, and packaging. It generates a plurality of its revenue from tobacco products.",
  },
  {
    name: "Campa Cola",
    logo: campacola,
    description:
      "Campa Cola is a soft drink brand in India. It was a market leader in the Indian soft drink market in the 1970s and 1980s in most regions of India until the advent of the foreign players Pepsi and Coca-Cola after the liberalisation policy of the P. V. Narasimha Rao government in 1991.",
  },
];

const OurClients = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Our Trusted Business Partners
          </h2>
          <div className="w-40 h-1 bg-yellow-500 mt-2"></div>
        </div>

        {/* Logos with description */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 flex flex-col items-center text-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-32 object-contain mb-3"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {client.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
