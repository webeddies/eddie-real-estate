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
  const steps = [
    {
      icon: Search,
      title: "Property Evaluation",
      description: "Get a comprehensive market analysis and accurate valuation of your property from our experts."
    },
    {
      icon: Eye,
      title: "Marketing & Exposure",
      description: "Professional photography, listing optimization, and multi-channel marketing to reach qualified buyers."
    },
    {
      icon: FileCheck,
      title: "Close the Deal",
      description: "Expert negotiation, legal documentation, and seamless transaction management to completion."
    }
  ];

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
      icon: Calculator,
      title: "Free Property Valuation",
      description: "Get a good market value assessment of your property with detailed comparable analysis.",
      features: ["Market analysis report", "Property Inspection", "Pricing strategy",]
    },
    {
      icon: TrendingUp,
      title: "Strategic Marketing",
      description: "Comprehensive marketing campaign designed to attract worthy buyers and maximize exposure.",
      features: ["Professional photography", "Online listings", "Social media promotion"]
    },
    {
      icon: Users,
      title: "Expert Negotiation",
      description: "Strategic negotiation to secure the best possible terms and price for your property sale.",
      features: ["Buyer qualification", "Offer evaluation", "Contract negotiation"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Hero Section */}
      <section
        className="relative text-white py-28 md:py-32 overflow-hidden bg-[#1b2e4f]" // <-- fallback color
      >
        {/* Background image layer */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500"
          style={{
            backgroundImage:
              "url('https://raw.githubusercontent.com/Webeddies/Properties/refs/heads/main/u4.jfif')",
          }}
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Animated Title */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-sky-200 text-transparent bg-clip-text drop-shadow-md"
          >
            Sell Your Property with <span className="text-sky-blue">Eddie Realty</span>
          </motion.h1>

          {/* Animated CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-8 text-lg font-semibold px-8 py-3 rounded-lg bg-white/10 border border-white text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-200 hover:bg-white hover:text-royal-blue hover:bg-clip-border transition-colors duration-300"
            >
              Get Free Valuation
            </button>
          </motion.div>
        </div>
      </section>


      {/* --- Testimonials Carousel  */}
      <section
        className="py-24 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url('https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini.png')`,
        }}
      >
        <div className="bg-white/80 backdrop-blur-sm py-16 px-4 rounded-xl max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">

            <p className="text-gray-600 uppercase tracking-wider text-sm">What Our Clients Say</p>
          </div>

          {/* Carousel */}
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
                message:
                  "Eddie Realty exceeded our expectations. They sold our property 12% above our initial asking price and completed the transaction in less than a month",
              },
              {
                name: "Felix Kwame Nyame",
                role: "Apartment Owner, Spintex",
                img: "https://raw.githubusercontent.com/webeddies/reviewer-images/refs/heads/main/review%2015.jpg",
                message:
                  "Professional, efficient, and trustworthy. My flat was sold within two weeks at a premium price — couldn’t ask for more.",
              },
              {
                name: "Linda Osei-Assibey",
                role: "Homeowner, Ejisu",
                img: "https://raw.githubusercontent.com/webeddies/reviewer-images/refs/heads/main/review%2014.jpg",
                message:
                  "From valuation to closing, Eddie Realty made the process effortless. Their marketing approach is top-notch.",
              },
              {
                name: "Darius Adu Poku",
                role: "Land Seller, Oyarifa",
                img: "https://raw.githubusercontent.com/webeddies/reviewer-images/refs/heads/main/review%2013.jpg",
                message:
                  "I never imagined selling my land could be this smooth. Eddie Realty handled every detail and got me a great offer in less than a month.",
              },
              {
                name: "Lovelace Serwaa Danso",
                role: "Homeowner, Takoradi",
                img: "https://raw.githubusercontent.com/webeddies/reviewer-images/refs/heads/main/review%206.jpg",
                message:
                  "Their professionalism was unmatched. From the listing to the closing, I felt supported throughout.",
              },
              {
                name: "Daniel K. Tetteh",
                role: "Property Investor, Kumasi",
                img: "https://raw.githubusercontent.com/webeddies/reviewer-images/refs/heads/main/review%208.jpg",
                message:
                  "What stood out was their market insight. They advised me on pricing, and we closed the deal at 10% above market average. I will always choose them.",
              }
            ].map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-gray-100 text-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 md:p-10 h-full flex flex-col justify-between">
                  <div className="text-4xl text-royal-blue mb-4">“</div>
                  <p className="text-lg italic mb-6">{t.message}</p>
                  <div className="flex items-center space-x-4 mt-auto">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-royal-blue shadow"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">{t.name}</p>
                      <p className="text-gray-600 text-sm">{t.role}</p>
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
            "url('https://raw.githubusercontent.com/webeddies/Properties/refs/heads/main/real%20estate%20ghana.jpg')", // You can replace this with your preferred background
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Floating content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Selling Services
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sellingServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="bg-royal-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent size={32} className="text-royal-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Image with animation */}
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
              <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/20 to-transparent rounded-xl"></div>
            </motion.div>

            {/* Right Text Column with animation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Sell with Eddie Realty?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
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
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20 bg-royal-blue text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Market Insights</h2>
            <p className="text-blue-100 text-lg">Stay informed with our latest market trends</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">8%</div>
              <p className="text-blue-100">Average Price Growth</p>

            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">4-15</div>
              <p className="text-blue-100">Weeks on Market</p>

            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <p className="text-blue-100">Of Asking Price</p>

            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <p className="text-blue-100">Properties Sold</p>

            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Sell Your Property?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get started with a free property valuation and discover how much your property is worth in today's market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-royal-blue text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Get Free Valuation
            </button>
            <Link to="/contact">
              <button className="border-2 border-royal-blue text-royal-blue px-8 py-3 rounded-lg hover:bg-royal-blue hover:text-white transition-colors font-semibold">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <div className="relative bg-white rounded-xl shadow-lg w-full max-w-2xl md:max-w-3xl animate-fade-in">

            {/* Close Button - fixed inside modal box */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-4 z-10 text-gray-400 hover:text-red-500 text-xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Scrollable content area */}
            <div className="max-h-[90vh] overflow-y-auto p-6 md:p-8 text-sm">
              {/* Modal Header */}
              <h2 className="text-xl font-semibold mb-4 text-center text-royal-blue">
                Property Valuation Form
              </h2>

              {/* Modal Form */}
              <form className="space-y-4">
                {/* 2-column layout for top fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-xs font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs font-medium mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="e.g. example@gmail.com"
                      className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-xs font-medium mb-1">Phone Number</label>
                    <div className="flex space-x-2">
                      {/* Country Code Dropdown */}
                      <select
                        required
                        className="w-32 border border-gray-300 rounded-md px-2 py-1.5 text-sm"
                        defaultValue="+233"
                      >
                        <option value="+233">+233 (Ghana)</option>
                        <option value="+1">+1 (USA/Canada)</option>
                        <option value="+44">+44 (United Kingdom)</option>
                        <option value="+49">+49 (Germany)</option>
                        <option value="+31">+31 (Netherlands)</option>
                        <option value="+33">+33 (France)</option>
                        <option value="+61">+61 (Australia)</option>
                        <option value="+971">+971 (UAE)</option>
                        <option value="+27">+27 (South Africa)</option>
                        <option value="+234">+234 (Nigeria)</option>
                        <option value="+39">+39 (Italy)</option>
                        <option value="+32">+32 (Belgium)</option>
                        <option value="+46">+46 (Sweden)</option>
                        <option value="+41">+41 (Switzerland)</option>
                        <option value="+966">+966 (Saudi Arabia)</option>
                        <option value="+974">+974 (Qatar)</option>
                        <option value="+353">+353 (Ireland)</option>
                        <option value="+48">+48 (Poland)</option>
                        <option value="+34">+34 (Spain)</option>
                        <option value="+86">+86 (China)</option>
                        <option value="+81">+81 (Japan)</option>
                        <option value="+91">+91 (India)</option>
                      </select>

                      {/* Actual Phone Number Input */}
                      <input
                        type="tel"
                        required
                        placeholder="Enter phone number"
                        className="flex-1 border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* ID Type Dropdown - smaller */}
                    <div className="md:col-span-1">
                      <label className="block text-gray-700 text-xs font-medium mb-1">National ID Type</label>
                      <select
                        required
                        className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                      >
                        <option value="">Select</option>
                        <option>Ghana Card</option>
                        <option>Voter's ID</option>
                        <option>Passport</option>
                        <option>Driver's License</option>
                      </select>
                    </div>

                    {/* ID Number Input - wider */}
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 text-xs font-medium mb-1">ID Number</label>
                      <input
                        type="text"
                        required
                        placeholder="ID Number"
                        className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs font-medium mb-1">Property Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Adabraka, Greater Accra - GA-123-4567"
                      className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Property type - single full width */}
                <div>
                  <label className="block text-gray-700 text-xs font-medium mb-1">Property Type</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm">
                    <option>-- Select an option --</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Commercial</option>
                    <option>Land</option>
                  </select>
                </div>

                {/* Image upload */}
                <div>
                  <label htmlFor="propertyImages" className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Property Images & Ownership Documents
                  </label>
                  <input
                    type="file"
                    id="propertyImages"
                    name="propertyImages"
                    accept="image/*"
                    multiple
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-royal-blue/90 file:text-white hover:file:bg-royal-blue transition-all"
                  />
                  <p className="text-xs text-gray-500 mt-1">You can upload up to 10 images (JPG, PNG).</p>
                </div>

                {/* Inspection grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-xs font-medium mb-1">Preferred Date of Inspection</label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs font-medium mb-1">Preferred Time of Inspection</label>
                    <input
                      type="time"
                      className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Textarea */}
                <div>
                  <label className="block text-gray-700 text-xs font-medium mb-1">Additional Details</label>
                  <textarea
                    className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                    rows={2}
                    placeholder="e.g. Condition of property, features, urgent sale..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-royal-blue text-white py-2 rounded-md hover:bg-blue-600 transition text-sm font-medium"
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