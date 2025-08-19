import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from './ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="ml-2 text-xl font-bold gradient-text">FlowTech</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Pricing
            </Link>
            
            {/* Dropdown for Dashboard */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                Dashboard
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                  <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Overview
                  </Link>
                  <Link to="/analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Analytics
                  </Link>
                  <Link to="/users" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    User Management
                  </Link>
                  <Link to="/reports" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Reports
                  </Link>
                  <Link to="/status" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    System Status
                  </Link>
                  <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Blog
            </Link>
            <Link to="/careers" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Careers
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <Button size="sm">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link to="/about" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <Link to="/features" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                Features
              </Link>
              <Link to="/pricing" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                Pricing
              </Link>
              <Link to="/dashboard" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                Dashboard
              </Link>
              <Link to="/analytics" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                Analytics
              </Link>
              <Link to="/users" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                Users
              </Link>
              <Link to="/reports" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                Reports
              </Link>
              <Link to="/status" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                Status
              </Link>
              <Link to="/settings" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                Settings
              </Link>
              <Link to="/blog" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                Blog
              </Link>
              <Link to="/careers" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                Careers
              </Link>
              <Link to="/contact" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
              <div className="px-3 py-4 space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  Sign In
                </Button>
                <Button size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
