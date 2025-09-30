import React, { useState } from 'react';

interface ScheduleVisitModalProps {
  onClose: () => void;
}

const ScheduleVisitModal: React.FC<ScheduleVisitModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    propertyCode: '',
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Scheduled Visit:', formData);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-[999] font-transact"
      onClick={onClose} // Close on backdrop click
    >
      <div 
        className="relative bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto p-4 border border-gray-100"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-xl transition-colors duration-300"
        >
          &times;
        </button>

        <h2 className="text-base font-semibold mb-3 text-center" style={{ color: '#8A0119' }}>
          Schedule a Property Visit
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="propertyCode"
            placeholder="Property Code (e.g. #01)"
            value={formData.propertyCode}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:border-transparent text-sm transition-all duration-300"
            style={{ '--tw-ring-color': '#8A0119' } as any}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#8A0119';
              e.currentTarget.style.boxShadow = '0 0 0 2px #8A011920';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#d1d5db';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:border-transparent"
            style={{ '--tw-ring-color': '#8A0119' } as any}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#8A0119';
              e.currentTarget.style.boxShadow = '0 0 0 2px #8A011920';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#d1d5db';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:border-transparent"
            style={{ '--tw-ring-color': '#8A0119' } as any}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#8A0119';
              e.currentTarget.style.boxShadow = '0 0 0 2px #8A011920';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#d1d5db';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:border-transparent"
            style={{ '--tw-ring-color': '#8A0119' } as any}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#8A0119';
              e.currentTarget.style.boxShadow = '0 0 0 2px #8A011920';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#d1d5db';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />

          {/* Date & Time Fields with Labels */}
          <div className="flex space-x-3">
            <div className="w-1/2">
              <label htmlFor="date" className="block text-xs font-medium mb-1" style={{ color: '#2C3E50' }}>
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white text-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ '--tw-ring-color': '#8A0119' } as any}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#8A0119';
                  e.currentTarget.style.boxShadow = '0 0 0 2px #8A011920';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#d1d5db';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="time" className="block text-xs font-medium mb-1" style={{ color: '#2C3E50' }}>
                Time
              </label>
              <input
                type="time"
                name="time"
                id="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white text-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ '--tw-ring-color': '#8A0119' } as any}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#8A0119';
                  e.currentTarget.style.boxShadow = '0 0 0 2px #8A011920';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#d1d5db';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>
          </div>

          {/* Additional Notes */}
          <textarea
            name="notes"
            placeholder="Any special notes..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none transition-all duration-300 focus:outline-none focus:ring-2 focus:border-transparent"
            style={{ '--tw-ring-color': '#8A0119' } as any}
            rows={2}
            value={formData.notes}
            onChange={handleChange}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#8A0119';
              e.currentTarget.style.boxShadow = '0 0 0 2px #8A011920';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#d1d5db';
              e.currentTarget.style.boxShadow = 'none';
            }}
          ></textarea>

          <button
            type="submit"
            className="w-full py-2 rounded-md transition-all duration-300 text-sm font-medium text-white transform hover:-translate-y-1 hover:shadow-lg"
            style={{ backgroundColor: '#8A0119' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6A010F'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8A0119'}
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleVisitModal;