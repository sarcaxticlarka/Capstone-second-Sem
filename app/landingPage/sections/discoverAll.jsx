"use client";
import Link from "next/link";
import { properties } from "../../data/categories";

export default function HomePage() {
  return (
    <main className="min-h-screen mx-auto bg-white py-12 px-4 sm:px-8 lg:px-32">

      <div className="text-center mb-12">
        <div className="flex justify-center mb-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#06BE8A] bg-opacity-10 text-white">

            Properties
          </span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Discover inspiring designed homes.</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Curated homes where elegance, style, and comfort unite.</p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {properties.map((property) => (
          <Link
            href={`/property/${property.id}`}
            key={property.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 relative"
          >
            <div className="relative aspect-w-16 aspect-h-9">
              <img
                src={property.mainImage}
                alt={property.title}
                className="w-full h-64 object-cover"
              />
              {property.discounted && (
                <span className="absolute top-4 right-4 bg-[#06BE8A] text-white px-3 py-1 rounded-full text-sm font-medium">
                  On Sale
                </span>
              )}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-2">{property.location}</p>
                </div>
                <span className="text-xl font-bold text-[#06BE8A]">
                  ${property.price.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between text-gray-500 mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                  <span>{property.area} m²</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center">
        <Link href="allProperties" >

          <button className="bg-[#06BE8A] hover:bg-[#05a878] text-white font-medium px-6 py-3 rounded-full transition">
            View all listing
          </button>
        </Link>
      </div>
    </main>
  );
}