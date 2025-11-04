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
  BarChart3,
  PieChart,
  LineChart,
  FileText,
} from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import { StatsCard, ProductCard } from "../components/ui/EnhancedCard";
import Button from "../components/ui/Button";
import DataTable from "../components/ui/DataTable";
import { LoadingSpinner, LoadingCard } from "../components/ui/Loading";
import { Form, FormField, FormInput, FormSelect } from "../components/ui/Form";
import { useNotifications } from "../components/ui/Notifications";

const Reports = () => {
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState("30d");
  const [reportType, setReportType] = useState("overview");
  const [reports, setReports] = useState([]);
  const [metrics, setMetrics] = useState({});
  const { success, error } = useNotifications();

  useEffect(() => {
    const fetchReports = async () => {
      setLoading(true);

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Mock data
        setMetrics({
          totalRevenue: { value: 125432.89, change: 15.2, trend: "positive" },
          activeUsers: { value: 4567, change: 8.7, trend: "positive" },
          conversionRate: { value: 3.4, change: -0.5, trend: "negative" },
          avgOrderValue: { value: 89.5, change: 12.3, trend: "positive" },
        });

        setReports([
          {
            id: 1,
            title: "Monthly Sales Report",
            description: "Comprehensive sales analysis for the current month",
            type: "Sales",
            status: "Ready",
            createdAt: "2024-01-15",
            size: "2.3 MB",
          },
          {
            id: 2,
            title: "User Activity Analysis",
            description: "Detailed breakdown of user engagement metrics",
            type: "Analytics",
            status: "Processing",
            createdAt: "2024-01-14",
            size: "1.8 MB",
          },
          {
            id: 3,
            title: "Financial Summary Q1",
            description: "Quarterly financial performance summary",
            type: "Financial",
            status: "Ready",
            createdAt: "2024-01-10",
            size: "4.1 MB",
          },
          {
            id: 4,
            title: "Customer Segmentation",
            description: "Customer demographics and behavior analysis",
            type: "Marketing",
            status: "Ready",
            createdAt: "2024-01-08",
            size: "3.2 MB",
          },
        ]);

        setLoading(false);
        success("Reports loaded successfully");
      } catch (err) {
        setLoading(false);
        error("Failed to load reports");
      }
    };

    fetchReports();
  }, [timeRange, reportType, success, error]);

  const handleGenerateReport = async (data) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const newReport = {
        id: reports.length + 1,
        title: data.title,
        description: data.description,
        type: data.type,
        status: "Processing",
        createdAt: new Date().toISOString().split("T")[0],
        size: "Generating...",
      };

      setReports((prev) => [newReport, ...prev]);
      success("Report generation started successfully");
    } catch (err) {
      error("Failed to generate report");
    }
  };

  const handleDownloadReport = (report) => {
    if (report.status === "Processing") {
      error("Report is still processing");
      return;
    }

    success(`Downloading ${report.title}`);
    // Simulate download
    console.log("Downloading report:", report.title);
  };

  const reportColumns = [
    {
      key: "title",
      header: "Report Name",
      render: (value, row) => (
        <div>
          <div className="font-medium text-gray-900">{value}</div>
          <div className="text-sm text-gray-500">{row.description}</div>
        </div>
      ),
    },
    {
      key: "type",
      header: "Type",
      render: (value) => (
        <span
          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
            value === "Sales"
              ? "bg-green-100 text-green-800"
              : value === "Analytics"
              ? "bg-blue-100 text-blue-800"
              : value === "Financial"
              ? "bg-purple-100 text-purple-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (value) => (
        <span
          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
            value === "Ready"
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
    { key: "createdAt", header: "Created" },
    { key: "size", header: "Size" },
    {
      key: "actions",
      header: "Actions",
      sortable: false,
      render: (_, row) => (
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleDownloadReport(row)}
            disabled={row.status === "Processing"}
          >
            <Download className="w-4 h-4" />
          </Button>
        </div>
      ),
    },
  ];

  const reportTypeOptions = [
    { value: "sales", label: "Sales Report" },
    { value: "analytics", label: "Analytics Report" },
    { value: "financial", label: "Financial Report" },
    { value: "marketing", label: "Marketing Report" },
    { value: "custom", label: "Custom Report" },
  ];

  const timeRangeOptions = [
    { value: "7d", label: "Last 7 days" },
    { value: "30d", label: "Last 30 days" },
    { value: "90d", label: "Last 90 days" },
    { value: "1y", label: "Last year" },
  ];

  const reportValidation = {
    title: { required: true, message: "Report title is required" },
    type: { required: true, message: "Report type is required" },
    description: { required: true, message: "Description is required" },
  };

  const breadcrumb = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Reports" },
  ];

  const quickReports = [
    {
      title: "Sales Summary",
      description: "Quick overview of sales performance",
      icon: <DollarSign className="w-6 h-6" />,
      color: "green",
    },
    {
      title: "User Analytics",
      description: "User engagement and behavior metrics",
      icon: <Users className="w-6 h-6" />,
      color: "blue",
    },
    {
      title: "Performance Report",
      description: "System and application performance",
      icon: <Activity className="w-6 h-6" />,
      color: "purple",
    },
    {
      title: "Custom Report",
      description: "Build your own custom report",
      icon: <FileText className="w-6 h-6" />,
      color: "orange",
    },
  ];

  return (
    <PageLayout
      title="Reports & Analytics"
      description="Generate, view, and download comprehensive business reports"
      breadcrumb={breadcrumb}
      backgroundColor="gradient"
    >
      {/* Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div className="flex items-center gap-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            {timeRangeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <Button variant="secondary" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Advanced Filters
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button>
            <FileText className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <LoadingCard key={i} />
            ))}
          </div>
          <LoadingCard className="h-64" />
        </div>
      ) : (
        <>
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Revenue"
              value={`$${metrics.totalRevenue.value.toLocaleString()}`}
              change={`+${metrics.totalRevenue.change}%`}
              trend={metrics.totalRevenue.trend}
              icon={<DollarSign />}
            />
            <StatsCard
              title="Active Users"
              value={metrics.activeUsers.value.toLocaleString()}
              change={`+${metrics.activeUsers.change}%`}
              trend={metrics.activeUsers.trend}
              icon={<Users />}
            />
            <StatsCard
              title="Conversion Rate"
              value={`${metrics.conversionRate.value}%`}
              change={`${metrics.conversionRate.change}%`}
              trend={metrics.conversionRate.trend}
              icon={<TrendingUp />}
            />
            <StatsCard
              title="Avg Order Value"
              value={`$${metrics.avgOrderValue.value}`}
              change={`+${metrics.avgOrderValue.change}%`}
              trend={metrics.avgOrderValue.trend}
              icon={<Activity />}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Reports */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Quick Reports
                </h3>
                <div className="space-y-4">
                  {quickReports.map((report, index) => (
                    <ProductCard
                      key={index}
                      title={report.title}
                      description={report.description}
                      onView={() => console.log("Generate", report.title)}
                      className="border-l-4 border-l-blue-500"
                    />
                  ))}
                </div>
              </div>

              {/* Generate Custom Report Form */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Generate Custom Report
                </h3>

                <Form
                  validation={reportValidation}
                  onSubmit={handleGenerateReport}
                >
                  <FormField name="title" label="Report Title" required>
                    <FormInput name="title" placeholder="Enter report title" />
                  </FormField>

                  <FormField name="type" label="Report Type" required>
                    <FormSelect name="type" options={reportTypeOptions} />
                  </FormField>

                  <FormField name="description" label="Description" required>
                    <FormInput
                      name="description"
                      placeholder="Describe the report"
                    />
                  </FormField>

                  <Button type="submit" className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Report
                  </Button>
                </Form>
              </div>
            </div>

            {/* Reports Table */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Generated Reports
                    </h3>
                    <div className="flex items-center gap-2">
                      <Button variant="secondary" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download All
                      </Button>
                    </div>
                  </div>
                </div>

                <DataTable
                  data={reports}
                  columns={reportColumns}
                  searchable={true}
                  sortable={true}
                  pagination={true}
                  pageSize={5}
                  emptyMessage="No reports available. Generate your first report to get started."
                />
              </div>
            </div>
          </div>
        </>
      )}
    </PageLayout>
  );
};

export default Reports;
