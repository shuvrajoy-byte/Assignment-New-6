import React from "react";
const plans = [
  {
    name: 'Starter', subtitle: 'Perfect for getting started', price: 0, period: 'Month',
    features: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'],
    cta: 'Get Started Free', highlight: false,
  },
  {
    name: 'Pro', subtitle: 'Best for professionals', price: 29, period: 'Month',
    features: ['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'],
    cta: 'Start Pro Trial', highlight: true, badge: 'Most Popular',
  },
  {
    name: 'Enterprise', subtitle: 'For teams and businesses', price: 99, period: 'Month',
    features: ['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'],
    cta: 'Contact Sales', highlight: false,
  },
];

const Pricing = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 text-sm">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {plans.map((plan) => (
          <div key={plan.name} className={`rounded-2xl p-8 relative ${plan.highlight ? 'bg-purple-600 shadow-2xl scale-105' : 'bg-white border border-gray-200 shadow-sm'}`}>
            {plan.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                {plan.badge}
              </span>
            )}
            <p className={`font-bold text-lg mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.name}</p>
            <p className={`text-sm mb-6 ${plan.highlight ? 'text-purple-200' : 'text-gray-400'}`}>{plan.subtitle}</p>
            <div className="mb-6">
              <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>${plan.price}</span>
              <span className={`text-sm ml-1 ${plan.highlight ? 'text-purple-200' : 'text-gray-400'}`}>/{plan.period}</span>
            </div>
            <ul className="flex flex-col gap-3 mb-8">
              {plan.features.map((f, i) => (
                <li key={i} className={`flex items-center gap-2 text-sm ${plan.highlight ? 'text-purple-100' : 'text-gray-600'}`}>
                  <svg className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-purple-200' : 'text-purple-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-xl font-semibold transition-colors ${plan.highlight ? 'bg-white text-purple-600 hover:bg-purple-50' : 'bg-purple-600 text-white hover:bg-purple-700'}`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;