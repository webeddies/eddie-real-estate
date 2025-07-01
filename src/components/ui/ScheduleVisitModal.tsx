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
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-[999]">
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl"
        >
          &times;
        </button>

        <h2 className="text-base font-semibold text-gray-800 mb-3 text-center">
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
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-royal-blue text-sm"
          />
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />

          {/* Date & Time Fields with Labels */}
          <div className="flex space-x-3">
            <div className="w-1/2">
              <label htmlFor="date" className="block text-xs font-medium text-gray-600 mb-1">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white text-gray-700 focus:ring-2 focus:ring-royal-blue"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="time" className="block text-xs font-medium text-gray-600 mb-1">
                Time
              </label>
              <input
                type="time"
                name="time"
                id="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white text-gray-700 focus:ring-2 focus:ring-royal-blue"
              />
            </div>
          </div>

          {/* Additional Notes */}
          <textarea
            name="notes"
            placeholder="Any special notes..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-royal-blue focus:outline-none resize-none"
            rows={2}
            value={formData.notes}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-royal-blue text-white py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleVisitModal;