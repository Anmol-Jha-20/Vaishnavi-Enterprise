import React, { useState } from "react";
import Header from "../components/Header/Header";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            GET IN TOUCH WITH US.
          </h1>
          {/* <p className="text-lg md:text-xl">Contact The Construction Company</p> */}
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Contact Us
              </h2>
              <div className="w-16 h-1 bg-yellow-500 mb-6"></div>

              <p className="text-gray-600 mb-8">
                Contact us today by phone or through our online form to request
                a quote or for any general inquiries about Vaishnavi Enterprise
                and the range of services we offer, including Roof Fabrication,
                Industrial Maintenance, and Construction Work. We look forward
                to working with you!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number *"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-vertical"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 uppercase tracking-wide"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info and Map */}
          <div className="space-y-8">
            {/* Mailing Address */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                MAILING ADDRESS
              </h3>
              <div className="text-gray-600 space-y-1">
                <p>Vill-Shekhpuri, Po-Laksar</p>
                <p>Laksar Haridwar-247663</p>
                <p>Uttarakhand, India</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                CONTACT INFO
              </h3>
              <div className="space-y-3">
                <p className="text-gray-600">+91 95289 82125</p>
                <p className="text-yellow-500">
                  Vaishnavienterprises4298@gmail.com
                </p>
                {/* <p className="text-yellow-500">@construction_llc</p> */}
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.253133243085!2d78.0155499!3d29.741386400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390953d46ef85c4d%3A0x60cd02ded8bc1c11!2sVaishnavi%20enterprise!5e0!3m2!1sen!2sin!4v1754393081656!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Construction Company Location"
                ></iframe>
              </div>
              <div className="p-4 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-800">
                      Construction Company
                    </h4>
                    <p className="text-sm text-gray-600">
                      Vill-Shekhpuri, Po-Laksar, Laksar
                      <br />
                      Haridwar-247663, Uttarakhand, India
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/maps/dir//Vaishnavi+enterprise,+Atithi+nagar+colony,+Shekhpuri,+Laksar,+Uttarakhand+247663/@29.741386,78.01555,16z/data=!4m17!1m7!3m6!1s0x390953d46ef85c4d:0x60cd02ded8bc1c11!2sVaishnavi+enterprise!8m2!3d29.7413864!4d78.0155499!16s%2Fg%2F11y67vmc_6!4m8!1m0!1m5!1m1!1s0x390953d46ef85c4d:0x60cd02ded8bc1c11!2m2!1d78.0155499!2d29.7413864!3e2?hl=en&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Directions
                  </a>
                </div>
                <a
                  href="https://www.google.com/maps/place/Vaishnavi+enterprise/@29.741386,78.01555,16z/data=!4m6!3m5!1s0x390953d46ef85c4d:0x60cd02ded8bc1c11!8m2!3d29.7413864!4d78.0155499!16s%2Fg%2F11y67vmc_6?hl=en&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 inline-block"
                >
                  View larger map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Meta Information (would be in head in real application) */}
      <div className="hidden">
        <h1>Contact Construction Company - Get In Touch With Us</h1>
        <meta
          name="description"
          content="Contact our construction company for estimates and general questions. Located in Vill-Shekhpuri, Po-Laksar, Haridwar, Uttarakhand. Call +91 (123) 456-7890 or use our online form."
        />
        <meta
          name="keywords"
          content="construction company contact, building contractors Haridwar, construction services Uttarakhand, contact form, construction estimates"
        />
        <meta
          property="og:title"
          content="Contact Construction Company - Professional Building Services"
        />
        <meta
          property="og:description"
          content="Get in touch with our certified construction contractors for professional building services in Haridwar, Uttarakhand."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="geo.region" content="IN-UT" />
        <meta name="geo.placename" content="Haridwar, Uttarakhand" />
        <meta name="geo.position" content="29.8234567;77.8234567" />
        <meta name="ICBM" content="29.8234567, 77.8234567" />
      </div>
    </div>
  );
};

export default ContactPage;
