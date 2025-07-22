import React from 'react';
import { ArrowRight, Play, Star, CheckCircle, Users, TrendingUp, Shield, Zap } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Section from '../components/Section';
import TestimonialCard from '../components/TestimonialCard';
import FeatureIcon from '../components/FeatureIcon';

const Home = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Lightning Fast",
      description: "Optimize your workflow with our ultra-fast processing engine"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Team Collaboration",
      description: "Seamless collaboration tools for distributed teams"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: "Analytics & Insights",
      description: "Real-time analytics to drive data-informed decisions"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      content: "FlowTech transformed our business operations. We've seen a 40% increase in productivity since implementation.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateCorp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      content: "The integration was seamless and the support team is exceptional. Highly recommended for any growing business.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager, GrowthCo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      content: "FlowTech's analytics dashboard gives us insights we never had before. It's been a game-changer for our decision making.",
      rating: 5
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
    { number: "150+", label: "Countries" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  🚀 New: AI-Powered Analytics Now Available
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Transform Your
                  <span className="gradient-text"> Business</span>
                  <br />
                  with FlowTech
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Streamline operations, boost productivity, and scale your business with our cutting-edge SaaS platform designed for modern enterprises.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Get Started Free
                </Button>
                <Button variant="secondary" size="lg" icon={<Play className="w-5 h-5" />}>
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80`}
                      alt={`User ${i}`}
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Trusted by 10,000+ companies</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Dashboard Preview"
                  className="rounded-2xl shadow-2xl animate-float"
                />
              </div>
              <div className="absolute top-20 -left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-40 -right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Section background="bg-gray-50">
        <Section.Header
          title="Powerful Features for Modern Businesses"
          subtitle="Everything you need to streamline your operations, boost productivity, and scale your business efficiently."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} hover padding="p-8">
              <FeatureIcon
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section background="bg-white">
        <Section.Header
          title="What Our Customers Say"
          subtitle="Don't just take our word for it - hear from our satisfied customers"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using FlowTech to streamline their operations and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
