"use client";

import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  // Current date
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
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
              May 18, 2025
            </p>
          </div>
          
          <nav className="space-y-6">
            <Link href="/dashboard" className="sidebar-nav-item active flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            
            <Link href="/dashboard/stats" className="sidebar-nav-item flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Stats
            </Link>
            
            <Link href="/dashboard/history" className="sidebar-nav-item flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              History
            </Link>
            
            <Link href="/dashboard/settings" className="sidebar-nav-item flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </Link>
          </nav>
        </div>
        
        {/* Main Content */}
        <div className="w-full md:w-4/5 p-4 md:p-6 bg-cream-50 rounded-r-2xl">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Today</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Meals Section */}
            <div className="w-full lg:w-3/5">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Today's Meals</h2>
              
              <div className="space-y-3">
                {/* Breakfast */}
                <div className="card p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-peach-200 flex items-center justify-center mr-4">
                      <span role="img" aria-label="breakfast" className="text-lg">🍳</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Breakfast</h3>
                      <p className="text-gray-600 text-sm">Cereal</p>
                    </div>
                  </div>
                  <span className="text-mint-600 font-medium">330</span>
                </div>
                
                {/* Lunch */}
                <div className="card p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-mint-200 flex items-center justify-center mr-4">
                      <span role="img" aria-label="lunch" className="text-lg">🥑</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Lunch</h3>
                      <p className="text-gray-600 text-sm">Toast</p>
                    </div>
                  </div>
                  <span className="text-mint-600 font-medium">450</span>
                </div>
                
                {/* Dinner */}
                <div className="card p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-peach-200 flex items-center justify-center mr-4">
                      <span role="img" aria-label="dinner" className="text-lg">🍲</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Dinner</h3>
                      <p className="text-gray-600 text-sm">Grilled</p>
                    </div>
                  </div>
                  <span className="text-mint-600 font-medium">600</span>
                </div>
                
                {/* Add Meal Button */}
                <button className="btn-primary w-full py-3 px-4 rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Meal
                </button>
              </div>
            </div>
            
            {/* Summary Section */}
            <div className="w-full lg:w-2/5 mt-6 lg:mt-0">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Summary</h2>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex justify-center mb-4">
                  <div className="relative w-28 h-28 md:w-32 md:h-32">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E6E6E6"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#4ADE80"
                        strokeWidth="3"
                        strokeDasharray="65, 100"
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <div className="text-xl md:text-2xl font-bold text-gray-800">1,370</div>
                      <div className="text-xs md:text-sm text-gray-600">calories</div>
                    </div>
                  </div>
                </div>
                
                <p className="text-center text-gray-700 mb-4">3 of 2,000 kcal</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Carbs</span>
                    <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-mint-400 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Protein</span>
                    <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-mint-400 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Fat</span>
                    <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-mint-400 h-2.5 rounded-full" style={{ width: '55%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}