import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 md:px-20 text-sm">
      {/* Social Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-700 pb-6 mb-6">
        <div className="flex items-center space-x-2">
          <div className="bg-yellow-500 text-black px-4 py-1 font-semibold rounded-t-md flex items-center space-x-3">
            <span>Follow us</span>
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaPinterestP className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="font-bold uppercase mb-2">About Company</h3>
          <p className="text-gray-400">
            Established and GST-registered in 2019, Vaishnavi Enterprise has
            rapidly grown to become a leading service provider specializing in a
            diverse range of industrial solutions. We offer expert Roof
            Fabrication Services, Industrial Maintenance, and comprehensive
            Construction Work, catering to the unique needs of our clients.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-bold uppercase mb-2">Company</h3>
          <ul className="text-gray-400 space-y-1">
            <li>Home</li>
            {/* <li>About</li> */}
            {/* <li>Careers</li> */}
            <li>Who We Are</li>
            {/* <li>Projects</li> */}
            <li>Our Services</li>
            <li>Gallery</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="fixed bottom-6 left-0 z-50">
          <button
            onClick={() =>
              window.open(
                "https://wa.me/919528982125?text=Hey!%20I%20am%20interested%20in%20your%20services.",
                "_blank"
              )
            }
            className="bg-green-600 hover:bg-green-700 cursor-pointer text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-bounce"
            aria-label="Need Help?"
          >
            <FaWhatsapp size={24} />
          </button>
        </div>
        <div className="fixed bottom-6 right-0 z-50">
          <button
            onClick={() => (window.location.href = "tel:9528982125")}
            className="bg-[#1C398E] cursor-pointer text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-bounce"
            aria-label="Need Help?"
          >
            <MdCall size={24} />
          </button>
        </div>

        <div className="fixed bottom-28 right-0 z-50">
          <button
            onClick={() =>
              (window.location.href =
                "mailto:Vaishnavienterprises4298@gmail.com")
            }
            className="bg-[#1C398E] cursor-pointer text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-bounce"
            aria-label="Email Us"
          >
            <MdEmail size={24} />
          </button>
        </div>

        {/* Office Info */}
        <div>
          <h3 className="font-bold uppercase mb-2">Construction Office</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <span className="block">Vill-Shekhpuri, Po-Laksar, Laksar</span>
              <span className="block">Haridwar-247663, Uttarakhand, India</span>
            </li>
            <li>95289 82125</li>
            <li>Vaishnavienterprises4298@gmail.com</li>
          </ul>
        </div>

        {/* Business Hours */}
        <div>
          <h3 className="font-bold uppercase mb-2">Business Hours</h3>
          <ul className="text-gray-400 space-y-1">
            <li>
              Our support available to help you 24 hours a day, seven days a
              week.
            </li>
            <li className="pt-2">
              Monday-Friday: <span className="text-white">9am to 5pm</span>
            </li>
            <li>
              Saturday: <span className="text-white">10am to 2pm</span>
            </li>
            <li>
              Sunday: <span className="text-white">Closed</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
