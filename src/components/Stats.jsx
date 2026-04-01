import React from "react";
const Stats = () => {
  return (
    <section className="py-10">
      <div className="w-full bg-purple-600 py-12 px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-0 sm:divide-x divide-purple-400">
          <div className="text-center px-16">
            <p className="text-4xl font-extrabold text-white">50K+</p>
            <p className="text-purple-200 mt-1 text-sm uppercase tracking-widest font-medium">Active Users</p>
          </div>
          <div className="text-center px-16">
            <p className="text-4xl font-extrabold text-white">200+</p>
            <p className="text-purple-200 mt-1 text-sm uppercase tracking-widest font-medium">Premium Tools</p>
          </div>
          <div className="text-center px-16">
            <p className="text-4xl font-extrabold text-white">4.9</p>
            <p className="text-purple-200 mt-1 text-sm uppercase tracking-widest font-medium">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Stats;