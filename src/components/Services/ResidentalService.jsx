import React from "react";
import {
  CheckCircle,
  Star,
  Home,
  Building,
  Wrench,
  Shield,
  Clock,
  Award,
} from "lucide-react";
import Header from "../Header/Header";

const ResidentialConstructionPage = () => {
  const keyFeatures = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Turnkey Construction",
      description:
        "Complete end-to-end service covering design, permits, construction, MEP installations, interior work, and landscaping.",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Customization Options",
      description:
        "Designs tailored to client preferences, including layout, materials, finishes, energy-efficiency, and smart home features.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compliance with Building Codes",
      description:
        "All work adheres to zoning laws, safety regulations, and national building standards (IS Codes, NBC, local bylaws).",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Materials & Workmanship",
      description:
        "Use of durable materials, skilled labor, and reputable subcontractors to ensure longevity and aesthetics.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Project Management",
      description:
        "On-site engineers and supervisors manage schedules, resources, safety, and quality control.",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Sustainability & Energy Efficiency",
      description:
        "Incorporation of green building techniques, rainwater harvesting, solar panels, and insulation where applicable.",
    },
  ];

  const benefits = [
    "One-Stop Solution - All construction needs handled by a single provider",
    "Cost & Time Efficiency - Experienced project management ensures on-time delivery",
    "Long-Term Value - Well-constructed homes with higher resale value",
    "Comfort & Functionality - Layouts designed for maximum usability",
    "Safety & Compliance - Proper construction ensures structural integrity",
    "Customization & Personalization - Select floor plans and materials per budget",
  ];

  const constructionSteps = [
    {
      step: "01",
      title: "Planning & Design",
      desc: "Site survey, soil testing, and preparation of architectural drawings",
    },
    {
      step: "02",
      title: "Site Preparation",
      desc: "Land clearing, fencing, leveling, and temporary utilities setup",
    },
    {
      step: "03",
      title: "Foundation Work",
      desc: "Excavation, PCC, footing reinforcement, and concrete pouring",
    },
    {
      step: "04",
      title: "Superstructure",
      desc: "Column, beam, slab work and masonry construction",
    },
    {
      step: "05",
      title: "Roofing & Waterproofing",
      desc: "Roof slab, waterproofing membranes, and heat insulation",
    },
    {
      step: "06",
      title: "MEP Services",
      desc: "Plumbing, electrical wiring, HVAC, and fire safety systems",
    },
    {
      step: "07",
      title: "Finishing Work",
      desc: "Plastering, flooring, tiling, and interior work",
    },
    {
      step: "08",
      title: "Final Handover",
      desc: "Final inspection, documentation, and key handover",
    },
  ];

  const projectTypes = [
    "Independent Homes / Villas",
    "Apartments / Flats",
    "Duplex / Triplex Homes",
    "Row Houses / Townhouses",
    "Low-Rise / High-Rise Buildings",
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl uppercase lg:text-6xl font-bold mb-4">
            Residential Construction Services
          </h1>
          {/* <p className="text-lg md:text-xl">Contact The Construction Company</p> */}
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 to-orange-50 py-16 lg:py-24">
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-block bg-[#F0B100] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                GST Registered Since 2019
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Premium <span className="text-[#F0B100]">Residential</span>
                <br />
                Construction Services
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Vaishnavi Enterprise offers comprehensive residential building
                construction services, from planning and design to execution and
                handover. We specialize in creating dream homes with quality
                craftsmanship and attention to detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#F0B100] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors shadow-lg">
                  Get Free Quote
                </button>
                {/* <button className="border-2 border-[#F0B100] text-[#F0B100] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F0B100] hover:text-white transition-colors">
                  View Portfolio
                </button> */}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Modern residential construction"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Complete Residential Construction Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our residential building construction service involves the
              planning, design, and execution of buildings intended for housing
              purposes, including single-family homes, duplexes, apartments,
              townhouses, and residential complexes. We encompass the entire
              lifecycle of the building process—from land preparation to
              structural development, MEP installations, finishing works, and
              handover.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="text-[#F0B100] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Our{" "}
                <span className="text-[#F0B100]">Construction Services?</span>
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#F0B100] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Construction benefits"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#F0B100]">Construction Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial planning to final handover, we follow a systematic
              approach to ensure quality and timely completion of your
              residential project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {constructionSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-[#F0B100] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {item.step}
                  </div>
                  {index < constructionSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -translate-y-0.5"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#F0B100] to-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Types of Residential Projects We Handle
            </h2>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              We specialize in various types of residential construction
              projects, tailored to meet diverse housing needs and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <Building className="w-6 h-6 text-yellow-200" />
                  <h3 className="text-lg font-semibold text-white">{type}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Build Your Dream Home?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact Vaishnavi Enterprise today for a free consultation and
              quote. Let our experienced team turn your vision into reality with
              quality construction and professional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#F0B100] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">
                Call Now: +91-95289-82125
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      {/* <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#F0B100] mb-2">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#F0B100] mb-2">6+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#F0B100] mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#F0B100] mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ResidentialConstructionPage;
