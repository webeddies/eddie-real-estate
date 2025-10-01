import React, { useState, useEffect } from 'react';
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react';
import PropertyCard from '../components/ui/PropertyCard';
import { properties } from '../constants/data';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Properties: React.FC = () => {
  const navigate = useNavigate();
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

    // ✅ Auto-close + scroll to top on mobile
    if (window.innerWidth < 1024) {
      setShowFilters(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
    <div className="min-h-screen bg-gray-50 font-transact">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2" style={{ color: '#2C3E50' }}>
                Properties
              </h1>
              <p className="text-gray-600 font-light">
                Showing <span className="font-medium" style={{ color: '#B8960F' }}>
                  {filteredProperties.length}
                </span> of <span className="font-medium">{properties.length}</span> properties
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 border rounded-lg font-medium transition-all duration-300 hover:shadow-md"
                style={{
                  borderColor: '#B8960F',
                  color: '#2C3E50'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#B8960F15';
                  e.currentTarget.style.color = '#B8960F';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#2C3E50';
                }}
              >
                <SlidersHorizontal size={18} />
                <span>Filters</span>
              </button>
              <div className="flex border rounded-lg" style={{ borderColor: '#B8960F' }}>
                <button
                  onClick={() => setViewMode('grid')}
                  className="p-2 rounded-l-lg transition-all duration-300"
                  style={{
                    backgroundColor: viewMode === 'grid' ? '#B8960F' : 'white',
                    color: viewMode === 'grid' ? 'white' : '#2C3E50'
                  }}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className="p-2 rounded-r-lg transition-all duration-300"
                  style={{
                    backgroundColor: viewMode === 'list' ? '#B8960F' : 'white',
                    color: viewMode === 'list' ? 'white' : '#2C3E50'
                  }}
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
          <div
            className="bg-white p-6 sticky top-24 heartbeat-filter group/filter"
            style={{ borderRadius: '0px' }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold" style={{ color: '#2C3E50' }}>
                Filters
              </h3>
              <button
                onClick={clearFilters}
                className="text-sm font-medium transition-colors duration-300 hover:underline"
                style={{ color: '#B8960F' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#A67C00'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#B8960F'}
              >
                Clear All
              </button>
            </div>


            <div className="space-y-6">
              {/* Status */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#2C3E50' }}>
                  Status
                </label>
                <select
                  value={filters.status}
                  onChange={(e) => handleFilterChange('status', e.target.value)}
                  className="w-full px-3 py-2 transition-all duration-300 border focus:outline-none focus:border-transparent focus:ring-2 focus:ring-[#B8960F] focus:ring-offset-2 focus:ring-offset-[#B8960F20]"
                  style={{
                    borderRadius: '0px',
                    borderColor: filters.status ? '#B8960F' : '#d1d5db'
                  }}
                >
                  <option value="">All</option>
                  <option value="For Sale">For Sale</option>
                  <option value="For Rent">For Rent</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#2C3E50' }}>
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Enter location"
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="w-full px-3 py-2 border transition-all duration-300 focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-400"
                  style={{
                    borderRadius: '0px',
                    borderColor: filters.location ? '#B8960F' : '#d1d5db'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#B8960F';
                    e.currentTarget.style.boxShadow = '0 0 0 2px #B8960F20';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = filters.location ? '#B8960F' : '#d1d5db';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#2C3E50' }}>
                  Price Range
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.priceMin}
                    onChange={(e) => handleFilterChange('priceMin', e.target.value)}
                    className="px-3 py-2 border transition-all duration-300 focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-400"
                    style={{
                      borderRadius: '0px',
                      borderColor: filters.priceMin ? '#B8960F' : '#d1d5db'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#B8960F';
                      e.currentTarget.style.boxShadow = '0 0 0 2px #B8960F20';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = filters.priceMin ? '#B8960F' : '#d1d5db';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.priceMax}
                    onChange={(e) => handleFilterChange('priceMax', e.target.value)}
                    className="px-3 py-2 border transition-all duration-300 focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-400"
                    style={{
                      borderRadius: '0px',
                      borderColor: filters.priceMax ? '#B8960F' : '#d1d5db'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#B8960F';
                      e.currentTarget.style.boxShadow = '0 0 0 2px #B8960F20';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = filters.priceMax ? '#B8960F' : '#d1d5db';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#2C3E50' }}>
                  Property Type
                </label>
                <select
                  value={filters.propertyType}
                  onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                  className="w-full px-3 py-2 border transition-all duration-300 focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{
                    borderRadius: '0px',
                    borderColor: filters.propertyType ? '#B8960F' : '#d1d5db'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#B8960F';
                    e.currentTarget.style.boxShadow = '0 0 0 2px #B8960F20';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = filters.propertyType ? '#B8960F' : '#d1d5db';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
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
                <label className="block text-sm font-medium mb-2" style={{ color: '#2C3E50' }}>
                  Bedrooms
                </label>
                <select
                  value={filters.bedrooms}
                  onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                  className="w-full px-3 py-2 border transition-all duration-300 focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{
                    borderRadius: '0px',
                    borderColor: filters.bedrooms ? '#B8960F' : '#d1d5db'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#B8960F';
                    e.currentTarget.style.boxShadow = '0 0 0 2px #B8960F20';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = filters.bedrooms ? '#B8960F' : '#d1d5db';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <option value="">Any</option>
                  <option value="1">1+ Bedrooms</option>
                  <option value="2">2+ Bedrooms</option>
                  <option value="3">3+ Bedrooms</option>
                  <option value="4">4+ Bedrooms</option>
                  <option value="5">5+ Bedrooms</option>
                </select>
              </div>


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
                <PropertyCard
                  key={property.id}
                  {...property}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-300 mb-6">
                <Filter size={48} className="mx-auto" />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#2C3E50' }}>
                No properties found
              </h3>
              <p className="text-gray-600 mb-6 font-light">
                Try adjusting your filters to see more results.
              </p>
              <button
                onClick={clearFilters}
                className="text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: '#B8960F' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A67C00'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8960F'}
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