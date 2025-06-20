import React from 'react';
import { CheckCircle, Search, Eye, FileCheck, ArrowRight } from 'lucide-react';

const Buy: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: "Consultation & Search",
      description: "We understand your needs, budget, and preferences to create a tailored property search strategy."
    },
    {
      icon: Eye,
      title: "Property Viewings",
      description: "Visit carefully selected properties that match your criteria with our expert guidance and insights."
    },
    {
      icon: FileCheck,
      title: "Secure & Close",
      description: "Handle negotiations, inspections, and paperwork to ensure a smooth and secure transaction."
    }
  ];

  const benefits = [
    "Access to exclusive off-market listings",
    "Professional market analysis and pricing guidance",
    "Experienced negotiation on your behalf",
    "Comprehensive property inspections",
    "Secure legal documentation and closing support",
    "Post-purchase support and recommendations"
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-royal-blue to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://www.globalpropertiesafrica.com/propertygallery/74648939243eb68f51eeef2a9bb4e4f3250f2a0fc.jpg)'
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Buying Made Simple with <span className="text-sky-blue">Eddie Inc.</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            From first consultation to keys in hand, we guide you through every step of the home buying process with expertise and care.
          </p>
          <button className="bg-white text-royal-blue px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
            Start Your Search Today
          </button>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Simple 3-Step Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We've streamlined the buying process to make it as smooth and stress-free as possible for you.
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Eddie Inc. for Buying?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive approach ensures you not only find the perfect property in Ghana but also secure it at the best possible terms.
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
                src="https://raw.githubusercontent.com/Webeddies/Properties/refs/heads/main/t2.jfif"
                alt="Happy family with keys"
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
            <h2 className="text-3xl font-bold mb-4">Our Buying Success</h2>
            <p className="text-blue-100 text-lg">Numbers that speak to our commitment and expertise</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">80+</div>
              <p className="text-blue-100">Successful Purchases</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15%</div>
              <p className="text-blue-100">Average Savings</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">30</div>
              <p className="text-blue-100">Days Average Close</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">93%</div>
              <p className="text-blue-100">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let our experienced team guide you through the entire buying process and help you secure the perfect property in Ghana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-royal-blue text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Request Consultation
            </button>
            <button className="border-2 border-royal-blue text-royal-blue px-8 py-3 rounded-lg hover:bg-royal-blue hover:text-white transition-colors font-semibold">
              Browse Properties
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buy;