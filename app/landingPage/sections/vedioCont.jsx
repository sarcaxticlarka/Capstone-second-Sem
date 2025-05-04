'use client';

import { useEffect, useRef } from 'react';

export default function VideoBackground() {
  const videoRef = useRef(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error playing the video:", error);
      });
    }
  }, []);

  return (
    <div className="relative h-screen w-full flex justify-center items-center overflow-hidden">
      {/* Video Container - 80vw width and centered */}
      <div className="relative max-w-6xl rounded-xl overflow-hidden bg-white shadow-lg ">
      {/* Video Element */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 text-center px-4">
          <h1 className="text-4xl md:text-4xl font-semibold mb-6 leading-none ">
            Enter a realm where exquisite design <br />
            and timeless luxury come together.
          </h1>
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
            Get in touch
          </button>
        </div>
        
        {/* Scrolling Bottom Bar */}
        <div className="absolute bottom-0 w-full bg-[#06be8a] text-white overflow-hidden z-10">
          <div className="whitespace-nowrap animate-marquee py-2 text-sm font-medium">
            <span className="mx-8">BROWSE THOUSANDS OF LISTINGS IN PRIME LOCATIONS AT GREAT PRICES!</span>
            <span className="mx-8">GET A FREE PROPERTY VALUATION — SELL YOUR HOME WITH CONFIDENCE!</span>
            <span className="mx-8">BROWSE THOUSANDS OF LISTINGS IN PRIME LOCATIONS AT GREAT PRICES!</span>
            <span className="mx-8">GET A FREE PROPERTY VALUATION — SELL YOUR HOME WITH CONFIDENCE!</span>
            <span className="mx-8">BROWSE THOUSANDS OF LISTINGS IN PRIME LOCATIONS AT GREAT PRICES!</span>
            <span className="mx-8">GET A FREE PROPERTY VALUATION — SELL YOUR HOME WITH CONFIDENCE!</span>
            <span className="mx-8">BROWSE THOUSANDS OF LISTINGS IN PRIME LOCATIONS AT GREAT PRICES!</span>
            <span className="mx-8">GET A FREE PROPERTY VALUATION — SELL YOUR HOME WITH CONFIDENCE!</span>
            <span className="mx-8">BROWSE THOUSANDS OF LISTINGS IN PRIME LOCATIONS AT GREAT PRICES!</span>
            <span className="mx-8">GET A FREE PROPERTY VALUATION — SELL YOUR HOME WITH CONFIDENCE!</span>
            
          </div>
        </div>
      </div>
    </div>
  );
}