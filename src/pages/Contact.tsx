import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  useEffect(() => {
    if (location.hash === '#contact-form') {
      // Delay scrolling to ensure the element has rendered
      const timeout = setTimeout(() => {
        const el = document.getElementById('contact-form');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // wait 100ms

      return () => clearTimeout(timeout); // clean up
    }
  }, [location]);



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "Our service stretch across the southern part of Ghana including Greater Accra, Western, Central, Ashanti, Eastern, and Volta Regions. However, we are looking to spread our wings in the coming years."
    },
    {
      question: "How do you determine property values?",
      answer: "We use comprehensive market analysis, recent comparable sales, current market conditions, and property-specific factors to provide accurate valuations."
    },
    {
      question: "What's your commission structure?",
      answer: "Our commission rates are competitive and vary based on the property type and transaction complexity. We'll discuss this transparently during our initial consultation."
    },
    {
      question: "How long does it typically take to sell a property?",
      answer: "The average time varies by market conditions and property type, but our listings typically sell 10% faster than the Ghanaian market average due to our marketing expertise."
    },
    {
      question: "Do you offer property management services?",
      answer: "Yes, we provide comprehensive property management services including tenant screening, maintenance coordination, and rent collection."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Hero Section */}
      <section
        className="relative h-[65vh] bg-cover bg-center bg-no-repeat text-white flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://raw.githubusercontent.com/webeddies/real-estate-items-/refs/heads/main/contact%20us.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-200 animate-fade-up-delay">
            Leave us a message by filling in the form below and we will get back to you as soon as possible.
          </p>
        </div>
      </section>



      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div id="contact-form" className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent outline-none transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent outline-none transition-all"
                      placeholder="+233 (0) 555 198 595"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="buying">I want to buy</option>
                      <option value="selling">I want to sell</option>
                      <option value="renting">I want to rent</option>
                      <option value="investing">Investment opportunities</option>
                      <option value="general">General inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your real estate needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-royal-blue text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-royal-blue/10 p-3 rounded-lg">
                      <MapPin className="text-royal-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                      <p className="text-gray-600">
                        5th Floor, Atlantic Towers<br />
                        Airport City, Accra, Ghana
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-royal-blue/10 p-3 rounded-lg">
                      <Phone className="text-royal-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone Number</h3>
                      <p className="text-gray-600">+233 (0) 555 198 595</p>
                      <p className="text-gray-600">+233 (0) 204 313 728</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-royal-blue/10 p-3 rounded-lg">
                      <Mail className="text-royal-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email Address</h3>
                      <p className="text-gray-600">info@eddieirealty.com</p>
                      <p className="text-gray-600">sales@eddierealty.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-royal-blue/10 p-3 rounded-lg">
                      <Clock className="text-royal-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 3:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Map Placeholder */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Find Us</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin size={48} className="mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">5th Floor, Atlantic Towers, Airport City, Accra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="relative bg-fixed bg-center bg-cover py-28 md:py-32"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')", // You can replace this with any image URL you like
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Floating FAQ content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-blue-100 text-lg">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/90 border border-white rounded-lg p-6 text-gray-800"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-royal-blue/10 p-2 rounded-lg flex-shrink-0">
                    <MessageSquare className="text-royal-blue" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;