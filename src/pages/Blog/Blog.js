import React, { useState } from "react";
import {
  Search,
  Calendar,
  User,
  Tag,
  ArrowRight,
  Clock,
  Eye,
  Filter,
} from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import Grid from "../../components/ui/Grid";
import Badge from "../../components/ui/Badge";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "technology", label: "Technology" },
    { value: "business", label: "Business" },
    { value: "tutorials", label: "Tutorials" },
    { value: "updates", label: "Product Updates" },
    { value: "insights", label: "Industry Insights" },
  ];

  const featuredPost = {
    id: 1,
    title: "The Future of SaaS: AI-Powered Business Automation",
    excerpt:
      "Discover how artificial intelligence is revolutionizing the SaaS industry and what it means for your business operations.",
    content:
      "In this comprehensive guide, we explore the cutting-edge AI technologies that are reshaping how businesses operate...",
    author: "Sarah Johnson",
    date: "2025-01-15",
    readTime: "8 min read",
    views: "2.4k",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: true,
  };

  const blogPosts = [
    {
      id: 2,
      title: "10 Best Practices for SaaS Customer Onboarding",
      excerpt:
        "Learn how to create an exceptional onboarding experience that converts trial users into loyal customers.",
      author: "Michael Chen",
      date: "2025-01-10",
      readTime: "6 min read",
      views: "1.8k",
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Building Scalable APIs: A Developer's Guide",
      excerpt:
        "Essential tips and best practices for creating APIs that can handle millions of requests.",
      author: "Emily Rodriguez",
      date: "2025-01-08",
      readTime: "12 min read",
      views: "3.2k",
      category: "Tutorials",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "FlowTech 3.0: What's New and Improved",
      excerpt:
        "Explore the latest features and improvements in our newest platform release.",
      author: "David Kim",
      date: "2025-01-05",
      readTime: "5 min read",
      views: "4.1k",
      category: "Product Updates",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Data Security in the Cloud: A Complete Guide",
      excerpt:
        "Everything you need to know about keeping your data secure in cloud-based applications.",
      author: "Sarah Johnson",
      date: "2025-01-03",
      readTime: "10 min read",
      views: "2.7k",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Remote Team Management: Tools and Strategies",
      excerpt:
        "Proven strategies for managing distributed teams effectively in the modern workplace.",
      author: "Michael Chen",
      date: "2025-01-01",
      readTime: "7 min read",
      views: "1.9k",
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "Machine Learning for Business Analytics: Getting Started",
      excerpt:
        "A beginner-friendly guide to implementing machine learning in your business analytics workflow.",
      author: "Dr. Lisa Park",
      date: "2024-12-28",
      readTime: "9 min read",
      views: "2.3k",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      title: "Customer Success Metrics That Actually Matter",
      excerpt:
        "Learn which KPIs to track for meaningful customer success insights and business growth.",
      author: "Alex Thompson",
      date: "2024-12-25",
      readTime: "6 min read",
      views: "1.7k",
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 9,
      title: "Building Responsive Web Applications with React",
      excerpt:
        "Master the art of creating beautiful, responsive interfaces that work on any device.",
      author: "Emily Rodriguez",
      date: "2024-12-22",
      readTime: "11 min read",
      views: "3.8k",
      category: "Tutorials",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 10,
      title: "The Rise of No-Code Platforms in Enterprise",
      excerpt:
        "How no-code solutions are transforming enterprise software development and what it means for IT teams.",
      author: "Robert Chen",
      date: "2024-12-20",
      readTime: "8 min read",
      views: "2.1k",
      category: "Industry Insights",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 11,
      title: "Advanced Authentication Strategies for SaaS",
      excerpt:
        "Implement robust authentication systems including SSO, MFA, and OAuth for your SaaS application.",
      author: "Sarah Johnson",
      date: "2024-12-18",
      readTime: "13 min read",
      views: "2.9k",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 12,
      title: "Scaling Your Startup: From MVP to Enterprise",
      excerpt:
        "Real-world strategies for scaling your startup infrastructure and team as you grow.",
      author: "David Kim",
      date: "2024-12-15",
      readTime: "10 min read",
      views: "4.5k",
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const getCategoryBadgeVariant = (category) => {
    const variants = {
      Technology: "primary",
      Business: "success",
      Tutorials: "warning",
      "Product Updates": "purple",
      "Industry Insights": "default",
    };
    return variants[category] || "default";
  };

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory ||
      selectedCategory === "all" ||
      post.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Section
        background="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
        padding="py-20"
      >
        <Container>
          <div className="text-center">
            <Badge variant="primary" className="mb-4">
              FlowTech Blog
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Insights, Updates &
              <span className="gradient-text"> Expert Knowledge</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay ahead of the curve with our latest thoughts on technology,
              business strategy, and industry trends. Learn from our experts and
              grow your business.
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    icon={<Search className="w-5 h-5" />}
                  />
                </div>
                <div className="sm:w-48">
                  <Select
                    options={categories}
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    placeholder="Filter by category"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Post */}
      <Section background="bg-white" padding="py-16">
        <Container>
          <div className="mb-12">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                Featured Article
              </span>
            </div>

            <Card className="overflow-hidden" padding="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant={getCategoryBadgeVariant(featuredPost.category)}
                    >
                      {featuredPost.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>{featuredPost.views}</span>
                    </div>
                  </div>

                  <Button icon={<ArrowRight className="w-4 h-4" />}>
                    Read Full Article
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Blog Posts Grid */}
      <Section background="bg-gray-50">
        <Container>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Latest Articles
            </h2>
            <div className="text-sm text-gray-500">
              Showing {filteredPosts.length} of {blogPosts.length} articles
            </div>
          </div>

          <Grid cols={3} gap={8}>
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                hover
                className="overflow-hidden"
                padding="p-0"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant={getCategoryBadgeVariant(post.category)}>
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </Grid>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="secondary" size="lg">
              Load More Articles
            </Button>
          </div>
        </Container>
      </Section>

      {/* Newsletter Signup */}
      <Section background="bg-gradient-to-r from-blue-600 to-purple-600">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Stay Updated with Our Latest Posts
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss an important update,
              article, or insight from the FlowTech team.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                placeholder="Enter your email"
                className="flex-1 bg-white"
              />
              <Button variant="outline">Subscribe</Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Blog;
