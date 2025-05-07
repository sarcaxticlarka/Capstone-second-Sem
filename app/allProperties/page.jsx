"use client"
import { useState, useEffect } from 'react';
import { categories } from '../data/categories';
import { properties } from '../data/categories';
import Navbar from '@/components/navbar';
import Link from 'next/link';

const App = () => {
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [bedrooms, setBedrooms] = useState('');

    useEffect(() => {

        const shuffled = [...properties].sort(() => 0.5 - Math.random());
        setFilteredProperties(shuffled.slice(0, 8));
    }, []);

    const handleSearch = () => {
        let results = [...properties];

        if (searchTerm) {
            results = results.filter(property =>
                property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                property.location.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategory) {
            results = results.filter(property => property.categoryId === selectedCategory);
        }

        if (bedrooms) {
            results = results.filter(property => property.bedrooms && property.bedrooms >= parseInt(bedrooms));
        }

        setFilteredProperties(results.slice(0, 5));
    };

    const getCategoryName = (categoryId) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.name : '';
    };

    return (
        <div>
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 py-8">

                <div
                    className="min-h-0 py-8 px-10 bg-cover bg-center mb-5"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1670589953882-b94c9cb380f5?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                >
                    <div className="text-center mb-8 mt-30">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2">Find Nearby Luxurious Estates</h1>
                        <p className="text-lg text-gray-100">We help you find your place, meet and build wealth in United Kingdom.</p>
                    </div>


                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {categories.slice(0, 5).map(category => (
                            <button
                                key={category.id}
                                className={`px-5 py-2 rounded-full transition-colors ${selectedCategory === category.id
                                    ? 'bg-gray-800 text-white'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                                    }`}
                                onClick={() => setSelectedCategory(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 mb-8 items-end">
                        <div className="w-full md:w-auto">
                            <label htmlFor="location" className="block text-sm font-bold text-gray-100 mb-1">Location</label>
                            <input
                                id="location"
                                type="text"
                                placeholder="Enter location"
                                className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="w-full md:w-auto">
                            <label htmlFor="category" className="block text-sm font-bold text-gray-100 mb-1">Property Category</label>
                            <select
                                id="category"
                                className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="">All Categories</option>
                                {categories.map(category => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="w-full md:w-auto">
                            <label htmlFor="bedrooms" className="block text-sm font-bold text-gray-100 mb-1">Bedroom</label>
                            <select
                                id="bedrooms"
                                className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                                value={bedrooms}
                                onChange={(e) => setBedrooms(e.target.value)}
                            >
                                <option value="">Any</option>
                                <option value="1">1+</option>
                                <option value="2">2+</option>
                                <option value="3">3+</option>
                                <option value="4">4+</option>
                                <option value="5">5+</option>
                            </select>
                        </div>

                        <button
                            className="w-full md:w-auto px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              
                    {filteredProperties.map(property => (
                          <Link 
                          href={`/property/${property.id}`} 
                          key={property.id}
                          className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 relative"
                        >
                        <div key={property.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="relative h-48">
                                <img
                                    src={property.mainImage}
                                    alt={property.title}
                                    className="w-full h-full object-cover"
                                />
                                {property.discounted && (
                                    <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                        Discounted
                                    </span>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">{property.title}</h3>
                                <p className="text-gray-600 text-sm mb-2">{property.location}</p>
                                <p className="text-gray-500 text-xs mb-3">{getCategoryName(property.categoryId)}</p>

                                <div className="flex gap-4 text-sm text-gray-700 mb-3">
                                    {property.bedrooms && <span>{property.bedrooms} beds</span>}
                                    {property.bathrooms && <span>{property.bathrooms} baths</span>}
                                    {property.area && <span>{property.area} sq ft</span>}
                                </div>

                                <div className="flex items-center">
                                    <span className="text-lg font-bold text-gray-800">
                                        ${property.price.toLocaleString()}
                                    </span>
                                    {property.discounted && property.originalPrice && (
                                        <span className="ml-2 text-sm text-gray-500 line-through">
                                            ${property.originalPrice.toLocaleString()}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                           </Link>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default App;