import React from "react";
import {
  Users,
  Target,
  Award,
  Globe,
  Heart,
  Zap,
  Shield,
  TrendingUp,
  Star,
  MapPin,
  Mail,
  Linkedin,
} from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import Grid from "../../components/ui/Grid";
import Badge from "../../components/ui/Badge";

const About = () => {
  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "99.9%", label: "Uptime" },
    { number: "50+", label: "Countries" },
    { number: "24/7", label: "Support" },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Customer First",
      description:
        "We put our customers at the heart of everything we do, ensuring their success is our priority.",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Trust & Security",
      description:
        "We maintain the highest standards of security and transparency in all our operations.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "Growth Mindset",
      description:
        "We believe in continuous learning and improvement, both for ourselves and our clients.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Former VP of Engineering at TechCorp with 15+ years of experience in SaaS.",
      linkedin: "#",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Ex-Google engineer specializing in scalable cloud architecture and AI.",
      linkedin: "#",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Award-winning designer with expertise in user experience and interface design.",
      linkedin: "#",
    },
    {
      name: "David Kim",
      role: "VP of Sales",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Sales leader with a proven track record of building high-performing teams.",
      linkedin: "#",
    },
  ];

  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description:
        "FlowTech was born with a vision to revolutionize business operations through technology.",
    },
    {
      year: "2021",
      title: "First Product Launch",
      description:
        "Launched our flagship SaaS platform with 100 initial customers.",
    },
    {
      year: "2022",
      title: "Series A Funding",
      description:
        "Raised $10M in Series A funding to accelerate growth and development.",
    },
    {
      year: "2023",
      title: "Global Expansion",
      description:
        "Expanded operations to Europe and Asia, serving customers in 50+ countries.",
    },
    {
      year: "2024",
      title: "AI Integration",
      description:
        "Integrated advanced AI capabilities across our platform suite.",
    },
    {
      year: "2025",
      title: "Market Leader",
      description:
        "Recognized as the leading SaaS solution in our category with 10,000+ customers.",
    },
  ];

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
              About FlowTech
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Building the Future of
              <span className="gradient-text"> Business Technology</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're a passionate team of innovators dedicated to empowering
              businesses worldwide with cutting-edge SaaS solutions that drive
              growth, efficiency, and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Join Our Team</Button>
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section background="bg-white" padding="py-16">
        <Container>
          <Grid cols={4}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section background="bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving innovation and excellence in everything we do
            </p>
          </div>

          <Grid cols={2} gap={8}>
            <Card padding="p-8" hover>
              <Target className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses of all sizes with intelligent, scalable
                SaaS solutions that streamline operations, boost productivity,
                and drive sustainable growth in the digital age.
              </p>
            </Card>

            <Card padding="p-8" hover>
              <Globe className="w-12 h-12 text-purple-500 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become the world's most trusted technology partner,
                transforming how businesses operate and succeed through
                innovative, user-centric solutions that create lasting value.
              </p>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Values */}
      <Section background="bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <Grid cols={2} gap={8}>
            {values.map((value, index) => (
              <Card key={index} padding="p-8" hover>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Team */}
      <Section background="bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The brilliant minds behind FlowTech's success
            </p>
          </div>

          <Grid cols={2} gap={8}>
            {team.map((member, index) => (
              <Card key={index} padding="p-8" hover>
                <div className="flex items-start space-x-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <a
                      href={member.linkedin}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700"
                      aria-label={`Connect with ${member.name} on LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Timeline */}
      <Section background="bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in FlowTech's growth story
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start space-x-8"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <Card padding="p-6" className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <Badge variant="primary">{item.year}</Badge>
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="bg-gradient-to-r from-blue-600 to-purple-600">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you're looking to join our team or partner with us, we'd
              love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                View Open Positions
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default About;
