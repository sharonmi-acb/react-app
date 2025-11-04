import React, { useState } from "react";
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Briefcase,
  Heart,
  Zap,
  Shield,
  TrendingUp,
  Coffee,
  Home,
  Plane,
  Star,
  Filter,
  Search,
} from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import Grid from "../../components/ui/Grid";
import Badge from "../../components/ui/Badge";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const departments = [
    { value: "", label: "All Departments" },
    { value: "engineering", label: "Engineering" },
    { value: "design", label: "Design" },
    { value: "sales", label: "Sales" },
    { value: "marketing", label: "Marketing" },
    { value: "customer-success", label: "Customer Success" },
    { value: "hr", label: "Human Resources" },
  ];

  const locations = [
    { value: "", label: "All Locations" },
    { value: "san-francisco", label: "San Francisco, CA" },
    { value: "new-york", label: "New York, NY" },
    { value: "austin", label: "Austin, TX" },
    { value: "remote", label: "Remote" },
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance, dental, vision, and wellness programs",
    },
    {
      icon: <Coffee className="w-8 h-8 text-brown-500" />,
      title: "Work-Life Balance",
      description: "Flexible hours, unlimited PTO, and mental health support",
    },
    {
      icon: <Home className="w-8 h-8 text-blue-500" />,
      title: "Remote-First",
      description: "Work from anywhere with home office setup allowance",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Growth & Learning",
      description:
        "Professional development budget and continuous learning opportunities",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      title: "Competitive Pay",
      description: "Market-leading salaries with equity compensation",
    },
    {
      icon: <Plane className="w-8 h-8 text-purple-500" />,
      title: "Travel & Events",
      description: "Annual team retreats and conference attendance budget",
    },
  ];

  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$150k - $200k",
      description:
        "Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.",
      requirements: [
        "5+ years of full-stack development",
        "Experience with React and Node.js",
        "Cloud platform experience",
      ],
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $160k",
      description:
        "Design intuitive user experiences for our SaaS platform, working closely with product and engineering teams.",
      requirements: [
        "3+ years of product design experience",
        "Proficiency in Figma",
        "Experience with design systems",
      ],
      posted: "1 week ago",
    },
    {
      id: 3,
      title: "Sales Development Representative",
      department: "Sales",
      location: "New York, NY",
      type: "Full-time",
      salary: "$60k - $80k + commission",
      description:
        "Generate and qualify leads for our enterprise sales team while building relationships with potential customers.",
      requirements: [
        "1+ years of sales experience",
        "Excellent communication skills",
        "CRM experience preferred",
      ],
      posted: "3 days ago",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$130k - $170k",
      description:
        "Build and maintain our cloud infrastructure, CI/CD pipelines, and monitoring systems.",
      requirements: [
        "AWS/GCP experience",
        "Kubernetes knowledge",
        "Infrastructure as Code (Terraform)",
      ],
      posted: "5 days ago",
    },
    {
      id: 5,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $120k",
      description:
        "Help our customers achieve success with our platform while driving retention and expansion.",
      requirements: [
        "2+ years in customer success",
        "SaaS experience",
        "Strong analytical skills",
      ],
      posted: "1 day ago",
    },
    {
      id: 6,
      title: "Marketing Manager",
      department: "Marketing",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$100k - $130k",
      description:
        "Lead marketing campaigns and initiatives to drive brand awareness and lead generation.",
      requirements: [
        "3+ years of marketing experience",
        "Digital marketing expertise",
        "Analytics experience",
      ],
      posted: "1 week ago",
    },
  ];

  const getDepartmentBadgeVariant = (department) => {
    const variants = {
      Engineering: "primary",
      Design: "purple",
      Sales: "success",
      Marketing: "warning",
      "Customer Success": "default",
      "Human Resources": "danger",
    };
    return variants[department] || "default";
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      !selectedDepartment ||
      job.department.toLowerCase().replace(" ", "-") === selectedDepartment;
    const matchesLocation =
      !selectedLocation ||
      job.location.toLowerCase().includes(selectedLocation.replace("-", " "));
    return matchesSearch && matchesDepartment && matchesLocation;
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
              Join Our Team
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Build the Future with
              <span className="gradient-text"> FlowTech</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join a team of passionate innovators who are revolutionizing how
              businesses operate. We're looking for talented individuals to help
              us shape the future of SaaS technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">View Open Positions</Button>
              <Button variant="secondary" size="lg">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Join Us */}
      <Section background="bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Work at FlowTech?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where our team can thrive,
              innovate, and make a real impact
            </p>
          </div>

          <Grid cols={3} gap={8}>
            {benefits.map((benefit, index) => (
              <Card key={index} padding="p-8" hover className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Job Listings */}
      <Section background="bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find your next opportunity and join our growing team
            </p>

            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  icon={<Search className="w-5 h-5" />}
                />
                <Select
                  options={departments}
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  placeholder="All Departments"
                />
                <Select
                  options={locations}
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  placeholder="All Locations"
                />
              </div>
            </div>
          </div>

          <div className="mb-8 text-center text-gray-600">
            Showing {filteredJobs.length} of {jobs.length} positions
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} padding="p-8" hover>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {job.title}
                        </h3>
                        <div className="flex items-center space-x-4 mb-4">
                          <Badge
                            variant={getDepartmentBadgeVariant(job.department)}
                          >
                            {job.department}
                          </Badge>
                          <div className="flex items-center space-x-1 text-gray-500">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-500">
                            <DollarSign className="w-4 h-4" />
                            <span>{job.salary}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        Posted {job.posted}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Requirements:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:ml-8 flex flex-col space-y-3">
                    <Button>Apply Now</Button>
                    <Button variant="secondary">Learn More</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Briefcase className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No positions found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or check back later for new
                opportunities.
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* Culture */}
      <Section background="bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We foster an inclusive, collaborative environment where everyone
              can do their best work
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What Makes Us Special
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Collaborative Team
                    </h4>
                    <p className="text-gray-600">
                      Work alongside talented individuals from diverse
                      backgrounds
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Innovation Focus
                    </h4>
                    <p className="text-gray-600">
                      Push boundaries and work on cutting-edge technology
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Growth Opportunities
                    </h4>
                    <p className="text-gray-600">
                      Advance your career with mentorship and learning programs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Office environment"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="bg-gradient-to-r from-blue-600 to-purple-600">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't see the perfect role? We're always interested in meeting
              talented people. Send us your resume and let's start a
              conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                Send Your Resume
              </Button>
              <Button variant="outline" size="lg">
                Learn More About Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Careers;
