import React from 'react';
import { Calendar, Clock, ArrowRight, TrendingUp, BookOpen, Users } from 'lucide-react';
import { blogPosts } from '../constants/data';

const Blog: React.FC = () => {
  const categories = [
    { name: 'All Posts', count: 24, active: true },
    { name: 'Market Insights', count: 8, active: false },
    { name: 'Buying Tips', count: 6, active: false },
    { name: 'Selling Tips', count: 5, active: false },
    { name: 'Investment', count: 5, active: false }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Hero Section */}
      <section className="relative py-20 min-h-[320px] flex items-center justify-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-center bg-cover opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')" }}

          aria-hidden="true"
        ></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text content */}
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
            Market Insights & Expert Advice
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto animate-fade-up-delay opacity-0">
            Stay informed with the latest real estate trends, buying and selling tips, and market analysis from our expert team.
          </p>
        </div>
      </section>


      {/* Blog Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-royal-blue/10 p-3 rounded-full">
                <BookOpen className="text-royal-blue" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">20+</div>
                <p className="text-gray-600">Articles Published</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-royal-blue/10 p-3 rounded-full">
                <Users className="text-royal-blue" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">300+</div>
                <p className="text-gray-600">Monthly Readers</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-royal-blue/10 p-3 rounded-full">
                <TrendingUp className="text-royal-blue" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">Weekly</div>
                <p className="text-gray-600">New Content</p>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${category.active
                        ? 'bg-royal-blue text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className={`text-sm ${category.active ? 'text-blue-200' : 'text-gray-400'
                          }`}>
                          {category.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Newsletter Signup */}
                <div className="mt-8 p-4 bg-sky-blue/10 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Stay Updated</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Get the latest market insights delivered to your inbox.
                  </p>
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent text-sm"
                    />
                    <button className="w-full bg-royal-blue text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-royal-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <span className="bg-sky-blue/20 text-royal-blue px-2 py-1 rounded text-xs">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <button className="flex items-center space-x-2 text-royal-blue hover:text-blue-700 font-semibold transition-colors">
                    <span>Read Full Article</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              {/* Regular Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {regularPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <span className="bg-sky-blue/20 text-royal-blue px-2 py-1 rounded text-xs font-medium mb-3 inline-block">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-royal-blue transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <button className="flex items-center space-x-2 text-royal-blue hover:text-blue-700 font-medium transition-colors">
                        <span>Read More</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="bg-royal-blue text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;