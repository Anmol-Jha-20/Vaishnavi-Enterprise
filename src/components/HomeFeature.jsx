import React from "react";

const features = [
  {
    image:
      "https://wpcharming.com/construction/wp-content/uploads/sites/8/2015/02/House-renovation-600x300.jpg", // Replace with actual image
    alt: "Leading Service Experts",
    title: "Leading Service Experts",
    desc: "Constructor explains how you can enjoy high end flooring trends like textured wood and realistic stones with new laminate flooring.",
    linkText: "READ MORE",
  },
  {
    image:
      "https://wpcharming.com/construction/wp-content/uploads/sites/8/2015/02/teamwork-606818_1280-600x300.jpg",
    alt: "Teamwork",
    title: "The Effective Teamwork",
    desc: "As the general contractor, we first create the highest level of trust and integrity with our clients. We value our role in the success of your project.",
    linkText: "THE BENEFITS",
  },
  {
    image:
      "https://wpcharming.com/construction/wp-content/uploads/sites/8/2015/02/House2-600x300.jpg",
    alt: "Green Building",
    title: "The Green Building",
    desc: "Green construction refers to a structure and using process that is environmentally responsible and resource-efficient throughout a building’s life-cycle.",
    linkText: "THE PROGRESS",
  },
];

const HomeFeatures = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <article
              key={index}
              className="bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-60 object-cover"
                />
                {/* <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div> */}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <a
                  href="#"
                  className="text-yellow-500 font-bold text-sm hover:underline"
                >
                  {item.linkText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
