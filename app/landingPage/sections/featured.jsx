"use client"
import { useState, useEffect } from 'react';
import { MapPin, Bed, Bath, Car, Wine } from 'lucide-react';

export default function PropertyListing() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1635108201418-0996823f4cc3?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1658180598156-6e3ef010497e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1702971274208-3ddc0ed49936?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1635108201018-94bbbfac4a79?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  // Auto-rotate images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 font-sans">
      <div className="flex flex-col lg:flex-row gap-6 bg-white   overflow-hidden">
        {/* Image carousel section */}
        <div className="relative w-full lg:w-1/2 h-120 bg-blue-600 rounded-lg overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={images[currentImageIndex]}
              alt={`Property image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Dots navigation */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-white/50'}`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Content section */}
        <div className="flex-1 p-4 lg:p-6">
          <div className="mb-8">
            <div className="flex items-center text-emerald-500 mb-2">
              <span className="font-medium">Featured property</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Modern Luxe Villa</h1>
            <div className="flex items-center text-gray-600 mb-6">
              <MapPin size={20} className="mr-2" />
              <span>Sector 14 Sonipat, Haryana</span>
            </div>
            
            <p className="text-gray-700 mb-6">
              Experience luxury living at Modern Luxe Villa, located at 20 Sector 14 Sonipat, Haryana. Priced at
              $1,650,500, this 560 ft² smart home offers 4 bedrooms, 3 bathrooms, and spacious living
              areas. Enjoy energy efficiency, natural light, security systems, outdoor spaces, and 2 bar
              areas—perfect for 8+ guests. Built in 2025
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <div className="p-2 bg-gray-100 rounded-lg mr-3">
                  <Bed size={20} />
                </div>
                <span>4 Bedrooms</span>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-gray-100 rounded-lg mr-3">
                  <Bath size={20} />
                </div>
                <span>3 Bathrooms</span>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-gray-100 rounded-lg mr-3">
                  <Car size={20} />
                </div>
                <span>Parking Space</span>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-gray-100 rounded-lg mr-3">
                  <Wine size={20} />
                </div>
                <span>2 Bar areas</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <button className="px-6 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors">
                Get in touch
              </button>
              <div>
                <div className="text-3xl font-bold text-gray-900">$1,650,500</div>
                <div className="text-gray-600">Discounted Price</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}