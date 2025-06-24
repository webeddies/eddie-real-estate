import React from 'react';
import { CheckCircle, Search, Eye, FileCheck, ArrowRight, TrendingUp, Calculator, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sell: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: "Property Evaluation",
      description: "Get a comprehensive market analysis and accurate valuation of your property from our experts."
    },
    {
      icon: Eye,
      title: "Marketing & Exposure",
      description: "Professional photography, listing optimization, and multi-channel marketing to reach qualified buyers."
    },
    {
      icon: FileCheck,
      title: "Close the Deal",
      description: "Expert negotiation, legal documentation, and seamless transaction management to completion."
    }
  ];

  const benefits = [
    "Professional property photography and virtual tours",
    "Strategic pricing based on comprehensive market analysis",
    "Multi-platform marketing reach and exposure",
    "Expert negotiation to maximize your sale price",
    "Complete legal documentation and transaction support",
    "Average 15% higher sale prices than market average"
  ];

  const sellingServices = [
    {
      icon: Calculator,
      title: "Free Property Valuation",
      description: "Get an accurate market value assessment of your property with detailed comparable analysis.",
      features: ["Market analysis report", "Pricing strategy", "Investment potential review"]
    },
    {
      icon: TrendingUp,
      title: "Strategic Marketing",
      description: "Comprehensive marketing campaign designed to attract serious buyers and maximize exposure.",
      features: ["Professional photography", "Online listings", "Social media promotion"]
    },
    {
      icon: Users,
      title: "Expert Negotiation",
      description: "Skilled negotiation to secure the best possible terms and price for your property sale.",
      features: ["Buyer qualification", "Offer evaluation", "Contract negotiation"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-royal-blue to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sell Your Property with <span className="text-sky-blue">Eddie Realty</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Maximize your property's value with our expert marketing, strategic pricing, and professional service that delivers results.
          </p>
          <Link to="/contact#contact-form">
            <button className="bg-white text-royal-blue px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
              Get Free Property Valuation
            </button>
          </Link>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven 3-Step Selling Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial valuation to final closing, we guide you through every step to ensure maximum value and a smooth transaction.
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

      {/* Selling Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Selling Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our full-service approach ensures your property gets maximum exposure and achieves the best possible sale price.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sellingServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="bg-royal-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent size={32} className="text-royal-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Successful property sale"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/20 to-transparent rounded-xl"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Sell with Eddie Realty?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our proven track record and comprehensive approach ensure you get the maximum value for your property in the shortest time possible.
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
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20 bg-royal-blue text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Market Insights</h2>
            <p className="text-blue-100 text-lg">Stay informed with the latest Ghana real estate market trends</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">12%</div>
              <p className="text-blue-100">Average Price Growth</p>
              <p className="text-blue-200 text-sm mt-1">Year over year</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">45</div>
              <p className="text-blue-100">Days on Market</p>
              <p className="text-blue-200 text-sm mt-1">Average selling time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <p className="text-blue-100">Of Asking Price</p>
              <p className="text-blue-200 text-sm mt-1">Average achieved</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <p className="text-blue-100">Properties Sold</p>
              <p className="text-blue-200 text-sm mt-1">This year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-5xl text-royal-blue mb-6">"</div>
            <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic">
              Eddie Realty exceeded our expectations. They sold our property 20% above our initial asking price and completed the transaction in just 30 days. Their marketing strategy and negotiation skills are exceptional.
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
                alt="Client testimonial"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-900">Sarah & Michael Asante</p>
                <p className="text-gray-600">Property Sellers, East Legon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Sell Your Property?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get started with a free property valuation and discover how much your property is worth in today's market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact#contact-form">
              <button className="bg-royal-blue text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                Get Free Valuation
              </button>
            </Link>
            <Link to="/contact">
              <button className="border-2 border-royal-blue text-royal-blue px-8 py-3 rounded-lg hover:bg-royal-blue hover:text-white transition-colors font-semibold">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sell;