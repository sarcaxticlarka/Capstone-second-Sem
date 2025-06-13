// "use client"
// import React from 'react';
// import { Menu, Phone, Home } from 'lucide-react';

// const Navbar = () => {
//   return (
//     <nav className="fixed z-10 p-5 w-full">
//       <div className="bg-white rounded-full px-6 py-2 flex justify-between items-center max-w-7xl mx-auto">
        
 
//         <div className="flex items-center space-x-2">
//           <Home className="text-[#151c1f]" />
//           <span className="font-semibold text-lg text-[#151c1f]">Homely</span>
//         </div>

        
//         <div className="flex items-center space-x-6">
//           <div className="flex items-center text-[#151c1f] space-x-1">
//             <Phone size={18} />
//             <span className="text-sm">+1-212-456-7890</span>
//           </div>
//           <button className="bg-[#151c1f] text-white rounded-full px-4 py-2 flex items-center space-x-2">
//             <Menu size={18} />
//             <span className="text-sm">Menu</span>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Phone, Home, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="hidden md:block fixed z-20 p-5 w-full">
        <div className="bg-white rounded-full px-6 py-2 flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/" className="flex items-center space-x-2 text-[#151c1f]">
            <Home />
            <span className="font-semibold text-lg">Homely</span>
          </Link>

          <div className="flex items-center space-x-6">
            <div className="flex items-center text-[#151c1f] space-x-1">
              <Phone size={18} />
              <span className="text-sm">+1-212-456-7890</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="bg-[#151c1f] text-white rounded-full px-4 py-2 flex items-center space-x-2"
            >
              <Menu size={18} />
              <span className="text-sm">Menu</span>
            </button>
          </div>
        </div>
      </nav>

 
      <div
        className={`fixed top-0 right-0 h-full bg-black/90 text-white z-50 transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} w-1/5 min-w-[20vw] rounded-lg shadow-lg`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={28} />
        </button>
        <div className="flex flex-col items-start px-6 pt-20 space-y-6 font-bold text-lg">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/allProperties" onClick={() => setIsMenuOpen(false)}>Search Property</Link>
          <Link href="/propertyBlog" >Blog</Link>
          <Link href="/profile" onClick={() => setIsMenuOpen(false)}>Profile</Link>

          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
