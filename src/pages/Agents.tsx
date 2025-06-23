import React from 'react';
import { Mail, Phone } from 'lucide-react';
import AgentCard from '../components/ui/AgentCard';
import { agents } from '../constants/data';

const Agents: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Expert Agents
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our experienced team of real estate professionals is dedicated to helping you achieve your property goals with personalized service and local market expertise.
          </p>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <AgentCard key={agent.id} {...agent} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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
    </div>
  );
};

export default Agents;