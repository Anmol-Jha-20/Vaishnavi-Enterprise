// import { useState } from "react";
// import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import { MapPin, Star, Mail, Menu, X } from "lucide-react";
// import Logo from "../../assets/logoVashnavi.jpeg"; // Update the path accordingly

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <>
//       {/* Header */}
//       <header className="absolute top-0 left-0 right-0 z-50 bg-[#323232]/10">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <div className="flex items-center space-x-2 pt-3">
//               <img
//                 src={Logo}
//                 alt="Logo"
//                 className="w-20 h-20 rounded-lg object-cover"
//               />
//             </div>

//             {/* Hamburger Button (Mobile Only) */}
//             <div className="lg:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-white"
//               >
//                 {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//               </button>
//             </div>

//             {/* Contact Info and Social Icons (Hidden on small screens) */}
//             <div className="hidden lg:flex items-center space-x-4">
//               <div className="text-white text-sm md:text-lg flex items-center">
//                 <span>Toll Free</span>
//                 <span className="text-orange-500 font-semibold ml-1">
//                   1.800.123.4567
//                 </span>
//               </div>
//               <div className="flex space-x-2">
//                 <a className="text-white w-[35px] h-[35px] rounded-full bg-white/10 flex items-center justify-center no-underline transition-all duration-300 ease-in-out hover:bg-[#ff9500] hover:-translate-y-0.5">
//                   <FaTwitter className="w-5 h-5 text-white hover:text-orange-500 cursor-pointer transition-colors" />
//                 </a>
//                 <a className="text-white w-[35px] h-[35px] rounded-full bg-white/10 flex items-center justify-center no-underline transition-all duration-300 ease-in-out hover:bg-[#ff9500] hover:-translate-y-0.5">
//                   <FaLinkedinIn className="w-5 h-5 text-white hover:text-orange-500 cursor-pointer transition-colors" />
//                 </a>
//                 <a className="text-white w-[35px] h-[35px] rounded-full bg-white/10 flex items-center justify-center no-underline transition-all duration-300 ease-in-out hover:bg-[#ff9500] hover:-translate-y-0.5">
//                   <MapPin className="w-5 h-5 text-white hover:text-orange-500 cursor-pointer transition-colors" />
//                 </a>
//                 <a className="text-white w-[35px] h-[35px] rounded-full bg-white/10 flex items-center justify-center no-underline transition-all duration-300 ease-in-out hover:bg-[#ff9500] hover:-translate-y-0.5">
//                   <Star className="w-5 h-5 text-white hover:text-orange-500 cursor-pointer transition-colors" />
//                 </a>
//                 <a className="text-white w-[35px] h-[35px] rounded-full bg-white/10 flex items-center justify-center no-underline transition-all duration-300 ease-in-out hover:bg-[#ff9500] hover:-translate-y-0.5">
//                   <Mail className="w-5 h-5 text-white hover:text-orange-500 cursor-pointer transition-colors" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Navigation - Desktop */}
//           <nav className="hidden lg:flex text-xl space-x-6 justify-end font-bold">
//             {[
//               "Home",
//               "Features",
//               "Who We Are",
//               "Services",
//               "Our Work",
//               "Shop",
//               "News Mega",
//               "Contact Us",
//             ].map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 className="relative text-white no-underline font-medium transition-all duration-300 ease-in-out hover:text-[#ff9500] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-0 after:bg-[#ff9500] after:transition-all after:duration-300 hover:after:w-full"
//               >
//                 {item}
//               </a>
//             ))}
//           </nav>

//           {/* Mobile Menu */}

//           {isMenuOpen && (
//             <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-6 text-white text-2xl font-semibold transition-all duration-300">
//               {/* Close Button */}
//               <button
//                 className="absolute top-6 right-6 text-white"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <X size={32} />
//               </button>

//               {/* Navigation Links */}
//               {[
//                 "Home",
//                 "Features",
//                 "Who We Are",
//                 "Services",
//                 "Our Work",
//                 "Shop",
//                 "News Mega",
//                 "Contact Us",
//               ].map((item) => (
//                 <a
//                   key={item}
//                   href="#"
//                   className="hover:text-orange-500 transition-colors"
//                   onClick={() => setIsMenuOpen(false)} // optional: close on link click
//                 >
//                   {item}
//                 </a>
//               ))}

//               {/* Contact Info */}
//               <div className="mt-6 text-center space-y-2 text-base">
//                 <div>
//                   Toll Free:{" "}
//                   <span className="text-orange-500 font-bold">
//                     1.800.123.4567
//                   </span>
//                 </div>
//                 <div className="flex justify-center space-x-4 text-white">
//                   <FaTwitter className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
//                   <FaLinkedinIn className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
//                   <MapPin className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
//                   <Star className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
//                   <Mail className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;

//2nd header-------------------------------------------------

// import { useState } from "react";
// import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import { MapPin, Star, Mail, Menu, X, ChevronDown } from "lucide-react";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [mobileActiveCategory, setMobileActiveCategory] = useState(null);

//   // Sample menu data with categories and subcategories
//   const menuItems = {
//     Home: null,
//     Features: {
//       "3 Columns": [],
//       "Project Full Width": ["Gallery Style", "Modern Layout", "Classic View"],
//       "Special Features": ["Animation Effects", "Interactive Elements"],
//     },
//     "Who We Are": {
//       "About Company": ["Our Story", "Mission & Vision", "Leadership Team"],
//       Achievements: ["Awards", "Certifications", "Milestones"],
//       Culture: ["Work Environment", "Values", "Community"],
//     },
//     Services: {
//       Construction: ["Residential", "Commercial", "Industrial"],
//       Design: ["Architectural", "Interior", "Landscape"],
//       Consultation: ["Project Planning", "Cost Estimation", "Quality Control"],
//     },
//     "Our Work": {
//       "Recent Projects": [
//         "Luxury Homes",
//         "Office Buildings",
//         "Shopping Centers",
//       ],
//       Portfolio: ["Before & After", "3D Visualizations", "Case Studies"],
//     },
//     Shop: {
//       Materials: ["Cement", "Steel", "Bricks"],
//       Tools: ["Power Tools", "Hand Tools", "Safety Equipment"],
//       Equipment: ["Heavy Machinery", "Construction Vehicles"],
//     },
//     "News Mega": {
//       "Latest News": ["Industry Updates", "Company News", "Market Trends"],
//       Articles: ["Technical Articles", "Best Practices", "Innovation"],
//     },
//     "Contact Us": null,
//   };

//   const handleMouseEnter = (item) => {
//     if (menuItems[item]) {
//       setActiveDropdown(item);
//     }
//   };

//   const handleMouseLeave = () => {
//     setActiveDropdown(null);
//   };

//   const toggleMobileCategory = (category) => {
//     setMobileActiveCategory(
//       mobileActiveCategory === category ? null : category
//     );
//   };

//   return (
//     <>
//       {/* Header */}
//       <header className="absolute top-0 left-0 right-0 z-50 bg-[#323232]/10">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <div className="flex items-center space-x-2 pt-3">
//               <div className="w-20 h-20 rounded-lg bg-white/20 flex items-center justify-center">
//                 <span className="text-white font-bold text-lg">LOGO</span>
//               </div>
//             </div>

//             {/* Hamburger Button (Mobile Only) */}
//             <div className="lg:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-white"
//               >
//                 {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//               </button>
//             </div>

//             {/* Contact Info and Social Icons (Hidden on small screens) */}
//             <div className="hidden lg:flex items-center space-x-4">
//               <div className="text-white text-sm md:text-lg flex items-center">
//                 <span>Toll Free</span>
//                 <span className="text-orange-500 font-semibold ml-1">
//                   1.800.123.4567
//                 </span>
//               </div>
//               <div className="flex space-x-2">
//                 <a className="text-white w-[35px] h-[35px] rounded-full bg-white/10 flex items-center justify-center no-underline transition-all duration-300 ease-in-out hover:bg-[#ff9500] hover:-translate-y-0.5">
//                   <FaTwitter className="w-5 h-5 text-white hover:text-orange-500 cursor-pointer transition-colors" />
//                 </a>
//                 <a className="text-white w-[35px] h-[35px] rounded-full bg-white/10 flex items-center justify-center no-underline transition-all duration-300 ease-in-out hover:bg-[#ff9500] hover:-translate-y-0.5">
//                   <FaLinkedinIn className="w-5 h-5 text-white hover:text-orange-500 cursor-pointer transition-colors" />
//                 </a>
//                 <a className="text-white w-[35px] h-[35px] rounded-full bg-white/10 flex items-center justify-center no-underline transition-all duration-300 ease-in-out hover:bg-[#ff9500] hover:-translate-y-0.5">
//                   <MapPin className="w-5 h-5 text-white hover:text-orange-500 cursor-pointer transition-colors" />
//                 </a>
//                 <a className="text-white w-[35px] h-[35px] rounded-full bg-white/10 flex items-center justify-center no-underline transition-all duration-300 ease-in-out hover:bg-[#ff9500] hover:-translate-y-0.5">
//                   <Star className="w-5 h-5 text-white hover:text-orange-500 cursor-pointer transition-colors" />
//                 </a>
//                 <a className="text-white w-[35px] h-[35px] rounded-full bg-white/10 flex items-center justify-center no-underline transition-all duration-300 ease-in-out hover:bg-[#ff9500] hover:-translate-y-0.5">
//                   <Mail className="w-5 h-5 text-white hover:text-orange-500 cursor-pointer transition-colors" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Navigation - Desktop */}
//           <nav className="hidden lg:flex text-xl space-x-6 justify-end font-bold relative">
//             {Object.keys(menuItems).map((item) => (
//               <div
//                 key={item}
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter(item)}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <a
//                   href="#"
//                   className="relative text-white no-underline font-medium transition-all duration-300 ease-in-out hover:text-[#ff9500] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-0 after:bg-[#ff9500] after:transition-all after:duration-300 hover:after:w-full flex items-center"
//                 >
//                   {item}
//                   {menuItems[item] && <ChevronDown className="w-4 h-4 ml-1" />}
//                 </a>

//                 {/* Dropdown Menu */}
//                 {activeDropdown === item && menuItems[item] && (
//                   <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl min-w-[250px] overflow-hidden z-50 animate-in fade-in-0 slide-in-from-top-1 duration-200">
//                     {Object.entries(menuItems[item]).map(
//                       ([category, products]) => (
//                         <div key={category} className="group">
//                           <div className="px-4 py-3 text-gray-800 font-semibold border-b border-gray-100 hover:bg-orange-50 transition-colors cursor-pointer relative">
//                             {category}
//                             <ChevronDown className="w-4 h-4 inline-block ml-2 transform group-hover:rotate-180 transition-transform" />

//                             {/* Sub-dropdown for products */}
//                             <div className="absolute left-full top-0 bg-white rounded-lg shadow-xl min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ml-2">
//                               {products.map((product, index) => (
//                                 <a
//                                   key={product}
//                                   href="#"
//                                   className="block px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white transition-colors"
//                                 >
//                                   {product}
//                                 </a>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                       )
//                     )}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* Mobile Menu */}
//           {isMenuOpen && (
//             <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col overflow-y-auto">
//               {/* Close Button */}
//               <div className="flex justify-end p-6">
//                 <button
//                   className="text-white"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   <X size={32} />
//                 </button>
//               </div>

//               {/* Navigation Links */}
//               <div className="flex-1 px-6 pb-6">
//                 {Object.entries(menuItems).map(([item, categories]) => (
//                   <div key={item} className="mb-4">
//                     {categories ? (
//                       <div>
//                         <button
//                           className="w-full text-left text-white text-xl font-semibold py-3 hover:text-orange-500 transition-colors flex items-center justify-between"
//                           onClick={() => toggleMobileCategory(item)}
//                         >
//                           {item}
//                           <ChevronDown
//                             className={`w-5 h-5 transform transition-transform ${
//                               mobileActiveCategory === item ? "rotate-180" : ""
//                             }`}
//                           />
//                         </button>

//                         {/* Mobile Categories */}
//                         {mobileActiveCategory === item && (
//                           <div className="ml-4 mt-2 space-y-2">
//                             {Object.entries(categories).map(
//                               ([category, products]) => (
//                                 <div key={category}>
//                                   <div className="text-orange-400 font-medium py-2 border-b border-gray-700">
//                                     {category}
//                                   </div>
//                                   <div className="ml-4 space-y-1">
//                                     {products.map((product) => (
//                                       <a
//                                         key={product}
//                                         href="#"
//                                         className="block text-gray-300 py-1 hover:text-white transition-colors"
//                                         onClick={() => setIsMenuOpen(false)}
//                                       >
//                                         • {product}
//                                       </a>
//                                     ))}
//                                   </div>
//                                 </div>
//                               )
//                             )}
//                           </div>
//                         )}
//                       </div>
//                     ) : (
//                       <a
//                         href="#"
//                         className="block text-white text-xl font-semibold py-3 hover:text-orange-500 transition-colors"
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         {item}
//                       </a>
//                     )}
//                   </div>
//                 ))}

//                 {/* Contact Info */}
//                 <div className="mt-8 pt-6 border-t border-gray-700 text-center space-y-4">
//                   <div className="text-white">
//                     Toll Free:{" "}
//                     <span className="text-orange-500 font-bold">
//                       1.800.123.4567
//                     </span>
//                   </div>
//                   <div className="flex justify-center space-x-4 text-white">
//                     <FaTwitter className="w-6 h-6 hover:text-orange-500 cursor-pointer transition-colors" />
//                     <FaLinkedinIn className="w-6 h-6 hover:text-orange-500 cursor-pointer transition-colors" />
//                     <MapPin className="w-6 h-6 hover:text-orange-500 cursor-pointer transition-colors" />
//                     <Star className="w-6 h-6 hover:text-orange-500 cursor-pointer transition-colors" />
//                     <Mail className="w-6 h-6 hover:text-orange-500 cursor-pointer transition-colors" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Background for demo */}
//         {/* <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
//         </div> */}
//       </header>
//     </>
//   );
// };

// export default Header;

import { useState } from "react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MapPin, Star, Mail, Menu, X } from "lucide-react";
import Logo from "../../assets/logoVashnavi.png"; // Update path as needed

const menuItems = [
  {
    title: "Home",
    subMenu: [
      {
        title: "3 Columns",
        subItems: ["With Space", "Without Space"],
      },
      {
        title: "Project Full Width",
        subItems: [],
      },
    ],
  },
  {
    title: "About",
    subMenu: [
      {
        title: "Electronics",
        subItems: ["Laptops", "Mobiles"],
      },
      {
        title: "Furniture",
        subItems: ["Chairs", "Tables"],
      },
    ],
  },
  {
    title: "Projects",
    subMenu: [
      {
        title: "Electronics",
        subItems: ["Laptops", "Mobiles"],
      },
      {
        title: "Furniture",
        subItems: ["Chairs", "Tables"],
      },
    ],
  },
  {
    title: "Services",
    subMenu: [
      {
        title: "Electronics",
        subItems: ["Laptops", "Mobiles"],
      },
      {
        title: "Furniture",
        subItems: ["Chairs", "Tables"],
      },
    ],
  },
  {
    title: "Contact",
    subMenu: [
      {
        title: "Electronics",
        subItems: ["Laptops", "Mobiles"],
      },
      {
        title: "Furniture",
        subItems: ["Chairs", "Tables"],
      },
    ],
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState({});

  const toggleMobileMenu = (key) => {
    setExpandedMobileMenu((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
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
              <button className="hover:text-[#ff9500] text-xl transition-all duration-200">
                {item.title}
              </button>

              {/* First Level Dropdown */}
              {hoveredMenu === item.title && (
                <div className="absolute top-full left-0 bg-white text-black min-w-[200px] shadow-md z-50">
                  {item.subMenu.map((sub, subIdx) => (
                    <div
                      key={subIdx}
                      className="relative"
                      onMouseEnter={() => setHoveredSubMenu(sub.title)}
                      onMouseLeave={() => setHoveredSubMenu(null)}
                    >
                      <div className="px-4 py-2 hover:bg-orange-100 cursor-pointer whitespace-nowrap">
                        {sub.title}
                      </div>

                      {/* Second Level Dropdown */}
                      {hoveredSubMenu === sub.title &&
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
                  onClick={() => toggleMobileMenu(item.title)}
                >
                  {item.title}
                </button>

                {expandedMobileMenu[item.title] && (
                  <div className="ml-4 space-y-1 text-base text-gray-200 pt-2">
                    {item.subMenu.map((sub, subIdx) => (
                      <div key={subIdx}>
                        <button
                          className="w-full text-left py-1"
                          onClick={() => toggleMobileMenu(sub.title)}
                        >
                          {sub.title}
                        </button>

                        {expandedMobileMenu[sub.title] && (
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
