import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Search, MapPin, Home, DollarSign, Bed } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    propertyType: '',
    priceRange: '',
    bedrooms: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    setSearchData(prev => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    const queryParams = new URLSearchParams();

    if (searchData.location) queryParams.append('location', searchData.location);
    if (searchData.propertyType) queryParams.append('propertyType', searchData.propertyType);
    if (searchData.priceRange) queryParams.append('priceRange', searchData.priceRange);
    if (searchData.bedrooms) queryParams.append('bedrooms', searchData.bedrooms);

    navigate(`/properties?${queryParams.toString()}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        {/* Location */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <div className="relative">
            <MapPin size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="City, Region"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent outline-none transition-all text-black placeholder-gray-500"
              value={searchData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Property Type</label>
          <div className="relative">
            {searchData.propertyType === '' && (
              <Home size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            )}
            <select
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent bg-white text-gray-700"
              value={searchData.propertyType}
              onChange={(e) => handleInputChange('propertyType', e.target.value)}
            >
              <option value="" hidden></option>
              <option value="Luxury Homes">Luxury Homes</option>
              <option value="Private Homes">Private Homes</option>
              <option value="Apartments">Apartments</option>
              <option value="Commercial">Commercial</option>
              <option value="Short Stays">Short Stays</option>
            </select>
          </div>
        </div>

        {/* Price Range */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Budget Range</label>
          <div className="relative">
            {searchData.priceRange === '' && (
              <DollarSign size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            )}
            <select
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent bg-white text-gray-700"
              value={searchData.priceRange}
              onChange={(e) => handleInputChange('priceRange', e.target.value)}
            >
              <option value="" hidden></option>
              <option value="0-250000">Up to $250K</option>
              <option value="250000-500000">$250K - $500K</option>
              <option value="500000-1000000">$500K - $1M</option>
              <option value="1000000-2000000">$1M - $2M</option>
              <option value="2000000-99999999">$2M+</option>
            </select>
          </div>
        </div>

        {/* Bedrooms */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
          <div className="relative">
            {searchData.bedrooms === '' && (
              <Bed size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            )}
            <select
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent bg-white text-gray-700"
              value={searchData.bedrooms}
              onChange={(e) => handleInputChange('bedrooms', e.target.value)}
            >
              <option value="" hidden></option>
              <option value="1">1+ Beds</option>
              <option value="2">2+ Beds</option>
              <option value="3">3+ Beds</option>
              <option value="4">4+ Beds</option>
              <option value="5">5+ Beds</option>
            </select>
          </div>
        </div>
        {/* Search Button */}
        <div>
          <button
            onClick={handleSearch}
            className="w-full bg-royal-blue text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center space-x-2"
          >
            <Search size={18} />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;