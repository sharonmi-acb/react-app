import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
} from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Section from "../components/Section";
import Badge from "../components/ui/Badge";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        category: "general",
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Get in touch via email for detailed inquiries",
      contact: "hello@flowtech.com",
      action: "Send Email",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Speak directly with our support team",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Chat with us in real-time for quick support",
      contact: "Available 24/7",
      action: "Start Chat",
    },
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Market Street, Suite 400\nSan Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@flowtech.com",
    },
    {
      city: "New York",
      address: "456 Broadway, Floor 15\nNew York, NY 10013",
      phone: "+1 (555) 234-5678",
      email: "ny@flowtech.com",
    },
    {
      city: "London",
      address: "789 Oxford Street\nLondon W1C 1JQ, UK",
      phone: "+44 20 7946 0958",
      email: "london@flowtech.com",
    },
  ];

  const faqs = [
    {
      question: "How quickly can I get started?",
      answer:
        "You can start using FlowTech immediately with our 14-day free trial. Setup takes less than 5 minutes.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes! We provide 24/7 customer support via email, chat, and phone for all our customers.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Absolutely. You can cancel your subscription at any time with no cancellation fees.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use enterprise-grade security with 256-bit encryption and are SOC 2 compliant.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Section background="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Section.Header
          badge={<Badge variant="primary">📞 Get in Touch</Badge>}
          title={
            <>
              Contact Our
              <span className="gradient-text"> Expert Team</span>
            </>
          }
          subtitle="Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible."
        />
      </Section>

      {/* Contact Methods */}
      <Section background="bg-white">
        <Section.Header
          title="Multiple Ways to Reach Us"
          subtitle="Choose the contact method that works best for you"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <Card key={index} hover padding="p-8" className="text-center">
              <div className="text-blue-500 flex justify-center mb-4">
                {method.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {method.title}
              </h3>
              <p className="text-gray-600 mb-4">{method.description}</p>
              <p className="font-semibold text-gray-900 mb-4">
                {method.contact}
              </p>
              <Button variant="secondary" size="sm">
                {method.action}
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Form */}
      <Section background="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <Card padding="p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    name="category"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Brief description of your inquiry"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                  icon={<Send className="w-4 h-4" />}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Our Offices
              </h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} padding="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {office.city}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                        <span className="text-gray-600 whitespace-pre-line">
                          {office.address}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">{office.email}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Business Hours
              </h3>
              <Card padding="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-900 font-medium">
                    Customer Support
                  </span>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <Badge variant="success" size="sm">
                        24/7
                      </Badge>
                      <span className="text-sm text-gray-600">
                        Emergency support available
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="bg-white">
        <Section.Header
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <Card key={index} padding="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Don't see your question here?</p>
          <Button variant="secondary">View All FAQs</Button>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
