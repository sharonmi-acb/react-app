import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  Calendar,
  Download,
  Filter,
  RefreshCw,
} from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import DataTable from "../components/ui/DataTable";
import { LoadingSpinner } from "../components/ui/Loading";

const Analytics = () => {
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState("30d");
  const [metrics, setMetrics] = useState({
    revenue: { value: 0, change: 0 },
    users: { value: 0, change: 0 },
    orders: { value: 0, change: 0 },
    conversion: { value: 0, change: 0 },
  });

  const [recentOrders, setRecentOrders] = useState([]);
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      setLoading(true);

      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock data
      setMetrics({
        revenue: { value: 45231.89, change: 12.5 },
        users: { value: 2350, change: 8.2 },
        orders: { value: 123, change: -3.1 },
        conversion: { value: 3.2, change: 0.8 },
      });

      setRecentOrders([
        {
          id: "1001",
          customer: "John Doe",
          amount: 299.99,
          status: "Completed",
          date: "2024-01-15",
        },
        {
          id: "1002",
          customer: "Jane Smith",
          amount: 199.5,
          status: "Processing",
          date: "2024-01-15",
        },
        {
          id: "1003",
          customer: "Bob Johnson",
          amount: 449.99,
          status: "Completed",
          date: "2024-01-14",
        },
        {
          id: "1004",
          customer: "Alice Brown",
          amount: 89.99,
          status: "Pending",
          date: "2024-01-14",
        },
        {
          id: "1005",
          customer: "Charlie Wilson",
          amount: 329.99,
          status: "Completed",
          date: "2024-01-13",
        },
      ]);

      setTopProducts([
        { name: "Pro Plan", sales: 145, revenue: 14500 },
        { name: "Enterprise Plan", sales: 89, revenue: 17800 },
        { name: "Basic Plan", sales: 234, revenue: 4680 },
        { name: "Premium Add-on", sales: 67, revenue: 3350 },
      ]);

      setLoading(false);
    };

    fetchData();
  }, [timeRange]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };

  const getChangeColor = (change) => {
    if (change > 0) return "text-green-600";
    if (change < 0) return "text-red-600";
    return "text-gray-600";
  };

  const orderColumns = [
    { key: "id", header: "Order ID" },
    { key: "customer", header: "Customer" },
    {
      key: "amount",
      header: "Amount",
      render: (value) => formatCurrency(value),
    },
    {
      key: "status",
      header: "Status",
      render: (value) => (
        <span
          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
            value === "Completed"
              ? "bg-green-100 text-green-800"
              : value === "Processing"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {value}
        </span>
      ),
    },
    { key: "date", header: "Date" },
  ];

  const breadcrumb = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Analytics" },
  ];

  if (loading) {
    return (
      <PageLayout title="Analytics" breadcrumb={breadcrumb}>
        <div className="flex items-center justify-center py-12">
          <LoadingSpinner size="xl" />
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title="Analytics Dashboard"
      description="Track your business performance and key metrics"
      breadcrumb={breadcrumb}
      backgroundColor="gradient"
    >
      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="flex items-center gap-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>

          <Button variant="secondary" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button variant="secondary" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Revenue</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(metrics.revenue.value)}
              </p>
              <p
                className={`text-sm flex items-center mt-1 ${getChangeColor(
                  metrics.revenue.change
                )}`}
              >
                <TrendingUp className="w-4 h-4 mr-1" />
                {metrics.revenue.change > 0 ? "+" : ""}
                {metrics.revenue.change.toFixed(1)}%
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Users</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatNumber(metrics.users.value)}
              </p>
              <p
                className={`text-sm flex items-center mt-1 ${getChangeColor(
                  metrics.users.change
                )}`}
              >
                <TrendingUp className="w-4 h-4 mr-1" />
                {metrics.users.change > 0 ? "+" : ""}
                {metrics.users.change.toFixed(1)}%
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Orders</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatNumber(metrics.orders.value)}
              </p>
              <p
                className={`text-sm flex items-center mt-1 ${getChangeColor(
                  metrics.orders.change
                )}`}
              >
                <TrendingUp className="w-4 h-4 mr-1" />
                {metrics.orders.change > 0 ? "+" : ""}
                {metrics.orders.change.toFixed(1)}%
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Activity className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Conversion Rate
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {metrics.conversion.value.toFixed(1)}%
              </p>
              <p
                className={`text-sm flex items-center mt-1 ${getChangeColor(
                  metrics.conversion.change
                )}`}
              >
                <TrendingUp className="w-4 h-4 mr-1" />
                {metrics.conversion.change > 0 ? "+" : ""}
                {metrics.conversion.change.toFixed(1)}%
              </p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Recent Orders
              </h3>
              <Button variant="secondary" size="sm">
                View All
              </Button>
            </div>

            <DataTable
              data={recentOrders}
              columns={orderColumns}
              pagination={false}
              searchable={false}
            />
          </Card>
        </div>

        {/* Top Products */}
        <div>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Top Products
            </h3>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-600">
                      {product.sales} sales
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      {formatCurrency(product.revenue)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Analytics;
