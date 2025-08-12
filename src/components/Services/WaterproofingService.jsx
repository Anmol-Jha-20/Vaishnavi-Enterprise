import React from "react";
import {
  Shield,
  Droplets,
  Home,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import Header from "../Header/Header";

export default function WaterproofingServicePage() {
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
            Expert Waterproofing Solutions
          </h1>
          {/* <p className="text-lg md:text-xl">Contact The Construction Company</p> */}
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                  <Shield className="w-4 h-4 mr-2" />
                  Professional Waterproofing Services
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Expert <span className="text-yellow-600">Waterproofing</span>{" "}
                  Solutions
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Protect your property from water damage with our comprehensive
                  waterproofing services. Trusted since 2019, we ensure lasting
                  protection for your buildings.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => (window.location.href = "tel:9528982125")}
                  className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button
                  onClick={() => (window.location.href = "tel:9528982125")}
                  className="border-2 border-yellow-500 text-yellow-600 cursor-pointer hover:bg-yellow-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2024/12/474399368/YT/PB/LW/93162307/roof-waterproofing-services-500x500.jpg"
                alt="Professional waterproofing service"
                className="w-full h-[390px] rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What is Waterproofing Service?
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Waterproofing service in construction refers to the application
                of specialized materials and techniques to
                <strong className="text-yellow-600">
                  {" "}
                  prevent water penetration
                </strong>{" "}
                into structural elements such as
                <strong className="text-yellow-600">
                  {" "}
                  basements, roofs, walls, bathrooms, water tanks, balconies,
                  and terraces
                </strong>
                .
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                It is a critical component of building durability and is
                typically applied during both
                <strong className="text-yellow-600">
                  {" "}
                  new construction
                </strong>{" "}
                and{" "}
                <strong className="text-yellow-600">
                  repair/renovation
                </strong>{" "}
                phases.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Effective waterproofing enhances the{" "}
                <strong className="text-yellow-600">
                  lifespan, safety, and performance
                </strong>{" "}
                of the structure by protecting it from
                <strong className="text-yellow-600">
                  {" "}
                  leakage, moisture damage, corrosion, mold growth
                </strong>
                , and structural weakening.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2024/12/474399201/XS/NM/QC/93162307/roof-waterproofing-services-500x500.jpg"
                alt="Waterproofing process demonstration"
                className="w-full h-96 rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              🔑 Key Features
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Multiple Waterproofing Methods",
                description:
                  "Includes liquid membranes, cementitious coating, bituminous waterproofing, polyurethane, EPDM sheets, crystalline products, etc.",
                icon: <Droplets className="w-8 h-8 text-yellow-600" />,
              },
              {
                title: "Surface Preparation & Priming",
                description:
                  "Ensures proper adhesion by cleaning and priming the surface before application.",
                icon: <CheckCircle className="w-8 h-8 text-yellow-600" />,
              },
              {
                title: "Application on Critical Zones",
                description:
                  "Applied in bathrooms, wet areas, roof decks, underground basements, retaining walls, water tanks, etc.",
                icon: <Home className="w-8 h-8 text-yellow-600" />,
              },
              {
                title: "Joint & Crack Treatment",
                description:
                  "Special focus on sealing joints, construction cracks, and expansion joints with appropriate sealants or tapes.",
                icon: <Shield className="w-8 h-8 text-yellow-600" />,
              },
              {
                title: "Drainage Compatibility",
                description:
                  "Works alongside slope and drainage systems to prevent water accumulation.",
                icon: <Droplets className="w-8 h-8 text-yellow-600" />,
              },
              {
                title: "Durability in Harsh Conditions",
                description:
                  "Materials are UV-resistant, weatherproof, and resistant to chemicals or algae depending on site needs.",
                icon: <Star className="w-8 h-8 text-yellow-600" />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
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

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              🌟 Benefits of Our Waterproofing Service
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Prevents Structural Damage",
                description:
                  "Stops water from penetrating concrete, steel, and bricks—protecting against rust, spalling, and decay.",
              },
              {
                title: "Improves Indoor Air Quality",
                description:
                  "Prevents mold and mildew caused by dampness and seepage.",
              },
              {
                title: "Reduces Long-Term Maintenance Costs",
                description:
                  "Avoids costly repairs by minimizing water-related damage over time.",
              },
              {
                title: "Enhances Building Life",
                description:
                  "Protects critical structural components and finishes for long-term durability.",
              },
              {
                title: "Increases Property Value",
                description:
                  "A leak-free, well-maintained property commands better market value and user confidence.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-yellow-600 font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              🔄 Our Waterproofing Process
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Site Assessment",
                    description:
                      "Inspection of area to identify sources of water ingress, type of substrate, and suitable waterproofing system.",
                  },
                  {
                    step: "2",
                    title: "Surface Preparation",
                    description:
                      "Cleaning dust, grease, and debris; removing old coatings or deteriorated surfaces; repairing cracks and voids.",
                  },
                  {
                    step: "3",
                    title: "Priming (if required)",
                    description:
                      "Application of primer to promote adhesion of waterproofing material.",
                  },
                  {
                    step: "4",
                    title: "Waterproofing Material Application",
                    description:
                      "Brush/Roller Application, Torch-on Membranes, Liquid Membrane, Sheet Membranes, or Injection Grouting for active leaks.",
                  },
                ].map((process, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {process.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {process.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {process.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                {[
                  {
                    step: "5",
                    title: "Joint Sealing",
                    description:
                      "Application of joint sealants or waterproof tapes on movement joints and corners.",
                  },
                  {
                    step: "6",
                    title: "Curing & Protection",
                    description:
                      "Allowing sufficient curing time; sometimes includes protection screeds or boards to shield from mechanical damage.",
                  },
                  {
                    step: "7",
                    title: "Testing (Optional but Recommended)",
                    description:
                      "Water ponding test or flood test for roof/bathroom areas to check for leakage.",
                  },
                  {
                    step: "8",
                    title: "Final Inspection & Handover",
                    description:
                      "QA/QC checks and documentation of completed waterproofing layers.",
                  },
                ].map((process, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {process.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {process.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {process.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              🏗️ Areas We Waterproof
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Basement walls & foundations",
              "Roof slabs and terraces",
              "Bathrooms & wet rooms",
              "Balconies & planters",
              "Water tanks & swimming pools",
              "External walls (exposed façades)",
              "Podiums & podium gardens",
              "Construction joints",
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Protect Your Property?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
            Get expert waterproofing solutions from Vaishnavi Enterprise.
            Trusted since 2019 with GST registration and proven expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "tel:9528982125")}
              className="bg-white text-yellow-600 cursor-pointer hover:bg-yellow-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call for Consultation
            </button>
            {/* <button className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              <Phone className="mr-2 w-5 h-5" />
              Call for Consultation
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
}
