"use client"
import { useState } from 'react';
import { User, Home, Award, Bookmark, Info, Instagram, Mail, Phone, Facebook } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/navbar';


export default function LuxuryRealEstateUI() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="container mx-auto px-4 py-12 pt-32 text-center">
                <h1 className="text-3xl font-light mb-10">Profile</h1>

                <div className="flex flex-col items-center justify-center">
                    <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mb-5">
                        <User className="text-[#06BE8A]" size={32} />
                    </div>

                    <h2 className="text-2xl font-medium mb-1">Who are you?</h2>
                    <p className="text-gray-500 mb-6">You're not logged in</p>

                    <div className="flex gap-3 mb-6">
                        <Link href="/auth/signup">
                            <button className="bg-gray-100 text-black px-5 py-2 rounded-full text-sm hover:bg-[#06BE8A]">
                                Sign Up
                            </button>
                        </Link>

                        <Link href="/auth/login">
                            <button className="bg-gray-100 text-black px-5 py-2 rounded-full text-sm hover:bg-[#06BE8A]">
                                Log in
                            </button>
                        </Link>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="bg-yellow-50 p-1 rounded-full">
                            <User className="text-[#06BE8A]" size={16} />
                        </div>
                        Powered by Homely
                    </div>
                </div>
            </div>




            <div className="bg-white py-12">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-5xl md:text-6xl font-bold">
                            Find your Dream House
                        </h1>
                        <Link href="/" className="flex items-center space-x-2 text-green-800">
                            <Home />
                            <span className="font-semibold text-lg">Homely</span>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
}