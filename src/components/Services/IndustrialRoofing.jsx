import React, { useState } from "react";
import {
  Star,
  Shield,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Users,
  Wrench,
  Building,
} from "lucide-react";
import Header from "../Header/Header";

export default function IndustrialRoofingServices() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryImages = [
    "https://5.imimg.com/data5/SELLER/Default/2024/12/474399701/NS/CB/JW/93162307/industrial-roofing-services-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2024/12/474399897/VV/VO/DT/93162307/industrial-roofing-services-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2024/12/474399608/OZ/GN/TN/93162307/industrial-roofing-services-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2024/12/474399980/DJ/BR/IW/93162307/industrial-roofing-services-500x500.jpg",
  ];

  const features = [
    {
      icon: Shield,
      title: "Durability",
      description: "High-grade materials for long-lasting roofing solutions",
    },
    {
      icon: CheckCircle,
      title: "Quality",
      description:
        "Premium color coated galvanized sheets and galvalume sheets",
    },
    {
      icon: Wrench,
      title: "Custom Design",
      description: "Manufactured as per client's drawing and specifications",
    },
    {
      icon: Award,
      title: "Expert Service",
      description: "Professional installation by experienced technicians",
    },
  ];

  const stats = [
    { number: "1000+", label: "Projects Completed", icon: Building },
    { number: "5+", label: "Years Experience", icon: Clock },
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "24/7", label: "Support", icon: Phone },
  ];

  const services = [
    "Trussless Industrial Roof Sheeting",
    "Metal Roofing Installation",
    "Industrial Roof Maintenance",
    "Color Coated Galvanized Sheets",
    "Galvalume Sheet Installation",
    "Custom Roof Fabrication",
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
            Industrial Roofing Services
          </h1>
          {/* <p className="text-lg md:text-xl">Contact The Construction Company</p> */}
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 to-orange-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Industrial <span className="text-yellow-600">Roofing</span>{" "}
                  Services
                </h1>
                <p className="text-xl text-gray-600 mt-4">
                  Industrial Roofing Services encompass a broad range of
                  specialized roofing solutions tailored to meet the rigorous
                  demands of industrial facilities, including manufacturing
                  plants, warehouses, distribution centers, power plants,
                  chemical processing facilities, and large-scale production
                  environments. Unlike residential or even standard commercial
                  roofing, industrial roofing requires a higher level of
                  durability, technical expertise, and compliance due to the
                  complexity and scale of the structures involved.
                </p>
                {/* <p className="text-xl text-gray-600 mt-4">
                  These services are designed to protect valuable assets, ensure
                  the safety of personnel, and support uninterrupted industrial
                  operations by providing reliable, long-lasting roofing systems
                  capable of withstanding harsh weather conditions,
                  environmental pollutants, and heavy mechanical wear.
                </p> */}
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <div className="text-2xl font-bold text-yellow-600">₹ 70</div>
                  <div className="text-sm text-gray-500">/sq ft</div>
                </div>
                <div className="text-sm text-gray-600">
                  <div>
                    Minimum Order:{" "}
                    <span className="font-semibold">10000 sq ft</span>
                  </div>
                  <div>
                    Material:{" "}
                    <span className="font-semibold">Metal Roofing</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
                >
                  Get Quote Now
                </button>
                <button className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Gallery
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={galleryImages[selectedImage]}
                  alt="Industrial Roofing Services"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="flex space-x-2 mt-4 justify-center">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-yellow-600"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={galleryImages[index]}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon className="h-8 w-8 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-yellow-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Vaishnavi Enterprise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GST Registered since 2019, we are the leading service provider
              specializing in industrial roofing solutions, maintenance
              services, and construction work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://img.freepik.com/free-photo/medium-shot-people-wearing-protection-helmets_23-2149343642.jpg?t=st=1754417179~exp=1754420779~hmac=55d2aa1a6240a04630092aa129b56e077c15a86d925c3dc92a3860a0c861d28e&w=1060"
                alt="Industrial Roofing Work"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Premium Industrial Roofing Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We offer a wide range of color coated galvanized sheets and
                  galvalume sheets, ideal for trussless industrial roof sheeting
                  service. Our products are manufactured using high-grade
                  materials that are easy to assemble, dismantle and transport.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Our Services Include:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                      <span className="text-gray-600">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Roofing Services?
            </h2>
            <p className="text-xl text-gray-600">
              Cost-effective solutions for various industrial needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-orange-500 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Roofing Project?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Contact us today for a free consultation and competitive quote
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Call Now: +91-XXXXXXXXXX
            </button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-white">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Gurugram, Haryana</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>info@vaishnavienterprise.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Get Quote</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </div>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                />
              </div>
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </div>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                />
              </div>
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Area (sq ft)
                </div>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                />
              </div>
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Requirements
                </div>
                <textarea
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                ></textarea>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
