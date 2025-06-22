import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

interface AgentCardProps {
  name: string;
  title: string;
  experience: string;
  specialties: string[];
  image: string;
  phone: string;
  email: string;
  listings: number;
}

const AgentCard: React.FC<AgentCardProps> = ({
  name,
  title,
  experience,
  specialties,
  image,
  phone,
  email,
  listings
}) => {
  // ── local state to show / hide the contact options
  const [showContactOptions, setShowContactOptions] = useState(false);

  // rudimentary device check (client‑side only)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* ---------- Image & overlay ---------- */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm font-medium">{listings} Active Listings</p>
        </div>
      </div>

      {/* ---------- Agent details ---------- */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-royal-blue font-medium mb-2">{title}</p>
        <p className="text-gray-600 text-sm mb-4">{experience} Experience</p>

        {/* Specialties */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Specialties:</h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((spec, i) => (
              <span
                key={i}
                className="bg-sky-blue/20 text-royal-blue px-2 py-1 rounded-full text-xs"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Quick phone & email (view‑only) */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Phone size={14} className="mr-2" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Mail size={14} className="mr-2" />
            <span>{email}</span>
          </div>
        </div>

        {/* ---------- Contact Agent button ---------- */}
        <button
          onClick={() => setShowContactOptions(prev => !prev)}
          className="w-full bg-royal-blue text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Contact Agent
        </button>

        {/* ---------- Dropdown with Call / Email ---------- */}
        {showContactOptions && (
          <div className="mt-3 space-y-2 text-sm">
            {/* Call */}
            {isMobile ? (
              <a
                href={`tel:${phone}`}
                className="block text-green-600 hover:underline"
              >
                📞 Call Agent
              </a>
            ) : (
              <span className="block text-gray-500 italic">
                📞 Call (only available on mobile)
              </span>
            )}

            {/* Email */}
            <a
              href={`mailto:${email}?subject=Property%20Inquiry&body=Hi%20${encodeURIComponent(
                name
              )},%20I’d%20like%20to%20inquire%20about%20your%20listings.`}
              className="block text-blue-600 hover:underline"
            >
              📧 Email Agent
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentCard;