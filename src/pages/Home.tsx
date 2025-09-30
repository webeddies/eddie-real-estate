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

      {/* Why Choose Eddie Realty */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-yellow-50/30 to-amber-50/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2C3E50' }}>
              More Than Real Estate—It's About People
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
              At Eddie Realty, we build lasting relationships, not just transactions. From start to finish, we provide the advice and support you can rely on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                style={{ backgroundColor: '#B8960F15' }}
              >
                <Users size={36} style={{ color: '#B8960F' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>Expert Guidance</h3>
              <p className="text-gray-600 font-light">
                With over a decade of experience in luxury real estate, we provide you with unmatched expertise and market insights.
              </p>
            </div>

            <div className="text-center group">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                style={{ backgroundColor: '#B8960F15' }}
              >
                <Award size={36} style={{ color: '#B8960F' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>Verified Listings</h3>
              <p className="text-gray-600 font-light">
                All our properties are thoroughly authenticated and verified to ensure you get exactly what you expect.
              </p>
            </div>

            <div className="text-center group">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                style={{ backgroundColor: '#B8960F15' }}
              >
                <Shield size={36} style={{ color: '#B8960F' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>Secure Deals</h3>
              <p className="text-gray-600 font-light">
                Hassle-free legal documentation and secure transaction processes protect your investment every step of the way.
              </p>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2C3E50' }}>
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
            animation: scroll-left 40s linear infinite;
          }
          
          .animate-scroll-left:hover {
            animation-play-state: paused;
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
            <button
              className="px-8 py-4 font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              style={{ backgroundColor: '#B8960F', borderRadius: '0px' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A67C00'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8960F'}
            >
              Get Started Today
            </button>
            <button
              className="px-8 py-4 font-semibold transition-all duration-300 border-2 hover:bg-white hover:text-gray-800"
              style={{ borderColor: '#B8960F', color: '#B8960F', borderRadius: '0px' }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;