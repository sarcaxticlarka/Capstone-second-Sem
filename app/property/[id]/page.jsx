"use client";
import { useParams } from "next/navigation";
import { properties } from "../../data/categories";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function PropertyDetail() {
  const params = useParams();
  const propertyId = params.id;

  const property = properties.find(p => p.id === propertyId);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <p className="text-gray-600 mb-6">The property you're looking for doesn't exist or has been removed.</p>
          <Link href="/" className="bg-[#06BE8A] text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <Navbar className="pb-12" />
      <main className="min-h-screen bg-white py-2 px-4 sm:px-8 lg:px-16 pt-24">

        {/* Back button */}
        <div className="max-w-7xl mx-auto mb-8">
          <Link href="/" className="flex items-center text-gray-600 hover:text-[#06BE8A] transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Properties
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Property Title */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{property.title}</h1>
            <p className="text-xl text-gray-600">{property.location}</p>
            <div className="flex items-center mt-2">
              <span className="text-2xl font-bold text-[#06BE8A]">
                ${property.price.toLocaleString()}
              </span>
              {property.discounted && (
                <span className="text-lg text-gray-500 line-through ml-3">
                  ${property.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          {/* Property Images */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <img
                  src={property.mainImage}
                  alt={property.title}
                  className="w-full h-96 object-cover rounded-xl shadow-md"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {property.images.slice(0, 4).map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt={`${property.title} - image ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg shadow-sm"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/*  Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left Column - Main Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <section className="bg-gray-50 p-6 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className="text-gray-700 mb-6">{property.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#06BE8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-gray-500 mt-2">Type</span>
                    <span className="font-semibold capitalize">{property.categoryId}</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#06BE8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10h.01M15 10h.01M9 16h.01M15 16h.01" />
                    </svg>
                    <span className="text-gray-500 mt-2">Bedrooms</span>
                    <span className="font-semibold">{property.bedrooms}</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#06BE8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-500 mt-2">Bathrooms</span>
                    <span className="font-semibold">{property.bathrooms}</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#06BE8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg>
                    <span className="text-gray-500 mt-2">Area</span>
                    <span className="font-semibold">{property.area} m²</span>
                  </div>
                </div>
              </section>

              {/* Details */}
              <section className="bg-gray-50 p-6 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Details</h2>
                <p className="text-gray-700 mb-6">{property.details}</p>
              </section>

              {/* Features */}
              <section className="bg-gray-50 p-6 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#06BE8A] mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Amenities */}
              <section className="bg-gray-50 p-6 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#06BE8A] mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Location Information */}
              <section className="bg-gray-50 p-6 rounded-xl">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Location</h2>
                <p className="text-gray-700 mb-4">{property.locationDetails}</p>

                <h3 className="font-semibold text-gray-900 mb-2">Highlights</h3>
                <ul className="space-y-2">
                  {property.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#06BE8A] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Testimonials */}
              {property.testimonials && property.testimonials.length > 0 && (
                <section className="bg-gray-50 p-6 rounded-xl">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">What Clients Say</h2>
                  {property.testimonials.map((testimonial, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <div className="flex items-center mb-2">
                        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 mr-3">
                          {testimonial.avatar ? (
                            <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                          ) : (
                            testimonial.name.substring(0, 1)
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">{testimonial.comment}</p>
                    </div>
                  ))}
                </section>
              )}

              {/* Contact Section */}
              <section className="bg-[#06BE8A] bg-opacity-10 p-6 rounded-xl border border-[#06BE8A] border-opacity-30">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Interested in this property?</h2>
                <p className="text-gray-700 mb-6">Fill out the form below and our agent will contact you soon.</p>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#06BE8A] focus:border-[#06BE8A]" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#06BE8A] focus:border-[#06BE8A]" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#06BE8A] focus:border-[#06BE8A]" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#06BE8A] focus:border-[#06BE8A]"></textarea>
                  </div>
                  <button type="submit" className="w-full border bg-[#06BE8A] text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition">
                    Send Inquiry
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}