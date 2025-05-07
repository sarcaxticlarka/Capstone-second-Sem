"use client";

import { useState } from 'react';
import { User, Lock, Mail, ArrowLeft, Eye, EyeOff, Home } from 'lucide-react';
import Link from 'next/link';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = () => { 
    console.log(isLogin ? 'Logging in' : 'Signing up', { email, password, name });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
 
      <div className="container mx-auto px-4 py-6">
        <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-black w-fit">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
      </div>

 
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md">
 
          <div className="flex justify-center mb-8">
            <Link href="/" className="flex items-center space-x-2 text-green-800">
              <Home size={28} />
              <span className="font-semibold text-xl">Homely</span>
            </Link>
          </div>
 
          <h1 className="text-3xl font-medium mb-8 text-center">
            {isLogin ? 'Welcome back' : 'Create your account'}
          </h1>
 
          <div className="space-y-5">
            {!isLogin && (
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-12 w-full py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    placeholder="John Doe"
                  />
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="text-gray-400" size={20} />
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 w-full py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  placeholder="you@example.com"
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="text-gray-400" size={20} />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 pr-12 w-full py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  placeholder={isLogin ? "Enter your password" : "Create a strong password"}
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="text-gray-400" size={20} />
                </div>
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="text-gray-400 hover:text-gray-600" size={20} />
                  ) : (
                    <Eye className="text-gray-400 hover:text-gray-600" size={20} />
                  )}
                </div>
              </div>
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <Link href="/forgot-password" className="text-sm text-green-700 hover:text-green-900">
                  Forgot password?
                </Link>
              </div>
            )}

            <div
              onClick={handleSubmit}
              className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition cursor-pointer text-center"
            >
              {isLogin ? 'Log in' : 'Sign up'}
            </div>
          </div>
 
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-green-700 hover:text-green-900 font-medium cursor-pointer"
              >
                {isLogin ? 'Sign up' : 'Log in'}
              </span>
            </p>
          </div>

 
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-gray-500">Or continue with</span>
            </div>
          </div>

       
          <div className="grid grid-cols-2 gap-4">
            <div
              className="py-3 px-4 border border-gray-300 rounded-full flex justify-center items-center gap-2 hover:bg-gray-50 transition cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
                <path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"/>
                <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
                <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
              </svg>
              <span>Google</span>
            </div>
            <div
              className="py-3 px-4 border border-gray-300 rounded-full flex justify-center items-center gap-2 hover:bg-gray-50 transition cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              <span>Apple</span>
            </div>
          </div>
 
          <p className="mt-8 text-center text-xs text-gray-500">
            By continuing, you agree to Homely's{' '}
            <Link href="/terms" className="text-green-700 hover:text-green-900">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-green-700 hover:text-green-900">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
 
      <div className="container mx-auto px-4 py-6 border-t border-gray-100">
        <div className="flex justify-center items-center text-sm text-gray-500">
          © 2024 Homely. All rights reserved.
        </div>
      </div>
    </div>
  );
}