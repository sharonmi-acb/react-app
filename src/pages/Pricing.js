import React, { useState } from 'react';
import { Check, X, Star, ArrowRight, Shield, Zap, Users, TrendingUp } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        "Up to 5 team members",
        "5GB storage",
        "Basic analytics",
        "Email support",
        "Mobile app access",
        "Basic integrations"
      ],
      notIncluded: [
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "Advanced security"
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "Professional",
      description: "Ideal for growing teams and businesses",
      monthlyPrice: 79,
      annualPrice: 65,
      features: [
        "Up to 25 team members",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "Mobile app access",
        "Custom integrations",
        "Team collaboration tools",
        "Advanced reporting"
      ],
      notIncluded: [
        "Enterprise security",
        "Dedicated account manager"
      ],
      popular: true,
      color: "purple"
    },
    {
      name: "Enterprise",
      description: "For large organizations with advanced needs",
      monthlyPrice: 149,
      annualPrice: 125,
      features: [
        "Unlimited team members",
        "Unlimited storage",
        "Enterprise analytics",
        "24/7 phone support",
        "Mobile app access",
        "Custom integrations",
        "Advanced security",
        "Dedicated account manager",
        "Custom training",
        "SLA guarantee"
      ],
      notIncluded: [],
      popular: false,
      color: "green"
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, all plans come with a 14-day free trial. No credit card required to get started."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "You can cancel your subscription at any time. Your access will continue until the end of your current billing period."
    },
    {
      question: "Do you offer discounts for nonprofits?",
      answer: "Yes, we offer special pricing for qualified nonprofit organizations. Contact our sales team for more information."
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Product Manager",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      content: "FlowTech has transformed how our team collaborates. The Professional plan gives us everything we need.",
      rating: 5
    },
    {
      name: "Sarah Kim",
      role: "CEO",
      company: "StartupX",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      content: "Started with the Starter plan and upgraded as we grew. The pricing is transparent and fair.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
              💰 Simple, Transparent Pricing
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Choose the Perfect
              <span className="gradient-text"> Plan</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Start free and scale as you grow. No hidden fees, no complex pricing tiers.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-lg ${!isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isAnnual ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                Annual
              </span>
              {isAnnual && (
                <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded-full">
                  Save 20%
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl p-8 ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /month {isAnnual ? '(billed annually)' : ''}
                    </span>
                  </div>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Start Free Trial
                  </button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <h4 className="font-semibold text-gray-900 mb-4 mt-6">Not included:</h4>
                      {plan.notIncluded.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          <span className="text-gray-500">{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Compare Plans
            </h2>
            <p className="text-xl text-gray-600">
              Detailed feature comparison across all plans
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Features</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Starter</th>
                  <th className="text-center py-4 px-6 font-semibold text-purple-600">Professional</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700">Team Members</td>
                  <td className="py-4 px-6 text-center">Up to 5</td>
                  <td className="py-4 px-6 text-center">Up to 25</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700">Storage</td>
                  <td className="py-4 px-6 text-center">5GB</td>
                  <td className="py-4 px-6 text-center">100GB</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700">Analytics</td>
                  <td className="py-4 px-6 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700">Priority Support</td>
                  <td className="py-4 px-6 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700">Custom Integrations</td>
                  <td className="py-4 px-6 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700">Dedicated Support</td>
                  <td className="py-4 px-6 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using FlowTech to transform their business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
