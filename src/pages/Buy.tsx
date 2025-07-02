import React from 'react';
import { CheckCircle, Search, Eye, FileCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef } from 'react';





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
      <section className="relative text-white py-28 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://anaarkutu.com/wp-content/uploads/2022/04/DJI_0410-1.jpg)'
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-sky-200 text-transparent bg-clip-text drop-shadow-md"
          >
            Buying Made Simple with <span className="text-sky-blue">Eddie Realty</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
          >
            <Link to="/properties?status=For Sale">
              <button className="mt-8 text-lg font-semibold px-8 py-3 rounded-lg bg-white/10 border border-white text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-200 hover:bg-white hover:text-royal-blue hover:bg-clip-border transition-colors duration-300">
                Start Your Search Today
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
              Our Simple 3-Step Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We've streamlined the buying process to make it as smooth and stress-free as possible for you.
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
                Why Choose Eddie Realty for Buying?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive approach ensures you not only find the perfect property in Ghana but also secure it at the best possible terms.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
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
                src="https://raw.githubusercontent.com/Webeddies/Properties/refs/heads/main/t2.jfif"
                alt="Happy family with keys"
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
            <h2 className="text-3xl font-bold mb-4">Our Buying Success</h2>
            <p className="text-blue-100 text-lg">Numbers that speak to our commitment and expertise</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
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
            Your Dream Home is Closer Than You Think
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore the best of Ghana’s property market with a team that knows how to get you there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact#contact-form" className="w-full sm:w-auto">
              <button className="bg-royal-blue text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                Request Consultation
              </button>
            </Link>
            <Link to="/properties?status=For Sale">
              <button className="border-2 border-royal-blue text-royal-blue px-8 py-2.5 rounded-lg hover:bg-royal-blue hover:text-white transition-colors font-semibold">
                Browse Properties
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buy;