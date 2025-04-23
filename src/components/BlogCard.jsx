import React from 'react';
import BlogPost from '../pages/BlogPost';

const BlogCard = () => {
  // Sample blog post data (You can replace this with props or API data)
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding React Hooks in Depth',
      description: 'A deep dive into React hooks including useState, useEffect, and custom hooks with real examples.',
      author: 'Gyanesh Kumar',
      date: 'April 24, 2025'
    },
    {
      id: 2,
      title: 'Mastering Flexbox and Grid in Tailwind CSS',
      description: 'Learn how to build responsive layouts quickly using Flexbox and Grid with Tailwind.',
      author: 'Gyanesh Kumar',
      date: 'April 22, 2025'
    },
    {
      id: 3,
      title: 'Clean Code Practices for Frontend Developers',
      description: 'Write better, more maintainable frontend code with these battle-tested tips.',
      author: 'Gyanesh Kumar',
      date: 'April 20, 2025'
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post) => (
        <div key={post.id} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
          <p className="text-sm text-gray-500 mb-2">By {post.author} • {post.date}</p>
          <p className="text-gray-700 mb-4">{post.description}</p>
          <button className="text-sm px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            Read More
          </button>
        </div>
      ))}
      <BlogPost/>
    </div>
  );
};

export default BlogCard;
