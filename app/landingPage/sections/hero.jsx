"use client"
import Navbar from "@/components/navbar";
import { Phone, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { X } from 'lucide-react';
import Link from 'next/link';

export default function PropertyListing() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const triggerPoint = window.innerWidth * 0.05;
            setShowNavbar(scrollY > triggerPoint);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    return (
        <div className="relative min-h-screen w-full bg-blue-300/10">
            {showNavbar && (
                <div className="fixed top-0 left-0 w-full z-50">
                    <Navbar />
                </div>
            )}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1670589953882-b94c9cb380f5?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    opacity: 0.9
                }}
            />


            <div className="relative  min-h-screen flex flex-col">
                {/* Navigation Bar */}
                <header className="w-full  p-4 md:p-6 md:px-32 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="text-white mr-2">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                        </div>
                        <span className="text-white text-xl font-semibold">Homely</span>
                    </div>

                    <div className="flex items-center">
                        <a href="tel:+12124567890" className="hidden md:flex items-center text-white mr-6">
                            <Phone className="w-5 h-5 mr-2" />
                            <span>+1-212-456-7890</span>
                        </a>

                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="bg-white text-gray-800 px-4 py-2 rounded-full flex items-center"
                        >
                            <Menu className="w-5 h-5 mr-2" />
                            <span>Menu</span>
                        </button>
                    </div>
                </header>


                <main className="flex-1 flex flex-col justify-between">
                    {/* Property Title Section */}
                    <div className="px-6 md:px-10 pt-16 md:pt-24">
                        <div className="text-white">
                            <p className="text-sm md:text-base mb-2">Palm Springs, CA</p>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6">
                                Futuristic<br />
                                Haven
                            </h1>

                            <div className="flex flex-wrap gap-4">
                                <Link href="auth/signup" >
                                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-full transition">
                                        Get in touch
                                    </button>
                                </Link>
                                <a href="#featured" >
                                <button className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-6 rounded-full transition">
                                    View Details
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Stats Card */}
                    <div className="w-full md:w-[55vw] mx-auto absolute bottom-0 right-0">
                        <div className="mt-auto mx-6 md:mx-10 mb-6 md:mb-10">
                            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="flex flex-col items-center">
                                    <div className="mb-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="2" y="4" width="20" height="16" rx="2" />
                                            <path d="M6 8h.01M6 12h.01M6 16h.01M12 8h.01M12 12h.01M12 16h.01M18 8h.01M18 12h.01M18 16h.01" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600">Bedrooms</span>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="mb-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M7 20v-8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8" />
                                            <path d="M17 16l-5-5-5 5" />
                                            <path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600">Swingpool</span>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="mb-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="3" y="3" width="18" height="18" rx="2" />
                                            <path d="M12 8v8M8 12h8" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600">Parking Space</span>
                                </div>

                                <div className="flex flex-col items-center">
                                    <span className="text-3xl font-bold mb-1">$4,750,000</span>
                                    <span className="text-gray-600">For selling price</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>

            {/* Side Menu Overlay */}
            <div
                className={`fixed inset-y-0 right-0 z-50 w-2/8 bg-black/90 transform transition-transform duration-300 ease-in-out rounded-tl-3xl rounded-bl-3xl ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <button
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-6 right-6 text-white"
                >
                    <X size={28} />
                </button>

                <nav className="h-full flex items-center justify-center">
                    <ul className="space-y-8">
                        <li>
                            <Link href="#" className="text-white text-2xl hover:text-blue-300 transition-colors">Home</Link>
                        </li>
                        <li>
                            <Link href="/allProperties" className="text-white text-2xl hover:text-blue-300 transition-colors">Search Property</Link>
                        </li>
                        <li>
                            <Link href="/propertyBlog" className="text-white text-2xl hover:text-blue-300 transition-colors">Blog</Link>
                        </li>
                        <li>
                            <Link href="/profile" className="text-white text-2xl hover:text-blue-300 transition-colors">Profile</Link>
                        </li>
                        <li>
                            <Link href="#contact" className="text-white text-2xl hover:text-blue-300 transition-colors">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>


            <div
                className={`fixed inset-0 bg-black/20 z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setMenuOpen(false)}
            />
        </div>
    );
}