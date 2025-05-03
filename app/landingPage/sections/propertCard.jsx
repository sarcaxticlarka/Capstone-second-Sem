"use client";
import Link from "next/link";
import { properties } from "../../data/categories";  

export default function PropertyCard() {
  const topProperties = properties.slice(0, 3);

  return (
<main className="min-h-screen bg-white p-8 px-4 md:px-32 md:py-32">
<section className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <p className="text-md text-[#06BE8A] font-semibold">🏡 Categories</p>
          <h1 className="text-4xl font-bold text-gray-900">
            Explore best properties <br /> with expert services.
          </h1>
          <p className="text-gray-600 text-lg">
            Discover a diverse range of premium properties, from luxurious apartments to spacious villas, tailored to your needs.
          </p>
          <Link href="/property">
            <button className="bg-[#06BE8A] text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition">
              View Properties
            </button>
          </Link>
        </div>

        {/* Image Grid with Custom Layout */}
        <div className="flex flex-col gap-6">
          {/* First Image - Full Width */}
          <Link
            key={topProperties[0].id}
            href={`/property/${topProperties[0].id}`}
            className="relative group cursor-pointer"
          >
            <img
              src={topProperties[0].mainImage}
              alt={topProperties[0].title}
              className="w-full h-64 object-cover rounded-xl shadow"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl flex items-center justify-center text-white p-4">
              <div className="text-center">
                <h3 className="font-bold text-xl mb-2">{topProperties[0].title}</h3>
                <p>${topProperties[0].price.toLocaleString()}</p>
                <p className="mt-2">Click to view details</p>
              </div>
            </div>
          </Link>

          <div className="grid grid-cols-2 gap-6">
            {topProperties.slice(1).map((property) => (
              <Link
                key={property.id}
                href={`/property/${property.id}`}
                className="relative group cursor-pointer"
              >
                <img
                  src={property.mainImage}
                  alt={property.title}
                  className="w-full h-64 object-cover rounded-xl shadow"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl flex items-center justify-center text-white p-4">
                  <div className="text-center">
                    <h3 className="font-bold text-lg mb-1">{property.title}</h3>
                    <p>${property.price.toLocaleString()}</p>
                    <p className="mt-2 text-sm">Click to view details</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}