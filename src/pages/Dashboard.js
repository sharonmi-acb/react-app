import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Download,
  MoreVertical,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  ChevronDown,
  ChevronUp,
  Eye,
} from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Avatar from "../components/ui/Avatar";
import Section from "../components/Section";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [filterStatus, setFilterStatus] = useState("all");

  // Sample data for the table
  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@techcorp.com",
      company: "TechCorp",
      plan: "Professional",
      status: "active",
      revenue: 79,
      lastActive: "2024-01-15",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@innovate.com",
      company: "InnovateCorp",
      plan: "Enterprise",
      status: "active",
      revenue: 149,
      lastActive: "2024-01-14",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "michael@startup.io",
      company: "StartupX",
      plan: "Starter",
      status: "trial",
      revenue: 0,
      lastActive: "2024-01-13",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      email: "emily@growthco.com",
      company: "GrowthCo",
      plan: "Professional",
      status: "active",
      revenue: 79,
      lastActive: "2024-01-12",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5,
      name: "David Park",
      email: "david@techsolutions.com",
      company: "TechSolutions",
      plan: "Enterprise",
      status: "inactive",
      revenue: 149,
      lastActive: "2024-01-05",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 6,
      name: "Lisa Wang",
      email: "lisa@digitalfirst.com",
      company: "DigitalFirst",
      plan: "Professional",
      status: "active",
      revenue: 79,
      lastActive: "2024-01-16",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const stats = [
    {
      title: "Total Revenue",
      value: "$12,426",
      change: "+12.3%",
      icon: <DollarSign className="w-6 h-6" />,
      color: "text-green-500",
    },
    {
      title: "Active Users",
      value: "1,247",
      change: "+8.2%",
      icon: <Users className="w-6 h-6" />,
      color: "text-blue-500",
    },
    {
      title: "Conversion Rate",
      value: "12.4%",
      change: "+2.1%",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-purple-500",
    },
    {
      title: "System Health",
      value: "99.9%",
      change: "+0.1%",
      icon: <Activity className="w-6 h-6" />,
      color: "text-orange-500",
    },
  ];

  // Filter and sort data
  const filteredAndSortedCustomers = useMemo(() => {
    let filtered = customers;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (customer) =>
          customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          customer.company.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by status
    if (filterStatus !== "all") {
      filtered = filtered.filter(
        (customer) => customer.status === filterStatus
      );
    }

    // Sort
    if (sortField) {
      filtered = [...filtered].sort((a, b) => {
        const aValue = a[sortField];
        const bValue = b[sortField];

        if (sortDirection === "asc") {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
    }

    return filtered;
  }, [searchTerm, filterStatus, sortField, sortDirection]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const getStatusBadge = (status) => {
    const variants = {
      active: "success",
      trial: "warning",
      inactive: "danger",
    };
    return <Badge variant={variants[status]}>{status}</Badge>;
  };

  const getPlanBadge = (plan) => {
    const variants = {
      Starter: "default",
      Professional: "primary",
      Enterprise: "purple",
    };
    return <Badge variant={variants[plan]}>{plan}</Badge>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Section background="bg-white" padding="py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Monitor your business performance and customer data
            </p>
          </div>
          <div className="flex space-x-3 mt-4 sm:mt-0">
            <Button variant="secondary" icon={<Download className="w-4 h-4" />}>
              Export
            </Button>
            <Button>Add Customer</Button>
          </div>
        </div>
      </Section>

      {/* Stats Cards */}
      <Section background="bg-gray-50" padding="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} padding="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className={`text-sm ${stat.color}`}>{stat.change}</p>
                </div>
                <div className={`${stat.color}`}>{stat.icon}</div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Table Section */}
      <Section background="bg-gray-50" padding="py-8">
        <Card padding="p-0">
          {/* Table Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <h2 className="text-xl font-semibold text-gray-900">
                Customer Management
              </h2>

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search customers..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Filter */}
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="trial">Trial</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <button
                      onClick={() => handleSort("name")}
                      className="flex items-center space-x-1 hover:text-gray-700"
                    >
                      <span>Customer</span>
                      {sortField === "name" &&
                        (sortDirection === "asc" ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        ))}
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Plan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <button
                      onClick={() => handleSort("revenue")}
                      className="flex items-center space-x-1 hover:text-gray-700"
                    >
                      <span>Revenue</span>
                      {sortField === "revenue" &&
                        (sortDirection === "asc" ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        ))}
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <button
                      onClick={() => handleSort("lastActive")}
                      className="flex items-center space-x-1 hover:text-gray-700"
                    >
                      <span>Last Active</span>
                      {sortField === "lastActive" &&
                        (sortDirection === "asc" ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        ))}
                    </button>
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAndSortedCustomers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Avatar
                          src={customer.avatar}
                          alt={customer.name}
                          size="md"
                          className="mr-4"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {customer.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {customer.email}
                          </div>
                          <div className="text-sm text-gray-500">
                            {customer.company}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getPlanBadge(customer.plan)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(customer.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${customer.revenue}/month
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {customer.lastActive}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          icon={<Eye className="w-4 h-4" />}
                        >
                          View
                        </Button>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing {filteredAndSortedCustomers.length} of{" "}
                {customers.length} customers
              </div>
              <div className="flex space-x-2">
                <Button variant="secondary" size="sm">
                  Previous
                </Button>
                <Button variant="secondary" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </Section>
    </div>
  );
};

export default Dashboard;
