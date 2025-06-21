import React from 'react';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';

interface PropertyCardProps {
  id: number;
  title: string;
  price: string;
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  washrooms?: number;
  area: string;
  image: string;
  status: string;
  featured?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  washrooms,
  area,
  image,
  status,
  featured = false
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            status === 'For Sale' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            {status}
          </span>
          {featured && (
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
          )}
        </div>
        <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-royal-blue hover:text-white transition-colors">
          <Heart size={16} />
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-royal-blue transition-colors">
            <span className="text-xs text-gray-500 mr-1">#{id.toString().padStart(2, '0')}</span>
            {title}
          </h3>
          <span className="text-lg font-bold text-royal-blue">
            {price}
          </span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="flex items-center justify-between text-gray-600 mb-4">
          <div className="flex items-center space-x-4">
            {washrooms !== undefined ? (
              <div className="flex items-center">
                <Bath size={16} className="mr-1" />
                <span className="text-sm">{washrooms} WR</span>
              </div>
            ) : (
              <>
                <div className="flex items-center">
                  <Bed size={16} className="mr-1" />
                  <span className="text-sm">{bedrooms} Beds</span>
                </div>
                <div className="flex items-center">
                  <Bath size={16} className="mr-1" />
                  <span className="text-sm">{bathrooms} Baths</span>
                </div>
              </>
            )}

            <div className="flex items-center">
              <Square size={16} className="mr-1" />
              <span className="text-sm">{area}</span>
            </div>
          </div>
        </div>
        
        <button className="w-full bg-royal-blue text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;