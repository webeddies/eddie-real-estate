import React from 'react';
import { CheckCircle, Search, Eye, FileCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const Buy: React.FC = () => {
  const steps = [
    {

      title: "Consultation & Search",
      description: "We understand your needs, budget, and preferences to create a tailored property search strategy."
    },
    {

      title: "Property Viewings",
      description: "Visit carefully selected properties that match your criteria with our expert guidance and insights."
    },
    {

      title: "Secure & Close",
      description: "We handle negotiations, inspections, and paperwork to ensure a smooth and secure transaction."
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
    <div className="min-h-screen bg-gray-50 font-transact">
      {/* Hero Section */}
      <section className="relative text-white py-28 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://anaarkutu.com/wp-content/uploads/2022/04/DJI_0410-1.jpg)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }} // ✅ same as Rent
            className="text-left"
          >
            <h1 className="text-2xl md:text-3xl font-medium text-white uppercase inline-block relative">
              Your Dream Home is Closer Than You Think
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
            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }} // ✅ same as Rent
            className="flex justify-center"
          >
            <Link to="/properties?status=For Sale">
              <button
                className="mt-8 text-lg font-semibold px-8 py-4 border-2 text-white transition-all duration-300 transform hover:scale-95"
                style={{
                  borderColor: "#B8960F",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "0px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#B8960F";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "white";
                }}
              >
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2C3E50' }}>
              Our Robust 3-step Approach To Buying
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Buying a home can be overwhelming. We believe that it doesn't have to be. We have designed a clear approach to guide our clients through purchasing a home with confidence and ease.
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
                <div key={index} className="relative overflow-hidden h-full group">
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
                Why Choose Eddie Realty for Buying?
              </h2>
              <p className="text-lg text-gray-600 mb-8 font-light">
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
                    <CheckCircle size={20} style={{ color: '#B8960F' }} className="mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-light">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

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
                className="shadow-lg w-full"
                style={{ borderRadius: '0px' }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(184, 150, 15, 0.2), transparent)', borderRadius: '0px' }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Magic Happens Section */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Left Side Image */}
          <div className="relative h-64 md:h-auto min-h-[50vh]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://raw.githubusercontent.com/webeddies/Real-Estate-Agents/refs/heads/main/client%20agent%20view.png')"
              }}
            />
            <div className="absolute inset-0" style={{ backgroundColor: '#2C3E5060' }}></div>
          </div>
          {/* Right Side Image with Content */}
          <div className="relative h-64 md:h-auto min-h-[50vh] flex items-center justify-center">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://raw.githubusercontent.com/webeddies/real-estate-items-/refs/heads/main/keys%20to%20client.jpg')"
              }}
            />
            <div className="absolute inset-0" style={{ backgroundColor: '#B8960F80' }}></div>
            {/* Content Overlay */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-8">
              <h2 className="text-2xl md:text-3xl font-normal mb-auto pt-16 leading-relaxed text-center text-white">
                Magic Happens When the Right People Come Together
              </h2>
              <Link to="/contact">
                <button
                  className="px-6 py-3 font-semibold text-white border-2 border-white transition-all duration-300 transform hover:scale-95 mb-8 mr-8 self-end"
                  style={{ borderRadius: '0px' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = '#B8960F';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'white';
                  }}
                >
                  Connect with an Agent
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#2C3E50' }}>
            Own A Propertity In Ghana
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-light">
            Explore the best of Ghana's property market with a team that knows how to get you there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact#contact-form" className="w-full sm:w-auto">
              <button
                className="font-semibold px-6 py-3 text-white transition-all duration-300 transform hover:scale-95"
                style={{
                  backgroundColor: '#B8960F',
                  borderRadius: '0px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A67C00'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8960F'}
              >
                Request Consultation
              </button>
            </Link>
            <Link to="/properties?status=For Sale">
              <button
                className="border-2 px-8 py-2.5 font-semibold transition-all duration-300 transform hover:scale-95"
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