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

  return (
    <div className="font-poppins">
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
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-sky-200 text-transparent bg-clip-text drop-shadow-md"
          >
            Find Your Dream Home with <span className="text-sky-blue">Eddie Realty</span>
          </motion.h1>
          <p className="text-xl md:text-2xl mb-12 animate-slide-up opacity-90">
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
        <div className="absolute top-20 right-10 w-20 h-20 bg-sky-blue/20 rounded-full animate-float hidden lg:block" />
        <div className="absolute bottom-32 left-16 w-12 h-12 bg-royal-blue/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties that offer exceptional value and luxury living in Ghana.
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
              className="inline-flex items-center bg-royal-blue text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              View All Properties
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Eddi Inc. */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More Than Real Estate—It’s About People
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              At Eddie Realty, we build lasting relationships, not just transactions. You’ll feel the difference in how we work with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-sky-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sky-blue/20 transition-colors">
                <Users size={36} className="text-royal-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Guidance</h3>
              <p className="text-gray-600">
                Over 10 years of experience in luxury real estate, providing you with unmatched expertise and market insights.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-sky-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sky-blue/20 transition-colors">
                <Award size={36} className="text-royal-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Verified Listings</h3>
              <p className="text-gray-600">
                All our properties are thoroughly authenticated and verified to ensure you get exactly what you expect.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-sky-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sky-blue/20 transition-colors">
                <Shield size={36} className="text-royal-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Deals</h3>
              <p className="text-gray-600">
                Hassle-free legal documentation and secure transaction processes protect your investment every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Categories */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-royal-blue to-sky-500 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Property Categories
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Explore our diverse range of properties to find the perfect match for your lifestyle and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {propertyCategories.map((category) => {
              const IconComponent = {
                Building2,
                Home: HomeIcon,
                Building,
                MapPin,
                Calendar,
              }[category.icon as keyof typeof import("lucide-react")] || Building2;

              return (
                /* 🟢 wrap the card in a Link */
                <Link
                  key={category.id}
                  to={`/properties?propertyTypes=${encodeURIComponent(category.types.join(','))}`}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                >

                  <div className="text-center">
                    <IconComponent
                      size={36}
                      className="mx-auto mb-4 text-sky-blue group-hover:scale-110 transition-transform"
                    />
                    <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                    <p className="text-blue-100 text-sm mb-3">{category.description}</p>
                    <span className="text-sky-blue font-semibold">
                      {category.count} Properties
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Hear from the families and investors who trusted us with their real estate journey.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="flex space-x-6 pb-4">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-royal-blue mb-2 group-hover:text-sky-blue transition-colors">
                100+
              </div>
              <p className="text-gray-600 font-medium">Properties Sold</p>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-royal-blue mb-2 group-hover:text-sky-blue transition-colors">
                150+
              </div>
              <p className="text-gray-600 font-medium">Happy Clients</p>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-royal-blue mb-2 group-hover:text-sky-blue transition-colors">
                10+
              </div>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-royal-blue mb-2 group-hover:text-sky-blue transition-colors">
                93%
              </div>
              <p className="text-gray-600 font-medium">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-20 bg-cover bg-center text-white relative"
        style={{
          backgroundImage: "url('https://raw.githubusercontent.com/webeddies/real-estate-items-/refs/heads/main/keys%20to%20client.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Next Chapter Starts Here
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact our expert team today and let us help you find your perfect property or get the best value for your current one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Buttons */}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;