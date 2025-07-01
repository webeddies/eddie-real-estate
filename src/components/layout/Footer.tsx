import React from 'react';
import { Link } from 'react-router-dom';
import logoFooter from "../../assets/eddie-logo-footer.png";


import {
  Home as HomeIcon,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Twitter
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-gray text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 h-16">
              <div className="h-full w-auto flex items-center">
                <img
                  src={logoFooter}
                  alt="Eddie Realty Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in Ghanaian luxury real estate. We deliver comfort, value, and exceptional service to help you find your dream home.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-gray-400 hover:text-sky-blue cursor-pointer transition-colors" />
              <Linkedin size={20} className="text-gray-400 hover:text-sky-blue cursor-pointer transition-colors" />
              <Instagram size={20} className="text-gray-400 hover:text-sky-blue cursor-pointer transition-colors" />
              <Twitter size={20} className="text-gray-400 hover:text-sky-blue cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sky-blue">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors transition-transform duration-300 hover:translate-x-1">
                Home
              </Link>
              <Link to="/properties" className="block text-gray-300 hover:text-white transition-colors transition-transform duration-300 hover:translate-x-1">
                Properties
              </Link>
              <Link to="/agents" className="block text-gray-300 hover:text-white transition-colors transition-transform duration-300 hover:translate-x-1">
                Our Agents
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-white transition-colors transition-transform duration-300 hover:translate-x-1">
                Market Insights
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors transition-transform duration-300 hover:translate-x-1">
                About Us
              </Link>
            </div>
          </div>


          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sky-blue">Services</h3>
            <div className="space-y-2">
              <Link
                to="/buy"
                className="block text-gray-300 hover:text-white transition-colors transition-transform duration-300 hover:translate-x-1"
              >
                Property Buying
              </Link>
              <Link
                to="/rent"
                className="block text-gray-300 hover:text-white transition-colors transition-transform duration-300 hover:translate-x-1"
              >
                Property Rental
              </Link>
              <Link
                to="/sell"
                className="block text-gray-300 hover:text-white transition-colors transition-transform duration-300 hover:translate-x-1"
              >
                Property Selling
              </Link>

              <span
                className="block text-gray-300 cursor-pointer transition-colors transition-transform duration-300 hover:text-white hover:translate-x-1"
                onClick={() => { }}
              >
                Property Management
              </span>
              <span
                className="block text-gray-300 cursor-pointer transition-colors transition-transform duration-300 hover:text-white hover:translate-x-1"
                onClick={() => { }}
              >
                Investment Consulting
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sky-blue">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-sky-blue mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>5th Floor, Atlantic Towers</p>
                  <p>Airport City, Accra, Ghana</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-sky-blue" />
                <a
                  href="tel:+233555198595"
                  className="text-gray-300 transition-transform duration-300 hover:translate-x-1 hover:text-white cursor-pointer"
                >
                  +233 (0) 555 198 595
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-sky-blue" />
                <a
                  href="mailto:info@eddierealty.com"
                  className="text-gray-300 transition-transform duration-300 hover:translate-x-1 hover:text-white cursor-pointer"
                >
                  info@eddierealty.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2025 Eddie Realty - All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;