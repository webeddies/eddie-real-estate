import React, { useState } from 'react';
import { blogPosts } from '../constants/data';

const AllBlogs: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(blogPosts.length);
  // Show 6 blogs initially

  const loadMore = () => setVisibleCount(prev => prev + 6);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-royal-blue">All Articles</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(0, visibleCount).map((blog, index) => (
          <article
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <span className="text-xs font-semibold text-royal-blue bg-sky-blue/20 px-2 py-1 rounded">
                {blog.category}
              </span>
              <h2 className="text-xl font-bold text-gray-900 mt-3 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{blog.excerpt}</p>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-royal-blue font-medium hover:text-blue-700 inline-flex items-center space-x-1"
              >
                <span>Read More</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>


    </div>
  );
};

export default AllBlogs;
