import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";

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
  listings,
}) => {
  const [showContactOptions, setShowContactOptions] = useState(false);
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  const numbers = phone.split("/").map((n) => n.trim());
  const ghNumbers = numbers.filter((n) => n.includes("+233"));

  return (
    <div className="bg-white shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 font-transact" style={{ borderRadius: '0px' }}>
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm font-medium">{listings} Active Listings</p>
        </div>
      </div>

      {/* Details Section */}
      <div className="relative min-h-[380px]">
        {/* Gold striped hover background */}
        <div
          className="absolute inset-0 z-0 transition-all duration-500"
          style={{
            backgroundColor: "#ffffff",
          }}
        >
          <div className="w-full h-full transition-all duration-500 group-hover:opacity-100 opacity-0"
            style={{
              backgroundColor: "#B8960F",
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 6px)",
              backgroundSize: "10px 10px"
            }}
          />
        </div>

        {/* Content layer */}
        <div className="p-6 relative z-10 flex flex-col h-full justify-between">
          {/* Name, title, experience */}
          <div>
            <h3 className="text-xl font-semibold mb-1 transition-colors duration-300" style={{ color: '#2C3E50' }}>
              <span className="group-hover:text-white">{name}</span>
            </h3>
            <p className="font-medium mb-2 transition-colors duration-300" style={{ color: '#97021dff' }}>
              <span className="group-hover:text-white">{title}</span>
            </p>
            <p className="text-gray-600 text-sm group-hover:text-white mb-4 transition-colors duration-300">
              {experience} Experience
            </p>

            {/* Specialties */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 group-hover:text-white mb-2 transition-colors duration-300">
                Specialties:
              </h4>
              <div className="flex flex-wrap gap-2">
                {specialties.map((s, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium transition-all duration-300"
                    style={{ 
                      borderRadius: '0px',
                      backgroundColor: 'rgba(184, 150, 15, 0.1)',
                      color: '#2C3E50'
                    }}
                  >
                    <span className="group-hover:text-white">{s}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600 group-hover:text-white transition-colors duration-300">
              <Phone size={14} className="mr-2" />
              <span>{numbers.join(" / ")}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 group-hover:text-white transition-colors duration-300">
              <Mail size={14} className="mr-2" />
              <span>{email}</span>
            </div>
          </div>

          {/* Contact button + dropdown */}
          <div>
            <div className="flex justify-center">
              <button
                onClick={() => setShowContactOptions((p) => !p)}
                className="px-6 py-2 font-medium transition-all duration-300 text-white"
                style={{ 
                  backgroundColor: '#2C3E50',
                  borderRadius: '0px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#97021dff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#2C3E50';
                }}
              >
                Contact Agent
              </button>
            </div>

            {/* Dropdown */}
            {showContactOptions && (
              <div className="mt-3 space-y-2 text-sm text-gray-700 group-hover:text-white transition-colors duration-300">
                {isMobile ? (
                  ghNumbers.length ? (
                    ghNumbers.map((num, idx) => (
                      <a key={idx} href={`tel:${num.replace(/\s+/g, "")}`} className="block hover:underline">
                        📞 Call {num}
                      </a>
                    ))
                  ) : (
                    <span className="block italic">📞 No local number available</span>
                  )
                ) : (
                  <span className="block italic">📞 Call (only on mobile)</span>
                )}
                <a
                  href={`mailto:${email}?subject=Property%20Inquiry&body=Hi%20${encodeURIComponent(name)},%20I'd%20like%20to%20inquire%20about%20your%20listings.`}
                  className="block hover:underline"
                >
                  📧 Email Agent
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;