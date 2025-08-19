import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotificationProvider from './components/ui/Notifications';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import FAQ from './pages/FAQ/FAQ';
import Careers from './pages/Careers/Careers';
import Analytics from './pages/Analytics';
import UserManagement from './pages/UserManagement';
import Settings from './pages/Settings';
import Reports from './pages/Reports';
import Status from './pages/Status';

function App() {
  return (
    <NotificationProvider>
      <Router>
        <div className="App min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/users" element={<UserManagement />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/status" element={<Status />} />
              {/* Catch-all route for 404s - redirect to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </NotificationProvider>
  );
}

export default App;
