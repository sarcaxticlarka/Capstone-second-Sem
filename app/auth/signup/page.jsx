// "use client";

// import { useState } from 'react';
// import { User, Lock, Mail, ArrowLeft, Eye, EyeOff, Home, Check, Phone } from 'lucide-react';
// import Link from 'next/link';

// export default function SignupPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [agreeTerms, setAgreeTerms] = useState(false);
//   const [step, setStep] = useState(1);  
//   const handleSignup = () => {
//      console.log('Signing up', { email, password, name, phone });
//     setStep(step + 1);
//   };

//   return (
//     <div className="min-h-screen bg-white flex flex-col">
//        <div className="container mx-auto px-4 py-6">
//         <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-black w-fit">
//           <ArrowLeft size={20} />
//           <span>Back to Home</span>
//         </Link>
//       </div>

 
//       <div className="flex-1 flex flex-col items-center justify-center px-4">
//         <div className="w-full max-w-md">
 
//           <div className="flex justify-center mb-8">
//             <Link href="/" className="flex items-center space-x-2 text-green-800">
//               <Home size={28} />
//               <span className="font-semibold text-xl">Homely</span>
//             </Link>
//           </div>

  
//           <div className="flex justify-between items-center mb-8">
//             <div className="flex flex-col items-center">
//               <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
//                 {step > 1 ? <Check size={16} /> : '1'}
//               </div>
//               <span className="text-xs mt-1 text-gray-500">Account</span>
//             </div>
//             <div className={`flex-1 h-0.5 ${step > 1 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
//             <div className="flex flex-col items-center">
//               <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
//                 {step > 2 ? <Check size={16} /> : '2'}
//               </div>
//               <span className="text-xs mt-1 text-gray-500">Verify</span>
//             </div>
//             <div className={`flex-1 h-0.5 ${step > 2 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
//             <div className="flex flex-col items-center">
//               <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
//                 3
//               </div>
//               <span className="text-xs mt-1 text-gray-500">Complete</span>
//             </div>
//           </div>

 
//           <h1 className="text-3xl font-medium mb-2 text-center">
//             {step === 1 ? 'Create your account' : step === 2 ? 'Verify your email' : 'Welcome to Homely!'}
//           </h1>
          
  
//           <p className="text-gray-500 text-center mb-8">
//             {step === 1 ? 'Fill in your details to get started' : step === 2 ? 'We sent a code to your email' : 'Your account is now ready to use'}
//           </p>

//           {step === 1 && (
//             <div className="space-y-5">
//               <div className="space-y-2">
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                   Full Name
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     id="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="pl-12 w-full py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
//                     placeholder="your name"
//                   />
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                     <User className="text-gray-400" size={20} />
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="pl-12 w-full py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
//                     placeholder="you@example.com"
//                   />
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                     <Mail className="text-gray-400" size={20} />
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//                   Phone Number
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="tel"
//                     id="phone"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     className="pl-12 w-full py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
//                     placeholder="+91 9987675742"
//                   />
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                     <Phone className="text-gray-400" size={20} />
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                   Create Password
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="pl-12 pr-12 w-full py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
//                     placeholder="Create a strong password"
//                   />
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                     <Lock className="text-gray-400" size={20} />
//                   </div>
//                   <div
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer"
//                   >
//                     {showPassword ? (
//                       <EyeOff className="text-gray-400 hover:text-gray-600" size={20} />
//                     ) : (
//                       <Eye className="text-gray-400 hover:text-gray-600" size={20} />
//                     )}
//                   </div>
//                 </div>
//                 {/* Password strength indicator */}
//                 <div className="flex gap-1 mt-1">
//                   <div className={`h-1 flex-1 rounded-full ${password.length > 0 ? 'bg-red-400' : 'bg-gray-200'}`}></div>
//                   <div className={`h-1 flex-1 rounded-full ${password.length >= 8 ? 'bg-yellow-400' : 'bg-gray-200'}`}></div>
//                   <div className={`h-1 flex-1 rounded-full ${password.length >= 12 ? 'bg-green-400' : 'bg-gray-200'}`}></div>
//                 </div>
//                 <p className="text-xs text-gray-500">Password should be at least 8 characters</p>
//               </div>

//               <div className="flex items-center gap-2">
//                 <div 
//                   onClick={() => setAgreeTerms(!agreeTerms)}
//                   className={`w-5 h-5 rounded border cursor-pointer flex items-center justify-center ${agreeTerms ? 'bg-green-600 border-green-600' : 'border-gray-300'}`}
//                 >
//                   {agreeTerms && <Check size={12} className="text-white" />}
//                 </div>
//                 <p className="text-sm text-gray-600">
//                   I agree to Homely's{' '}
//                   <Link href="/terms" className="text-green-700 hover:text-green-900">
//                     Terms of Service
//                   </Link>{' '}
//                   and{' '}
//                   <Link href="/privacy" className="text-green-700 hover:text-green-900">
//                     Privacy Policy
//                   </Link>
//                 </p>
//               </div>

//               <div
//                 onClick={() => agreeTerms && handleSignup()}
//                 className={`w-full py-3 rounded-full text-center cursor-pointer transition ${
//                   agreeTerms 
//                     ? 'bg-black text-white hover:bg-gray-800' 
//                     : 'bg-gray-200 text-gray-400 cursor-not-allowed'
//                 }`}
//               >
//                 Create Account
//               </div>

            
//               <div className="relative my-6">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-200"></div>
//                 </div>
//                 <div className="relative flex justify-center">
//                   <span className="bg-white px-4 text-sm text-gray-500">Or sign up with</span>
//                 </div>
//               </div>

          
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="py-3 px-4 border border-gray-300 rounded-full flex justify-center items-center gap-2 hover:bg-gray-50 transition cursor-pointer">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
//                     <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
//                     <path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"/>
//                     <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
//                     <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
//                   </svg>
//                   <span>Google</span>
//                 </div>
//                 <div className="py-3 px-4 border border-gray-300 rounded-full flex justify-center items-center gap-2 hover:bg-gray-50 transition cursor-pointer">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512">
//                     <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
//                   </svg>
//                   <span>Apple</span>
//                 </div>
//               </div>

//               {/* Already have account */}
//               <div className="mt-6 text-center">
//                 <p className="text-gray-600">
//                   Already have an account?{' '}
//                   <Link href="/auth/login" className="text-green-700 hover:text-green-900 font-medium">
//                     Log in
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           )}

//           {step === 2 && (
//             <div className="space-y-6">
//               {/* Verification code input */}
//               <div className="flex justify-center gap-3 my-6">
//                 {[1, 2, 3, 4, 5, 6].map((i) => (
//                   <div key={i} className="w-10 h-12">
//                     <input
//                       type="text"
//                       maxLength={1}
//                       className="w-full h-full text-center text-xl font-medium border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
//                     />
//                   </div>
//                 ))}
//               </div>

//               <div
//                 onClick={() => setStep(3)}
//                 className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition cursor-pointer text-center"
//               >
//                 Verify Email
//               </div>

//               <div className="text-center">
//                 <p className="text-gray-500 text-sm">
//                   Didn't receive a code?{' '}
//                   <span className="text-green-700 hover:text-green-900 cursor-pointer">
//                     Resend
//                   </span>
//                 </p>
//               </div>
//             </div>
//           )}

//           {step === 3 && (
//             <div className="space-y-6 text-center">
//               <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
//                 <Check size={40} className="text-green-600" />
//               </div>
              
//               <p className="text-gray-600">
//                 Your account has been created successfully. You can now explore luxury properties and find your dream home.
//               </p>

//               <div
//                 onClick={() => window.location.href = '/dashboard'}
//                 className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition cursor-pointer text-center"
//               >
//                 Go to Dashboard
//               </div>
              
//               <div
//                 onClick={() => window.location.href = '/'}
//                 className="w-full bg-white text-black py-3 rounded-full border border-gray-300 hover:bg-gray-50 transition cursor-pointer text-center"
//               >
//                 Browse Properties
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="container mx-auto px-4 py-6 border-t border-gray-100">
//         <div className="flex justify-center items-center text-sm text-gray-500">
//           © 2024 Homely. All rights reserved.
//         </div>
//       </div>
//     </div>
//   );
// }// app/auth/signup/page.js

"use client";

import { useState } from 'react';
import { User, Lock, Mail, ArrowLeft, Eye, EyeOff, Home, Phone, Check } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/authContext';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { signup , googleLogin} = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (!agreeTerms) {
      setError('You must agree to the terms and conditions');
      return;
    }
  
    if (!email || !password || !name) {
      setError('Please fill in all required fields');
      return;
    }
  
    try {
      setLoading(true);
      setError(null);
      
      await signup(email, password, name);
      // Redirect to dashboard after successful signup
      router.push('/dashboard');
      
    } catch (err) {
      setError(getFirebaseErrorMessage(err.code));
    } finally {
      setLoading(false);
    }
  };

  const getFirebaseErrorMessage = (code) => {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'Email is already in use. Please use a different email.';
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters.';
      case 'auth/operation-not-allowed':
        return 'Email/password accounts are not enabled.';
      default:
        return 'An error occurred during signup. Please try again.';
    }
  };
  const handleGoogleSignup = async () => {
    try {
      setLoading(true);
      setError(null);
      
      await googleLogin();
      router.push('/dashboard');
      
    } catch (err) {
      setError(getFirebaseErrorMessage(err.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-black w-fit">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link href="/" className="flex items-center space-x-2 text-green-800">
              <Home size={28} />
              <span className="font-semibold text-xl">Homely</span>
            </Link>
          </div>

          {/* Form Title */}
          <h1 className="text-3xl font-medium mb-2 text-center">Create your account</h1>
          <p className="text-gray-500 text-center mb-8">Fill in your details to get started</p>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
              {error}
            </div>
          )}

          {/* Signup Form */}
          <form onSubmit={handleSignup} className="space-y-5">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-12 w-full py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  placeholder="your name"
                  required
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="text-gray-400" size={20} />
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 w-full py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  placeholder="you@example.com"
                  required
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="text-gray-400" size={20} />
                </div>
              </div>
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="pl-12 w-full py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  placeholder="+91 9987675742"
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="text-gray-400" size={20} />
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Create Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 pr-12 w-full py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  placeholder="Create a strong password"
                  required
                  minLength={6}
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
              <div className="flex gap-1 mt-1">
                <div className={`h-1 flex-1 rounded-full ${password.length > 0 ? 'bg-red-400' : 'bg-gray-200'}`}></div>
                <div className={`h-1 flex-1 rounded-full ${password.length >= 8 ? 'bg-yellow-400' : 'bg-gray-200'}`}></div>
                <div className={`h-1 flex-1 rounded-full ${password.length >= 12 ? 'bg-green-400' : 'bg-gray-200'}`}></div>
              </div>
              <p className="text-xs text-gray-500">Password should be at least 8 characters</p>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-2">
              <div 
                onClick={() => setAgreeTerms(!agreeTerms)}
                className={`w-5 h-5 rounded border cursor-pointer flex items-center justify-center ${agreeTerms ? 'bg-green-600 border-green-600' : 'border-gray-300'}`}
              >
                {agreeTerms && <Check size={12} className="text-white" />}
              </div>
              <p className="text-sm text-gray-600">
                I agree to Homely's{' '}
                <Link href="/terms" className="text-green-700 hover:text-green-900">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-green-700 hover:text-green-900">
                  Privacy Policy
                </Link>
              </p>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              disabled={loading || !agreeTerms}
              className={`w-full py-3 rounded-full text-center transition ${
                agreeTerms 
                  ? 'bg-black text-white hover:bg-gray-800' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-sm text-gray-500">Or sign up with</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-4">
            <button 
  type="button"
  onClick={handleGoogleSignup}
  disabled={loading}
  className="py-3 px-4 border border-gray-300 rounded-full flex justify-center items-center gap-2 hover:bg-gray-50 transition cursor-pointer"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
    <path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"/>
    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
  </svg>
  <span>Google</span>
</button>
              <button 
                type="button"
                className="py-3 px-4 border border-gray-300 rounded-full flex justify-center items-center gap-2 hover:bg-gray-50 transition cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <span>Apple</span>
              </button>
            </div>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link href="/auth/login" className="text-green-700 hover:text-green-900 font-medium">
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 py-6 border-t border-gray-100">
        <div className="flex justify-center items-center text-sm text-gray-500">
          © 2024 Homely. All rights reserved.
        </div>
      </div>
    </div>
  );
}