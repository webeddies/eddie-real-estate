import React from 'react';
import { CheckCircle, Search, Eye, FileCheck, ArrowRight, Home, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const Rent: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse & Filter",
      description: "Explore our curated selection of rental properties with advanced filters to find your perfect match."
    },
    {
      icon: Eye,
      title: "Schedule Viewing",
      description: "Book convenient property viewings with our agents who will guide you through each space."
    },
    {
      icon: FileCheck,
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

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
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
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-sky-200 text-transparent bg-clip-text drop-shadow-md"
          >
            Find It. View It. Rent It.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
          >
            <Link to="/properties?status=For Rent">
              <button className="mt-8 text-lg font-semibold px-8 py-3 rounded-lg bg-white/10 border border-white text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-200 hover:bg-white hover:text-royal-blue hover:bg-clip-border transition-colors duration-300">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Rental Journey in 3 Easy Steps
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From search to signing, we’ve made renting in Ghana transparent, quick, and convenient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const bgImages = [
                "url('https://raw.githubusercontent.com/webeddies/Real-Estate-Agents/refs/heads/main/browse.jpg')", // Browsing
                "url('https://raw.githubusercontent.com/webeddies/Real-Estate-Agents/refs/heads/main/client%20agent%20view.png')", // Viewing
                "url('https://raw.githubusercontent.com/webeddies/Real-Estate-Agents/refs/heads/main/secure.jpg')"  // Securing
              ];

              return (
                <div key={index} className="relative overflow-hidden rounded-xl h-full">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: bgImages[index] }}
                  ></div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50" />

                  {/* Content */}
                  <div className="relative z-10 text-white p-8 h-full flex flex-col justify-between">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full mb-4 mx-auto">
                      <IconComponent size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                    <p className="text-center text-sm">{step.description}</p>
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
          backgroundImage:
            "url('https://raw.githubusercontent.com/webeddies/Properties/refs/heads/main/ghana%20beach.jpg')", // <-- You can replace with your own image
        }}
      >
        {/* Overlay to darken background for readability */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Floating content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Rental Property Types
            </h2>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {rentalTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="bg-royal-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home size={32} className="text-royal-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {type.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">{type.description}</p>
                <div className="space-y-2 mb-6">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle
                        size={16}
                        className="text-green-500 flex-shrink-0"
                      />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <span className="text-royal-blue font-semibold text-base md:text-sm">
                    {type.priceRange}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Text Column with animation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Eddie Realty for Renting?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We assist you in renting the ideal house stress-free, thanks to our extensive local knowledge and smooth procedure.
              </p>
              <div className="space-y-4">
                {[
                  "Wide selection of verified rental listings",
                  "Flexible viewing schedules",
                  "No hidden fees or surprises",
                  "Fast and secure rental processing",
                  "Dedicated support every step of the way"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <svg
                      className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image Column with animation */}
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
              <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/20 to-transparent rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-royal-blue to-sky-500 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Rental Success</h2>
            <p className="text-blue-100 text-lg">Numbers that reflect our commitment to quality rental services</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">150+</div>
              <p className="text-blue-100">Active Rentals</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">91%</div>
              <p className="text-blue-100">Tenant Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">7</div>
              <p className="text-blue-100">Days Average Match</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <p className="text-blue-100">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Next Space is Just a Click Away
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Browse rentals that suit your lifestyle or business needs. We’ll help you get the keys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/properties?status=For Rent">
              <button className="bg-royal-blue text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-600 transition-colors">
                Browse Rentals
              </button>
            </Link>
            <Link to="/contact#contact-form">
              <button className="border-2 border-royal-blue text-royal-blue px-8 py-3 rounded-lg hover:bg-royal-blue hover:text-white transition-colors font-semibold">
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