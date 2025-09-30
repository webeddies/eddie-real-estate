import React from 'react';
import { CheckCircle, Search, Eye, FileCheck, ArrowRight, Home, Shield, Clock, Users, Award, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const Rent: React.FC = () => {
  const steps = [
    {
      title: "Browse & Filter",
      description: "Explore our curated selection of rental properties with advanced filters to find your perfect match."
    },
    {
      title: "Schedule Viewing",
      description: "Book convenient property viewings with our agents who will guide you through each space."
    },
    {
      title: "Secure Your Rental",
      description: "Complete the application process and move into your new property."
    }
  ];

  const benefits = [
    "Verified landlords and authentic property listings",
    "Flexible lease terms from 6 months to 2+ years",
    "Professional property management support",
    "Good maintenance and emergency response",
    "Transparent pricing with no hidden fees",
    "Move-in ready properties with quality furnishing options"
  ];

  const rentalTypes = [
    {
      title: "Luxury Properties",
      description: "Premium furnished houses in prime locations",
      features: ["Modern amenities", "Security services", "Parking included"],
      priceRange: "$1,000/month - $4,500/month"
    },
    {
      title: "Condos/ Apartments",
      description: "Spacious homes for professionals and urban dwellers",
      features: ["Multiple bedrooms", "Safe neighborhoods", "Security services"],
      priceRange: "$200 - $2,500/month"
    },
    {
      title: "Short-Term Stays",
      description: "Flexible accommodation for temporary needs",
      features: ["Fully furnished", "Utilities included", "daily/monthly rates"],
      priceRange: "$110 - $300/night"
    },
    {
      title: "Commercial Spaces",
      description: "Offices, and business units in urban areas",
      features: ["Business-ready", "Parking available", "Flexible lease terms"],
      priceRange: "$150 - $8,000/month"
    }
  ];

  const rentalFeatures = [
    {
      icon: Shield,
      title: "Verified Properties",
      description: "Every rental listing is thoroughly vetted and verified for authenticity and quality standards."
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Our experienced team provides personalized assistance throughout your rental journey."
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Fast approval process with transparent documentation and hassle-free move-in procedures."
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description: "24/7 tenant support for maintenance requests, inquiries, and any rental-related concerns."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-transact">
      {/* Hero Section */}
      <section className="relative text-white py-28 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://www.edenoasisrealty.com/wp-content/uploads/2024/12/DJI_0533.jpg)',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-left"
          >
            <h1 className="text-2xl md:text-3xl font-medium text-white uppercase inline-block relative">
              Find It. View It. Rent It.
              <div
                className="h-0.5 mt-3 bg-white"
                style={{ width: "50%" }}
              ></div>
            </h1>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
            className="flex justify-center"
          >
            <Link to="/properties?status=For Rent">
              <button 
                className="mt-8 text-lg font-semibold px-8 py-4 border-2 transition-all duration-300 transform hover:scale-95"
                style={{ 
                  borderColor: '#B8960F',
                  color: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '0px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#B8960F';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = 'white';
                }}
              >
                Browse Rental Properties
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2C3E50' }}>
              Your Rental Journey in 3 Easy Steps
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              From search to signing, we have made renting in Ghana transparent, quick, and convenient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const bgImages = [
                "url('https://raw.githubusercontent.com/webeddies/Real-Estate-Agents/refs/heads/main/browse.jpg')",
                "url('https://raw.githubusercontent.com/webeddies/Real-Estate-Agents/refs/heads/main/client%20agent%20view.png')",
                "url('https://raw.githubusercontent.com/webeddies/Real-Estate-Agents/refs/heads/main/secure.jpg')"
              ];

              return (
                <div key={index} className="relative overflow-hidden rounded-xl h-full group">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: bgImages[index] }}
                  ></div>

                  <div className="absolute inset-0" style={{ backgroundColor: '#2C3E5080' }} />

                  <div className="relative z-10 text-white p-8 h-full flex flex-col justify-between">
                    <div 
                      className="w-12 h-12 flex items-center justify-center mb-4 mx-auto transition-all duration-300 group-hover:scale-110"
                    >
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                    <p className="text-center text-sm font-light">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rental Types */}
      <section
        className="relative bg-fixed bg-center bg-cover py-28 md:py-32"
        style={{
          backgroundImage: "url('https://raw.githubusercontent.com/webeddies/Properties/refs/heads/main/ghana%20beach.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 text-white">
            <h2 className="text-2xl md:text-3xl font-medium text-white uppercase">
              Rental Property Types
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {rentalTypes.map((type, index) => {
              // Icon mapping based on type
              const getIcon = () => {
                switch(type.title) {
                  case "Luxury Properties":
                    return (
                      <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 21h18M5 21V7l8-4v18M19 21V10l-6-3M9 9v.01M9 12v.01M9 15v.01M9 18v.01" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    );
                  case "Condos/ Apartments":
                    return (
                      <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 21h18M4 18h16M4 18V9l8-6 8 6v9M9 21v-7h6v7M9 6h.01M12 6h.01M15 6h.01M12 12h.01M9 12h.01M15 12h.01" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    );
                  case "Short-Term Stays":
                    return (
                      <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 21h18M5 21V5h14v16M9 6v.01M9 9v.01M9 12v.01M15 6v.01M15 9v.01M15 12v.01M9 16h6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    );
                  case "Commercial Spaces":
                    return (
                      <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 21h18M5 21V7h14v14M9 7V4h6v3M8 11h8M8 15h8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    );
                  default:
                    return null;
                }
              };

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-2"
                  style={{
                    background: 'linear-gradient(135deg, rgba(151, 2, 29, 0.25) 0%, rgba(151, 2, 29, 0.15) 100%)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    borderRadius: '20px',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                  }}
                >
                  {/* Shimmer effect on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
                      animation: 'shimmer 2s infinite'
                    }}
                  />
                  
                  <div className="relative p-8">
                    {/* Icon */}
                    <div className="text-white mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {getIcon()}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-3 text-center text-white">
                      {type.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 text-center mb-6 font-light text-sm">
                      {type.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div 
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: '#B8960F' }}
                          />
                          <span className="text-white/90 text-sm font-light">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price Range */}
                    <div className="text-center pt-4 border-t border-white/20">
                      <span className="font-semibold text-sm" style={{ color: '#B8960F' }}>
                        {type.priceRange}
                      </span>
                    </div>
                  </div>

                  {/* Bottom glow effect */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(90deg, transparent, #B8960F, transparent)'
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Shimmer animation */}
        <style>{`
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#2C3E50' }}>
                Why Rent With Us
              </h2>
              <div className="space-y-5 text-gray-700 font-light leading-relaxed">
                <p className="text-base">
                  At Eddie Realty, rentals and property management are at the core of what we do across Ghana. As a rental agency deeply rooted in the local market, we understand the intricacies of keeping both landlords and tenants happy – a task that's no small feat in Ghana's dynamic property landscape.
                </p>
                <p className="text-base">
                  Our commitment goes beyond the ordinary. We assist you in renting the ideal property stress-free, thanks to our extensive local knowledge and smooth procedures. Managing properties is time-consuming, demanding 24/7 availability and seamless collaboration with various third parties. We recognize the challenges unique to the Ghanaian market, and we thrive on overcoming them.
                </p>
                <p className="text-base">
                  Why choose us? Because we handle it all! From comprehensive tenant services and flexible viewing schedules to seamless coordination with external partners and transparent documentation with no hidden fees, we've got you covered. Our fast and secure rental processing ensures you can move into your new space without unnecessary delays, while our dedicated support team remains available every step of the way.
                </p>
                <p className="text-base">
                  Rent with us and experience property management done right. We take the stress out of finding and securing your perfect rental so you can enjoy the benefits without the hassle.
                </p>
              </div>
              
              <Link to="/properties?status=For Rent">
                <button
                  className="mt-8 inline-flex items-center gap-2 font-semibold px-8 py-3.5 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  style={{ backgroundColor: '#B8960F', color: 'white', borderRadius: '0px' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A67C00'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8960F'}
                >
                  Rent With Us
                  <ArrowRight size={20} />
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Tenant finding a new home"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute inset-0 rounded-xl" style={{ background: 'linear-gradient(to top, rgba(184, 150, 15, 0.2), transparent)' }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rental Features Section - Replacing Statistics */}
      <section 
        className="py-20 text-white"
        style={{ backgroundColor: '#2C3E50' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Rent With Us</h2>
            <p className="text-white/90 text-lg font-light max-w-2xl mx-auto">
              We provide comprehensive rental services that prioritize your comfort, security, and peace of mind
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rentalFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: '#B8960F20' }}
                  >
                    <IconComponent size={36} style={{ color: '#B8960F' }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-white/80 font-light">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#2C3E50' }}>
            Your Next Space is Just a Click Away
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-light">
            Browse rentals that suit your lifestyle or business needs. We would help you get the keys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/properties?status=For Rent">
              <button 
                className="font-semibold px-8 py-3.5 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: '#B8960F', color: 'white', borderRadius: '0px' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A67C00'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8960F'}
              >
                Browse Rentals
              </button>
            </Link>
            <Link to="/contact#contact-form">
              <button 
                className="px-8 py-3 font-semibold transition-all duration-300 border-2"
                style={{ 
                  borderColor: '#B8960F', 
                  color: '#B8960F',
                  borderRadius: '0px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#B8960F';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#B8960F';
                }}
              >
                Get Rental Assistance
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rent;