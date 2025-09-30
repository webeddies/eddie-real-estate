import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../constants/data';

const AllBlogs: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => setVisibleCount(prev => prev + 6);

  return (
    <div className="min-h-screen bg-gray-50 font-transact">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center bg-no-repeat text-white flex items-center"
        style={{
          backgroundImage: "url('https://raw.githubusercontent.com/webeddies/real-estate-items-/refs/heads/main/Real-Estate-Market-Trends-2025-Insights-from-a-Top-Industry-Leader-1024x585-1.webp')",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: '#2C3E50CC' }}></div>

        <div className="relative z-10 text-left text-white px-4 max-w-7xl mx-auto w-full">
          <div className="inline-block">
            <h1 className="text-2xl md:text-3xl font-medium text-white uppercase">
              All Articles
            </h1>
            <div className="h-0.5 mt-3 bg-white" style={{ width: "50%" }}></div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, visibleCount).map((post) => (
              <article 
                key={post.id} 
                className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                style={{ borderRadius: '0px' }}
              >
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
                    className="px-2 py-1 text-xs font-medium mb-3 inline-block text-white"
                    style={{ 
                      backgroundColor: '#2C3E50',
                      borderRadius: '0px'
                    }}
                  >
                    {post.category}
                  </span>
                  <h3 
                    className="text-xl font-semibold mb-3 transition-colors cursor-pointer"
                    style={{ color: '#2C3E50' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#B8960F'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#2C3E50'}
                  >
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed font-light text-sm">
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

          {/* Load More Button */}
          {visibleCount < blogPosts.length && (
            <div className="text-center mt-12">
              <button
                onClick={loadMore}
                className="inline-flex items-center space-x-2 font-semibold transition-all duration-300 px-8 py-3 text-white transform hover:scale-95"
                style={{ 
                  backgroundColor: '#B8960F',
                  borderRadius: '0px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A67C00'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8960F'}
              >
                <span>Load More Articles</span>
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllBlogs;