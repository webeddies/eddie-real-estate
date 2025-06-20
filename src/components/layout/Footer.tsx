import React from 'react';
import { Link } from 'react-router-dom';
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
            <div className="flex items-center space-x-2">
              <HomeIcon className="h-8 w-8 text-sky-blue" />
              <span className="text-2xl font-bold">Eddie Inc.</span>
            </div>
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
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/properties" className="block text-gray-300 hover:text-white transition-colors">Properties</Link>
              <Link to="/agents" className="block text-gray-300 hover:text-white transition-colors">Our Agents</Link>
              <Link to="/blog" className="block text-gray-300 hover:text-white transition-colors">Market Insights</Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">About Us</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sky-blue">Services</h3>
            <div className="space-y-2">
              <Link to="/buy" className="block text-gray-300 hover:text-white transition-colors">Property Buying</Link>
              <Link to="/rent" className="block text-gray-300 hover:text-white transition-colors">Property Rental</Link>
              <Link to="/sell" className="block text-gray-300 hover:text-white transition-colors">Property Selling</Link>
              <span className="block text-gray-300">Property Management</span>
              <span className="block text-gray-300">Investment Consulting</span>
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
                <span className="text-gray-300">+233 (0) 555 198 595</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-sky-blue" />
                <span className="text-gray-300">info@eddieinc.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Eddie Inc. All rights reserved.
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