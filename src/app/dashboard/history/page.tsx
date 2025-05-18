"use client";

import Link from "next/link";

export default function History() {
  // Current date
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });
  
  const currentDay = today.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
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
            
            <Link href="/dashboard/history" className="flex items-center p-2 bg-peach-100 rounded-xl text-gray-800 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-peach-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <h1 className="text-2xl font-bold text-gray-800 mb-6">History</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Calendar */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">April 2024</h2>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              
              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                <div className="text-gray-600 font-medium">S</div>
                <div className="text-gray-600 font-medium">M</div>
                <div className="text-gray-600 font-medium">T</div>
                <div className="text-gray-600 font-medium">W</div>
                <div className="text-gray-600 font-medium">T</div>
                <div className="text-gray-600 font-medium">F</div>
                <div className="text-gray-600 font-medium">S</div>
              </div>
              
              <div className="grid grid-cols-7 gap-1 text-center">
                {/* Week 1 */}
                <div className="h-10 flex items-center justify-center text-gray-400">30</div>
                <div className="h-10 flex items-center justify-center">1</div>
                <div className="h-10 flex items-center justify-center">2</div>
                <div className="h-10 flex items-center justify-center">3</div>
                <div className="h-10 flex items-center justify-center">4</div>
                <div className="h-10 flex items-center justify-center">5</div>
                <div className="h-10 flex items-center justify-center">6</div>
                
                {/* Week 2 */}
                <div className="h-10 flex items-center justify-center">7</div>
                <div className="h-10 flex items-center justify-center">8</div>
                <div className="h-10 flex items-center justify-center">9</div>
                <div className="h-10 flex items-center justify-center bg-mint-200 rounded-full font-medium">10</div>
                <div className="h-10 flex items-center justify-center">11</div>
                <div className="h-10 flex items-center justify-center">12</div>
                <div className="h-10 flex items-center justify-center">13</div>
                
                {/* Week 3 */}
                <div className="h-10 flex items-center justify-center">14</div>
                <div className="h-10 flex items-center justify-center">15</div>
                <div className="h-10 flex items-center justify-center">16</div>
                <div className="h-10 flex items-center justify-center">17</div>
                <div className="h-10 flex items-center justify-center">18</div>
                <div className="h-10 flex items-center justify-center">19</div>
                <div className="h-10 flex items-center justify-center">20</div>
                
                {/* Week 4 */}
                <div className="h-10 flex items-center justify-center">21</div>
                <div className="h-10 flex items-center justify-center">22</div>
                <div className="h-10 flex items-center justify-center">23</div>
                <div className="h-10 flex items-center justify-center">24</div>
                <div className="h-10 flex items-center justify-center">25</div>
                <div className="h-10 flex items-center justify-center">26</div>
                <div className="h-10 flex items-center justify-center">27</div>
                
                {/* Week 5 */}
                <div className="h-10 flex items-center justify-center">28</div>
                <div className="h-10 flex items-center justify-center">29</div>
                <div className="h-10 flex items-center justify-center">30</div>
                <div className="h-10 flex items-center justify-center text-gray-400">1</div>
                <div className="h-10 flex items-center justify-center text-gray-400">2</div>
                <div className="h-10 flex items-center justify-center text-gray-400">3</div>
                <div className="h-10 flex items-center justify-center text-gray-400">4</div>
              </div>
            </div>
            
            {/* Logged Dates */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">{currentDay}</h2>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Logged Dates</h3>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Thursday, April 18</span>
                  <span className="bg-peach-300 text-white px-4 py-1 rounded-full font-medium">1550 cal</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Wednesday, April 17</span>
                  <span className="bg-peach-300 text-white px-4 py-1 rounded-full font-medium">1920 cal</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Tuesday, April 16</span>
                  <span className="bg-peach-300 text-white px-4 py-1 rounded-full font-medium">1680 cal</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Monday, April 15</span>
                  <span className="bg-peach-300 text-white px-4 py-1 rounded-full font-medium">1420 cal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}