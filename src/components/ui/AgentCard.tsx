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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
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
              backgroundColor: "#d4af37",
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
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-1">{name}</h3>
            <p className="text-royal-blue font-medium group-hover:text-white mb-2">{title}</p>
            <p className="text-gray-600 text-sm group-hover:text-white mb-4">{experience} Experience</p>

            {/* Specialties */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 group-hover:text-white mb-2">Specialties:</h4>
              <div className="flex flex-wrap gap-2">
                {specialties.map((s, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-full text-xs transition-colors duration-300 bg-sky-blue/20 text-royal-blue group-hover:bg-white/20 group-hover:text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600 group-hover:text-white">
              <Phone size={14} className="mr-2" />
              <span>{numbers.join(" / ")}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 group-hover:text-white">
              <Mail size={14} className="mr-2" />
              <span>{email}</span>
            </div>
          </div>

          {/* Contact button + dropdown */}
          <div>
            <div className="group w-full">
              <button
                onClick={() => setShowContactOptions((p) => !p)}
                className="w-full bg-royal-blue text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 group-hover:bg-white group-hover:text-royal-blue hover:!bg-blue-600 hover:!text-white"
              >
                Contact Agent
              </button>
            </div>

            {/* Dropdown */}
            {showContactOptions && (
              <div className="mt-3 space-y-2 text-sm text-gray-700">
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
                  href={`mailto:${email}?subject=Property%20Inquiry&body=Hi%20${encodeURIComponent(name)},%20I’d%20like%20to%20inquire%20about%20your%20listings.`}
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
