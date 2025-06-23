import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";

interface AgentCardProps {
  name: string;
  title: string;
  experience: string;
  specialties: string[];
  image: string;
  phone: string;   // may contain several numbers separated by “/”
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
  /* local UI state */
  const [showContactOptions, setShowContactOptions] = useState(false);
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  /* split the phone string into an array, trim spaces */
  const numbers = phone.split("/").map((n) => n.trim());

  /* keep only Ghana (+233) numbers for the Call links */
  const ghNumbers = numbers.filter((n) => n.includes("+233"));

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* ---------- image ---------- */}
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

      {/* ---------- details ---------- */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-royal-blue font-medium mb-2">{title}</p>
        <p className="text-gray-600 text-sm mb-4">{experience} Experience</p>

        {/* specialties */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Specialties:
          </h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((s, i) => (
              <span
                key={i}
                className="bg-sky-blue/20 text-royal-blue px-2 py-1 rounded-full text-xs"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* quick view phone + e-mail (all numbers) */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Phone size={14} className="mr-2" />
            <span>{numbers.join(" / ")}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Mail size={14} className="mr-2" />
            <span>{email}</span>
          </div>
        </div>

        {/* contact button */}
        <button
          onClick={() => setShowContactOptions((p) => !p)}
          className="w-full bg-royal-blue text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Contact Agent
        </button>

        {/* dropdown */}
        {showContactOptions && (
          <div className="mt-3 space-y-2 text-sm">
            {/* --- CALL (mobile only) --- */}
            {isMobile ? (
              ghNumbers.length ? (
                ghNumbers.map((num, idx) => (
                  <a
                    key={idx}
                    href={`tel:${num.replace(/\s+/g, "")}`}
                    className="block text-green-600 hover:underline"
                  >
                    📞 Call {num}
                  </a>
                ))
              ) : (
                <span className="block text-gray-500 italic">
                  📞 No local number available
                </span>
              )
            ) : (
              <span className="block text-gray-500 italic">
                📞 Call (only on mobile)
              </span>
            )}

            {/* --- EMAIL --- */}
            <a
              href={`mailto:${email}?subject=Property%20Inquiry&body=Hi%20${encodeURIComponent(
                name
              )},%20I’d%20like%20to%20inquire%20about%20your%20listings.`}
              className="block text-blue-600 hover:underline"
            >
              📧 Email Agent
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentCard;