import React from "react";
const Footer = () => {
  return (
    <footer>
      {/* CTA */}
      <div className="bg-purple-600 py-16 px-4 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-3">Ready To Transform Your Workflow?</h2>
        <p className="text-purple-200 text-sm mb-2">Join thousands of professionals who are already using Digitools to work smarter.</p>
        <p className="text-purple-200 text-sm mb-8">Start your free trial today.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full hover:bg-purple-50 transition-colors">Explore Products</button>
          <button className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors">View Pricing</button>
        </div>
        <p className="text-purple-300 text-xs mt-6">14-day free trial • No credit card required • Cancel anytime</p>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-white font-bold text-xl mb-3">DigiTools</h3>
              <p className="text-sm leading-relaxed">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="flex flex-col gap-2 text-sm">
                {['Features','Pricing','Templates','Integrations'].map(i => (
                  <li key={i}><a href="#" className="hover:text-white transition-colors">{i}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="flex flex-col gap-2 text-sm">
                {['About','Blog','Careers','Press'].map(i => (
                  <li key={i}><a href="#" className="hover:text-white transition-colors">{i}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="flex flex-col gap-2 text-sm">
                {['Documentation','Help Center','Community','Contact'].map(i => (
                  <li key={i}><a href="#" className="hover:text-white transition-colors">{i}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Social Links</h4>
              <div className="flex gap-3">
                {[
                  <path key="ig" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>,
                  <path key="fb" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>,
                  <path key="tw" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                ].map((path, idx) => (
                  <a key={idx} href="#" className="w-8 h-8 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">{path}</svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2026 Digitools. All rights reserved.</p>
            <div className="flex gap-6">
              {['Privacy Policy','Terms of Service','Cookies'].map(i => (
                <a key={i} href="#" className="hover:text-white transition-colors">{i}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;