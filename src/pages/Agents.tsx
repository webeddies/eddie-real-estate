import React from 'react';
import { Mail, Phone } from 'lucide-react';
import AgentCard from '../components/ui/AgentCard';
import { agents } from '../constants/data';

const Agents: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Hero Section */}
      <section className="relative py-20 min-h-[320px] flex items-center justify-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-center bg-cover opacity-20"
          style={{ backgroundImage: "url('/images/architecture-hero.jpg')" }} // same classy image
          aria-hidden="true"
        ></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text content */}
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
            Market Insights & Expert Advice
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto animate-fade-up-delay opacity-0">
            Stay informed with the latest real estate trends, buying and selling tips, and market analysis from our expert team.
          </p>
        </div>
      </section>




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






      {/* Agents Grid */ }
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {agents.map((agent) => (
          <AgentCard key={agent.id} {...agent} />
        ))}
      </div>
    </div>
  </section>

  {/* Contact CTA */ }
  <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Ready to Work with Our Team?
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Contact us today to connect with the right agent for your specific needs and location.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+233555198595"
          className="flex items-center justify-center space-x-2 bg-royal-blue text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          <Phone size={18} />
          <span>Call Us</span>
        </a>
        <a
          href="mailto:info@eddierealty.com"
          className="flex items-center justify-center space-x-2 border-2 border-royal-blue text-royal-blue px-8 py-3 rounded-lg hover:bg-royal-blue hover:text-white transition-colors font-semibold"
        >
          <Mail size={18} />
          <span>Email Us</span>
        </a>
      </div>
    </div>
  </section>
    </div >
  );
};

export default Agents;