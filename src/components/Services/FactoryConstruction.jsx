import React from "react";
import {
  CheckCircle,
  Cog,
  Users,
  Clock,
  Shield,
  TrendingUp,
  Building2,
  Settings,
  Wrench,
  Award,
} from "lucide-react";
import Header from "../Header/Header.jsx";

const FactoryConstructionPage = () => {
  const keyFeatures = [
    {
      icon: <Building2 className="w-8 h-8 text-yellow-600" />,
      title: "Custom Design & Engineering",
      description:
        "Tailored architectural and structural designs based on industry-specific needs (e.g., food processing, automotive, electronics).",
    },
    {
      icon: <Cog className="w-8 h-8 text-yellow-600" />,
      title: "Turnkey Project Delivery",
      description:
        "Complete end-to-end service—from site selection and planning to final handover.",
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-600" />,
      title: "Compliance & Regulatory Expertise",
      description:
        "Ensures adherence to local building codes, zoning laws, environmental regulations, and industry-specific standards.",
    },
    {
      icon: <Settings className="w-8 h-8 text-yellow-600" />,
      title: "Industrial-Grade Materials & Systems",
      description:
        "Use of heavy-duty materials, reinforced structures, and advanced MEP (mechanical, electrical, plumbing) systems.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-yellow-600" />,
      title: "Integration of Utilities & Equipment Layouts",
      description:
        "Designed with power supply, water systems, HVAC, compressed air, and equipment pathways in mind.",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: "Sustainability Options",
      description:
        "Incorporation of green building techniques, energy-efficient systems, and waste reduction solutions.",
    },
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Improved Operational Efficiency",
      description:
        "Purpose-built spaces optimize production flow, reduce downtime, and enhance employee safety.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Cost-Effective & Scalable",
      description:
        "Long-term savings through energy-efficient designs and future expansion capabilities.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Faster Time to Market",
      description:
        "Streamlined construction process reduces delays, allowing businesses to begin operations sooner.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Reduced Risk & Compliance Assurance",
      description:
        "Experienced contractors manage permits, inspections, and regulatory approvals to avoid costly mistakes.",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Higher Asset Value",
      description:
        "Well-constructed industrial buildings have higher resale or lease value.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation & Site Selection",
      description:
        "Understanding the client's requirements, evaluating potential sites for suitability.",
    },
    {
      step: "02",
      title: "Feasibility Study & Budget Estimation",
      description:
        "Technical and financial analysis to ensure project viability.",
    },
    {
      step: "03",
      title: "Design & Engineering Phase",
      description:
        "Developing architectural, structural, and MEP plans. Includes 3D modeling or BIM (Building Information Modeling).",
    },
    {
      step: "04",
      title: "Permitting & Approvals",
      description:
        "Handling of legal, environmental, and safety documentation.",
    },
    {
      step: "05",
      title: "Procurement & Scheduling",
      description:
        "Ordering materials, planning labor, and setting project timelines.",
    },
    {
      step: "06",
      title: "Construction & Supervision",
      description:
        "Execution of civil, structural, and system works under quality control protocols.",
    },
    {
      step: "07",
      title: "Equipment Installation & Utility Setup",
      description:
        "Integration of production lines, electricals, plumbing, HVAC, etc.",
    },
    {
      step: "08",
      title: "Inspection, Testing & Handover",
      description:
        "Final quality assurance, safety inspections, and transfer of ownership or operational control.",
    },
    {
      step: "09",
      title: "Post-Construction Support",
      description:
        "Maintenance training, warranty services, and potential facility management.",
    },
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Factory Construction Services
          </h1>
          {/* <p className="text-lg md:text-xl">Contact The Construction Company</p> */}
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 to-amber-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
                <span className="text-sm font-medium text-gray-600">
                  Established 2019 • GST Registered
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Factory Construction
                <span className="block text-yellow-600">Services</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Leading service provider specializing in industrial facilities,
                roof fabrication, and construction work. We deliver turnkey
                factory construction solutions tailored to your specific
                production and operational requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 shadow-lg">
                  Get Free Consultation
                </button>
                {/* <button className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                  View Our Projects
                </button> */}
              </div>
            </div>
            <div className="relative">
              {/* <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl p-8 shadow-xl"> */}

              <img
                src="https://img.freepik.com/free-photo/construction-site-sunset_23-2152006125.jpg?t=st=1754307215~exp=1754310815~hmac=52a7df39f2c8e54dfe89576fe676c0c1c7a6c5440d10c79311867cd1852a8e56&w=1060"
                className="rounded"
                alt="Factory Construction"
              />

              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-12 bg-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vaishnavi Enterprise
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Since our GST registration in 2019, we have been the leading
              service provider of comprehensive industrial construction
              solutions, including roof fabrication services, industrial
              maintenance services, and specialized construction work for
              manufacturing facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Specialized Industrial Construction Solutions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Factory construction services involve the planning, design, and
              building of industrial facilities tailored to meet specific
              production, logistical, and operational requirements. These
              services are typically offered by specialized construction
              companies that understand the unique demands of industrial
              environments—such as heavy equipment loads, production flows,
              safety, and compliance with industrial standards.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-600">
              What makes our factory construction services exceptional
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits
            </h2>
            <p className="text-lg text-gray-600">
              Why choose our factory construction services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors duration-300"
              >
                <div className="flex-shrink-0 p-3 bg-yellow-600 text-white rounded-lg">
                  {benefit.icon}
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

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Construction Process
            </h2>
            <p className="text-lg text-gray-600">
              A systematic approach to factory construction excellence
            </p>
          </div>
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block w-16 h-0.5 bg-yellow-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-600 to-amber-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Factory?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Let Vaishnavi Enterprise transform your industrial vision into
            reality with our expert factory construction services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-yellow-600 cursor-pointer hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 shadow-lg">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <Building2 className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Roof Fabrication Service
              </h3>
              <p className="text-gray-600">
                Specialized industrial roofing solutions for factories and
                warehouses.
              </p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <Settings className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Industrial Maintenance Service
              </h3>
              <p className="text-gray-600">
                Comprehensive maintenance solutions for industrial facilities.
              </p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <Wrench className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Construction Work
              </h3>
              <p className="text-gray-600">
                Complete construction services for various industrial projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FactoryConstructionPage;
