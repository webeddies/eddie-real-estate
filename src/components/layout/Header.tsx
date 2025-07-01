import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ScheduleVisitModal from "../ui/ScheduleVisitModal";
import logo from "../../assets/eddie-logo.png";


import {
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Menu,
  X,
  Home as HomeIcon,
  Calendar
} from 'lucide-react';

const Header: React.FC = () => {
  // ----- STATE -----
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showVisitModal, setShowVisitModal] = useState(false); // ✅ modal state
  const location = useLocation();

  // ----- SCROLL EFFECT -----
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ----- NAV ITEMS -----
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Buy', path: '/buy' },
    { name: 'Rent', path: '/rent' },
    { name: 'Sell', path: '/sell' },
    { name: 'Agents', path: '/agents' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* --- Modal --- */}
      {showVisitModal && <ScheduleVisitModal onClose={() => setShowVisitModal(false)} />}

      {/* --- Header --- */}
      <header className="fixed w-full top-0 z-50 transition-all duration-300">
        {/* Top Bar */}
        <div className="bg-royal-blue text-white py-2 px-4 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a
                href="tel:+233555198595"
                className="flex items-center space-x-2 transform transition-transform duration-200 hover:scale-105"
              >
                <Phone size={16} />
                <span>+233 (0) 555 198 595</span>
              </a>


              <a
                href="mailto:info@eddierealty.com"
                className="flex items-center space-x-2 transform transition-transform duration-200 hover:scale-105"
              >
                <Mail size={16} />
                <span>info@eddierealty.com</span>
              </a>


            </div>
            <div className="flex items-center space-x-4">
              <Facebook size={16} className="hover:text-sky-blue cursor-pointer transition-colors" />
              <Linkedin size={16} className="hover:text-sky-blue cursor-pointer transition-colors" />
              <Instagram size={16} className="hover:text-sky-blue cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-1' : 'bg-white/95 backdrop-blur-sm py-2.5'}`}>

          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 h-16 lg:h-20">
              <div className="h-full w-auto flex items-center">
                <img
                  src={logo}
                  alt="Eddie Realty Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>


            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-gray-700 hover:text-royal-blue font-medium transition-colors relative group ${location.pathname === item.path ? 'text-royal-blue' : ''}`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-royal-blue transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <button
                onClick={() => setShowVisitModal(true)}          // ✅ open modal
                className="bg-royal-blue text-white px-6 py-2 rounded-lg flex items-center space-x-2 justify-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-blue-700"
              >
                <Calendar size={18} />
                <span>Schedule a Visit</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-gray-700 hover:text-royal-blue"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
              <div className="px-4 py-4 space-y-4">
                {navItems.map(item => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block text-gray-700 hover:text-royal-blue font-medium transition-colors ${location.pathname === item.path ? 'text-royal-blue' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile CTA */}
                <button
                  onClick={() => {
                    setShowVisitModal(true);  // ✅ open modal
                    setIsMenuOpen(false);     // close menu
                  }}
                  className="w-full bg-royal-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 mt-4"
                >
                  <Calendar size={18} />
                  <span>Schedule a Visit</span>
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;