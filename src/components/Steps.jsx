import React from "react";
const steps = [
  { number: '01', icon: '/assets/user.png', title: 'Create Account', description: 'Sign up for free in seconds. No credit card required to get started.' },
  { number: '02', icon: '/assets/package.png', title: 'Choose Products', description: 'Browse our catalog and select the tools that fit your needs.' },
  { number: '03', icon: '/assets/rocket.png', title: 'Start Creating', description: 'Download and start using your premium tools immediately.' },
];

const Steps = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Get Started In 3 Steps</h2>
        <p className="text-gray-500 text-sm">Start using premium digital tools in minutes, not hours.</p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div key={step.number} className="bg-white rounded-2xl p-8 shadow-sm text-center relative">
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
              {step.number}
            </span>
            <div className="flex justify-center mb-5">
              <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center">
                <img src={step.icon} alt={step.title} className="w-8 h-8 object-contain" />
              </div>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;