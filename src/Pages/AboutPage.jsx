import React from "react";
import { Play } from "lucide-react";
import Header from "../components/Header/Header.jsx";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Who We Are
          </h1>
          <p className="text-lg md:text-xl">
            Building Trust Since 2019 – Delivering Excellence in Roof
            Fabrication, Industrial Maintenance, and Construction Services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Section - Intro Video About Company */}
          <div className="space-y-6">
            {/* Video Section */}
            <div className="relative group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600"
                alt="Construction workers at building site"
                className="w-full h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-6 border-b-2 border-yellow-400 pb-2 inline-block">
                Vaishnavi Enterprise
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </p>

                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - What We Do */}
          <div className="space-y-6">
            {/* Image Section */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600"
                alt="Beautiful residential house with landscaping"
                className="w-full h-80 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-yellow-400 pb-2 inline-block">
                WHAT WE DO
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>

                <p>
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Get In Touch Button */}
        <div className="mt-12 md:hidden flex justify-center">
          <button className="w-full max-w-sm px-6 py-3 bg-yellow-400 text-gray-800 font-semibold hover:bg-yellow-500 transition-colors duration-200 rounded-lg">
            GET IN TOUCH
          </button>
        </div>

        {/* Additional SEO Content */}
        <section className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Commitment to Excellence
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              With years of experience in the construction industry, we bring
              expertise, reliability, and innovation to every project we
              undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">25+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Years Experience
              </h3>
              <p className="text-gray-600">
                Delivering quality construction services for over two decades
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">500+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Projects Completed
              </h3>
              <p className="text-gray-600">
                Successfully completed residential and commercial projects
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">100%</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Client Satisfaction
              </h3>
              <p className="text-gray-600">
                Committed to exceeding client expectations on every project
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
