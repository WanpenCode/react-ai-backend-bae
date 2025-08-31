import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const PublicProfile = () => {
  const { email } = useParams();
  const [question, setQuestion] = useState('');
  
  // Mock public profile data
  const profileData = {
    name: "Neetibut Vasinondha",
    email: email || "neetibut@example.com"
  };
  
  // Mock public notes
  const publicNotes = [
    {
      id: 1,
      title: 'Algorithm: Bubble Sort',
      content: 'Bubble Sort repeatedly steps through the list, comparing each adjacent pair of elements and swapping them when they are in the wrong order. With each pass t...',
      tags: ['#DSA']
    },
    {
      id: 2,
      title: 'Algorithm: Insertion Sort',
      content: 'Insertion Sort processes the list from left to right, taking each element in turn and shifting it leftward through the already-sorted portion until it meets a smaller or...',
      tags: ['#DSA']
    }
  ];

  const handleAskQuestion = (e) => {
    e.preventDefault();
    // ที่นี่จะเรียก API เพื่อส่งคำถาม
    console.log('Question asked:', question);
    alert('Question submitted successfully!');
    setQuestion('');
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
            <span className="text-gray-600">{profileData.email}</span>
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-800">Dashboard</Link>
            <Link to="/profile" className="text-gray-600 hover:text-gray-800">Profile</Link>
            <button className="text-red-600 hover:text-red-800">Logout</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 max-w-6xl">
        {/* Profile Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">{profileData.name}'s Public Profile</h1>
          <p className="text-gray-600">Email: {profileData.email}</p>
        </div>

        {/* Ask Question Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Ask a Question About Notes</h2>
          <form onSubmit={handleAskQuestion} className="flex gap-4">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a question about the notes..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Ask
            </button>
          </form>
        </div>

        {/* Public Notes */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Public Notes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publicNotes.map((note) => (
              <div key={note.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200">
                <h3 className="font-semibold text-lg mb-3">{note.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{note.content}</p>
                
                <div className="flex flex-wrap gap-2">
                  {note.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicProfile;