import React from 'react';
import { 
  Zap, 
  Shield, 
  Users, 
  TrendingUp, 
  Brain, 
  Globe, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Play
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Section from '../components/Section';
import FeatureIcon from '../components/FeatureIcon';

const Features = () => {
  const mainFeatures = [
    {
      icon: <Brain className="w-12 h-12 text-purple-500" />,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms provide intelligent insights and predictive analytics to help you make data-driven decisions.",
      benefits: ["Predictive forecasting", "Automated insights", "Smart recommendations", "Anomaly detection"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption, multi-factor authentication, and compliance with industry standards.",
      benefits: ["256-bit encryption", "SOC 2 compliance", "GDPR ready", "Multi-factor auth"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Team Collaboration",
      description: "Seamless collaboration tools that bring your team together, whether they're in the office or working remotely.",
      benefits: ["Real-time editing", "Video conferencing", "Task management", "File sharing"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const additionalFeatures = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Lightning Performance",
      description: "Optimized for speed with global CDN and edge computing"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Global Scale",
      description: "Deployed across 150+ countries with 99.9% uptime"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support and monitoring"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Advanced Reporting",
      description: "Comprehensive analytics and customizable dashboards"
    }
  ];

  const integrations = [
    { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
    { name: "Microsoft", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg" },
    { name: "Google", logo: "https://cdn.worldvectorlogo.com/logos/google-icon.svg" },
    { name: "Salesforce", logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" },
    { name: "Zoom", logo: "https://cdn.worldvectorlogo.com/logos/zoom-communications-logo.svg" },
    { name: "Dropbox", logo: "https://cdn.worldvectorlogo.com/logos/dropbox-1.svg" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Section background="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Section.Header
          badge={<Badge variant="primary">✨ Powerful Features for Modern Teams</Badge>}
          title={
            <>
              Everything You Need to
              <span className="gradient-text"> Succeed</span>
            </>
          }
          subtitle="Discover the comprehensive suite of features designed to streamline your workflow, enhance collaboration, and drive business growth."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          <div className="lg:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
              alt="Features Overview"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
          <div className="space-y-6">
            <Card padding="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">50+ Integrations</h3>
              <p className="text-gray-600">Connect with your favorite tools seamlessly</p>
            </Card>
            <Card padding="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Sync</h3>
              <p className="text-gray-600">Keep your data synchronized across all devices</p>
            </Card>
            <Card padding="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Automation</h3>
              <p className="text-gray-600">Automate repetitive tasks and workflows</p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Main Features */}
      <Section background="bg-white">
        <div className="space-y-24">
          {mainFeatures.map((feature, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  {feature.icon}
                  <h2 className="text-3xl font-bold text-gray-900">{feature.title}</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button icon={<ArrowRight className="w-4 h-4" />}>
                  Learn More
                </Button>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-2xl shadow-xl w-full h-80 object-cover card-hover"
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Additional Features Grid */}
      <Section background="bg-gray-50">
        <Section.Header
          title="More Powerful Features"
          subtitle="Additional capabilities that make FlowTech the complete solution"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalFeatures.map((feature, index) => (
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

      {/* Integrations Section */}
      <Section background="bg-white">
        <Section.Header
          title="Seamless Integrations"
          subtitle="Connect FlowTech with your existing tools and workflows"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {integrations.map((integration, index) => (
            <Card key={index} hover padding="p-6" className="bg-gray-50">
              <img
                src={integration.logo}
                alt={integration.name}
                className="h-12 w-auto mx-auto"
              />
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="secondary">
            View All Integrations
          </Button>
        </div>
      </Section>

      {/* Demo CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            See FlowTech in Action
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the power of our features with a personalized demo tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" icon={<Play className="w-5 h-5" />}>
              Watch Demo
            </Button>
            <Button variant="outline" size="lg">
              Request Custom Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
