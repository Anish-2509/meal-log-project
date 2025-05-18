"use client";

import Link from "next/link";

export default function Stats() {
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
            
            <Link href="/dashboard/stats" className="flex items-center p-2 bg-peach-100 rounded-xl text-gray-800 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-peach-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            
            <Link href="/dashboard/settings" className="flex items-center p-2 hover:bg-mint-200 rounded-xl text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-mint-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </Link>
          </nav>
        </div>
        
        {/* Main Content */}
        <div className="w-full md:w-4/5 p-4 md:p-6 bg-cream-50 rounded-r-2xl">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Stats</h1>
            <div className="flex items-center">
              <span className="mr-2 text-gray-700">April 2024</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Total Calories */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Total Calories</h2>
              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48">
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
                      strokeDasharray="75, 100"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#FB923C"
                      strokeWidth="3"
                      strokeDasharray="15, 100"
                      strokeDashoffset="-75"
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-4xl font-bold text-gray-800">1650</div>
                    <div className="text-lg text-gray-600">cal</div>
                  </div>
                </div>
              </div>
              <div className="space-y-3 mt-4">
                <div className="bg-mint-100 h-4 rounded-full w-3/4 mx-auto"></div>
                <div className="flex justify-between">
                  <div className="bg-mint-100 h-4 rounded-full w-5/6"></div>
                  <div className="bg-mint-100 h-4 rounded-full w-1/6 ml-2"></div>
                </div>
                <div className="bg-mint-100 h-4 rounded-full w-1/2 mx-auto"></div>
                <div className="flex justify-between">
                  <div className="bg-mint-100 h-4 rounded-full w-2/3"></div>
                  <div className="bg-mint-100 h-4 rounded-full w-1/4 ml-2"></div>
                </div>
              </div>
            </div>
            
            {/* Nutrients */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Nutrients</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Carbs</span>
                    <div className="flex items-center">
                      <div className="w-48 bg-gray-200 rounded-full h-3 mr-3">
                        <div className="bg-mint-400 h-3 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <span className="text-gray-800 font-bold">180g</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Protein</span>
                    <div className="flex items-center">
                      <div className="w-48 bg-gray-200 rounded-full h-3 mr-3">
                        <div className="bg-mint-400 h-3 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                      <span className="text-gray-800 font-bold">90g</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Fat</span>
                    <div className="flex items-center">
                      <div className="w-48 bg-gray-200 rounded-full h-3 mr-3">
                        <div className="bg-mint-400 h-3 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                      <span className="text-gray-800 font-bold">52g</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Calories Burned */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Calories Burned</h2>
                <div className="h-40 relative">
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 100 40" className="w-full h-full">
                      <path 
                        d="M0,20 Q10,10 20,15 T40,10 T60,20 T80,15 T100,20" 
                        fill="none" 
                        stroke="#FB923C" 
                        strokeWidth="2"
                      />
                      <path 
                        d="M0,40 L0,20 Q10,10 20,15 T40,10 T60,20 T80,15 T100,20 L100,40 Z" 
                        fill="url(#peachGradient)" 
                        opacity="0.3"
                      />
                      <defs>
                        <linearGradient id="peachGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#FB923C" />
                          <stop offset="100%" stopColor="#FED7AA" stopOpacity="0.1" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute bottom-0 w-full flex justify-between text-xs text-gray-600 px-2">
                    <span>S</span>
                    <span>M</span>
                    <span>T</span>
                    <span>W</span>
                    <span>T</span>
                    <span>F</span>
                    <span>S</span>
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