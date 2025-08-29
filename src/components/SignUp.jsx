import React, { useState } from 'react';

const SignUp = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // ตรวจสอบว่า password ตรงกันหรือไม่
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    console.log('Sign up attempt:', formData);
    // ที่นี่จะเชื่อมต่อกับ backend API
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            📝 RAG Notes
          </h1>
          <div className="flex items-center gap-6 text-sm">
            <span className="text-gray-600">hpotter@example.com</span>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-gray-600 hover:text-gray-800">Dashboard</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Profile</a>
            <a href="#" className="text-red-500 hover:text-red-700">Logout</a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex justify-center items-center px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Create Your Account
          </h2>

          <div className="space-y-5">
            {/* Full Name Field */}
            <div>
              <label 
                htmlFor="fullName" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-3 py-2.5 border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500 transition-colors"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2.5 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2.5 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                required
              />
            </div>

            {/* Confirm Password Field */}
            <div>
              <label 
                htmlFor="confirmPassword" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-3 py-2.5 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                required
              />
            </div>

            {/* Sign Up Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-green-500 text-white py-3 rounded-md font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
            >
              Sign Up
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center mt-6 text-sm text-gray-600">
            Already have an account?{' '}
            <button 
              onClick={onSwitchToLogin}
              className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
            >
              Log In
            </button>
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignUp;