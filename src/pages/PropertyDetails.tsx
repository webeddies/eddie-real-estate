import React, { useState, useEffect } from "react";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Heart,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  Share2,
} from "lucide-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ScheduleVisitModal from '../components/ui/ScheduleVisitModal';

// Property type
interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  washrooms?: number;
  area: string;
  image: string;
  additionalImages?: string[];
  description?: string;
  amenities?: string[];
  status: string;
  propertyType: string;
  featured?: boolean;
}

interface LocationState {
  property?: Property;
}

// ✅ temporary mock data source (replace with API later)
const mockProperties: Property[] = [
  {
    id: 1,
    title: "Luxury Apartment",
    price: "$250,000",
    location: "Accra",
    bedrooms: 3,
    bathrooms: 2,
    area: "120 sqm",
    image: "/images/apartment.jpg",
    additionalImages: ["/images/apartment2.jpg"],
    description: "Beautiful 3-bedroom apartment in the city center.",
    amenities: ["Swimming Pool", "Gym", "Parking"],
    status: "For Sale",
    propertyType: "Apartment",
    featured: true,
  },
  {
    id: 2,
    title: "Cozy House",
    price: "$180,000",
    location: "Tema",
    bedrooms: 4,
    bathrooms: 3,
    area: "200 sqm",
    image: "/images/house.jpg",
    description: "Spacious family home with a lovely garden.",
    amenities: ["Garden", "Garage"],
    status: "For Sale",
    propertyType: "House",
  },
];

const PropertyDetails: React.FC = () => {
  const [showVisitModal, setShowVisitModal] = useState(false);


  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); // 👈 get ID from URL
  const { property: stateProperty } = (location.state as LocationState) || {};

  const [property, setProperty] = useState<Property | null>(stateProperty || null);

  // 👇 On mount, if no state property, try to fetch/find by ID
  useEffect(() => {
    if (!property && id) {
      const found = mockProperties.find((p) => p.id === Number(id));
      if (found) {
        setProperty(found);
      }
    }
  }, [id, property]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            Property not found
          </h1>
          <button
            onClick={() => navigate("/properties")}
            className="px-6 py-3 text-white font-semibold"
            style={{ backgroundColor: "#B8960F", borderRadius: "0px" }}
          >
            Back to Properties
          </button>
        </div>
      </div>
    );
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const allImages = [property.image, ...(property.additionalImages || [])];

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);

  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);

  return (
    <div className="min-h-screen bg-white font-transact">

      {/* Schedule Visit Modal */}
      {showVisitModal && (
        <ScheduleVisitModal onClose={() => setShowVisitModal(false)} />
      )}


      {/* Image Gallery */}
      <div className="relative h-96 md:h-[500px] bg-gray-900">
        <img
          src={allImages[currentImageIndex]}
          alt={property.title}
          className="w-full h-full object-cover"
        />

        {allImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full transition-all hover:scale-110"
              style={{ color: "#2C3E50" }}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full transition-all hover:scale-110"
              style={{ color: "#2C3E50" }}
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/70 backdrop-blur-sm text-white rounded-full text-sm">
          {currentImageIndex + 1} / {allImages.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 p-4 overflow-x-auto bg-gray-50">
        {allImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all ${idx === currentImageIndex
              ? "ring-4 ring-[#B8960F]"
              : "opacity-60 hover:opacity-100"
              }`}
          >
            <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Property Information */}
      <div className="p-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  backgroundColor: property.status === "For Sale" ? "#2C3E50" : "#8A0119",
                  color: "white",
                }}
              >
                {property.status}
              </span>
              {property.featured && (
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: "#B8960F", color: "white" }}
                >
                  Featured
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold mb-2" style={{ color: "#2C3E50" }}>
              {property.title}
            </h1>
            <div className="flex items-center text-gray-600">
              <MapPin size={20} className="mr-2" style={{ color: "#B8960F" }} />
              <span className="text-lg">{property.location}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold mb-2" style={{ color: "#B8960F" }}>
              {property.price}
            </div>
            <div className="flex gap-2">
              <button className="p-2 border rounded-lg hover:bg-gray-50 transition-colors">
                <Heart size={20} style={{ color: "#B8960F" }} />
              </button>
              <button className="p-2 border rounded-lg hover:bg-gray-50 transition-colors">
                <Share2 size={20} style={{ color: "#B8960F" }} />
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 rounded-lg mb-8">
          {property.washrooms !== undefined ? (
            <div className="text-center">
              <Bath size={32} className="mx-auto mb-2" style={{ color: "#B8960F" }} />
              <div className="text-2xl font-bold" style={{ color: "#2C3E50" }}>
                {property.washrooms}
              </div>
              <div className="text-sm text-gray-600">Washrooms</div>
            </div>
          ) : (
            <>
              <div className="text-center">
                <Bed size={32} className="mx-auto mb-2" style={{ color: "#B8960F" }} />
                <div className="text-2xl font-bold" style={{ color: "#2C3E50" }}>
                  {property.bedrooms}
                </div>
                <div className="text-sm text-gray-600">Bedrooms</div>
              </div>
              <div className="text-center">
                <Bath size={32} className="mx-auto mb-2" style={{ color: "#B8960F" }} />
                <div className="text-2xl font-bold" style={{ color: "#2C3E50" }}>
                  {property.bathrooms}
                </div>
                <div className="text-sm text-gray-600">Bathrooms</div>
              </div>
            </>
          )}
          <div className="text-center">
            <Square size={32} className="mx-auto mb-2" style={{ color: "#B8960F" }} />
            <div className="text-2xl font-bold" style={{ color: "#2C3E50" }}>
              {property.area}
            </div>
            <div className="text-sm text-gray-600">Area</div>
          </div>
        </div>

        {/* Description */}
        {property.description && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#2C3E50" }}>
              Description
            </h2>
            <p className="text-gray-700 leading-relaxed">{property.description}</p>
          </div>
        )}

        {/* Amenities */}
        {property.amenities && property.amenities.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#2C3E50" }}>
              Amenities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {property.amenities.map((amenity, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#B8960F" }} />
                  <span className="text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact */}
        <div className="border-t pt-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#2C3E50" }}>
            Interested in this property?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setShowVisitModal(true)}
              className="flex-1 py-4 px-6 font-semibold text-white transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: "#2C3E50", borderRadius: "0px" }}
            >
              <Calendar size={20} className="inline mr-2" />
              <span>Schedule a Visit</span>
            </button>
            <button
              onClick={() => navigate("/contact")} // 👈 navigate to contact page
              className="flex-1 py-4 px-6 font-semibold text-white transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: "#B8960F", borderRadius: "0px" }}
            >
              <Mail size={20} className="inline mr-2" />
              Send Message
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
