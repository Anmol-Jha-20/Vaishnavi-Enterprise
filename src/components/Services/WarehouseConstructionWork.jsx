import React from "react";
import {
  Building2,
  CheckCircle,
  Clock,
  Shield,
  Truck,
  Users,
  Award,
  MapPin,
  Zap,
  Phone,
  Mail,
  Star,
} from "lucide-react";
import Header from "../Header/Header.jsx";
import ConstructionImageOne from "../../assets/constructionworkone.jpeg";
import ConstructionImageTwo from "../../assets/constructionImageTwo.jpeg";
import ConstructionImageThree from "../../assets/ConstructionImageThree.jpeg";

const WarehouseConstructionPage = () => {
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
            Warehouse Construction Work
          </h1>
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative text-black py-20 px-4 overflow-hidden">
        {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-10 transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full opacity-10 transform -translate-x-16 translate-y-16"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Award className="w-4 h-4 mr-2" />
                GST Registered Since 2019
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Warehouse
                <span className="block text-yellow-400">Construction</span>
                <span className="block text-3xl lg:text-4xl font-medium">
                  Excellence
                </span>
              </h1>

              <p className="text-xl mb-8 leading-relaxed">
                Delivering robust, efficient, and future-ready warehouse
                facilities with precision engineering and quality craftsmanship
                by Vaishnavi Enterprise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 cursor-pointer px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg">
                  Get Quote Now
                </button>
                <button className="border-2 border-white bg-blue-800 hover:bg-blue-900 cursor-pointer text-white px-8 py-4 rounded-lg font-semibold transition-all">
                  View Projects
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src={ConstructionImageOne}
                className="rounded h-96"
                alt="Construction Image"
              />
              {/* <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                <div className="w-full h-64 bg-gray-300 rounded-lg mb-6 flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-gray-500" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Vaishnavi Enterprise
                  </h3>
                  <p className="text-blue-100">
                    Trusted name in industrial construction and warehouse
                    solutions
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Excellence in Warehouse Construction
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Established with a vision to deliver excellence,{" "}
                <strong className="text-blue-900">Vaishnavi Enterprise</strong>
                —GST registered since 2019—has emerged as a trusted name in the
                domain of warehouse construction work. With a strong foundation
                in construction, roof fabrication, and industrial maintenance,
                we bring technical expertise, precision, and quality
                craftsmanship to every warehouse project we undertake.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our warehouse construction services cover the complete
                scope—from site preparation, foundation laying, structural
                fabrication, roofing, and flooring, to electrical and civil
                work—ensuring robust, efficient, and future-ready facilities.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-yellow-50 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mr-2" />
                  <span className="text-blue-900 font-medium">
                    Quality Materials
                  </span>
                </div>
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-blue-900 font-medium">
                    Timely Delivery
                  </span>
                </div>
                <div className="flex items-center bg-yellow-50 px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5 text-yellow-600 mr-2" />
                  <span className="text-blue-900 font-medium">
                    Industry Standards
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={ConstructionImageTwo}
                className="rounded h-96"
                alt="Construction Image Two"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Complete Warehouse Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From site preparation to final handover, we deliver comprehensive
              warehouse construction services tailored to your operational
              needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Site Preparation",
                description:
                  "Professional site analysis, clearing, and preparation for optimal construction foundation.",
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Foundation & Structure",
                description:
                  "Robust foundation laying and structural fabrication using high-quality materials.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Roofing Solutions",
                description:
                  "Durable roofing systems designed for weather resistance and longevity.",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Flooring & Finishing",
                description:
                  "High-quality flooring solutions suitable for heavy-duty industrial operations.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Electrical Work",
                description:
                  "Complete electrical installation and wiring for optimal warehouse functionality.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Civil Work",
                description:
                  "Comprehensive civil engineering services for complete construction projects.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* <div className="w-full h-96 bg-gray-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Truck className="w-20 h-20 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">
                    Industrial Warehouse Image
                  </p>
                </div>
              </div> */}
              <img
                src={ConstructionImageThree}
                className="rounded h-96"
                alt="Construction Image Two"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Tailored for Your Operations
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We understand the importance of durability, space optimization,
                and timely execution, especially in industrial and logistics
                sectors. Using high-quality materials and adhering to industry
                standards, we construct warehouses that are not only
                structurally sound but also tailored to meet specific
                operational requirements.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <Building2 className="w-6 h-6" />,
                    title: "Storage Capacity",
                    desc: "Optimized space utilization for maximum storage efficiency",
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Ventilation",
                    desc: "Advanced ventilation systems for optimal air circulation",
                  },
                  {
                    icon: <CheckCircle className="w-6 h-6" />,
                    title: "Accessibility",
                    desc: "Strategic design for easy loading and unloading operations",
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Safety",
                    desc: "Comprehensive safety measures and compliance standards",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-lg">
                      <div className="text-yellow-600">{feature.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose Vaishnavi Enterprise?
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              With a focus on timely delivery, cost-efficiency, and customer
              satisfaction, we continue to set benchmarks in reliable and
              high-quality warehouse construction services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="w-12 h-12" />,
                title: "Timely Delivery",
                desc: "Projects completed on schedule without compromising quality",
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Quality Assurance",
                desc: "Highest standards of construction and material quality",
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Expert Team",
                desc: "Skilled professionals with extensive industry experience",
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Reliable Service",
                desc: "Trusted partner for all your warehouse construction needs",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-400 text-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-blue-200 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Ready to Build Your Warehouse?
          </h2>
          <p className="text-xl text-blue-800 mb-8 leading-relaxed">
            Whether it's a compact storage unit or a large-scale industrial
            warehouse, our solutions are designed for maximum utility and
            long-term performance. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </button>
            <button className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              Get Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WarehouseConstructionPage;
