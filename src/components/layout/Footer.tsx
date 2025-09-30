import React from 'react';
import { Link } from 'react-router-dom';
import logoFooter from "../../assets/eddie-logo-footer.png";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative">
      {/* Main Footer Section with Navy Background (no image) */}
      <div className="relative bg-slate-800 text-white">
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Company Info */}
            <div className="space-y-6">
              <Link to="/" className="flex items-center space-x-2 h-16">
                <div className="h-full w-auto flex items-center">
                  <img
                    src={logoFooter}
                    alt="Eddie Realty Logo"
                    className="h-full w-auto object-contain filter brightness-110"
                  />
                </div>
              </Link>

              <p className="text-gray-300 leading-relaxed text-sm">
                Your trusted partner in Ghanaian luxury real estate. We deliver comfort, value, and exceptional service to help you find your dream home.
              </p>

              <div className="flex space-x-4">
                
                
                <a
                  href="mailto:info@eddierealty.com"
                  className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  style={{ backgroundColor: '#EA4335' }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.27h.909c.904 0 1.636.732 1.636 1.637z" />
                  </svg>
                </a>

                
                <a
                  href="https://wa.me/233555198595"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.506z" />
                  </svg>
                </a>
              </div>

            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#B8960F] mt-2"></div>
              </h3>
              <div className="space-y-3">
                <Link to="/" className="block text-gray-300 hover:text-[#B8960F] transition-all duration-300 hover:translate-x-2 text-sm">Home</Link>
                <Link to="/properties" className="block text-gray-300 hover:text-[#B8960F] transition-all duration-300 hover:translate-x-2 text-sm">Properties</Link>
                <Link to="/agents" className="block text-gray-300 hover:text-[#B8960F] transition-all duration-300 hover:translate-x-2 text-sm">Our Agents</Link>
                <Link to="/blog" className="block text-gray-300 hover:text-[#B8960F] transition-all duration-300 hover:translate-x-2 text-sm">Market Insights</Link>
                <Link to="/about" className="block text-gray-300 hover:text-[#B8960F] transition-all duration-300 hover:translate-x-2 text-sm">About Us</Link>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative">
                Services
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#B8960F] mt-2"></div>
              </h3>
              <div className="space-y-3">
                <Link to="/buy" className="block text-gray-300 hover:text-[#B8960F] transition-all duration-300 hover:translate-x-2 text-sm">Property Buying</Link>
                <Link to="/rent" className="block text-gray-300 hover:text-[#B8960F] transition-all duration-300 hover:translate-x-2 text-sm">Property Rental</Link>
                <Link to="/sell" className="block text-gray-300 hover:text-[#B8960F] transition-all duration-300 hover:translate-x-2 text-sm">Property Selling</Link>
                <span className="block text-gray-300 cursor-pointer hover:text-[#B8960F] transition-all duration-300 hover:translate-x-2 text-sm">Property Management</span>
                <span className="block text-gray-300 cursor-pointer hover:text-[#B8960F] transition-all duration-300 hover:translate-x-2 text-sm">Investment Consulting</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative">
                Contact Info
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#B8960F] mt-2"></div>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-[#B8960F]/20 rounded">
                    <MapPin size={16} className="text-[#B8960F] mt-0.5 flex-shrink-0" />
                  </div>
                  <div className="text-gray-300 text-sm">
                    <p>5th Floor, Atlantic Towers</p>
                    <p>Airport City, Accra, Ghana</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-1 bg-[#B8960F]/20 rounded">
                    <Phone size={16} className="text-[#B8960F]" />
                  </div>
                  <a href="tel:+233555198595" className="text-gray-300 hover:text-[#B8960F] transition-all duration-300 hover:translate-x-1 cursor-pointer text-sm">
                    +233 (0) 555 198 595
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-1 bg-[#B8960F]/20 rounded">
                    <Mail size={16} className="text-[#B8960F]" />
                  </div>
                  <a href="mailto:info@eddierealty.com" className="text-gray-300 hover:text-[#B8960F] transition-all duration-300 hover:translate-x-1 cursor-pointer text-sm">
                    info@eddierealty.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Deeper Navy Color */}
      <div className="bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2025 Eddie Realty. All Rights Reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-[#B8960F] text-sm transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-[#B8960F] text-sm transition-colors duration-300">Terms of Service</Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-[#B8960F] text-sm transition-colors duration-300">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
