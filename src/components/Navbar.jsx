import React from "react";
const Navbar = ({ cartCount }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold text-purple-600">DigiTools</a>
          <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-600">
            {["Products","Features","Pricing","Testimonials","FAQ"].map(item => (
              <li key={item}><a href="#" className="hover:text-gray-900 transition-colors">{item}</a></li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>
              )}
            </div>
            <a href="#" className="hidden md:block text-sm font-medium text-gray-700">Login</a>
            <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">Get Started</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;