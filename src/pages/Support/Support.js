import React, { useState } from 'react';
import { 
  Search, 
  Book, 
  MessageCircle, 
  FileText, 
  Video, 
  Download,
  ExternalLink,
  ChevronRight,
  HelpCircle,
  Phone,
  Mail,
  Clock
} from 'lucide-react';
import Section from '../../components/Section';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Container from '../../components/ui/Container';
import Grid from '../../components/ui/Grid';
import Badge from '../../components/ui/Badge';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';

const Support = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'getting-started', label: 'Getting Started' },
    { value: 'account', label: 'Account Management' },
    { value: 'billing', label: 'Billing & Pricing' },
    { value: 'features', label: 'Features & Tools' },
    { value: 'troubleshooting', label: 'Troubleshooting' },
    { value: 'api', label: 'API Documentation' },
    { value: 'security', label: 'Security & Privacy' }
  ];

  const supportArticles = [
    {
      id: 1,
      title: 'Getting Started with FlowTech',
      excerpt: 'A comprehensive guide to setting up your account and getting started with our platform.',
      category: 'getting-started',
      type: 'guide',
      readTime: '5 min read',
      views: '12.3k',
      helpful: 245,
      lastUpdated: '2025-01-15'
    },
    {
      id: 2,
      title: 'How to Set Up Single Sign-On (SSO)',
      excerpt: 'Step-by-step instructions for configuring SSO with popular identity providers.',
      category: 'account',
      type: 'tutorial',
      readTime: '8 min read',
      views: '8.7k',
      helpful: 189,
      lastUpdated: '2025-01-12'
    },
    {
      id: 3,
      title: 'Understanding Your Billing Dashboard',
      excerpt: 'Learn how to manage your subscription, view usage, and update payment methods.',
      category: 'billing',
      type: 'guide',
      readTime: '4 min read',
      views: '15.2k',
      helpful: 312,
      lastUpdated: '2025-01-10'
    },
    {
      id: 4,
      title: 'API Authentication and Rate Limits',
      excerpt: 'Everything you need to know about authenticating with our API and rate limiting.',
      category: 'api',
      type: 'documentation',
      readTime: '6 min read',
      views: '9.4k',
      helpful: 156,
      lastUpdated: '2025-01-08'
    },
    {
      id: 5,
      title: 'Troubleshooting Connection Issues',
      excerpt: 'Common connection problems and their solutions to keep your workflow uninterrupted.',
      category: 'troubleshooting',
      type: 'troubleshooting',
      readTime: '7 min read',
      views: '6.8k',
      helpful: 134,
      lastUpdated: '2025-01-05'
    },
    {
      id: 6,
      title: 'Advanced Dashboard Customization',
      excerpt: 'Customize your dashboard layout and create custom widgets for better productivity.',
      category: 'features',
      type: 'tutorial',
      readTime: '10 min read',
      views: '5.9k',
      helpful: 98,
      lastUpdated: '2025-01-03'
    },
    {
      id: 7,
      title: 'Data Export and Backup Options',
      excerpt: 'Learn about available data export formats and automated backup configurations.',
      category: 'features',
      type: 'guide',
      readTime: '5 min read',
      views: '7.2k',
      helpful: 167,
      lastUpdated: '2025-01-01'
    },
    {
      id: 8,
      title: 'Security Best Practices',
      excerpt: 'Essential security measures to protect your account and data.',
      category: 'security',
      type: 'guide',
      readTime: '9 min read',
      views: '11.1k',
      helpful: 289,
      lastUpdated: '2024-12-28'
    },
    {
      id: 9,
      title: 'Managing Team Permissions',
      excerpt: 'Set up role-based access control and manage team member permissions.',
      category: 'account',
      type: 'tutorial',
      readTime: '6 min read',
      views: '8.3k',
      helpful: 178,
      lastUpdated: '2024-12-25'
    },
    {
      id: 10,
      title: 'Webhook Configuration Guide',
      excerpt: 'Configure webhooks to receive real-time notifications about events in your account.',
      category: 'api',
      type: 'documentation',
      readTime: '8 min read',
      views: '4.7k',
      helpful: 92,
      lastUpdated: '2024-12-22'
    },
    {
      id: 11,
      title: 'Mobile App Setup and Features',
      excerpt: 'Get the most out of the FlowTech mobile app with this comprehensive setup guide.',
      category: 'getting-started',
      type: 'guide',
      readTime: '4 min read',
      views: '6.5k',
      helpful: 145,
      lastUpdated: '2024-12-20'
    },
    {
      id: 12,
      title: 'Upgrading and Downgrading Plans',
      excerpt: 'How to change your subscription plan and what happens to your data during transitions.',
      category: 'billing',
      type: 'guide',
      readTime: '3 min read',
      views: '9.8k',
      helpful: 234,
      lastUpdated: '2024-12-18'
    }
  ];

  const contactOptions = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Available 24/7',
      icon: MessageCircle,
      action: 'Start Chat',
      variant: 'primary'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 2 hours',
      icon: Mail,
      action: 'Send Email',
      variant: 'secondary'
    },
    {
      title: 'Phone Support',
      description: 'Talk to our experts directly',
      availability: 'Mon-Fri, 9AM-6PM EST',
      icon: Phone,
      action: 'Call Now',
      variant: 'outline'
    }
  ];

  const getTypeIcon = (type) => {
    const icons = {
      'guide': Book,
      'tutorial': Video,
      'documentation': FileText,
      'troubleshooting': HelpCircle
    };
    return icons[type] || FileText;
  };

  const getTypeBadge = (type) => {
    const variants = {
      'guide': 'primary',
      'tutorial': 'success',
      'documentation': 'warning',
      'troubleshooting': 'danger'
    };
    return variants[type] || 'default';
  };

  const filteredArticles = supportArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === 'all' || 
                           article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Section background="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" padding="py-20">
        <Container>
          <div className="text-center">
            <Badge variant="primary" className="mb-4">Support Center</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              How can we
              <span className="gradient-text"> help you today?</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to your questions, browse our knowledge base, or get in touch 
              with our support team for personalized assistance.
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto mb-8">
              <Input
                placeholder="Search for help articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={<Search className="w-5 h-5" />}
                size="lg"
              />
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {contactOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Card key={index} className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                    <p className="text-gray-600 mb-2">{option.description}</p>
                    <p className="text-sm text-blue-600 mb-4">{option.availability}</p>
                    <Button variant={option.variant} size="sm" className="w-full">
                      {option.action}
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Knowledge Base */}
      <Section padding="py-16">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <Card className="p-6 sticky top-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <Select
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                  options={categories}
                  className="mb-6"
                />
                
                <div className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedCategory === category.value
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </Card>
            </div>

            {/* Articles */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Knowledge Base
                  <span className="ml-2 text-sm font-normal text-gray-500">
                    ({filteredArticles.length} articles)
                  </span>
                </h2>
              </div>

              <div className="space-y-4">
                {filteredArticles.map((article) => {
                  const TypeIcon = getTypeIcon(article.type);
                  return (
                    <Card key={article.id} className="p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                              <TypeIcon className="w-4 h-4 text-gray-600" />
                            </div>
                            <Badge variant={getTypeBadge(article.type)} size="sm">
                              {article.type}
                            </Badge>
                          </div>
                          
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                            {article.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4">{article.excerpt}</p>
                          
                          <div className="flex items-center gap-6 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {article.readTime}
                            </span>
                            <span>{article.views} views</span>
                            <span>{article.helpful} found helpful</span>
                            <span>Updated {article.lastUpdated}</span>
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm">
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-600">Try adjusting your search terms or browse different categories.</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Additional Resources */}
      <Section background="bg-white" padding="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore more ways to get help and stay updated with FlowTech
            </p>
          </div>

          <Grid cols={3} gap={6}>
            <Card className="p-6 text-center">
              <Video className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">
                Watch step-by-step video guides for common tasks and advanced features.
              </p>
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                Watch Videos
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <Download className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Downloads</h3>
              <p className="text-gray-600 mb-4">
                Access our mobile apps, desktop clients, and helpful resources.
              </p>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download Center
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <MessageCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Forum</h3>
              <p className="text-gray-600 mb-4">
                Connect with other users, share tips, and get help from the community.
              </p>
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                Join Forum
              </Button>
            </Card>
          </Grid>
        </Container>
      </Section>
    </div>
  );
};

export default Support;
