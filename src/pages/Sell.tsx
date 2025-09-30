import React, { useState } from 'react';
import { CheckCircle, Search, Eye, FileCheck, ArrowRight, TrendingUp, Calculator, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Sell: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const benefits = [
    "Professional property photography and virtual tours",
    "Strategic pricing based on comprehensive market analysis",
    "Multi-platform marketing reach and exposure",
    "Expert negotiation to maximize your sale price",
    "Complete legal documentation and transaction support",
    "Average 12% higher sale prices than market average"
  ];

  const sellingServices = [
    {
      number: "1",
      title: "Free Property Valuation",
      description:
        "We provide a comprehensive market analysis tailored to Ghana’s real estate market. With access to up-to-date data and comparable properties in your area, we help establish the right price to attract serious buyers while maximizing your returns.",
    },
    {
      number: "2",
      title: "Strategic Marketing",
      description:
        "Through consistent outreach and dedicated prospecting, we actively search for the right buyer for your property. You’ll receive regular feedback and updates, keeping you fully informed on marketing performance, buyer interest, and market trends.",
    },
    {
      number: "3",
      title: "Strategic Closure",
      description:
        "From negotiation to final paperwork, we manage the entire process to secure the best possible outcome for you.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-transact">
      {/* Hero Section */}
      <section className="relative text-white py-28 md:py-32 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500"
          style={{
            backgroundImage:
              "url('https://raw.githubusercontent.com/Webeddies/Properties/refs/heads/main/u4.jfif')",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Title + underline (left aligned) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }} // ✅ Same as Rent.tsx
            className="text-left inline-block"
          >
            <h1 className="text-2xl md:text-3xl font-medium text-white uppercase">
              Sell Your Property With Trusted Experts
            </h1>
            {/* underline = half width of title */}
            <div className="h-0.5 mt-3 bg-white" style={{ width: "50%" }}></div>
          </motion.div>

          {/* CTA button (centered) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }} // ✅ Same as Rent.tsx
            className="text-center"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-8 text-lg font-normal px-8 py-4 border-2 transition-all duration-300 transform hover:scale-95"
              style={{
                borderRadius: "0px",
                borderColor: "#B8960F",
                color: "white",
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#B8960F";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "white";
              }}
            >
              Get Free Valuation
            </button>
          </motion.div>
        </div>
      </section>


      {/* Testimonials Carousel */}
      <section
        className="py-24 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url('https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini.png')`,
        }}
      >
        <div className="bg-white/80 backdrop-blur-sm py-16 px-4 rounded-xl max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="uppercase tracking-wider text-sm font-medium" style={{ color: "#97021dff" }}>
              What Our Clients Say
            </p>

          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
          >
            {[
              {
                name: "Sarah & Amos Edudzi Tamakloe",
                role: "Property Sellers, East Legon",
                img: "https://raw.githubusercontent.com/webeddies/reviewer-images/refs/heads/main/review%2016.jpg",
                message: "Eddie Realty exceeded our expectations. They sold our property 12% above our initial asking price and completed the transaction in less than a month",
              },
              {
                name: "Felix Kwame Nyame",
                role: "Apartment Owner, Spintex",
                img: "https://raw.githubusercontent.com/webeddies/reviewer-images/refs/heads/main/review%2015.jpg",
                message: "Professional, efficient, and trustworthy. My flat was sold within two weeks at a premium price — couldn't ask for more.",
              },
              {
                name: "Linda Osei-Assibey",
                role: "Homeowner, Ejisu",
                img: "https://raw.githubusercontent.com/webeddies/reviewer-images/refs/heads/main/review%2014.jpg",
                message: "From valuation to closing, Eddie Realty made the process effortless. Their marketing approach is top-notch.",
              },
              {
                name: "Darius Adu Poku",
                role: "Land Seller, Oyarifa",
                img: "https://raw.githubusercontent.com/webeddies/reviewer-images/refs/heads/main/review%2013.jpg",
                message: "I never imagined selling my land could be this smooth. Eddie Realty handled every detail and got me a great offer in less than a month.",
              },
              {
                name: "Lovelace Serwaa Danso",
                role: "Homeowner, Takoradi",
                img: "https://raw.githubusercontent.com/webeddies/reviewer-images/refs/heads/main/review%206.jpg",
                message: "Their professionalism was unmatched. From the listing to the closing, I felt supported throughout.",
              },
              {
                name: "Daniel K. Tetteh",
                role: "Property Investor, Kumasi",
                img: "https://raw.githubusercontent.com/webeddies/reviewer-images/refs/heads/main/review%208.jpg",
                message: "What stood out was their market insight. They advised me on pricing, and we closed the deal at 10% above market average. I will always choose them.",
              }
            ].map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-gray-100 text-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 md:p-10 h-full flex flex-col justify-between">
                  <div className="text-4xl mb-4" style={{ color: '#B8960F' }}>"</div>
                  <p className="text-lg italic mb-6 font-light">{t.message}</p>
                  <div className="flex items-center space-x-4 mt-auto">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover border-2 shadow"
                      style={{ borderColor: '#B8960F' }}
                    />
                    <div className="text-left">
                      <p className="font-semibold" style={{ color: '#2C3E50' }}>{t.name}</p>
                      <p className="text-gray-600 text-sm font-light">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Selling Services */}
      <section
        className="relative bg-fixed bg-center bg-cover py-28 md:py-32"
        style={{
          backgroundImage:
            "url('https://raw.githubusercontent.com/webeddies/Properties/refs/heads/main/real%20estate%20ghana.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 text-white">
            <h2 className="text-2xl md:text-3xl font-medium text-white uppercase">
              How To Sell
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sellingServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Navy Circle with Numbers */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: "#2C3E50" }}
                >
                  {service.number}
                </div>

                <h3
                  className="text-xl font-semibold mb-3 text-center"
                  style={{ color: "#2C3E50" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center font-light mb-6">
                  {service.description}
                </p>

                {/* Only show this if the card is Strategic Closure */}
                {service.title === "Strategic Closure" && (
                  <div className="text-center mt-4">
                    <Link
                      to="/contact#contact-form"
                      className="inline-flex items-center space-x-2 text-sm font-medium text-[#97021dff] relative group"
                    >
                      <span>Contact an Agent</span>

                      {/* Proper line arrow (horizontal with arrowhead) */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>

                      {/* Gold underline only on hover of link */}
                      <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[#B8960F] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative"
            >
              <img
                src="https://raw.githubusercontent.com/Webeddies/Properties/refs/heads/main/u12.jfif"
                alt="Successful property sale"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute inset-0 rounded-xl" style={{ background: 'linear-gradient(to top, rgba(184, 150, 15, 0.2), transparent)' }}></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#2C3E50' }}>
                Why Sell with Us?
              </h2>
              <p className="text-lg text-gray-600 mb-8 font-light">
                Our proven track record and comprehensive approach ensure you get the maximum value for your property in the shortest time possible.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <CheckCircle size={20} style={{ color: '#B8960F' }} className="mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-light">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seller's Guide Section */}
      <section
        className="py-20 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2C3E50 0%, #34495E 50%, #2C3E50 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Get Your Free Seller's Guide</h2>
            <p className="text-white/90 text-lg font-light max-w-2xl mx-auto">
              A collection of our industry insights, designed to help you sell your property with less stress and more profit.
            </p>
          </div>

          {/* Guide Form */}
          <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10 shadow-xl" style={{ borderRadius: '0px' }}>
            <form className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B8960F] transition-all"
                  style={{ borderRadius: '0px' }}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B8960F] transition-all"
                  style={{ borderRadius: '0px' }}
                  required
                />
              </div>

              {/* Privacy Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 w-4 h-4 accent-[#B8960F]"
                  required
                />
                <label htmlFor="privacy" className="text-sm text-white/90 font-light leading-relaxed">
                  I accept the privacy terms. We will communicate real estate related marketing information and related services.
                  We respect your privacy. See our <a href="/privacy-policy" className="underline hover:text-[#B8960F] transition-colors">Privacy Policy</a>.
                </label>
              </div>

              {/* reCAPTCHA Notice */}
              <p className="text-xs text-white/70 font-light">
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#B8960F] transition-colors">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#B8960F] transition-colors">
                  Terms of Service
                </a>{' '}
                apply.
              </p>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-10 py-3 font-semibold text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  style={{ backgroundColor: '#B8960F', borderRadius: '0px' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A67C00'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8960F'}
                >
                  Get the Guide
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Decorative Background Pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
          <div className="w-full h-full bg-gradient-to-l from-white/20 to-transparent"></div>
        </div>
      </section>

      {/* Updated CTA Section with Sharp Edges */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#2C3E50' }}>
            Evaluate. Market. Negotiate.
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-light">
            Start with a free valuation and see what today's buyers are willing to pay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="font-semibold px-8 py-3 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: '#B8960F', color: 'white', borderRadius: '0px' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A67C00'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8960F'}
            >
              Sell Your Property
            </button>
            <Link to="/contact">
              <button
                className="border-2 px-8 py-3 font-semibold transition-all duration-300"
                style={{
                  borderColor: '#B8960F',
                  color: '#B8960F',
                  borderRadius: '0px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#B8960F';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#B8960F';
                }}
              >
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false); //   close on outside click---
          }}
        >
          <div className="relative bg-white shadow-lg w-full max-w-2xl md:max-w-3xl animate-fade-in">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-4 z-10 text-gray-400 hover:text-red-500 text-xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="max-h-[90vh] overflow-y-auto p-6 md:p-8 text-sm">
              <h2
                className="text-xl font-semibold mb-4 text-center"
                style={{ color: "#B8960F" }}
              >
                Property Valuation Form
              </h2>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: "#2C3E50" }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{ "--tw-ring-color": "#B8960F", borderRadius: "0px" } as any}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: "#2C3E50" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. example@gmail.com"
                      className="w-full border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{ "--tw-ring-color": "#B8960F", borderRadius: "0px" } as any}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: "#2C3E50" }}>
                      Phone Number
                    </label>
                    <div className="flex space-x-2">
                      <select
                        required
                        className="w-32 border border-gray-300 px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                        style={{ "--tw-ring-color": "#B8960F", borderRadius: "0px" } as any}
                        defaultValue="+233"
                      >
                        <option value="+233">+233 (Ghana)</option>
                        <option value="+1">+1 (USA/Canada)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+49">+49 (Germany)</option>
                        <option value="+31">+31 (Netherlands)</option>
                        <option value="+33">+33 (France)</option>
                        <option value="+61">+61 (Australia)</option>
                        <option value="+971">+971 (UAE)</option>
                        <option value="+27">+27 (South Africa)</option>
                        <option value="+234">+234 (Nigeria)</option>
                      </select>

                      <input
                        type="tel"
                        required
                        placeholder="Enter phone number"
                        className="flex-1 border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                        style={{ "--tw-ring-color": "#B8960F", borderRadius: "0px" } as any}
                      />
                    </div>
                  </div>

                  {/* National ID */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-1">
                      <label className="block text-xs font-medium mb-1" style={{ color: "#2C3E50" }}>
                        National ID Type
                      </label>
                      <select
                        required
                        className="w-full border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                        style={{ "--tw-ring-color": "#B8960F", borderRadius: "0px" } as any}
                      >
                        <option value="">Select</option>
                        <option>Ghana Card</option>
                        <option>Voter's ID</option>
                        <option>Passport</option>
                        <option>Driver's License</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-medium mb-1" style={{ color: "#2C3E50" }}>
                        ID Number
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="ID Number"
                        className="w-full border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                        style={{ "--tw-ring-color": "#B8960F", borderRadius: "0px" } as any}
                      />
                    </div>
                  </div>

                  {/* Property Location */}
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: "#2C3E50" }}>
                      Property Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Adabraka, Greater Accra - GA-123-4567"
                      className="w-full border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{ "--tw-ring-color": "#B8960F", borderRadius: "0px" } as any}
                      required
                    />
                  </div>
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-xs font-medium mb-1" style={{ color: "#2C3E50" }}>
                    Property Type
                  </label>
                  <select
                    className="w-full border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ "--tw-ring-color": "#B8960F", borderRadius: "0px" } as any}
                  >
                    <option>-- Select an option --</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Commercial</option>
                    <option>Land</option>
                  </select>
                </div>

                {/* File Upload */}
                <div>
                  <label
                    htmlFor="propertyImages"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#2C3E50" }}
                  >
                    Upload Property Images & Ownership Documents
                  </label>
                  <input
                    type="file"
                    id="propertyImages"
                    name="propertyImages"
                    accept="image/*"
                    multiple
                    className="w-full border border-gray-300 px-3 py-2 text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:text-white transition-all"
                    style={{
                      borderRadius: "0px",
                      "--file-bg": "#B8960F",
                      "--file-hover-bg": "#A67C00",
                    } as any}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    You can upload up to 10 images (JPG, PNG).
                  </p>
                </div>

                {/* Inspection Date & Time */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: "#2C3E50" }}>
                      Preferred Date of Inspection
                    </label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{ "--tw-ring-color": "#B8960F", borderRadius: "0px" } as any}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: "#2C3E50" }}>
                      Preferred Time of Inspection
                    </label>
                    <input
                      type="time"
                      className="w-full border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{ "--tw-ring-color": "#B8960F", borderRadius: "0px" } as any}
                      required
                    />
                  </div>
                </div>

                {/* Additional Details */}
                <div>
                  <label className="block text-xs font-medium mb-1" style={{ color: "#2C3E50" }}>
                    Additional Details
                  </label>
                  <textarea
                    className="w-full border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ "--tw-ring-color": "#B8960F", borderRadius: "0px" } as any}
                    rows={2}
                    placeholder="e.g. Condition of property, features, urgent sale..."
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="px-16 py-3 text-sm font-medium text-white mx-auto block transition"
                  style={{ backgroundColor: "#B8960F", borderRadius: "0px" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#A67C00")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#B8960F")
                  }
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Sell;