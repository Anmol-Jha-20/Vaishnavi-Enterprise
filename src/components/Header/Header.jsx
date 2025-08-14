import { useState } from "react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MapPin, Star, Mail, Menu, X } from "lucide-react";
import Logo from "../../assets/logoVashnavi.png";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    title: "Home",
    subMenu: [],
    link: "/",
  },
  {
    title: "About",
    subMenu: [],
    link: "/about-us",
  },
  {
    title: "Services",
    subMenu: [
      {
        title: "Construction Services",
        subItems: [],
        link: "/construction-service",
      },
      {
        title: "Industrial Roofing service",
        subItems: [],
        link: "/industrial-roofing",
      },
      {
        title: "Factory contruction service",
        subItems: [],
        link: "/factory-construction",
      },
      {
        title: "T.B service",
        subItems: [],
        link: "/tb-service",
      },
      {
        title: "Waterproofing Service",
        subItems: [],
        link: "/waterproffing-service",
      },
      {
        title: "Residental Building construction service",
        subItems: [],
        link: "/residental-building",
      },
      {
        title: "Resort Construction Service",
        subItems: [],
        link: "/resort-construction",
      },
      {
        title: "Warehouse Construction Work",
        subItems: [],
        link: "/warehouse-construction",
      },
    ],
  },
  {
    title: "Gallery",
    subItems: [],
    link: "/gallery",
  },
  {
    title: "Contact",
    subItems: [],
    link: "/contact-us",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState({});

  const navigate = useNavigate();

  const toggleMobileMenu = (key) => {
    setExpandedMobileMenu((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <header className="absolute top-0 bg-white/20 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={Logo}
              alt="Logo"
              className="h-20 bg-white rounded-lg object-cover"
            />
          </div>

          {/* Hamburger Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Contact Info (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-white font-bold text-sm md:text-lg flex items-center">
              <span>Call:</span>
              <span className="text-orange-500 font-semibold ml-1">
                (+91) 95289 82125
              </span>
            </div>
            <div className="flex space-x-2">
              {[FaTwitter, FaLinkedinIn, MapPin, Star, Mail].map((Icon, i) => (
                <a
                  key={i}
                  className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ff9500] transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex justify-end mr-12 space-x-14 text-white font-semibold relative z-40"
          onMouseLeave={() => {
            setHoveredMenu(null);
            setHoveredSubMenu(null);
          }}
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredMenu(item.title)}
            >
              <button
                onClick={() => navigate(item.link)}
                className="hover:text-[#ff9500] text-xl transition-all cursor-pointer duration-200"
              >
                {item.title}
              </button>

              {/* First Level Dropdown */}
              {Array.isArray(item.subMenu) &&
                item.subMenu.length > 0 &&
                hoveredMenu === item.title && (
                  <div className="absolute top-full left-0 bg-white text-black min-w-[200px] shadow-md z-50">
                    {item.subMenu.map((sub, subIdx) => (
                      <div
                        key={`${item.title}-${sub.title}`}
                        className="relative"
                        onMouseEnter={() => setHoveredSubMenu(sub.title)}
                        onMouseLeave={() => setHoveredSubMenu(null)}
                      >
                        <div className="px-4 py-2 hover:bg-orange-100 cursor-pointer whitespace-nowrap">
                          <a href={sub.link}>{sub.title}</a>
                        </div>

                        {/* Second Level Dropdown */}
                        {Array.isArray(item.subMenu) &&
                          item.subMenu.length > 0 &&
                          hoveredSubMenu === sub.title &&
                          sub.subItems.length > 0 && (
                            <div className="absolute left-full top-0 bg-white min-w-[180px] shadow-lg">
                              {sub.subItems.map((subItem, idx) => (
                                <div
                                  key={idx}
                                  className="px-4 py-2 hover:bg-orange-100 cursor-pointer whitespace-nowrap"
                                >
                                  {subItem}
                                </div>
                              ))}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
            </div>
          ))}

          {/* Static Links */}
          {/* {[
            "Home",
            "Who We Are",
            "Services",
            "Our Work",
            "News Mega",
            "Contact Us",
          ].map((link, idx) => (
            <a
              key={idx}
              href="#"
              className="relative hover:text-[#ff9500] transition-all duration-300 after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-0 after:bg-[#ff9500] hover:after:w-full after:transition-all after:duration-300"
            >
              {link}
            </a>
          ))} */}
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-95 flex flex-col items-start px-6 pt-20 pb-8 space-y-4 text-white text-xl font-semibold overflow-y-auto">
            {/* Close Button */}
            <button
              className="absolute top-6 right-6"
              onClick={() => setMenuOpen(false)}
            >
              <X size={32} />
            </button>

            {/* Expandable Menus */}
            {menuItems.map((item, index) => (
              <div key={index} className="w-full">
                <button
                  className="w-full text-left py-2 border-b border-white/20"
                  onClick={() => {
                    toggleMobileMenu(item.title);
                    navigate(item.link);
                  }}
                >
                  {item.title}
                </button>

                {Array.isArray(item.subMenu) &&
                  item.subMenu.length > 0 &&
                  expandedMobileMenu[item.title] && (
                    <div className="ml-4 space-y-1 text-base text-gray-200 pt-2">
                      {item.subMenu.map((sub, subIdx) => (
                        <div key={subIdx}>
                          <button
                            className="w-full text-left py-1"
                            onClick={() => toggleMobileMenu(sub.title)}
                          >
                            <a href={sub.link}>{sub.title}</a>
                          </button>

                          {Array.isArray(sub.subItems) &&
                            sub.subItems.length > 0 &&
                            expandedMobileMenu[sub.title] && (
                              <div className="ml-4 pl-2 text-sm text-gray-400 space-y-1">
                                {sub.subItems.map((subItem, i) => (
                                  <div key={i} className="py-0.5">
                                    {subItem}
                                  </div>
                                ))}
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            ))}

            {/* Static Links */}
            {/* {[
              "Home",
              "Who We Are",
              "Services",
              "Our Work",
              "News Mega",
              "Contact Us",
            ].map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="py-2 w-full border-b border-white/10 text-left"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))} */}

            {/* Contact Info */}
            <div className="mt-6 text-sm text-white space-y-1">
              <div>
                Call:{" "}
                <span className="text-orange-500 font-bold">
                  (+91) 95289 82125
                </span>
              </div>
              <div className="flex gap-4 pt-2">
                {[FaTwitter, FaLinkedinIn, MapPin, Star, Mail].map(
                  (Icon, i) => (
                    <Icon
                      key={i}
                      className="w-5 h-5 hover:text-orange-500 cursor-pointer"
                    />
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
