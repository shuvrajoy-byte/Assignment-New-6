import React from "react";
import bannerImg from "../assets/banner.png";
import playImg from "../assets/Play.png";

const Banner = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 text-purple-600 text-xs font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Supercharge Your<br />
            <span>Digital Workflow</span>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-7 py-3 rounded-full transition-colors">
              Explore Products
            </button>
            <button className="flex items-center gap-2 border-2 border-gray-300 bg-white text-gray-700 font-semibold px-7 py-3 rounded-full hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300">
              <img src={playImg} alt="play" className="w-4 h-4" />
              Watch Demo
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={bannerImg} alt="Banner" className="w-full max-w-md object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Banner;