import React, { useState, useEffect } from "react";
import {
  Users,
  UserPlus,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Mail,
  Phone,
  Shield,
  CheckCircle,
  XCircle,
} from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import DataTable from "../components/ui/DataTable";
import Badge from "../components/ui/Badge";
import { LoadingSpinner } from "../components/ui/Loading";
import {
  Form,
  FormField,
  FormInput,
  FormSelect,
  FormTextarea,
} from "../components/ui/Form";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddUser, setShowAddUser] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Simulate API call
    const fetchUsers = async () => {
      setLoading(true);

      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock data
      const mockUsers = [
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          role: "Admin",
          status: "Active",
          lastLogin: "2024-01-15",
          phone: "+1 (555) 123-4567",
          department: "Engineering",
          joinedDate: "2023-03-15",
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane.smith@example.com",
          role: "Manager",
          status: "Active",
          lastLogin: "2024-01-14",
          phone: "+1 (555) 234-5678",
          department: "Marketing",
          joinedDate: "2023-05-20",
        },
        {
          id: 3,
          name: "Bob Johnson",
          email: "bob.johnson@example.com",
          role: "User",
          status: "Inactive",
          lastLogin: "2024-01-10",
          phone: "+1 (555) 345-6789",
          department: "Sales",
          joinedDate: "2023-08-10",
        },
        {
          id: 4,
          name: "Alice Brown",
          email: "alice.brown@example.com",
          role: "User",
          status: "Active",
          lastLogin: "2024-01-15",
          phone: "+1 (555) 456-7890",
          department: "Support",
          joinedDate: "2023-11-05",
        },
        {
          id: 5,
          name: "Charlie Wilson",
          email: "charlie.wilson@example.com",
          role: "Manager",
          status: "Pending",
          lastLogin: "Never",
          phone: "+1 (555) 567-8901",
          department: "Engineering",
          joinedDate: "2024-01-12",
        },
      ];

      setUsers(mockUsers);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  const columns = [
    {
      key: "name",
      header: "Name",
      render: (value, row) => (
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm mr-3">
            {value.charAt(0)}
          </div>
          <div>
            <div className="font-medium text-gray-900">{value}</div>
            <div className="text-sm text-gray-500">{row.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: "role",
      header: "Role",
      render: (value) => (
        <Badge
          variant={
            value === "Admin"
              ? "primary"
              : value === "Manager"
              ? "secondary"
              : "default"
          }
        >
          {value}
        </Badge>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (value) => (
        <div className="flex items-center">
          {value === "Active" && (
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
          )}
          {value === "Inactive" && (
            <XCircle className="w-4 h-4 text-red-500 mr-2" />
          )}
          {value === "Pending" && (
            <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2" />
          )}
          <span
            className={`text-sm ${
              value === "Active"
                ? "text-green-700"
                : value === "Inactive"
                ? "text-red-700"
                : "text-yellow-700"
            }`}
          >
            {value}
          </span>
        </div>
      ),
    },
    { key: "department", header: "Department" },
    { key: "lastLogin", header: "Last Login" },
    {
      key: "actions",
      header: "Actions",
      sortable: false,
      render: (_, row) => (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => handleEditUser(row)}>
            <Edit className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleDeleteUser(row.id)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      ),
    },
  ];

  const handleAddUser = async (userData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newUser = {
      id: users.length + 1,
      ...userData,
      status: "Pending",
      lastLogin: "Never",
      joinedDate: new Date().toISOString().split("T")[0],
    };

    setUsers((prev) => [...prev, newUser]);
    setShowAddUser(false);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowAddUser(true);
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers((prev) => prev.filter((user) => user.id !== userId));
    }
  };

  const userFormValidation = {
    name: { required: true, message: "Name is required" },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address",
    },
    role: { required: true, message: "Role is required" },
    department: { required: true, message: "Department is required" },
  };

  const roleOptions = [
    { value: "Admin", label: "Admin" },
    { value: "Manager", label: "Manager" },
    { value: "User", label: "User" },
  ];

  const departmentOptions = [
    { value: "Engineering", label: "Engineering" },
    { value: "Marketing", label: "Marketing" },
    { value: "Sales", label: "Sales" },
    { value: "Support", label: "Support" },
    { value: "HR", label: "Human Resources" },
  ];

  const actions = [
    {
      label: "Add User",
      icon: <UserPlus className="w-4 h-4" />,
      onClick: () => {
        setSelectedUser(null);
        setShowAddUser(true);
      },
    },
    {
      label: "Export Users",
      icon: <Mail className="w-4 h-4" />,
      onClick: () => console.log("Export users"),
    },
  ];

  const breadcrumb = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "User Management" },
  ];

  const stats = [
    { label: "Total Users", value: users.length, color: "blue" },
    {
      label: "Active Users",
      value: users.filter((u) => u.status === "Active").length,
      color: "green",
    },
    {
      label: "Pending Users",
      value: users.filter((u) => u.status === "Pending").length,
      color: "yellow",
    },
    {
      label: "Inactive Users",
      value: users.filter((u) => u.status === "Inactive").length,
      color: "red",
    },
  ];

  return (
    <PageLayout
      title="User Management"
      description="Manage users, roles, and permissions across your organization"
      breadcrumb={breadcrumb}
      backgroundColor="gradient"
    >
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div
                className={`w-12 h-12 bg-${stat.color}-100 rounded-full flex items-center justify-center`}
              >
                <Users className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* User Table */}
      <Card>
        <DataTable
          data={users}
          columns={columns}
          loading={loading}
          actions={actions}
          searchable={true}
          sortable={true}
          filterable={true}
          emptyMessage="No users found"
        />
      </Card>

      {/* Add/Edit User Modal */}
      {showAddUser && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
              onClick={() => setShowAddUser(false)}
            />

            <div className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {selectedUser ? "Edit User" : "Add New User"}
                </h3>
                <p className="text-sm text-gray-500">
                  {selectedUser
                    ? "Update user information"
                    : "Create a new user account"}
                </p>
              </div>

              <Form
                initialValues={selectedUser || {}}
                validation={userFormValidation}
                onSubmit={handleAddUser}
              >
                <FormField name="name" label="Full Name" required>
                  <FormInput name="name" placeholder="Enter full name" />
                </FormField>

                <FormField name="email" label="Email Address" required>
                  <FormInput
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                  />
                </FormField>

                <FormField name="phone" label="Phone Number">
                  <FormInput
                    name="phone"
                    type="tel"
                    placeholder="Enter phone number"
                  />
                </FormField>

                <FormField name="role" label="Role" required>
                  <FormSelect
                    name="role"
                    options={roleOptions}
                    placeholder="Select role"
                  />
                </FormField>

                <FormField name="department" label="Department" required>
                  <FormSelect
                    name="department"
                    options={departmentOptions}
                    placeholder="Select department"
                  />
                </FormField>

                <div className="flex justify-end gap-3 mt-6">
                  <Button
                    variant="secondary"
                    onClick={() => setShowAddUser(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">
                    {selectedUser ? "Update User" : "Create User"}
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default UserManagement;
