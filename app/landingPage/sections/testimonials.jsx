"use client"
import { useState } from 'react';
import { Home } from 'lucide-react';

export default function TestimonialSlider() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      text: "I found my ideal home in no time! The listings were detailed, the photos were accurate, and the whole process felt seamless. Customer service was top-notch, answering all my questions. I will definitely use this platform again in the future!",
      name: "Emily & John Smith",
      role: "Buyer",
      image: "https://images.unsplash.com/photo-1627141234469-24711efb373c?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      text: "Selling our property was incredibly easy with this service. The team was professional and helped us get the best value for our home. We received multiple offers within the first week!",
      name: "Michael Johnson",
      role: "Seller",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="w-full bg-gray-900 text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center text-emerald-400 mb-4">
            <Home size={20} className="mr-2" />
            <span className="font-medium">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">What our clients say</h2>
        </div>
        
        {/* Testimonial content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text section */}
          <div className="relative">
            <div className="mb-8">
              {/* <Home size={24} className="text-emerald-400  " /> */}
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                {testimonials[activeTestimonial].text}
              </p>
              <div>
                <h4 className="text-lg font-semibold">{testimonials[activeTestimonial].name}</h4>
                <p className="text-gray-400">{testimonials[activeTestimonial].role}</p>
              </div>
            </div>
            
            {/* Navigation dots */}
           
          </div>
          
          {/* Image section */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={testimonials[activeTestimonial].image} 
                alt={testimonials[activeTestimonial].name}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative line */}
            <div className="absolute -top-12 right-0 left-1/2 w-full h-24 border-t-2 border-r-2 rounded-tr-full border-emerald-400/30"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-8 space-x-2">
              <div className=' flex gap-3 p-2 px-4 rounded-full bg-gray-800'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3  rounded-full transition-all ${
                    activeTestimonial === index 
                      ? 'bg-white scale-100' 
                      : 'bg-gray-600 scale-75 hover:scale-90'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
              </div>
            </div>
    </div>
  );
}