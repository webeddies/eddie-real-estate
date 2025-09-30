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
  const [showVisitModal, setShowVisitModal] = useState(false);
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
      <header className="fixed w-full top-0 z-50 transition-all duration-300 font-transact">
        {/* Main Navigation */}
        <nav 
          className={`transition-all duration-300 bg-white ${isScrolled ? 'shadow-lg py-1' : 'bg-white/95 backdrop-blur-sm py-2.5'}`}
        >
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
              {navItems.map(item => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-gray-700 font-medium transition-colors relative group`}
                    style={isActive ? { color: '#2C3E50', fontWeight: '600' } : {}}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#2C3E50';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#374151';
                      }
                    }}
                  >
                    {item.name}
                    <span 
                      className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300`}
                      style={{ 
                        backgroundColor: '#2C3E50',
                        width: isActive ? '100%' : '0%'
                      }}
                    ></span>
                    <span 
                      className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: '#2C3E50' }}
                    ></span>
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <button
                onClick={() => setShowVisitModal(true)} 
                className="px-6 py-2 rounded-full flex items-center space-x-2 justify-center text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "#97021dff" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#7a0116")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#97021dff")}
              >
                <Calendar size={18} />
                <span>Schedule a Visit</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-gray-700 transition-colors"
              style={{ color: '#2C3E50' }}
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
                    className={`block text-gray-700 font-medium transition-colors`}
                    style={location.pathname === item.path ? { color: '#2C3E50' } : {}}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile CTA */}
                <button
                  onClick={() => {
                    setShowVisitModal(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-white px-6 py-2 rounded-lg transition-colors flex items-center justify-center space-x-2 mt-4"
                  style={{ backgroundColor: "#97021dff" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#7a0116")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#97021dff")}
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