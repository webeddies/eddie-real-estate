import React from 'react';
import { Mail, Phone } from 'lucide-react';
import AgentCard from '../components/ui/AgentCard';
import { agents } from '../constants/data';

const Agents: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-transact">
      {/* Hero Section */}
      <section
        className="relative h-[65vh] bg-cover bg-center bg-no-repeat text-white flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          {/* Title (Left Aligned) */}
          <div className="text-left mb-6">
            <div className="inline-block">
              <h1 className="text-2xl md:text-3xl font-medium text-white uppercase animate-fade-up">
                Connect with Ghana's Finest Real Estate Agents
              </h1>
              <div className="h-0.5 mt-3 bg-white animate-fade-up" style={{ width: "50%" }}></div>
            </div>
          </div>

          {/* Subtitle (Centered) */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-white/90 font-light animate-fade-up-delay">
              Our trusted agents combine local expertise with a passion for helping you buy, sell, or invest in Ghana's best properties.
            </p>
          </div>
        </div>

        {/* Triple Chevron Arrows */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 space-y-[-10px] pendulum-bounce">
          {/* Light Arrow */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-50"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>

          {/* Solid Arrow 1 */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>

          {/* Solid Arrow 2 */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80')",
              filter: 'blur(8px)',
              transform: 'scale(1.1)'
            }}
          />
          {/* Overlay */}
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          />
          
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <AgentCard key={agent.id} {...agent} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(to right, #f9fafb, rgba(184, 150, 15, 0.05))' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#2C3E50' }}>
            Talk To Us Today
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-light">
            Reach out now and let our trusted agents guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+233504923755"
              className="flex items-center justify-center space-x-2 text-white px-8 py-3 font-semibold transition-all duration-300 transform hover:-translate-y-1"
              style={{ 
                backgroundColor: '#2C3E50',
                borderRadius: '0px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#B8960F'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2C3E50'}
            >
              <Phone size={18} />
              <span>Call Us</span>
            </a>
            <a
              href="mailto:info@eddierealty.com"
              className="flex items-center justify-center space-x-2 border-2 px-8 py-3 font-semibold transition-all duration-300"
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
              <Mail size={18} />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agents;