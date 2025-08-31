import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const EditNote = ({ user, onLogout }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mock note data - ในความเป็นจริงจะดึงจาก API ตาม id
  const [formData, setFormData] = useState({
    title: 'Domain 3 - 3.1 Lesson 2',
    content: `Describe Design Considerations for Applications that Use FMS

Let's continue with task statement 3.1, and talk about another consideration, biases that might be present in the training data. It's important to understand how to mitigate risks, address ethical concerns, and make informed decisions about model selection and fine-tuning. Another consideration is the availability and compatibility of the pre-trained model. You can find many`,
    tags: 'AIF-C01-English',
    pinned: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ที่นี่จะเรียก API เพื่อ update note
    console.log('Updated note:', formData);
    alert('Note saved successfully!');
    navigate(`/note/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">📝</span>
            <span className="text-xl font-semibold text-blue-600">RAG Notes</span>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <span className="text-gray-600">{user?.email}</span>
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-800">Dashboard</Link>
            <Link to={`/profile/${user?.email}`} className="text-gray-600 hover:text-gray-800">Profile</Link>
            <button onClick={onLogout} className="text-red-600 hover:text-red-800">Logout</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-3 text-xl font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Content */}
          <div>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={15}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
              required
            />
          </div>

          {/* Tags */}
          <div>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="Enter tags separated by commas"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Pin checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="pinned"
              name="pinned"
              checked={formData.pinned}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="pinned" className="ml-2 text-sm text-gray-700">
              Pinned: ✓
            </label>
          </div>

          {/* Save Button */}
          <div className="flex justify-start">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
            >
              Save Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNote;