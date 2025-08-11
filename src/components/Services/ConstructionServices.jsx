import React from "react";
import {
  CheckCircle,
  Building,
  Hotel,
  Heart,
  GraduationCap,
  Wrench,
  Clock,
  Shield,
  Award,
  Users,
} from "lucide-react";
import Header from "../Header/Header.jsx";
import { useNavigate } from "react-router-dom";

const ResortConstructionService = () => {
  const services = [
    {
      icon: Hotel,
      title: "Hotel Construction Services",
      description:
        "We specialize in constructing modern, functional, and aesthetically pleasing hotel buildings that enhance guest experience while meeting industry standards.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Guest room layout optimization",
        "Lobby, banquet, restaurant construction",
        "HVAC, plumbing, fire safety systems",
        "Premium interior finishes",
        "Energy-efficient systems",
      ],
      emoji: "🏨",
    },
    {
      icon: Heart,
      title: "Hospital Construction Services",
      description:
        "Our hospital construction service focuses on functionality, hygiene, and compliance with healthcare regulations.",
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Modular operation theaters, ICUs, and wards",
        "Medical gas pipelines and sterilization zones",
        "Fire and life safety systems",
        "Anti-bacterial flooring and wall coatings",
        "Accessibility and emergency response design",
      ],
      emoji: "🏥",
    },
    {
      icon: GraduationCap,
      title: "Campus Construction Services",
      description:
        "We provide design and construction of academic and institutional campuses, offering sustainable and scalable infrastructure.",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Academic and residential blocks",
        "Smart classrooms and labs",
        "Drainage, water supply, and power systems",
        "Eco-friendly infrastructure",
        "Outdoor sports areas and landscaping",
      ],
      emoji: "🏫",
    },
    {
      icon: Building,
      title: "General Building Construction Services",
      description:
        "From commercial spaces to residential and industrial buildings, our general building construction services cover all types of structures.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Office buildings, apartments, warehouses",
        "Multi-story and single-story structures",
        "Structural steel and RCC work",
        "Customizable interiors and finishes",
        "Compliance with local building codes",
      ],
      emoji: "🏢",
    },
  ];

  const keyFeatures = [
    {
      icon: CheckCircle,
      title: "Turnkey Project Execution",
      description: "From blueprint to final handover",
    },
    {
      icon: Award,
      title: "Custom Architectural Designs",
      description: "Designed as per project use and client needs",
    },
    {
      icon: Shield,
      title: "Premium Material Quality",
      description: "Use of durable and sustainable building materials",
    },
    {
      icon: Users,
      title: "Regulatory Compliance",
      description: "Adherence to safety, health, and local building standards",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Strict project timelines and budget control",
    },
    {
      icon: Wrench,
      title: "Modern Techniques",
      description: "Use of latest tools, equipment, and construction practices",
    },
  ];

  const constructionProcess = [
    {
      step: "1",
      title: "Initial Consultation & Site Survey",
      description:
        "Understanding client objectives, site inspection, and feasibility analysis.",
    },
    {
      step: "2",
      title: "Planning & Design Development",
      description: "Architectural drawings, structural design, and budgeting.",
    },
    {
      step: "3",
      title: "Regulatory Approvals & Permits",
      description:
        "Submission of plans and obtaining necessary legal and municipal approvals.",
    },
    {
      step: "4",
      title: "Foundation & Structural Work",
      description:
        "Excavation, foundation laying, structural framing, RCC and masonry works.",
    },
    {
      step: "5",
      title: "MEP Installations",
      description:
        "Electrical, plumbing, fire safety, and HVAC systems integration.",
    },
    {
      step: "6",
      title: "Finishing & Interior Work",
      description:
        "Flooring, ceilings, painting, lighting, fixtures, and fittings.",
    },
    {
      step: "7",
      title: "Final Inspection & Project Handover",
      description:
        "Quality control, final walkthrough, safety checks, and handover to client.",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl uppercase lg:text-6xl font-bold mb-4">
            Construction Services
          </h1>
          {/* <p className="text-lg md:text-xl">Contact The Construction Company</p> */}
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 to-orange-50 py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              GST Registered Since 2019
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">Premium Construction</span>
              <span className="block text-yellow-600">
                Services & Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              At{" "}
              <strong className="text-yellow-600">Vaishnavi Enterprise</strong>,
              we deliver comprehensive and tailored construction solutions
              across various sectors. With a focus on quality, innovation, and
              timely execution, we provide full-scale construction services for
              Hotels, Hospitals, Educational Campuses, and General Buildings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => (window.location.href = "tel:9528982125")}
                className="bg-yellow-600 hover:bg-yellow-700 cursor-pointer text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Quote
              </button>
              <button
                onClick={() => navigate("/gallery")}
                className="border-2 border-yellow-600 text-yellow-600 cursor-pointer hover:bg-yellow-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-yellow-600">Construction Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction solutions tailored to meet diverse
              industry requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  {/* <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl">
                      <service.icon className="w-8 h-8 text-yellow-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-4xl">{service.emoji}</span>
                  </div> */}
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-yellow-600 mr-2" />
                      Key Inclusions:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              ⭐ <span className="text-yellow-600">Key Features</span> &
              Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart in the construction industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl mb-6 group-hover:shadow-lg transition-shadow">
                  <feature.icon className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Process Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              🛠️ Our{" "}
              <span className="text-yellow-600">Construction Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional construction
              projects
            </p>
          </div>

          <div className="space-y-8">
            {constructionProcess.map((process, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-start lg:items-center bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                    {process.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-yellow-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Get in touch with Vaishnavi Enterprise today for a free consultation
            and detailed project quote. Let's build your vision together with
            quality, precision, and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "tel:9528982125")}
              className="bg-white text-yellow-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us Now
            </button>
            {/* <button className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Request Estimate
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResortConstructionService;
