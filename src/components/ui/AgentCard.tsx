import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

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
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm font-medium">{listings} Active Listings</p>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-royal-blue font-medium mb-2">{title}</p>
        <p className="text-gray-600 text-sm mb-4">{experience} Experience</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Specialties:</h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <span 
                key={index}
                className="bg-sky-blue/20 text-royal-blue px-2 py-1 rounded-full text-xs"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
        
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
        
        <button className="w-full bg-royal-blue text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Contact Agent
        </button>
      </div>
    </div>
  );
};

export default AgentCard;