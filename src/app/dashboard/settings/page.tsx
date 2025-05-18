"use client";

import Link from "next/link";
import { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [calorieGoal, setCalorieGoal] = useState(2000);
  
  // Current date
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-cream-50 pt-6">
      <div className="max-w-7xl mx-auto p-4 flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-1/5 p-4 md:p-6 space-y-8 bg-mint-100 rounded-l-2xl">
          <div className="bg-white rounded-full px-4 py-2 inline-block shadow-sm">
            <p className="text-gray-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formattedDate}
            </p>
          </div>
          
          <nav className="space-y-6">
            <Link href="/dashboard" className="flex items-center p-2 hover:bg-mint-200 rounded-xl text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-mint-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            
            <Link href="/dashboard/stats" className="flex items-center p-2 hover:bg-mint-200 rounded-xl text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-mint-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Stats
            </Link>
            
            <Link href="/dashboard/history" className="flex items-center p-2 hover:bg-mint-200 rounded-xl text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-mint-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              History
            </Link>
            
            <Link href="/dashboard/settings" className="flex items-center p-2 bg-peach-100 rounded-xl text-gray-800 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-peach-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </Link>
          </nav>
        </div>
        
        {/* Main Content */}
        <div className="w-full md:w-4/5 p-4 md:p-6 bg-cream-50 rounded-r-2xl">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Account Settings */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Account Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-mint-500 text-gray-900"
                    defaultValue="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-mint-500 text-gray-900"
                    defaultValue="john.doe@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-mint-500 text-gray-900"
                    defaultValue="********"
                  />
                </div>
                
                <button className="w-full bg-peach-200 hover:bg-peach-300 text-gray-800 font-medium py-2 px-4 rounded-md flex items-center justify-center transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
            
            {/* Preferences */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Preferences</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Notifications</span>
                    <button 
                      className={`relative inline-flex h-6 w-11 items-center rounded-full ${notifications ? 'bg-mint-500' : 'bg-gray-300'}`}
                      onClick={() => setNotifications(!notifications)}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${notifications ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Dark Mode</span>
                    <button 
                      className={`relative inline-flex h-6 w-11 items-center rounded-full ${darkMode ? 'bg-mint-500' : 'bg-gray-300'}`}
                      onClick={() => setDarkMode(!darkMode)}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${darkMode ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Nutrition Goals */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Nutrition Goals</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="calories" className="block text-sm font-medium text-gray-700 mb-1">
                      Daily Calorie Goal
                    </label>
                    <input
                      type="number"
                      id="calories"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-mint-500 text-gray-900"
                      value={calorieGoal}
                      onChange={(e) => setCalorieGoal(parseInt(e.target.value))}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="macros" className="block text-sm font-medium text-gray-700 mb-1">
                      Macronutrient Split
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-gray-600">Carbs</span>
                        <span className="text-lg font-bold text-mint-600">50%</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-gray-600">Protein</span>
                        <span className="text-lg font-bold text-mint-600">30%</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-gray-600">Fat</span>
                        <span className="text-lg font-bold text-mint-600">20%</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-peach-200 hover:bg-peach-300 text-gray-800 font-medium py-2 px-4 rounded-md flex items-center justify-center transition-colors">
                    Update Goals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}