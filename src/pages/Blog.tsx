import React from 'react';
import { Calendar, Clock, ArrowRight, TrendingUp, BookOpen, Users } from 'lucide-react';
import { blogPosts } from '../constants/data';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const categories = [
    { name: 'All Posts', count: 8, active: true },
    { name: 'Market Insights', count: 2, active: false },
    { name: 'Buying Tips', count: 2, active: false },
    { name: 'Selling Tips', count: 2, active: false },
    { name: 'Investment', count: 2, active: false }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1, 3);

  return (
    <div className="min-h-screen bg-gray-50 font-transact">
      {/* Hero Section */}
      <section
        className="relative h-[65vh] bg-cover bg-center bg-no-repeat text-white flex items-center"
        style={{
          backgroundImage: "url('https://raw.githubusercontent.com/webeddies/real-estate-items-/refs/heads/main/Real-Estate-Market-Trends-2025-Insights-from-a-Top-Industry-Leader-1024x585-1.webp')",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: '#2C3E50CC' }}></div>

        <div className="relative z-10 text-left text-white px-4 max-w-7xl mx-auto w-full">
          <div className="inline-block">
            <h1 className="text-2xl md:text-3xl font-medium text-white uppercase">
              Market Insights & Expert Advice
            </h1>
            <div className="h-0.5 mt-3 bg-white" style={{ width: "50%" }}></div>
          </div>
        </div>

      </section>

      {/* Blog Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3 group">
              <div
                className="p-3 rounded-full transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: '#B8960F15' }}
              >
                <BookOpen size={24} style={{ color: '#B8960F' }} />
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ color: '#2C3E50' }}>8</div>
                <p className="text-gray-600 font-light">Articles Published</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 group">
              <div
                className="p-3 rounded-full transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: '#B8960F15' }}
              >
                <Users size={24} style={{ color: '#B8960F' }} />
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ color: '#2C3E50' }}>300+</div>
                <p className="text-gray-600 font-light">Monthly Readers</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 group">
              <div
                className="p-3 rounded-full transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: '#B8960F15' }}
              >
                <TrendingUp size={24} style={{ color: '#B8960F' }} />
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ color: '#2C3E50' }}>Monthly</div>
                <p className="text-gray-600 font-light">New Content</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-4" style={{ color: '#2C3E50' }}>Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-300 ${category.active ? 'text-white' : 'text-gray-600'
                        }`}
                      style={{
                        backgroundColor: category.active ? '#97021dff' : 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        if (!category.active) {
                          e.currentTarget.style.backgroundColor = '#B8960F15';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!category.active) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className={`text-sm ${category.active ? 'text-yellow-100' : 'text-gray-400'
                          }`}>
                          {category.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Newsletter Signup */}
                <div
                  className="mt-8 p-4 rounded-lg"
                  style={{ backgroundColor: '#B8960F10' }}
                >
                  <h4 className="font-semibold mb-2" style={{ color: '#2C3E50' }}>Stay Updated</h4>
                  <p className="text-sm text-gray-600 mb-4 font-light">
                    Get the latest market insights delivered to your inbox.
                  </p>
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-sm"
                      style={{ '--tw-ring-color': '#97021dff' } as any}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#97021dff';
                        e.currentTarget.style.boxShadow = '0 0 0 2px #B8960F20';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#d1d5db';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                    <button
                      className="w-full py-2 text-sm font-medium text-white transition-all duration-300 transform hover:scale-95"
                      style={{
                        backgroundColor: '#97021dff',
                        borderRadius: '0px'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A67C00'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#97021dff'}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 group">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 rounded-full text-sm font-semibold text-white"
                      style={{ backgroundColor: '#B8960F' }}
                    >
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span className="font-light">{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span className="font-light">{featuredPost.readTime}</span>
                    </div>
                    <span
                      className="px-2 py-1 rounded text-xs text-white"
                      style={{ backgroundColor: '#2C3E50' }}
                    >
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300"
                    style={{ color: '#2C3E50' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#B8960F'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#2C3E50'}
                  >
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
                    {featuredPost.excerpt}
                  </p>
                  <a
                    href={featuredPost.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 font-semibold transition-all duration-300 px-6 py-3 text-white transform hover:scale-95"
                    style={{
                      backgroundColor: '#B8960F',
                      borderRadius: '0px'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A67C00'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8960F'}
                  >
                    <span>Read Full Article</span>
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>

              {/* Regular Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {regularPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span className="font-light">{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span className="font-light">{post.readTime}</span>
                        </div>
                      </div>
                      <span
                        className="px-2 py-1 rounded text-xs font-medium mb-3 inline-block text-white"
                        style={{ backgroundColor: '#2C3E50' }}
                      >
                        {post.category}
                      </span>
                      <h3 className="text-xl font-semibold mb-3 transition-colors cursor-pointer"
                        style={{ color: '#2C3E50' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#B8960F'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#2C3E50'}
                      >
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed font-light">
                        {post.excerpt}
                      </p>
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 font-medium transition-colors"
                        style={{ color: '#B8960F' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#A67C00'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#B8960F'}
                      >
                        <span>Read More</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Link to="/allblogs">
                  <button
                    className="inline-flex items-center space-x-2 font-semibold transition-all duration-300 px-6 py-3 text-white transform hover:scale-95"
                    style={{ 
                      backgroundColor: '#B8960F',
                      borderRadius: '0px' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A67C00'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8960F'}
                  >
                    View All Articles
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;