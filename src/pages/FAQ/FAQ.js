import React, { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  MessageCircle,
  Mail,
  Phone
} from 'lucide-react';
import Section from '../../components/Section';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Container from '../../components/ui/Container';
import Grid from '../../components/ui/Grid';
import Badge from '../../components/ui/Badge';
import Input from '../../components/ui/Input';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const categories = [
    { id: 'all', label: 'All Questions', count: 24 },
    { id: 'getting-started', label: 'Getting Started', count: 6 },
    { id: 'billing', label: 'Billing & Pricing', count: 5 },
    { id: 'features', label: 'Features', count: 7 },
    { id: 'security', label: 'Security', count: 4 },
    { id: 'integrations', label: 'Integrations', count: 2 }
  ];

  const faqs = [
    {
      id: 0,
      category: 'getting-started',
      question: 'How do I get started with FlowTech?',
      answer: 'Getting started with FlowTech is easy! Simply sign up for a free account, complete the onboarding process, and you can start using our platform immediately. We provide guided tutorials and our support team is available to help you set up your workspace.',
      popular: true
    },
    {
      id: 1,
      category: 'billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for enterprise customers. All payments are processed securely through our encrypted payment system.',
      popular: true
    },
    {
      id: 2,
      category: 'features',
      question: 'Can I integrate FlowTech with my existing tools?',
      answer: 'Yes! FlowTech integrates with over 50 popular business tools including Slack, Microsoft Teams, Google Workspace, Salesforce, HubSpot, and many more. We also provide a robust API for custom integrations.',
      popular: true
    },
    {
      id: 3,
      category: 'security',
      question: 'How secure is my data with FlowTech?',
      answer: 'Security is our top priority. We use bank-grade 256-bit SSL encryption, SOC 2 Type II compliance, regular security audits, and follow GDPR guidelines. Your data is stored in secure data centers with 24/7 monitoring.',
      popular: false
    },
    {
      id: 4,
      category: 'billing',
      question: 'Can I change my plan at any time?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately, and billing is prorated accordingly.',
      popular: false
    },
    {
      id: 5,
      category: 'getting-started',
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial with full access to all features. No credit card required to start your trial. You can upgrade to a paid plan at any time during or after the trial period.',
      popular: true
    },
    {
      id: 6,
      category: 'features',
      question: 'What is the difference between plans?',
      answer: 'Our Starter plan includes basic features for small teams, Professional adds advanced analytics and integrations, and Enterprise includes custom features, dedicated support, and unlimited everything.',
      popular: false
    },
    {
      id: 7,
      category: 'billing',
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all new subscriptions. If you\'re not satisfied within the first 30 days, contact our support team for a full refund.',
      popular: false
    },
    {
      id: 8,
      category: 'features',
      question: 'How many team members can I add?',
      answer: 'The number of team members depends on your plan. Starter allows up to 5 members, Professional up to 25 members, and Enterprise offers unlimited team members.',
      popular: false
    },
    {
      id: 9,
      category: 'security',
      question: 'Do you support single sign-on (SSO)?',
      answer: 'Yes, SSO is available on our Professional and Enterprise plans. We support SAML 2.0, OAuth 2.0, and popular identity providers like Okta, Azure AD, and Google Workspace.',
      popular: false
    },
    {
      id: 10,
      category: 'integrations',
      question: 'How do I set up integrations?',
      answer: 'Setting up integrations is simple through our integrations page in your dashboard. Most integrations can be set up with just a few clicks using OAuth authentication.',
      popular: false
    },
    {
      id: 11,
      category: 'getting-started',
      question: 'What kind of support do you provide?',
      answer: 'We provide email support for all plans, live chat for Professional and Enterprise, and dedicated phone support for Enterprise customers. We also have extensive documentation and video tutorials.',
      popular: true
    }
  ];

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularFAQs = faqs.filter(faq => faq.popular);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Section background="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" padding="py-20">
        <Container>
          <div className="text-center">
            <Badge variant="primary" className="mb-4">Help Center</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked
              <span className="gradient-text"> Questions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to common questions about FlowTech. Can't find what you're looking for? 
              Our support team is here to help.
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto mb-8">
              <Input
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={<Search className="w-5 h-5" />}
                className="text-lg py-4"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Contact Support</Button>
              <Button variant="secondary" size="lg">View Documentation</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Popular Questions */}
      {!searchTerm && selectedCategory === 'all' && (
        <Section background="bg-white" padding="py-16">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Questions</h2>
              <p className="text-xl text-gray-600">
                The most frequently asked questions by our users
              </p>
            </div>
            
            <Grid cols={2} gap={6}>
              {popularFAQs.slice(0, 4).map((faq) => (
                <Card 
                  key={faq.id} 
                  padding="p-6" 
                  hover 
                  className="cursor-pointer"
                  onClick={() => toggleItem(faq.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {faq.answer}
                      </p>
                    </div>
                    <div className="ml-4">
                      {openItems.has(faq.id) ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                  
                  {openItems.has(faq.id) && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </Card>
              ))}
            </Grid>
          </Container>
        </Section>
      )}

      {/* Main FAQ Section */}
      <Section background="bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-blue-100 text-blue-700 font-semibold'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{category.label}</span>
                        <Badge variant="default" size="sm">
                          {category.count}
                        </Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ List */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === 'all' ? 'All Questions' : 
                   categories.find(c => c.id === selectedCategory)?.label}
                </h2>
                <div className="text-sm text-gray-500">
                  {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''}
                </div>
              </div>

              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <Card key={faq.id} padding="p-0" className="overflow-hidden">
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-start space-x-3">
                          <HelpCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                              {faq.question}
                            </h3>
                            {faq.popular && (
                              <Badge variant="primary" size="sm">Popular</Badge>
                            )}
                          </div>
                        </div>
                        <div className="ml-4">
                          {openItems.has(faq.id) ? (
                            <ChevronUp className="w-5 h-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      </div>
                    </button>
                    
                    {openItems.has(faq.id) && (
                      <div className="px-6 pb-6">
                        <div className="pl-8 border-l-2 border-blue-200">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>

              {filteredFAQs.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search terms or browse our categories.
                  </p>
                  <Button variant="secondary" onClick={() => setSearchTerm('')}>
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Support */}
      <Section background="bg-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you 
              get the most out of FlowTech.
            </p>
            
            <Grid cols={3} gap={6} className="max-w-4xl mx-auto">
              <Card padding="p-6" hover className="text-center">
                <MessageCircle className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Get instant help from our support team</p>
                <Button variant="secondary" size="sm">Start Chat</Button>
              </Card>
              
              <Card padding="p-6" hover className="text-center">
                <Mail className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Send us a detailed message</p>
                <Button variant="secondary" size="sm">Send Email</Button>
              </Card>
              
              <Card padding="p-6" hover className="text-center">
                <Phone className="w-8 h-8 text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-4">Talk to our experts directly</p>
                <Button variant="secondary" size="sm">Call Now</Button>
              </Card>
            </Grid>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default FAQ;
