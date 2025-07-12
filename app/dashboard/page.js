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
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-md">
        <div className="flex items-center justify-center h-16 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">Homely Dashboard</h1>
        </div>
        <nav className="p-4">
          <div className="space-y-1">
            <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg">
              <Home className="w-5 h-5 mr-3" />
              Dashboard
            </button>
            <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
              <User className="w-5 h-5 mr-3" />
              Profile
            </button>
            <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
              <Calendar className="w-5 h-5 mr-3" />
              Bookings
            </button>
            <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
              <FileText className="w-5 h-5 mr-3" />
              Documents
            </button>
            <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </button>
            <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
              <HelpCircle className="w-5 h-5 mr-3" />
              Help
            </button>
          </div>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <button 
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-800">Welcome back, {user.displayName || 'User'}!</h2>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <Bell className="w-5 h-5" />
              </button>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">
                  {user.email}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Stats Cards */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-sm font-medium text-gray-500">Total Properties</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">12</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-sm font-medium text-gray-500">Active Bookings</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">3</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-sm font-medium text-gray-500">Messages</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">5</p>
            </div>

            {/* Recent Activity */}
            <div className="md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">New booking request</p>
                      <p className="text-sm text-gray-500">2 days ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Profile Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Your Profile</h3>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="Profile" className="w-full h-full rounded-full" />
                  ) : (
                    <User className="w-8 h-8 text-gray-600" />
                  )}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{user.displayName || 'No name set'}</h4>
                  <p className="text-sm text-gray-500">{user.email}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {user.emailVerified ? 'Verified' : 'Not verified'}
                  </p>
                </div>
              </div>
              <button className="mt-4 w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                Edit Profile
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}