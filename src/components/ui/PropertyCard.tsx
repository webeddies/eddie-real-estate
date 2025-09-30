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
    <div 
      className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:border-gray-200 font-transact"
      style={{ borderRadius: '0px' }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="absolute top-4 left-4 flex space-x-2">
          <span 
            className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border"
            style={{
              backgroundColor: status === 'For Sale' ? '#2C3E50'  : '#8A0119',
              color: status === 'For Sale' ? 'white' : 'white',
              borderColor: status === 'For Sale' ? '#2C3E5030' : '#2C3E5030'
            }}
          >
            {status}
          </span>
          {featured && (
            <span 
              className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border animate-pulse"
              style={{
                backgroundColor: '#B8960F',
                color: 'white',
                borderColor: '#B8960F'
              }}
            >
              Featured
            </span>
          )}
        </div>
        
        <button 
          className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group/heart"
          style={{
            border: '1px solid #B8960F20'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#B8960F';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            e.currentTarget.style.color = '#2C3E50';
          }}
        >
          <Heart size={16} className="transition-transform duration-300 group-hover/heart:scale-110" />
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1 pr-4">
            <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:transform group-hover:translate-x-1"
                style={{ color: '#2C3E50' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#B8960F'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#2C3E50'}
            >
              <span className="text-xs font-light mr-2" style={{ color: '#B8960F' }}>
                #{id.toString().padStart(2, '0')}
              </span>
              {title}
            </h3>
          </div>
          <span 
            className="text-xl font-bold whitespace-nowrap"
            style={{ color: '#B8960F' }}
          >
            {price}
          </span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="mr-2" style={{ color: '#B8960F' }} />
          <span className="text-sm font-light">{location}</span>
        </div>

        <div className="flex items-center justify-between text-gray-600 mb-6">
          <div className="flex items-center space-x-4">
            {washrooms !== undefined ? (
              <div className="flex items-center group/feature">
                <Bath size={16} className="mr-1.5 transition-colors duration-300 group-hover/feature:text-orange-500" style={{ color: '#B8960F' }} />
                <span className="text-sm font-medium">{washrooms} WR</span>
              </div>
            ) : (
              <>
                <div className="flex items-center group/feature">
                  <Bed size={16} className="mr-1.5 transition-colors duration-300" style={{ color: '#B8960F' }} />
                  <span className="text-sm font-medium">{bedrooms} Beds</span>
                </div>
                <div className="flex items-center group/feature">
                  <Bath size={16} className="mr-1.5 transition-colors duration-300" style={{ color: '#B8960F' }} />
                  <span className="text-sm font-medium">{bathrooms} Baths</span>
                </div>
              </>
            )}

            <div className="flex items-center group/feature">
              <Square size={16} className="mr-1.5 transition-colors duration-300" style={{ color: '#B8960F' }} />
              <span className="text-sm font-medium">{area}</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button 
            className="px-6 py-3 font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group/button"
            style={{ backgroundColor: '#2C3E50', borderRadius: '0px' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#B8960F';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(184, 150, 15, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2C3E50';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            }}
          >
            <span className="relative z-10 text-white">
              View Details
            </span>
            <div 
              className="absolute inset-0 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300 animate-shimmer"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)'
              }}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;