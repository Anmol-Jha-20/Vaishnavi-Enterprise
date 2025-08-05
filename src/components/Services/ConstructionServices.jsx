import React, { useState, useEffect } from "react";
import {
  Building,
  MapPin,
  Phone,
  Mail,
  Star,
  CheckCircle,
  Users,
  Calendar,
  Award,
  ArrowRight,
  Menu,
  X,
  Hammer,
  TreePine,
  Waves,
  Mountain,
  Home,
  Wrench,
  Shield,
  Clock,
  DollarSign,
  Target,
} from "lucide-react";
import Header from "../Header/Header";

export default function ResortConstructionService() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

  const resortServices = [
    {
      icon: <Building className="w-12 h-12" />,
      title: "Complete Resort Development",
      description:
        "End-to-end resort construction from conceptual design to final handover, including luxury accommodations, dining facilities, and recreational areas.",
      features: [
        "Architectural Planning",
        "Structural Engineering",
        "Interior Design",
        "Landscape Architecture",
      ],
    },
    {
      icon: <Waves className="w-12 h-12" />,
      title: "Water Feature Construction",
      description:
        "Specialized construction of swimming pools, water parks, fountains, and artificial lakes to enhance guest experience and property aesthetics.",
      features: [
        "Swimming Pools",
        "Water Parks",
        "Decorative Fountains",
        "Artificial Lakes",
      ],
    },
    {
      icon: <TreePine className="w-12 h-12" />,
      title: "Eco-Resort Development",
      description:
        "Sustainable resort construction using eco-friendly materials and green building practices that harmonize with natural surroundings.",
      features: [
        "Green Building Materials",
        "Solar Integration",
        "Waste Management",
        "Natural Ventilation",
      ],
    },
    {
      icon: <Mountain className="w-12 h-12" />,
      title: "Adventure Resort Facilities",
      description:
        "Construction of adventure sports facilities, trekking bases, and outdoor activity centers for adventure tourism resorts.",
      features: [
        "Adventure Sports Areas",
        "Zip Line Platforms",
        "Rock Climbing Walls",
        "Outdoor Equipment Storage",
      ],
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: "Luxury Accommodation",
      description:
        "Premium villa and suite construction with modern amenities, private pools, and panoramic views for exclusive guest experiences.",
      features: [
        "Private Villas",
        "Luxury Suites",
        "Private Pools",
        "Scenic Balconies",
      ],
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Resort Maintenance Services",
      description:
        "Comprehensive maintenance and upkeep services to ensure your resort facilities remain in pristine condition year-round.",
      features: [
        "Preventive Maintenance",
        "Emergency Repairs",
        "Facility Upgrades",
        "Equipment Servicing",
      ],
    },
  ];

  const projectSteps = [
    {
      step: "01",
      title: "Consultation & Planning",
      description:
        "Initial site assessment, requirement analysis, and detailed project planning with timeline and budget estimation.",
    },
    {
      step: "02",
      title: "Design & Approval",
      description:
        "Architectural design, 3D visualization, and obtaining necessary permits and regulatory approvals.",
    },
    {
      step: "03",
      title: "Construction Phase",
      description:
        "Professional construction execution with quality materials, skilled workforce, and regular progress monitoring.",
    },
    {
      step: "04",
      title: "Final Inspection",
      description:
        "Thorough quality inspection, testing of all systems, and final handover with warranty and maintenance guidelines.",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Malhotra",
      role: "Resort Owner - Hill Station Resort",
      content:
        "Vaishnavi Enterprise exceeded our expectations. They built our 50-room hill resort on time and within budget. The quality of construction is exceptional.",
      rating: 5,
      project: "Himalayan Heights Resort",
    },
    {
      name: "Sunita Reddy",
      role: "Project Manager - Beach Resort",
      content:
        "Their expertise in eco-friendly construction helped us achieve LEED certification. Professional team with attention to sustainable practices.",
      rating: 5,
      project: "Coastal Paradise Resort",
    },
    {
      name: "Vikram Singh",
      role: "Adventure Resort Developer",
      content:
        "Outstanding work on our adventure resort. They understood our unique requirements and delivered specialized facilities perfectly.",
      rating: 5,
      project: "Adventure Valley Resort",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Licensed & Insured",
      description:
        "GST registered since 2019 with comprehensive insurance coverage",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timely Delivery",
      description:
        "100% on-time project completion with transparent progress tracking",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Competitive Pricing",
      description:
        "Best value for money with transparent pricing and no hidden costs",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Quality Assurance",
      description:
        "Premium materials and superior craftsmanship with quality guarantee",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Construction Service
          </h1>
          {/* <p className="text-lg md:text-xl">Contact The Construction Company</p> */}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Resort Construction
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                {" "}
                Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Transform your hospitality vision into reality with our
              comprehensive resort construction services. From luxury
              accommodations to recreational facilities, we build experiences
              that guests never forget.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              {/* <button className="border-2 border-yellow-500 text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-50 transition-all">
                View Portfolio
              </button> */}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">50+</div>
                <div className="text-gray-600">Resorts Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">100%</div>
                <div className="text-gray-600">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Resort Construction Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we handle every aspect of resort
              development with precision and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resortServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-yellow-300"
              >
                <div className="text-yellow-600 mb-6 group-hover:text-orange-600 transition-colors group-hover:scale-110 transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Construction Process
            </h2>
            <p className="text-xl text-gray-600">
              Streamlined approach ensuring quality delivery at every stage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < projectSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Vaishnavi Enterprise?
            </h2>
            <p className="text-xl text-gray-600">
              Your trusted partner for exceptional resort construction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from resort owners who trusted us with their vision
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-500 fill-current"
                      />
                    )
                  )}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>
                <div className="border-t pt-6">
                  <div className="text-lg font-semibold text-gray-900">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-gray-600 mb-2">
                    {testimonials[activeTestimonial].role}
                  </div>
                  <div className="text-sm text-yellow-600 font-semibold">
                    Project: {testimonials[activeTestimonial].project}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial
                      ? "bg-yellow-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Dream Resort?
            </h2>
            <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
              Let's discuss your vision and create a comprehensive plan for your
              resort construction project. Get a free consultation and detailed
              quote today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call Now: +91 XXXXX XXXXX</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-all">
                Request Free Quote
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Mail className="w-8 h-8 text-yellow-200 mx-auto mb-3" />
                <div className="text-white font-semibold">Email Us</div>
                <div className="text-yellow-100 text-sm">
                  info@vaishnavienterprise.com
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <MapPin className="w-8 h-8 text-yellow-200 mx-auto mb-3" />
                <div className="text-white font-semibold">Visit Office</div>
                <div className="text-yellow-100 text-sm">
                  Your Business Address
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Clock className="w-8 h-8 text-yellow-200 mx-auto mb-3" />
                <div className="text-white font-semibold">Working Hours</div>
                <div className="text-yellow-100 text-sm">Mon-Sat: 9AM-7PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
