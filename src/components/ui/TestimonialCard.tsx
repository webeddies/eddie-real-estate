import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, image, text }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-w-[300px] mx-4">


      <div className="relative mb-4">
        <Quote size={18} className="absolute -top-2 -left-2 text-[#B8960F]" />
        <p className="text-gray-700 italic pl-6">"{text}"</p>
      </div>

      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;