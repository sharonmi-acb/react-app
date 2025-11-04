import React, { useState, useEffect } from "react";
import {
  Activity,
  CheckCircle,
  AlertCircle,
  XCircle,
  Clock,
  Server,
  Database,
  Wifi,
  Shield,
  Zap,
} from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import { StatsCard } from "../components/ui/EnhancedCard";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { LoadingSpinner } from "../components/ui/Loading";

const Status = () => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [incidents, setIncidents] = useState([]);
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    const fetchStatus = async () => {
      setLoading(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setServices([
        {
          name: "API Gateway",
          status: "operational",
          uptime: "99.98%",
          responseTime: "145ms",
          icon: <Server className="w-5 h-5" />,
        },
        {
          name: "Database",
          status: "operational",
          uptime: "99.95%",
          responseTime: "23ms",
          icon: <Database className="w-5 h-5" />,
        },
        {
          name: "Authentication",
          status: "operational",
          uptime: "99.99%",
          responseTime: "89ms",
          icon: <Shield className="w-5 h-5" />,
        },
        {
          name: "CDN",
          status: "degraded",
          uptime: "98.12%",
          responseTime: "234ms",
          icon: <Wifi className="w-5 h-5" />,
        },
        {
          name: "Analytics Engine",
          status: "operational",
          uptime: "99.87%",
          responseTime: "167ms",
          icon: <Activity className="w-5 h-5" />,
        },
        {
          name: "Payment Processing",
          status: "maintenance",
          uptime: "99.45%",
          responseTime: "312ms",
          icon: <Zap className="w-5 h-5" />,
        },
      ]);

      setIncidents([
        {
          id: 1,
          title: "CDN Performance Degradation",
          status: "investigating",
          severity: "minor",
          createdAt: "2024-01-15 14:30",
          description:
            "Users may experience slower loading times for static assets.",
        },
        {
          id: 2,
          title: "Scheduled Payment System Maintenance",
          status: "scheduled",
          severity: "maintenance",
          createdAt: "2024-01-15 12:00",
          description: "Routine maintenance on payment processing systems.",
        },
        {
          id: 3,
          title: "Database Connection Issue Resolved",
          status: "resolved",
          severity: "major",
          createdAt: "2024-01-14 09:15",
          description: "Brief database connectivity issue has been resolved.",
        },
      ]);

      setMetrics({
        overallUptime: { value: "99.95%", trend: "positive" },
        avgResponseTime: { value: "156ms", trend: "positive" },
        activeIncidents: { value: 2, trend: "neutral" },
        resolvedToday: { value: 1, trend: "positive" },
      });

      setLoading(false);
    };

    fetchStatus();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "operational":
        return {
          bg: "bg-green-100",
          text: "text-green-800",
          icon: CheckCircle,
        };
      case "degraded":
        return {
          bg: "bg-yellow-100",
          text: "text-yellow-800",
          icon: AlertCircle,
        };
      case "outage":
        return { bg: "bg-red-100", text: "text-red-800", icon: XCircle };
      case "maintenance":
        return { bg: "bg-blue-100", text: "text-blue-800", icon: Clock };
      default:
        return { bg: "bg-gray-100", text: "text-gray-800", icon: Activity };
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "critical":
        return "bg-red-100 text-red-800";
      case "major":
        return "bg-orange-100 text-orange-800";
      case "minor":
        return "bg-yellow-100 text-yellow-800";
      case "maintenance":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getIncidentStatusColor = (status) => {
    switch (status) {
      case "investigating":
        return "bg-yellow-100 text-yellow-800";
      case "identified":
        return "bg-orange-100 text-orange-800";
      case "monitoring":
        return "bg-blue-100 text-blue-800";
      case "resolved":
        return "bg-green-100 text-green-800";
      case "scheduled":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const breadcrumb = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "System Status" },
  ];

  if (loading) {
    return (
      <PageLayout title="System Status" breadcrumb={breadcrumb}>
        <div className="flex items-center justify-center py-12">
          <LoadingSpinner size="xl" />
        </div>
      </PageLayout>
    );
  }

  const operationalCount = services.filter(
    (s) => s.status === "operational"
  ).length;
  const overallStatus =
    operationalCount === services.length
      ? "All Systems Operational"
      : operationalCount > services.length / 2
      ? "Partial Outage"
      : "Major Outage";

  return (
    <PageLayout
      title="System Status"
      description="Real-time status of all FlowTech services and infrastructure"
      breadcrumb={breadcrumb}
      backgroundColor="gradient"
    >
      {/* Overall Status */}
      <Card className="mb-8 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div
              className={`w-4 h-4 rounded-full mr-4 ${
                operationalCount === services.length
                  ? "bg-green-500"
                  : operationalCount > services.length / 2
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {overallStatus}
              </h2>
              <p className="text-gray-600">
                {operationalCount} of {services.length} services operational
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Last updated</p>
            <p className="text-lg font-semibold">Just now</p>
          </div>
        </div>
      </Card>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Overall Uptime"
          value={metrics.overallUptime.value}
          trend={metrics.overallUptime.trend}
          icon={<Activity />}
        />
        <StatsCard
          title="Avg Response Time"
          value={metrics.avgResponseTime.value}
          trend={metrics.avgResponseTime.trend}
          icon={<Zap />}
        />
        <StatsCard
          title="Active Incidents"
          value={metrics.activeIncidents.value}
          trend={metrics.activeIncidents.trend}
          icon={<AlertCircle />}
        />
        <StatsCard
          title="Resolved Today"
          value={metrics.resolvedToday.value}
          trend={metrics.resolvedToday.trend}
          icon={<CheckCircle />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Services Status */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Service Status
          </h3>
          <div className="space-y-4">
            {services.map((service, index) => {
              const statusConfig = getStatusColor(service.status);
              const StatusIcon = statusConfig.icon;

              return (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full mr-3">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {service.name}
                      </h4>
                      <div className="flex items-center mt-1 space-x-4 text-sm text-gray-600">
                        <span>Uptime: {service.uptime}</span>
                        <span>Response: {service.responseTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <StatusIcon
                      className={`w-5 h-5 mr-2 ${statusConfig.text}`}
                    />
                    <Badge
                      className={`${statusConfig.bg} ${statusConfig.text}`}
                    >
                      {service.status}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Recent Incidents */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Recent Incidents
          </h3>
          <div className="space-y-4">
            {incidents.map((incident) => (
              <div
                key={incident.id}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-gray-900">
                    {incident.title}
                  </h4>
                  <div className="flex space-x-2">
                    <Badge className={getSeverityColor(incident.severity)}>
                      {incident.severity}
                    </Badge>
                    <Badge className={getIncidentStatusColor(incident.status)}>
                      {incident.status}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  {incident.description}
                </p>
                <p className="text-xs text-gray-500">{incident.createdAt}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Historical Uptime */}
      <Card className="mt-8 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          90-Day Uptime History
        </h3>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-600">90 days ago</span>
          <span className="text-sm text-gray-600">Today</span>
        </div>
        <div className="flex space-x-1">
          {Array.from({ length: 90 }, (_, i) => {
            const uptime = Math.random();
            let color = "bg-green-200";
            if (uptime < 0.9) color = "bg-red-200";
            else if (uptime < 0.95) color = "bg-yellow-200";
            else if (uptime < 0.99) color = "bg-green-100";

            return (
              <div
                key={i}
                className={`w-3 h-8 rounded-sm ${color}`}
                title={`Day ${i + 1}: ${(uptime * 100).toFixed(2)}% uptime`}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
          <span>🟢 Operational</span>
          <span>🟡 Degraded</span>
          <span>🔴 Outage</span>
        </div>
      </Card>
    </PageLayout>
  );
};

export default Status;
