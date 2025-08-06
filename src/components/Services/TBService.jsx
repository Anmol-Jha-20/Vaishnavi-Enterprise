import React from "react";
import {
  CheckCircle,
  Shield,
  Clock,
  Award,
  ArrowRight,
  Building,
  Wrench,
  AlertTriangle,
  Target,
} from "lucide-react";
import Header from "../Header/Header.jsx";
import TBServiceImage from "../../assets/TBService.webp";

const TBServicePage = () => {
  const keyFeatures = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Formwork Setup (Bottom & Top)",
      description:
        "Installation of bottom and top shuttering for columns, beams, and slabs with accurate alignment and support.",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Reinforcement Installation",
      description:
        "Steel bar placement, including bottom bars (for tension zones) and top bars (for compression zones), tied and supported as per structural drawings.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Concrete Pouring (Top & Bottom)",
      description:
        "Controlled placement of concrete from bottom layers up to the top, ensuring no cold joints or segregation.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Level & Alignment Checks",
      description:
        "Ensures horizontal levels at the bottom and vertical plumb at the top using laser or spirit levels.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Load Transfer Readiness",
      description:
        "Proper compaction and curing allow for full load transfer from top structures to bottom supports.",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Safety Provisions",
      description:
        "Scaffoldings, supports, and fall protection are used for safe access to both top and bottom work zones.",
    },
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Structural Accuracy & Integrity",
      description:
        "Ensures that both the top and bottom of the structural element are built precisely, supporting proper load-bearing and durability.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Prevention of Structural Failures",
      description:
        "Reduces risks such as cracking, deformation, or collapse due to incomplete or uneven construction.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Faster Construction Cycle",
      description:
        "Simultaneous preparation of top and bottom components reduces delays and allows for continuous workflow.",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Improved Safety",
      description:
        "Thorough service minimizes accidents related to unstable formwork or misaligned elements.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Compliance",
      description:
        "Meets structural and quality control standards (e.g., ACI, BS, or IS codes), easing inspection and certification.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Site Preparation & Layout",
      description:
        "Marking and surveying of structural points for both bottom base and top alignment.",
    },
    {
      step: "02",
      title: "Formwork Installation",
      description:
        "Bottom shuttering placed first and braced; top formwork supported with props or scaffolds.",
    },
    {
      step: "03",
      title: "Reinforcement Work",
      description:
        "Placement and tying of steel bars for both tension (bottom) and compression (top) zones.",
    },
    {
      step: "04",
      title: "Service Integration",
      description:
        "Embedment of conduit, sleeves, or openings for MEP if required in both top and bottom areas.",
    },
    {
      step: "05",
      title: "Concrete Pouring",
      description:
        "Placement begins from bottom upward using vibrators to avoid honeycombing and ensure compaction.",
    },
    {
      step: "06",
      title: "Leveling & Finishing",
      description:
        "Surface finishing, slope checks, and alignment verifications at top surface after pouring.",
    },
    {
      step: "07",
      title: "Curing & Striking Formwork",
      description:
        "Application of curing methods; formwork removed after set time.",
    },
    {
      step: "08",
      title: "Inspection & Handover",
      description:
        "QA/QC checks for dimensions, alignment, surface finish, and strength before passing for next phase.",
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
          <h1 className="text-4xl md:text-5xl uppercase lg:text-6xl font-bold mb-4">
            T.B. Service
          </h1>
          {/* <p className="text-lg md:text-xl">Contact The Construction Company</p> */}
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 to-amber-50 py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-400/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-yellow-200">
                <span className="text-sm font-medium text-gray-600">
                  Vaishnavi Enterprise
                </span>
                <span className="ml-2 text-sm text-yellow-600">
                  • GST Registered Since 2019
                </span>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-yellow-600">T.B. Service</span>
                  <br />
                  <span className="text-2xl lg:text-3xl font-semibold text-gray-700">
                    Top and Bottom Service
                  </span>
                </h1>

                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Complete preparation and execution of both the bottom (base)
                  and top (upper section) of structural components. Ensuring
                  proper formwork, reinforcement, concrete pouring, and curing
                  for full structural integrity.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center px-8 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                  Get Quote Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                {/* <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-yellow-600 text-yellow-700 font-semibold rounded-lg hover:bg-yellow-50 transition-all duration-200">
                  View Portfolio
                </button> */}
              </div>
            </div>

            <div className="relative">
              {/* <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl overflow-hidden"> */}
              {/* <div className="w-full h-full bg-gray-300 flex items-center justify-center"> */}
              <img
                src="https://dailycivil.com/wp-content/uploads/2018/02/Top-Down.jpg"
                alt="TB Service"
                className="rounded"
              />
              {/* </div> */}
              {/* </div> */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-400 rounded-full blur-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  What is T.B. Service?
                </h2>
                <div className="w-20 h-1 bg-yellow-500 rounded"></div>
              </div>

              <div className="prose prose-lg text-gray-600 space-y-6">
                <p className="text-lg leading-relaxed">
                  T.B. Service in construction refers to the complete
                  preparation and execution of both the bottom (base) and top
                  (upper section) of structural components such as columns,
                  beams, slabs, walls, or foundations.
                </p>

                <p>
                  This service ensures proper formwork, reinforcement, concrete
                  pouring, and curing for the full vertical range of a
                  structural element. It is crucial for maintaining structural
                  integrity, alignment, and load distribution.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <p className="font-semibold text-gray-800">
                    Commonly used during high-rise, industrial, or large-scale
                    commercial projects, T.B. Service ensures that every
                    element—whether at the base or top—is built to design
                    specifications.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-yellow-100 to-amber-100 rounded-3xl shadow-xl overflow-hidden">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <img src={TBServiceImage} alt="TB Service" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Key Features
            </h2>
            <div className="w-20 h-1 bg-yellow-500 rounded mx-auto"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our T.B. Service encompasses comprehensive construction solutions
              with attention to every detail
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Benefits
            </h2>
            <div className="w-20 h-1 bg-yellow-500 rounded mx-auto"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Why choose our T.B. Service for your construction projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 h-full border border-yellow-100 group-hover:border-yellow-300 transition-all duration-300">
                  <div className="text-yellow-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Our T.B. Service Process
            </h2>
            <div className="w-20 h-1 bg-yellow-500 rounded mx-auto"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Step-by-step process ensuring quality and precision in every phase
              of construction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-600 text-white rounded-full font-bold text-lg mb-4 mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-yellow-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-yellow-600 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Start Your T.B. Service Project?
            </h2>
            <p className="text-lg lg:text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
              Trust Vaishnavi Enterprise for your complete Top and Bottom
              Service needs. With GST registration since 2019 and expertise in
              roof fabrication, industrial maintenance, and construction work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-yellow-700 transition-all duration-200">
                Call: +91-95289-82125
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TBServicePage;
