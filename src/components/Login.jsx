import React, { useState } from 'react';

const Login = ({ onSwitchToSignUp }) => {
  const [formData, setFormData] = useState({
    email: 'hpotter@example.com',
    password: ''
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
    console.log('Login attempt:', formData);
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
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
              Login
            </button>
            <button 
              onClick={onSwitchToSignUp}
              className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
            >
              Signup
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex justify-center items-center px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Login to Your Account
          </h2>

          <div className="space-y-6">
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
                placeholder="••••••••••••"
                className="w-full px-3 py-2.5 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                required
              />
            </div>

            {/* Login Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Login
            </button>
          </div>

          {/* Signup Link */}
          <p className="text-center mt-6 text-sm text-gray-600">
            Don't have an account?{' '}
            <button 
              onClick={onSwitchToSignUp}
              className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
            >
              Sign up
            </button>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;