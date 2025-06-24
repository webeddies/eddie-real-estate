import React from 'react';
import { CheckCircle, Search, Eye, FileCheck, ArrowRight, Home, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find It. View It. Rent It.
          </h1>
          <Link to="/properties?status=For Rent">
            <button className="mt-8 bg-white text-royal-blue px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
              Browse Rental Properties
            </button>
          </Link>
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
              From search to signing, we’ve made renting in Ghana clear, quick, and convenient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-royal-blue hover:shadow-lg transition-all duration-300 h-full">
                    <div className="bg-royal-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent size={32} className="text-royal-blue" />
                    </div>
                    <div className="absolute top-4 left-4 bg-royal-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight size={24} className="text-royal-blue" />
                    </div>
                  )}
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
            <p className="text-lg max-w-3xl mx-auto">
              Choose from our diverse range of rental properties designed to meet different lifestyles and budgets.
            </p>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Rent with Eddie Realty?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Experience hassle-free renting with our comprehensive support services and verified property listings across Ghana.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Modern rental apartment"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Statistics */}
      <section className="py-20 bg-royal-blue text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Rental Success</h2>
            <p className="text-blue-100 text-lg">Numbers that reflect our commitment to quality rental services</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <p className="text-blue-100">Active Rentals</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">95%</div>
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
            Ready to Find Your Next Home?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Browse our extensive collection of rental properties and let our team help you find the perfect place to call home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/properties?status=For Rent">
              <button className="bg-royal-blue text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
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