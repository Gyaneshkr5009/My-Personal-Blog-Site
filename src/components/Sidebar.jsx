import React from 'react';
import { IoIosMail } from "react-icons/io";
import { IoPhonePortrait } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { BsYoutube, BsTwitterX } from "react-icons/bs";
import logo from '../assets/logo.png';
import { RiTwitterXFill } from "react-icons/ri";
import { LuUniversity } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className="w-full md:w-72 bg-gradient-to-b from-cyan-50 to-cyan-300 p-6 shadow-lg rounded-xl md:rounded-r-xl border md:border-r border-gray-200 flex flex-col max-h-screen md:sticky top-0 overflow-y-auto">
      {/* Profile Section */}
      <div className="flex flex-col items-center text-center mb-4">
        <div className="relative">
          <img
            src={logo}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
          />
          <div className="absolute -bottom-2 -right-2 bg-indigo-500 rounded-full p-1 shadow-md">
            <div className="bg-white rounded-full p-1">
              <span className="block w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-bold mt-4 text-gray-800">Gyanesh Kumar</h2>
        <p className="text-xs text-gray-400 mt-1">DOB: 25/06/2003</p>
      </div>

      {/* Contact Information */}
      <div className="space-y-2 flex-grow">
        {/* Location Section */}
        <div className='flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100'>
          <div className='text-2xl text-indigo-500 mt-0.5'>
            <FaLocationDot />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Location</p>
            <p className="text-gray-700">North West Delhi, India</p>
          </div>
        </div>

        {/* Email Section */}
        <div className='flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100'>
          <div className='text-2xl text-indigo-500 mt-0.5'>
            <IoIosMail />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Email</p>
            <a
              href="mailto:gyanesh5009@gmail.com"
              className="text-indigo-600 text-sm hover:underline hover:text-indigo-800 transition-colors"
            >
              gyanesh5009@gmail.com
            </a>
          </div>
        </div>

        {/* Phone Section */}
        <div className='flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100'>
          <div className='text-2xl text-indigo-500 mt-0.5'>
            <IoPhonePortrait />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Phone</p>
            <a
              href="tel:+918368296563"
              className="text-indigo-600 text-sm hover:underline hover:text-indigo-800 transition-colors"
            >
              +91 8368296563
            </a>
          </div>
        </div>

        <div className='flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100'>
          <div className='text-2xl text-indigo-500 mt-0.5'>
            <LuUniversity />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Guru Tegh Bahadur Institute Of Technology</p>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">CGPA : 8.04</p>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className='mt-auto pt-6'>
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 text-center">Connect With Me</h3>
        <div className="flex justify-center gap-4">
          <a 
            href="https://www.facebook.com/gyanesh.kumar.796569" 
            className="text-gray-600 hover:text-indigo-600 transition-colors p-2 rounded-full bg-white shadow-sm hover:shadow-md border border-gray-200"
            aria-label="Facebook"
          >
            <FaFacebook size={18} />
          </a>
          <a 
            href="https://x.com/GyaneshKum41451" 
            className="text-gray-600 hover:text-indigo-600 transition-colors p-2 rounded-full bg-white shadow-sm hover:shadow-md border border-gray-200"
            aria-label="X.com"
          >
            <RiTwitterXFill size={18} />
          </a>
          <a 
            href="https://www.youtube.com/@clashgamer8867" 
            className="text-gray-600 hover:text-indigo-600 transition-colors p-2 rounded-full bg-white shadow-sm hover:shadow-md border border-gray-200"
            aria-label="YouTube"
          >
            <BsYoutube size={18} />
          </a>
          <a 
            href="https://www.instagram.com/gyanesh100/" 
            className="text-gray-600 hover:text-indigo-600 transition-colors p-2 rounded-full bg-white shadow-sm hover:shadow-md border border-gray-200"
            aria-label="Instagram"
          >
            <LuInstagram size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;