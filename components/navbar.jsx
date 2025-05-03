"use client"
import React from 'react';
import { Menu, Phone, Home } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className=" p-8">
      <div className="bg-white rounded-full px-6 py-2 flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Left - Logo */}
        <div className="flex items-center space-x-2">
          <Home className="text-[#151c1f]" />
          <span className="font-semibold text-lg text-[#151c1f]">Homely</span>
        </div>

        {/* Right - Phone and Menu */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-[#151c1f] space-x-1">
            <Phone size={18} />
            <span className="text-sm">+1-212-456-7890</span>
          </div>
          <button className="bg-[#151c1f] text-white rounded-full px-4 py-2 flex items-center space-x-2">
            <Menu size={18} />
            <span className="text-sm">Menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
