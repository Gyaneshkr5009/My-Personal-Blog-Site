import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import BlogCard from '../components/BlogCard';
import { Menu } from 'lucide-react';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center px-4 py-3 bg-white shadow">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-700">
          <Menu size={24} />
        </button>
        <h1 className="text-lg font-semibold">Home</h1>
      </div>

      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'block' : 'hidden'
        } md:block`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <BlogCard />
      </div>
    </div>
  );
};

export default Home;
