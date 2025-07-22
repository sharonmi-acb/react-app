import React, { useState } from 'react';
import { Send, Upload, User, Mail, Phone, FileText } from 'lucide-react';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import Textarea from '../../ui/Textarea';
import FileUpload from '../../ui/FileUpload';
import Checkbox from '../../ui/Checkbox';

const JobApplicationForm = ({ jobTitle = '', onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: jobTitle,
    experience: '',
    expectedSalary: '',
    availability: '',
    portfolio: '',
    linkedin: '',
    coverLetter: '',
    agreeToTerms: false,
    allowContact: true
  });

  const [files, setFiles] = useState({
    resume: null,
    coverLetterFile: null,
    portfolio: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const positions = [
    { value: 'senior-fullstack-engineer', label: 'Senior Full Stack Engineer' },
    { value: 'product-designer', label: 'Product Designer' },
    { value: 'sales-development-representative', label: 'Sales Development Representative' },
    { value: 'devops-engineer', label: 'DevOps Engineer' },
    { value: 'customer-success-manager', label: 'Customer Success Manager' },
    { value: 'marketing-manager', label: 'Marketing Manager' },
    { value: 'other', label: 'Other Position' }
  ];

  const experienceLevels = [
    { value: 'entry', label: 'Entry Level (0-2 years)' },
    { value: 'mid', label: 'Mid Level (3-5 years)' },
    { value: 'senior', label: 'Senior Level (6-10 years)' },
    { value: 'lead', label: 'Lead/Principal (10+ years)' }
  ];

  const availabilityOptions = [
    { value: 'immediate', label: 'Immediately' },
    { value: '2-weeks', label: 'Within 2 weeks' },
    { value: '1-month', label: 'Within 1 month' },
    { value: '2-months', label: 'Within 2 months' },
    { value: 'negotiable', label: 'Negotiable' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (field) => (uploadedFiles) => {
    setFiles(prev => ({
      ...prev,
      [field]: uploadedFiles[0] || null
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.position) newErrors.position = 'Position is required';
    if (!formData.experience) newErrors.experience = 'Experience level is required';
    if (!formData.availability) newErrors.availability = 'Availability is required';
    if (!formData.coverLetter.trim()) newErrors.coverLetter = 'Cover letter is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
    if (!files.resume) newErrors.resume = 'Resume is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (onSubmit) {
        onSubmit({ formData, files });
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card padding="p-8" className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Job Application</h2>
        <p className="text-gray-600">
          We're excited to learn more about you! Please fill out this application completely.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <User className="w-5 h-5 mr-2" />
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              error={errors.firstName}
              required
            />
            <Input
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              error={errors.lastName}
              required
            />
            <Input
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
              icon={<Mail className="w-5 h-5" />}
              required
            />
            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              error={errors.phone}
              icon={<Phone className="w-5 h-5" />}
              required
            />
          </div>
        </div>

        {/* Position Information */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Position Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Select
              label="Position Applying For"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              options={positions}
              error={errors.position}
              required
            />
            <Select
              label="Experience Level"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              options={experienceLevels}
              error={errors.experience}
              required
            />
            <Input
              label="Expected Salary"
              name="expectedSalary"
              value={formData.expectedSalary}
              onChange={handleInputChange}
              placeholder="e.g., $80,000 - $100,000"
              helperText="Optional: You can leave this blank"
            />
            <Select
              label="Availability"
              name="availability"
              value={formData.availability}
              onChange={handleInputChange}
              options={availabilityOptions}
              error={errors.availability}
              required
            />
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Professional Links
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="LinkedIn Profile"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleInputChange}
              placeholder="https://linkedin.com/in/yourprofile"
              helperText="Optional but recommended"
            />
            <Input
              label="Portfolio/Website"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleInputChange}
              placeholder="https://yourportfolio.com"
              helperText="Optional: Share your work"
            />
          </div>
        </div>

        {/* File Uploads */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Upload className="w-5 h-5 mr-2" />
            Documents
          </h3>
          <div className="space-y-6">
            <FileUpload
              label="Resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange('resume')}
              error={errors.resume}
              helperText="Please upload your resume in PDF or Word format (max 5MB)"
            />
            <FileUpload
              label="Cover Letter (Optional)"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange('coverLetterFile')}
              helperText="You can upload a cover letter file or write it below"
            />
            <FileUpload
              label="Portfolio/Work Samples (Optional)"
              accept=".pdf,.zip,.rar"
              onChange={handleFileChange('portfolio')}
              helperText="Upload portfolio or work samples if applicable"
            />
          </div>
        </div>

        {/* Cover Letter */}
        <div>
          <Textarea
            label="Cover Letter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleInputChange}
            error={errors.coverLetter}
            rows={6}
            placeholder="Tell us why you're interested in this position and what makes you a great fit..."
            required
          />
        </div>

        {/* Agreements */}
        <div className="space-y-4">
          <Checkbox
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleInputChange}
            label="I agree to the terms and conditions and privacy policy"
            error={errors.agreeToTerms}
          />
          <Checkbox
            id="allowContact"
            name="allowContact"
            checked={formData.allowContact}
            onChange={handleInputChange}
            label="I consent to be contacted regarding this application and future opportunities"
          />
        </div>

        {/* Submit Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
          <Button
            type="submit"
            disabled={isSubmitting}
            icon={<Send className="w-4 h-4" />}
            className="flex-1"
          >
            {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
          </Button>
          {onCancel && (
            <Button
              type="button"
              variant="secondary"
              onClick={onCancel}
              className="flex-1"
            >
              Cancel
            </Button>
          )}
        </div>
      </form>
    </Card>
  );
};

export default JobApplicationForm;
