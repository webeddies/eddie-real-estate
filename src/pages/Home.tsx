import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import {
  ChevronRight,
  Award,
  Shield,
  Users,
  TrendingUp,
  Building2,
  Home as HomeIcon,
  Building,
  MapPin,
  Calendar
} from 'lucide-react';
import SearchBar from '../components/ui/SearchBar';
import PropertyCard from '../components/ui/PropertyCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import { properties, testimonials, propertyCategories } from '../constants/data';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const featuredProperties = properties.filter(property => property.featured);

  // Category images - replace these URLs with your actual images

  const categoryImages: Record<string, string> = {

    'Apartments': 'https://raw.githubusercontent.com/Webeddies/Properties/refs/heads/main/s8.jfif',
    'Houses': 'https://raw.githubusercontent.com/Webeddies/Properties/refs/heads/main/t6.jfif',
    'Commercial': 'https://raw.githubusercontent.com/Webeddies/Properties/refs/heads/main/w2.jfif',
    'Lands': 'https://raw.githubusercontent.com/webeddies/Properties/refs/heads/main/land-cover.jpeg',
    'Short Stays': 'https://raw.githubusercontent.com/Webeddies/Properties/refs/heads/main/s1.jpg'

  };

  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://raw.githubusercontent.com/Webeddies/Properties/refs/heads/main/island%20property.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50, letterSpacing: '0.1em', filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0em', filter: 'blur(0px)' }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
            className="text-3xl md:text-5xl font-medium text-white uppercase mb-6 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 text-transparent bg-clip-text drop-shadow-md"
          >
            Find Your Dream Home with <span style={{ color: '#B8960F' }}>Eddie Realty</span>
          </motion.h1>
          <p className="text-xl md:text-2xl mb-12 animate-slide-up opacity-90 font-light">
            Luxury, Comfort, and Value – Delivered.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6, ease: 'easeOut' }}
          >
            <SearchBar />
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 rounded-full animate-float hidden lg:block" style={{ backgroundColor: '#B8960F20' }} />
        <div className="absolute bottom-32 left-16 w-12 h-12 rounded-full animate-float" style={{ backgroundColor: '#2C3E5030', animationDelay: '1s' }} />
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2C3E50' }}>
              Featured Properties
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
              Explore our curated collection of top-tier properties designed for comfort, style, and exceptional value across Ghana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/properties"
              className="inline-flex items-center text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ backgroundColor: '#B8960F', borderRadius: '0px' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A67C00'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8960F'}
            >
              View All Properties
              <ChevronRight size={20} className="ml-2" />
            </Link>

          </div>
        </div>
      </section>

      {/* Why Choose Eddie Realty - Modern Glass Morphism Timeline */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://raw.githubusercontent.com/webeddies/Properties/refs/heads/main/bateluer-bedroom.jpg')"
          }}
        />

        {/* Blur Overlay */}
        <div className="absolute inset-0 backdrop-blur-sm bg-white/10"></div>

        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-white">
              Your Path To A New Home
            </h2>
            <p className="text-white/90 text-xl max-w-3xl mx-auto font-light leading-relaxed">
              From your first consultation to keys in hand, we guide you through every step with expertise, transparency, and care.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Main Timeline Line */}
            <div className="hidden md:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-white/20 via-amber-400/60 to-white/20 transform z-0"></div>

            {/* Timeline Steps */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

              {/* Step 1: Expert Consultation */}
              <div className="group text-center">
                {/* Timeline Node */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center border-4 group-hover:border-8 transition-all duration-300" style={{ borderColor: '#B8960F' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: '#B8960F' }}>
                      1
                    </div>
                  </div>
                </div>

                {/* Step Content - Glass Morphism Card */}
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 hover:border-white/30">
                  {/* Icon (standalone, no square/overlay) */}
                  <div className="mb-6 flex justify-center">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-medium mb-4 text-white">
                    Expert Consultation
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 font-light leading-relaxed">
                    We start with understanding your unique needs, budget, and dream property vision through personalized consultation.
                  </p>
                </div>

              </div>

              {/* Step 2: Property Search & Verification */}
              <div className="group text-center">
                {/* Timeline Node */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center border-4 group-hover:border-8 transition-all duration-300" style={{ borderColor: '#B8960F' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: '#B8960F' }}>
                      2
                    </div>
                  </div>
                </div>

                {/* Step Content - Glass Morphism Card */}
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 hover:border-white/30">
                  <div className="mb-6 flex justify-center">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-medium mb-4 text-white">
                    Verified Property Search
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 font-light leading-relaxed">
                    Our team curates and thoroughly verifies properties that match your criteria, ensuring quality and authenticity.
                  </p>
                </div>
              </div>

              {/* Step 3: Secure Transaction */}
              <div className="group text-center">
                {/* Timeline Node */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center border-4 group-hover:border-8 transition-all duration-300" style={{ borderColor: '#B8960F' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: '#B8960F' }}>
                      3
                    </div>
                  </div>
                </div>

                {/* Step Content - Glass Morphism Card */}
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 hover:border-white/30">
                  {/* Icon (standalone, no square/overlay) */}
                  <div className="mb-6 flex justify-center">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-medium mb-4 text-white">
                    Secure Transaction
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 font-light leading-relaxed">
                    We handle all legal documentation and secure transaction processes, ensuring your investment is protected every step of the way.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* GET IN TOUCH */}
          <div className="text-center mt-16">
            <Link to="/contact">
              <button
                className="inline-flex items-center px-8 py-4 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  backgroundColor: '#2C3E50',
                  borderRadius: '0px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#B8960F'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2C3E50'}
              >
                Get In Touch
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
          </div>
        </div>


      </section>

      {/* Property Categories */}
      <section
        className="py-20 text-white relative"
        style={{
          backgroundColor: '#2C3E50'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Property Categories
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto font-light">
              Explore our diverse range of properties to find the perfect match for your lifestyle and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {propertyCategories.map((category) => {
              return (
                <Link
                  key={category.id}
                  to={`/properties?propertyTypes=${encodeURIComponent(category.types.join(','))}`}
                  className="relative h-64 overflow-hidden group cursor-pointer"
                  style={{ borderRadius: '0px' }}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: categoryImages[category.name]
                        ? `url(${categoryImages[category.name]})`
                        : 'none'
                    }}
                  />


                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 transition-all duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-white/80 text-sm mb-3 font-light">{category.description}</p>
                    <span className="font-semibold text-sm" style={{ color: '#B8960F' }}>
                      {category.count} Properties →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="uppercase tracking-wider text-2xl md:text-3xl font-bold mb-4" style={{ color: '#2C3E50' }}>
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
              Don't just take our word for it. Hear from the families and investors who trusted us with their real estate journey.
            </p>
          </div>

          <div className="relative">
            {/* Animated testimonials container */}
            <div className="flex animate-scroll-left space-x-6">
              {/* First set */}
              {testimonials.map((testimonial) => (
                <div key={`${testimonial.id}-1`} className="flex-shrink-0 w-80">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial) => (
                <div key={`${testimonial.id}-2`} className="flex-shrink-0 w-80">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add this CSS animation */}
        <style>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll-left {
            animation: scroll-left 20s linear infinite;
          }

          @media (min-width: 1024px) {  
            .animate-scroll-left {
              animation-duration: 30s;
            }
          }
          
          
        `}</style>
      </section>

      {/* Call to Action */}
      <section
        className="py-20 bg-cover bg-center text-white relative"
        style={{
          backgroundImage: "url('https://raw.githubusercontent.com/webeddies/real-estate-items-/refs/heads/main/keys%20to%20client.jpg')",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: '#2C3E50CC' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-normal mb-6">
            Your Next Chapter Starts Here
          </h2>
          <p className="text-xl mb-8 text-white/90 font-light">
            Contact our expert team today and let us help you find your perfect property or get the best value for your current one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/properties">
              <button
                className="px-8 py-4 font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                style={{ backgroundColor: '#B8960F', borderRadius: '0px' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A67C00'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8960F'}
              >
                Get Started Today
              </button>
            </Link>
            <Link to="/contact">
              <button
                className="px-8 py-4 font-semibold transition-all duration-300 border-2 hover:bg-white hover:text-gray-800"
                style={{ borderColor: '#B8960F', color: '#B8960F', borderRadius: '0px' }}
              >
                Learn More
              </button>
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;