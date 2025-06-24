import React, { useState, useEffect } from 'react';
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react';
import PropertyCard from '../components/ui/PropertyCard';
import { properties } from '../constants/data';
import { useLocation } from 'react-router-dom';

const Properties: React.FC = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  

  /** full filter state */
  const [filters, setFilters] = useState({
    status: '',
    priceMin: '',
    priceMax: '',
    bedrooms: '',
    bathrooms: '',
    propertyType: '',      // value from sidebar select
    propertyTypeList: [] as string[], // ← multi-type list from URL
    location: ''
  });

  const locationHook = useLocation();

  /* ────────────────────────────────────────────────── */
  /* read URL params on first load / when query changes */
  useEffect(() => {
  const params = new URLSearchParams(locationHook.search);

  // build initial filter object
  const searchFilters = {
    status: '',
    priceMin: '',
    priceMax: '',
    bedrooms: params.get('bedrooms') || '',
    bathrooms: '',
    location: params.get('location') || '',
    propertyType: params.get('propertyType') || '',
    propertyTypeList: [] as string[]          //  ← add the field here
  };
  searchFilters.status = params.get('status') || '';


  // ?propertyTypes=Luxury Homes,Private Homes
  const typesParam = params.get('propertyTypes');
  if (typesParam) {
    searchFilters.propertyTypeList = typesParam.split(',');
  }

  // price range keeps working
  const priceRange = params.get('priceRange');
  if (priceRange) {
    const [min, max] = priceRange.split('-');
    searchFilters.priceMin = min;
    searchFilters.priceMax = max || '';
  }

  setFilters(searchFilters);
  handleFilterChangeBatch(searchFilters);

}, [locationHook.search]);
  /* ────────────────────────────────────────────────── */

  /** update one filter via the sidebar */
  const handleFilterChange = (key: string, value: string) => {
  const updated = { ...filters, [key]: value };

  // if user picks a single type from the sidebar, drop any multi-list
  if (key === 'propertyType') updated.propertyTypeList = [];

  setFilters(updated);
  handleFilterChangeBatch(updated);
};

  /** ------------- MAIN FILTER FUNCTION ------------- */
  const handleFilterChangeBatch = (updatedFilters: typeof filters) => {
    const priceToNumber = (p: string) =>
      parseInt(p.replace(/[^0-9]/g, ''), 10) || 0;

    let result = properties;

    /* status */
    if (updatedFilters.status) {
      result = result.filter(p => p.status === updatedFilters.status);
    }

    /* bedrooms / baths */
    if (updatedFilters.bedrooms) {
      result = result.filter(p => p.bedrooms >= +updatedFilters.bedrooms);
    }
    if (updatedFilters.bathrooms) {
      result = result.filter(p => p.bathrooms >= +updatedFilters.bathrooms);
    }

    /* location search */
    if (updatedFilters.location) {
      const loc = updatedFilters.location.toLowerCase();
      result = result.filter(p => p.location.toLowerCase().includes(loc));
    }

    /* price range */
    const min = updatedFilters.priceMin ? +updatedFilters.priceMin : 0;
    const max = updatedFilters.priceMax ? +updatedFilters.priceMax : Infinity;
    result = result.filter(p => {
      const price = priceToNumber(p.price);
      return price >= min && price <= max;
    });

    /* propertyType from sidebar (single) */
    if (updatedFilters.propertyType) {
      result = result.filter(p => p.propertyType === updatedFilters.propertyType);
    }

    /* propertyTypeList from URL (multi) */
    if (updatedFilters.propertyTypeList.length) {
      result = result.filter(p =>
        updatedFilters.propertyTypeList.includes(p.propertyType)
      );
    }

    setFilteredProperties(result);
  };

const clearFilters = () => {
  setFilters({
    status: '',
    priceMin: '',
    priceMax: '',
    bedrooms: '',
    bathrooms: '',
    propertyType: '',
    propertyTypeList: [],   //  ← reset this too
    location: ''
  });
  setFilteredProperties(properties);
};

return (
  <div className="min-h-screen bg-gray-50 font-poppins">
    {/* Header */}
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Properties</h1>
            <p className="text-gray-600">
              Showing {filteredProperties.length} of {properties.length} properties
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <SlidersHorizontal size={18} />
              <span>Filters</span>
            </button>
            <div className="flex border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-royal-blue text-white' : 'bg-white text-gray-600'} rounded-l-lg transition-colors`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-royal-blue text-white' : 'bg-white text-gray-600'} rounded-r-lg transition-colors`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Main Content */}
    <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
      {/* Filters Sidebar */}
      <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-80 flex-shrink-0`}>
        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
            <button
              onClick={clearFilters}
              className="text-royal-blue hover:text-blue-700 text-sm font-medium"
            >
              Clear All
            </button>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
            >
              <option value="">All</option>
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              placeholder="Enter location"
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
            />
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                placeholder="Min"
                value={filters.priceMin}
                onChange={(e) => handleFilterChange('priceMin', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
              />
              <input
                type="number"
                placeholder="Max"
                value={filters.priceMax}
                onChange={(e) => handleFilterChange('priceMax', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
              />
            </div>
          </div>

          {/* Property Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
            <select
              value={filters.propertyType}
              onChange={(e) => handleFilterChange('propertyType', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
            >
              <option value="">All</option>
              <option value="Luxury Homes">Luxury Homes</option>
              <option value="Private Homes">Private Homes</option>
              <option value="Apartments">Apartments</option>
              <option value="Commercial">Commercial</option>
              <option value="Short Stays">Short Stays</option>
            </select>
          </div>

          {/* Bedrooms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
            <select
              value={filters.bedrooms}
              onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
            >
              <option value="">Any</option>
              <option value="1">1+ Bedrooms</option>
              <option value="2">2+ Bedrooms</option>
              <option value="3">3+ Bedrooms</option>
              <option value="4">4+ Bedrooms</option>
              <option value="5">5+ Bedrooms</option>
            </select>
          </div>

          {/* Bathrooms (optional, you had it before) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
            <select
              value={filters.bathrooms}
              onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
            >
              <option value="">Any</option>
              <option value="1">1+ Baths</option>
              <option value="2">2+ Baths</option>
              <option value="3">3+ Baths</option>
              <option value="4">4+ Baths</option>
            </select>
          </div>

        </div>
      </div>

      {/* Property Listings */}
      <div className="flex-1">
        {filteredProperties.length > 0 ? (
          <div className={`grid gap-6 ${viewMode === 'grid'
            ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
            : 'grid-cols-1'
            }`}>
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Filter size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters to see more results.</p>
            <button
              onClick={clearFilters}
              className="bg-royal-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
);
};

export default Properties;