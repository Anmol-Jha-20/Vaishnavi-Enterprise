import React from "react";
import {
  Palmtree,
  Mountain,
  Leaf,
  Star,
  Shield,
  Award,
  CheckCircle,
  ArrowRight,
  Building,
  Waves,
  TreePine,
  Sparkles,
  Clock,
  Users,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Header from "../Header/Header";

const ResortConstructionPage = () => {
  const keyFeatures = [
    {
      icon: Building,
      title: "Architectural Aesthetics & Theme Design",
      description:
        "Custom resort themes (tropical, rustic, modern, traditional) designed to align with the target guest experience.",
    },
    {
      icon: MapPin,
      title: "Integrated Site Development",
      description:
        "Land grading, landscaping, water features, swimming pools, walkways, and recreational spaces.",
    },
    {
      icon: Star,
      title: "Luxury & Guest Amenities",
      description:
        "High-end finishes, smart systems, entertainment zones, and accessibility features.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly & Sustainable Options",
      description:
        "Green building materials, solar power, rainwater harvesting, and energy-efficient systems.",
    },
    {
      icon: Shield,
      title: "Safety & Accessibility Compliance",
      description:
        "Adherence to building codes, resort-specific regulations, and accessibility standards.",
    },
    {
      icon: Award,
      title: "MEP & Utility Systems",
      description:
        "Complete installation of mechanical, electrical, plumbing, fire safety, HVAC systems.",
    },
  ];

  const benefits = [
    {
      title: "Tailor-Made Design & Branding",
      description:
        "Resorts built to reflect unique brand identity, attracting targeted clientele and improving market value.",
    },
    {
      title: "Guest Experience Focused",
      description:
        "Design prioritizes comfort, convenience, and memorable aesthetics to enhance guest satisfaction.",
    },
    {
      title: "Long-Term Revenue Generation",
      description:
        "Well-constructed resorts attract guests year-round, increasing occupancy and ROI.",
    },
    {
      title: "Sustainable & Low-Maintenance",
      description:
        "Durable materials and energy-efficient systems reduce operational costs and environmental impact.",
    },
  ];

  const resortTypes = [
    {
      icon: Waves,
      name: "Beach Resorts",
      description: "Luxurious coastal getaways",
    },
    {
      icon: Mountain,
      name: "Mountain Resorts",
      description: "Scenic hill station retreats",
    },
    {
      icon: TreePine,
      name: "Eco/Forest Resorts",
      description: "Sustainable nature experiences",
    },
    {
      icon: Sparkles,
      name: "Luxury Boutique Resorts",
      description: "Premium hospitality experiences",
    },
    {
      icon: Leaf,
      name: "Wellness & Spa Retreats",
      description: "Health and relaxation focused",
    },
    {
      icon: Star,
      name: "Golf Resorts & Clubs",
      description: "Sports and recreation facilities",
    },
  ];

  const processSteps = [
    "Feasibility Study & Site Selection",
    "Master Planning & Concept Design",
    "Architectural & Engineering Design",
    "Permits & Approvals",
    "Site Preparation & Earthworks",
    "Foundation & Structural Work",
    "Infrastructure & Utility Installation",
    "Construction of Buildings & Amenities",
    "Interior Finishing & Landscaping",
    "Testing & Commissioning",
    "Final Handover & Launch Preparation",
  ];

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
            Resort Construction Service
          </h1>
          {/* <p className="text-lg md:text-xl">Contact The Construction Company</p> */}
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 to-amber-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-amber-600">
                  <Palmtree className="w-6 h-6" />
                  <span className="font-semibold">
                    Premium Resort Construction
                  </span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Resort Construction
                  <span className="text-yellow-500"> Service</span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Specialized planning, design, and building of hospitality
                  properties. From beach resorts to mountain retreats, we create
                  immersive experiences that blend luxury with sustainability.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105">
                  Get Quote <ArrowRight className="w-5 h-5" />
                </button>
                {/* <button className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  View Portfolio
                </button> */}
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop"
                  alt="Luxury Resort Construction"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Vaishnavi Enterprise */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              About Vaishnavi Enterprise
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Established in 2019, Vaishnavi Enterprise is a leading service
              provider specializing in Roof Fabrication Service, Industrial
              Maintenance Service, Construction Work, and now Premium Resort
              Construction. With our GST registration and commitment to
              excellence, we deliver world-class hospitality construction
              solutions.
            </p>
            <div className="flex justify-center items-center gap-2 mt-4 text-yellow-600">
              <Award className="w-5 h-5" />
              <span className="font-semibold">GST Registered Since 2019</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our resort construction services integrate cutting-edge design
              with sustainable practices to create exceptional hospitality
              experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resort Types */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Types of Resorts We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From beachfront paradises to mountain retreats, we specialize in
              creating diverse hospitality experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resortTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {type.name}
                  </h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Benefits of Our Service
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the advantages of partnering with Vaishnavi Enterprise
              for your resort construction needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 bg-white rounded-xl shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Construction Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring quality, timeline adherence, and
              exceptional results at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 relative"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  <h3 className="text-lg font-bold text-gray-900">{step}</h3>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-500 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Dream Resort?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with Vaishnavi Enterprise to create exceptional hospitality
            experiences that attract guests and generate lasting returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105">
              <Phone className="w-5 h-5" />
              Get Free Consultation
            </button>
            {/* <button className="border-2 border-white hover:bg-white hover:text-yellow-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300">
              <Mail className="w-5 h-5" />
              Request Quote
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResortConstructionPage;
