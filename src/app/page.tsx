import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="18" rx="2"></rect>
                  <path d="M8 2h8a2 2 0 0 1 2 2v2H6V4a2 2 0 0 1 2-2z"></path>
                  <line x1="8" y1="10" x2="16" y2="10"></line>
                  <line x1="8" y1="14" x2="16" y2="14"></line>
                  <line x1="8" y1="18" x2="16" y2="18"></line>
                </svg>
                NutriLog
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="px-5 py-2 text-white bg-green-600 rounded-md font-medium hover:bg-green-700 transition-colors">
                Sign In
              </Link>
              <Link href="/sign-up" className="px-5 py-2 text-green-600 border border-green-600 rounded-md font-medium hover:bg-green-50 transition-colors">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Track your meals, <span className="text-green-600">manage your health</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            NutriLog helps you log your daily food intake, track calories, and achieve your nutrition goals with ease.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/login" className="px-8 py-3 text-white bg-green-600 rounded-md font-medium hover:bg-green-700 transition-colors">
              Get Started
            </Link>
            <Link href="/about" className="px-8 py-3 text-green-600 border border-green-600 rounded-md font-medium hover:bg-green-50 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* App Screenshot */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-lg shadow-2xl overflow-hidden">
          <Image 
            src="/assets/meal-tracking.jpg" 
            alt="Meal tracking app interface" 
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Features that make tracking easy
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-green-600 text-2xl mb-4">📝</div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Easy Meal Logging</h3>
              <p className="text-gray-600">
                Quickly log your meals with our intuitive interface and extensive food database.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-green-600 text-2xl mb-4">📊</div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Calorie Tracking</h3>
              <p className="text-gray-600">
                Automatically calculate and track your daily calorie intake and nutritional breakdown.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-green-600 text-2xl mb-4">📈</div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Progress Reports</h3>
              <p className="text-gray-600">
                View daily summaries and track your progress over time with detailed reports.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">NutriLog</h3>
              <p className="mt-2 text-gray-300">Your personal nutrition assistant</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                <li><Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} NutriLog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
