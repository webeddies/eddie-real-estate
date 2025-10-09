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
      const timeout = setTimeout(() => {
        const el = document.getElementById('contact-form');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timeout);
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
  };

  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "Our service stretch across the southern part of Ghana including Greater Accra, Western, Central, Ashanti, Eastern, and Volta Regions. However, we are looking to spread our wings in the coming years."
    },
    {
      question: "How do you determine property values?",
      answer: "We use comprehensive market analysis, recent comparable sales, current market conditions, and property-specific factors, as well as legal and regulatory considerations to provide accurate valuations."
    },
    {
      question: "What's your commission structure?",
      answer: "Our commission rates are competitive and vary based on the property type and transaction complexity. We would discuss this transparently during our initial consultation."
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
    <div className="min-h-screen bg-gray-50 font-transact">
      {/* Hero Section - Simple Left Aligned */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://raw.githubusercontent.com/webeddies/real-estate-items-/refs/heads/main/contact%20us.jpg')",
          }}
        />
          
          <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-left text-white px-4 max-w-7xl mx-auto w-full">
          <h1 className="text-2xl md:text-3xl font-medium text-white uppercase">
            Contact Us
          </h1>
          <div className="w-12 h-0.5 mt-3 bg-white"></div>
        </div>

      </section>

      {/* Contact Form Section - Clean White Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#2C3E50' }}>
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Have a question or want to discuss your real estate needs?
              Fill out the form below and we'll get back to you as soon as posible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div id="contact-form" className="lg:col-span-2">
              <style>
                {`
                  select option:hover {
                    background-color: #2C3E50 !important;
                    color: white !important;
                  }
                `}
              </style>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3" style={{ color: '#2C3E50' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 focus:outline-none focus:border-transparent transition-all duration-300 text-gray-700 font-light"
                      placeholder="Your full name"
                      style={{
                        borderColor: formData.name ? '#B8960F' : '#2C3E50',
                        borderRadius: '0px'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#B8960F';
                        e.currentTarget.style.boxShadow = '0 0 0 3px #B8960F20';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = formData.name ? '#B8960F' : '#2C3E50';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3" style={{ color: '#2C3E50' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 focus:outline-none focus:border-transparent transition-all duration-300 text-gray-700 font-light"
                      placeholder="your.email@example.com"
                      style={{
                        borderColor: formData.email ? '#B8960F' : '#2C3E50',
                        borderRadius: '0px'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#B8960F';
                        e.currentTarget.style.boxShadow = '0 0 0 3px #B8960F20';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = formData.email ? '#B8960F' : '#2C3E50';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3" style={{ color: '#2C3E50' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 focus:outline-none focus:border-transparent transition-all duration-300 text-gray-700 font-light"
                      placeholder="+233 (0) 504 923 755"
                      style={{
                        borderColor: formData.phone ? '#B8960F' : '#2C3E50',
                        borderRadius: '0px'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#B8960F';
                        e.currentTarget.style.boxShadow = '0 0 0 3px #B8960F20';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = formData.phone ? '#B8960F' : '#2C3E50';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3" style={{ color: '#2C3E50' }}>
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 focus:outline-none focus:border-transparent transition-all duration-300 text-gray-700 font-light"
                      style={{
                        borderColor: formData.subject ? '#B8960F' : '#2C3E50',
                        borderRadius: '0px'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#B8960F';
                        e.currentTarget.style.boxShadow = '0 0 0 3px #B8960F20';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = formData.subject ? '#B8960F' : '#2C3E50';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
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
                  <label className="block text-sm font-semibold mb-3" style={{ color: '#2C3E50' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 focus:outline-none focus:border-transparent transition-all duration-300 resize-none text-gray-700 font-light"
                    placeholder="Tell us about your real estate needs..."
                    style={{
                      borderColor: formData.message ? '#B8960F' : '#2C3E50',
                      borderRadius: '0px'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#B8960F';
                      e.currentTarget.style.boxShadow = '0 0 0 3px #B8960F20';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = formData.message ? '#B8960F' : '#2C3E50';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-3 font-semibold text-white flex items-center justify-center space-x-2 mx-auto
                      bg-[#B8960F] rounded-none
                      transform transition-transform duration-300 ease-in-out
                      hover:scale-90 active:scale-85"
                  >
                     
                    <span>Send Message</span>
                  </button>
                </div>

              </form>
            </div>

            {/* Contact Information - Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-8" style={{ color: '#2C3E50' }}>
                  Contact Information
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div
                      className="p-3 rounded-lg flex-shrink-0"
                      style={{ backgroundColor: '#B8960F15' }}
                    >
                      <MapPin size={24} style={{ color: '#B8960F' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: '#2C3E50' }}>Office Address</h4>
                      <p className="text-gray-600 font-light leading-relaxed">
                        5th Floor, Atlantic Towers<br />
                        Airport City, Accra, Ghana
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div
                      className="p-3 rounded-lg flex-shrink-0"
                      style={{ backgroundColor: '#B8960F15' }}
                    >
                      <Phone size={24} style={{ color: '#B8960F' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: '#2C3E50' }}>Phone Number</h4>
                      <p className="text-gray-600 font-light">+233 (0) 504 923 755</p>
                      <p className="text-gray-600 font-light">+233 (0) 204 313 728</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div
                      className="p-3 rounded-lg flex-shrink-0"
                      style={{ backgroundColor: '#B8960F15' }}
                    >
                      <Mail size={24} style={{ color: '#B8960F' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: '#2C3E50' }}>Email Address</h4>
                      <p className="text-gray-600 font-light">info@eddieirealty.com</p>
                      <p className="text-gray-600 font-light">sales@eddierealty.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div
                      className="p-3 rounded-lg flex-shrink-0"
                      style={{ backgroundColor: '#B8960F15' }}
                    >
                      <Clock size={24} style={{ color: '#B8960F' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: '#2C3E50' }}>Office Hours</h4>
                      <p className="text-gray-600 font-light">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600 font-light">Saturday: 10:00 AM - 3:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500 font-light text-center">
                    We typically respond to inquiries within a few hours on business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
             
            <p className="text-gray-600 font-light mb-8">
              Talk To Us
            </p>

            <div className="flex justify-center items-center space-x-8">
              {/* Gmail */}
              <a
                href="mailto:info@eddierealty.com"
                className="flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: '#EA4335' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.27h.909c.904 0 1.636.732 1.636 1.637z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/233504923755"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: '#25D366' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.506z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="relative bg-fixed bg-center bg-cover py-28 md:py-32"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/90 text-lg font-light">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-gray-800"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className="p-2 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: '#B8960F15' }}
                  >
                    <MessageSquare size={20} style={{ color: '#B8960F' }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#2C3E50' }}>
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed font-light">{faq.answer}</p>
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