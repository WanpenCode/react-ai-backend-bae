import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = ({ onSignUp }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    // ที่นี่จะเรียก API ไป backend
    // ตอนนี้จำลองการ signup สำเร็จ
    onSignUp({
      name: formData.fullName,
      email: formData.email
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 bg-white shadow-sm">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">📝</span>
            <span className="text-xl font-semibold text-blue-600">RAG Notes</span>
          </div>
          <div className="space-x-4 text-sm">
            <span className="text-gray-600">neetibut@example.com</span>
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-800">Dashboard</Link>
            <Link to="/profile" className="text-gray-600 hover:text-gray-800">Profile</Link>
            <button className="text-red-600 hover:text-red-800">Logout</button>
          </div>
        </div>
      </div>

      {/* SignUp Form */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-20">
        <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? 
          <Link to="/login" className="text-blue-600 hover:text-blue-800 ml-1">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;