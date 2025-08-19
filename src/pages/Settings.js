import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe,
  Database,
  Key,
  Save,
  Eye,
  EyeOff
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  Form, 
  FormField, 
  FormInput, 
  FormSelect, 
  FormTextarea, 
  FormCheckbox 
} from '../components/ui/Form';
import { useNotifications } from '../components/ui/Notifications';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const { success, error } = useNotifications();

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'integrations', label: 'Integrations', icon: Database },
    { id: 'api', label: 'API Keys', icon: Key }
  ];

  const breadcrumb = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Settings' }
  ];

  const handleProfileSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      success('Profile updated successfully');
    } catch (err) {
      error('Failed to update profile');
    }
  };

  const handleNotificationSubmit = async (data) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      success('Notification preferences updated');
    } catch (err) {
      error('Failed to update notifications');
    }
  };

  const handleSecuritySubmit = async (data) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      success('Security settings updated');
    } catch (err) {
      error('Failed to update security settings');
    }
  };

  const profileValidation = {
    firstName: { required: true, message: 'First name is required' },
    lastName: { required: true, message: 'Last name is required' },
    email: { 
      required: true, 
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address'
    }
  };

  const securityValidation = {
    currentPassword: { required: true, message: 'Current password is required' },
    newPassword: { 
      required: true, 
      minLength: 8,
      message: 'Password must be at least 8 characters'
    },
    confirmPassword: {
      required: true,
      validate: (value, values) => {
        if (value !== values.newPassword) {
          return 'Passwords do not match';
        }
        return '';
      }
    }
  };

  const roleOptions = [
    { value: 'admin', label: 'Administrator' },
    { value: 'manager', label: 'Manager' },
    { value: 'user', label: 'User' }
  ];

  const timezoneOptions = [
    { value: 'UTC', label: 'UTC' },
    { value: 'America/New_York', label: 'Eastern Time' },
    { value: 'America/Chicago', label: 'Central Time' },
    { value: 'America/Denver', label: 'Mountain Time' },
    { value: 'America/Los_Angeles', label: 'Pacific Time' }
  ];

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <Form
            initialValues={{
              firstName: 'John',
              lastName: 'Doe',
              email: 'john.doe@example.com',
              phone: '+1 (555) 123-4567',
              role: 'admin',
              timezone: 'America/New_York',
              language: 'en',
              bio: 'Senior Software Engineer with 5+ years of experience.'
            }}
            validation={profileValidation}
            onSubmit={handleProfileSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField name="firstName" label="First Name" required>
                <FormInput name="firstName" placeholder="Enter first name" />
              </FormField>

              <FormField name="lastName" label="Last Name" required>
                <FormInput name="lastName" placeholder="Enter last name" />
              </FormField>

              <FormField name="email" label="Email Address" required>
                <FormInput name="email" type="email" placeholder="Enter email address" />
              </FormField>

              <FormField name="phone" label="Phone Number">
                <FormInput name="phone" type="tel" placeholder="Enter phone number" />
              </FormField>

              <FormField name="role" label="Role">
                <FormSelect name="role" options={roleOptions} />
              </FormField>

              <FormField name="timezone" label="Timezone">
                <FormSelect name="timezone" options={timezoneOptions} />
              </FormField>

              <FormField name="language" label="Language">
                <FormSelect name="language" options={languageOptions} />
              </FormField>
            </div>

            <FormField name="bio" label="Bio">
              <FormTextarea name="bio" rows={4} placeholder="Tell us about yourself" />
            </FormField>

            <div className="flex justify-end">
              <Button type="submit">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </Form>
        );

      case 'notifications':
        return (
          <Form
            initialValues={{
              emailNotifications: true,
              pushNotifications: false,
              smsNotifications: false,
              marketingEmails: true,
              securityAlerts: true,
              productUpdates: false
            }}
            onSubmit={handleNotificationSubmit}
          >
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">Communication Preferences</h4>
                <div className="space-y-4">
                  <FormCheckbox name="emailNotifications" label="Email notifications" />
                  <FormCheckbox name="pushNotifications" label="Push notifications" />
                  <FormCheckbox name="smsNotifications" label="SMS notifications" />
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">Content Preferences</h4>
                <div className="space-y-4">
                  <FormCheckbox name="marketingEmails" label="Marketing emails" />
                  <FormCheckbox name="securityAlerts" label="Security alerts" />
                  <FormCheckbox name="productUpdates" label="Product updates" />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button type="submit">
                <Save className="w-4 h-4 mr-2" />
                Save Preferences
              </Button>
            </div>
          </Form>
        );

      case 'security':
        return (
          <div className="space-y-8">
            <Form
              initialValues={{}}
              validation={securityValidation}
              onSubmit={handleSecuritySubmit}
            >
              <h4 className="text-lg font-medium text-gray-900 mb-4">Change Password</h4>
              
              <FormField name="currentPassword" label="Current Password" required>
                <div className="relative">
                  <FormInput 
                    name="currentPassword" 
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter current password" 
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </FormField>

              <FormField name="newPassword" label="New Password" required>
                <FormInput 
                  name="newPassword" 
                  type="password" 
                  placeholder="Enter new password"
                />
              </FormField>

              <FormField name="confirmPassword" label="Confirm New Password" required>
                <FormInput 
                  name="confirmPassword" 
                  type="password" 
                  placeholder="Confirm new password"
                />
              </FormField>

              <div className="flex justify-end">
                <Button type="submit">
                  <Save className="w-4 h-4 mr-2" />
                  Update Password
                </Button>
              </div>
            </Form>

            <div className="border-t pt-8">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Two-Factor Authentication</h4>
              <p className="text-gray-600 mb-4">
                Add an extra layer of security to your account by enabling two-factor authentication.
              </p>
              <Button variant="secondary">
                Enable 2FA
              </Button>
            </div>

            <div className="border-t pt-8">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Active Sessions</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-medium">Current Session</p>
                    <p className="text-sm text-gray-600">Chrome on macOS • San Francisco, CA</p>
                  </div>
                  <Badge variant="success">Active</Badge>
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-medium">Mobile Device</p>
                    <p className="text-sm text-gray-600">Safari on iOS • Last seen 2 hours ago</p>
                  </div>
                  <Button variant="secondary" size="sm">Revoke</Button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'appearance':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">Theme</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-500">
                  <div className="w-full h-20 bg-white border border-gray-200 rounded mb-2"></div>
                  <p className="text-sm font-medium text-center">Light</p>
                </div>
                <div className="border border-blue-500 rounded-lg p-4 cursor-pointer">
                  <div className="w-full h-20 bg-gray-800 rounded mb-2"></div>
                  <p className="text-sm font-medium text-center">Dark</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-500">
                  <div className="w-full h-20 bg-gradient-to-r from-white to-gray-800 rounded mb-2"></div>
                  <p className="text-sm font-medium text-center">Auto</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">Accent Color</h4>
              <div className="flex space-x-3">
                {['blue', 'purple', 'green', 'red', 'yellow', 'indigo'].map(color => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full bg-${color}-500 hover:scale-110 transition-transform ${
                      color === 'blue' ? 'ring-2 ring-blue-300' : ''
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <Button>
                <Save className="w-4 h-4 mr-2" />
                Save Appearance
              </Button>
            </div>
          </div>
        );

      case 'integrations':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Slack', description: 'Team communication', connected: true },
                { name: 'Google Drive', description: 'File storage', connected: false },
                { name: 'Zoom', description: 'Video conferencing', connected: true },
                { name: 'GitHub', description: 'Code repository', connected: false }
              ].map((integration, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium">{integration.name}</h4>
                    <Badge variant={integration.connected ? 'success' : 'default'}>
                      {integration.connected ? 'Connected' : 'Disconnected'}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{integration.description}</p>
                  <Button variant={integration.connected ? 'secondary' : 'primary'} size="sm">
                    {integration.connected ? 'Disconnect' : 'Connect'}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'api':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-lg font-medium text-gray-900">API Keys</h4>
                <p className="text-gray-600">Manage your API keys for integrations</p>
              </div>
              <Button>
                <Key className="w-4 h-4 mr-2" />
                Generate New Key
              </Button>
            </div>

            <div className="space-y-4">
              {[
                { name: 'Production API Key', created: '2024-01-15', lastUsed: '2024-01-15' },
                { name: 'Development API Key', created: '2024-01-10', lastUsed: '2024-01-14' }
              ].map((key, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium">{key.name}</h5>
                      <p className="text-sm text-gray-600">
                        Created: {key.created} • Last used: {key.lastUsed}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="secondary" size="sm">Regenerate</Button>
                      <Button variant="secondary" size="sm">Delete</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <PageLayout 
      title="Settings" 
      description="Manage your account settings and preferences"
      breadcrumb={breadcrumb}
      backgroundColor="gradient"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <Card className="p-4">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors
                      ${activeTab === tab.id 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4 mr-3" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <Card className="p-6">
            {renderTabContent()}
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Settings;
