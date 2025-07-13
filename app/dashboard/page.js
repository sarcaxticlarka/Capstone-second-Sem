// "use client";

// import { useAuth } from '../context/authContext';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
// import { signOut } from 'firebase/auth';
// import { auth } from '../lib/firebase';
// import { Home, User, Settings, LogOut, Bell, Calendar, FileText, HelpCircle } from 'lucide-react';

// export default function Dashboard() {
//   const { user, loading } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!loading && !user) {
//       router.push('/auth/login');
//     }
//   }, [user, loading, router]);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       router.push('/');
//     } catch (error) {
//       console.error('Error signing out:', error);
//     }
//   };

//   if (loading || !user) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-md">
//         <div className="flex items-center justify-center h-16 border-b border-gray-200">
//           <h1 className="text-xl font-bold text-gray-800">Homely Dashboard</h1>
//         </div>
//         <nav className="p-4">
//           <div className="space-y-1">
//             <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg">
//               <Home className="w-5 h-5 mr-3" />
//               Dashboard
//             </button>
//             <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
//               <User className="w-5 h-5 mr-3" />
//               Profile
//             </button>
//             <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
//               <Calendar className="w-5 h-5 mr-3" />
//               Bookings
//             </button>
//             <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
//               <FileText className="w-5 h-5 mr-3" />
//               Documents
//             </button>
//             <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
//               <Settings className="w-5 h-5 mr-3" />
//               Settings
//             </button>
//             <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
//               <HelpCircle className="w-5 h-5 mr-3" />
//               Help
//             </button>
//           </div>
//         </nav>
//         <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
//           <button 
//             onClick={handleLogout}
//             className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg"
//           >
//             <LogOut className="w-5 h-5 mr-3" />
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="ml-64">
//         {/* Header */}
//         <header className="bg-white shadow-sm">
//           <div className="flex items-center justify-between px-6 py-4">
//             <h2 className="text-lg font-semibold text-gray-800">Welcome back, {user.displayName || 'User'}!</h2>
//             <div className="flex items-center space-x-4">
//               <button className="p-2 text-gray-500 hover:text-gray-700">
//                 <Bell className="w-5 h-5" />
//               </button>
//               <div className="flex items-center">
//                 <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
//                   <User className="w-4 h-4 text-gray-600" />
//                 </div>
//                 <span className="ml-2 text-sm font-medium text-gray-700">
//                   {user.email}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Dashboard Content */}
//         <main className="p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Stats Cards */}
//             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//               <h3 className="text-sm font-medium text-gray-500">Total Properties</h3>
//               <p className="mt-2 text-3xl font-semibold text-gray-900">12</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//               <h3 className="text-sm font-medium text-gray-500">Active Bookings</h3>
//               <p className="mt-2 text-3xl font-semibold text-gray-900">3</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//               <h3 className="text-sm font-medium text-gray-500">Messages</h3>
//               <p className="mt-2 text-3xl font-semibold text-gray-900">5</p>
//             </div>

//             {/* Recent Activity */}
//             <div className="md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//               <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
//               <div className="space-y-4">
//                 {[1, 2, 3].map((item) => (
//                   <div key={item} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
//                     <div className="flex-shrink-0 mt-1">
//                       <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                         <Calendar className="w-4 h-4 text-blue-600" />
//                       </div>
//                     </div>
//                     <div className="ml-3">
//                       <p className="text-sm font-medium text-gray-900">New booking request</p>
//                       <p className="text-sm text-gray-500">2 days ago</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* User Profile Card */}
//             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//               <h3 className="text-lg font-medium text-gray-900 mb-4">Your Profile</h3>
//               <div className="flex items-center space-x-4">
//                 <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
//                   {user.photoURL ? (
//                     <img src={user.photoURL} alt="Profile" className="w-full h-full rounded-full" />
//                   ) : (
//                     <User className="w-8 h-8 text-gray-600" />
//                   )}
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-900">{user.displayName || 'No name set'}</h4>
//                   <p className="text-sm text-gray-500">{user.email}</p>
//                   <p className="text-sm text-gray-500 mt-1">
//                     {user.emailVerified ? 'Verified' : 'Not verified'}
//                   </p>
//                 </div>
//               </div>
//               <button className="mt-4 w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
//                 Edit Profile
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useAuth } from '../context/authContext';
// import Link from 'next/link';

// export default function Dashboard() {
//   const { user, logout } = useAuth();

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <nav className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
//             </div>
//             <div className="flex items-center">
//               <button
//                 onClick={logout}
//                 className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
//               >
//                 Sign out
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="bg-white shadow rounded-lg p-6">
//           <h2 className="text-lg font-medium text-gray-900">Welcome, {user?.displayName || user?.email}!</h2>
//           <p className="mt-2 text-sm text-gray-600">
//             You're now logged in to your Homely dashboard.
//           </p>
          
//           <div className="mt-6">
//             <Link
//               href="/"
//               className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
//             >
//               Browse Properties
//             </Link>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

"use client";

import { useAuth } from '../context/authContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { Home, User, Settings, LogOut, Bell, Calendar, FileText, HelpCircle } from 'lucide-react';

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-md z-10">
        <div className="flex items-center justify-center h-16 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">Homely</h1>
        </div>
        <nav className="p-4">
          <div className="space-y-2">
            <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg transition-colors duration-200">
              <Home className="w-5 h-5 mr-3" />
              Dashboard
            </button>
            <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <User className="w-5 h-5 mr-3" />
              Profile
            </button>
            <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <Calendar className="w-5 h-5 mr-3" />
              Bookings
            </button>
            <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <FileText className="w-5 h-5 mr-3" />
              Documents
            </button>
            <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </button>
            <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <HelpCircle className="w-5 h-5 mr-3" />
              Help
            </button>
          </div>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <button 
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="flex items-center justify-between px-8 py-4">
            <h2 className="text-2xl font-semibold text-gray-800">Welcome back, {user.displayName || 'User'}!</h2>
            <div className="flex items-center space-x-6">
              <button className="p-2 text-gray-500 hover:text-gray-700 relative">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-5 h-5 text-gray-600" />
                  )}
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-700">
                    {user.displayName || 'User'}
                  </p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Total Properties</h3>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">12</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Home className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Active Bookings</h3>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">3</p>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Messages</h3>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">5</p>
                </div>
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Bell className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity and Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-start pb-4 border-b border-gray-100 last:border-0 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <Calendar className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">New booking request</p>
                      <p className="text-sm text-gray-500">2 days ago</p>
                      <p className="mt-1 text-sm text-gray-600">Property: Downtown Apartment</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Profile Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Your Profile</h3>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden mb-4">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-10 h-10 text-gray-600" />
                  )}
                </div>
                <h4 className="text-xl font-medium text-gray-900 text-center">
                  {user.displayName || 'No name set'}
                </h4>
                <p className="text-sm text-gray-500 text-center mt-1">{user.email}</p>
                
                <div className="mt-4 w-full space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Status:</span>
                    <span className={`font-medium ${user.emailVerified ? 'text-green-600' : 'text-yellow-600'}`}>
                      {user.emailVerified ? 'Verified' : 'Not verified'}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Member since:</span>
                    <span className="font-medium text-gray-700">
                      {user.metadata?.creationTime ? 
                        new Date(user.metadata.creationTime).toLocaleDateString() : 
                        'N/A'}
                    </span>
                  </div>
                </div>
                
                <button className="mt-6 w-full py-2 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}