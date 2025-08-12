import React from "react";
import { motion } from "framer-motion";
import FounderImage from "../assets/AshishKumar.jpeg";
import SumitImage from "../assets/sumit.jpeg";
import AnujImage from "../assets/AnujkumarImage.jpeg";
import AshokKumarImage from "../assets/AshokKumarImage.jpeg";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "ASHISH KUMAR",
      role: "FOUNDER",
      image: FounderImage,
      description:
        "Founded in 2019, Vaishnavi Enterprise was established under the vision of ASHISH KUMAR, delivering reliable factory construction,Building construction roof fabrication, industrial maintenance, and construction services.",
    },
    {
      id: 2,
      name: "ANUJ KUMAR",
      role: "DIRECTOR",
      image: AnujImage,
      description:
        "Anuj Kumar, the Director of Vaishnavi Enterprise, leads the company with strategic vision and operational excellence.",
    },
    {
      id: 3,
      name: "SUMIT KUMAR",
      role: "ACCOUNT",
      image: SumitImage,
      description:
        "Sumit Kumar manages the Accounts division at Vaishnavi Enterprise with precision and professionalism. His expertise ensures smooth financial operations and transparent business practices across all services.",
    },
    {
      id: 4,
      name: "ASHOK KUMAR",
      role: "MANAGER",
      image: AshokKumarImage,
      description:
        "Ashok Kumar, Manager at Vaishnavi Enterprise, oversees day-to-day operations with efficiency and dedication.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* SEO-friendly header */}
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start mb-12"
          aria-label="Breadcrumb"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-wider">
            Our Team
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mt-2"></div>
        </motion.nav>

        {/* Team Members Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image Container */}
              <motion.div
                variants={imageVariants}
                className="relative aspect-square overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>

              {/* Content */}
              <div className="p-6 text-center">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 tracking-wide"
                >
                  {member.name}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-gray-500 text-sm font-medium mb-4 tracking-wider"
                >
                  {member.role}
                </motion.p>

                {/* Decorative Line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "3rem" }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="h-1 bg-yellow-400 mx-auto mb-6"
                ></motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-gray-600 text-sm leading-relaxed"
                >
                  {member.description}
                </motion.p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
