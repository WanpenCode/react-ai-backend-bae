import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateNoteModal from './CreateNoteModal';

const Dashboard = ({ user, onLogout }) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for notes
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Algorithm: Insertion Sort',
      content: 'Insertion Sort processes the list from left to right, taking each element in turn and shifting it leftward through the already-sorted portion until it meets a smaller or...',
      tags: ['#DSA'],
      pinned: true,
      createdDate: '6/28/2025'
    },
    {
      id: 2,
      title: 'Prompt: Algorithms',
      content: 'Explain how Bubble Sort algorithm works in two sentences in English. Explain how Bubble Sort algorithm works in two sentences in Thai language whilst keepi...',
      tags: ['#Prompt'],
      pinned: true,
      createdDate: '6/28/2025'
    },
    {
      id: 3,
      title: 'Algorithm: Bubble Sort',
      content: 'Bubble Sort repeatedly steps through the list, comparing each adjacent pair of elements and swapping them when they are in the wrong order. With each pass t...',
      tags: ['#DSA'],
      pinned: true,
      createdDate: '6/28/2025'
    },
    {
      id: 4,
      title: 'Domain 4 - 4.2 Lesson 2',
      content: 'Recognize the Importance of Transparent and Explainable Models Let\'s wrap up the second task statement from Domain 4, which is to recognize the importance of...',
      tags: ['#AIF-C01-English'],
      pinned: false,
      createdDate: '6/21/2025'
    },
    {
      id: 5,
      title: 'Domain 3 - 3.1 Lesson 4',
      content: 'Describe Design Considerations for Applications that Use FMS Let\'s continue with task statement 3.1 and pick up from the last lesson. RAG combines two...',
      tags: ['#AIF-C01-English'],
      pinned: false,
      createdDate: '6/21/2025'
    },
    {
      id: 6,
      title: 'Domain 4 - 4.2 Lesson 1',
      content: 'Recognize the Importance of Transparent and Explainable Models Let\'s move on to the second task statement from Domain 4, which is to recognize the importance of...',
      tags: ['#AIF-C01-English'],
      pinned: false,
      createdDate: '6/21/2025'
    },
    {
      id: 7,
      title: 'Domain 4 - 4.1 Lesson 3',
      content: 'Explain the Development of AI Systems that are Responsible Let\'s continue with task statement 4.1 which talks about the development of AI systems that are responsible...',
      tags: ['#AIF-C01-English'],
      pinned: false,
      createdDate: '6/21/2025'
    },
    {
      id: 8,
      title: 'Domain 4 - 4.1 Lesson 2',
      content: 'Explain the Development of AI Systems that are Responsible Let\'s continue with task statement 4.1 which talks about the development of AI systems that are responsible...',
      tags: ['#AIF-C01-English'],
      pinned: false,
      createdDate: '6/21/2025'
    },
    {
      id: 9,
      title: 'Domain 4 - 4.1 Lesson 1',
      content: 'Explain the Development of AI Systems that are Responsible Let\'s get started with task statement 4.1 from domain 4...',
      tags: ['#AIF-C01-English'],
      pinned: false,
      createdDate: '6/21/2025'
    }
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const handleCreateNote = (newNote) => {
    const note = {
      id: notes.length + 1,
      ...newNote,
      createdDate: new Date().toLocaleDateString()
    };
    setNotes([note, ...notes]);
    setShowCreateModal(false);
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6 flex items-center">
            Welcome, {user?.name} <span className="ml-2">👋</span>
          </h1>
          
          {/* Search and Create */}
          <div className="flex gap-4 mb-6">
            <form onSubmit={handleSearch} className="flex-1">
              <input
                type="text"
                placeholder="Search notes by title, content, or tags"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </form>
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Search
            </button>
          </div>
          
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-200"
          >
            Create Note
          </button>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note) => (
            <div key={note.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200">
              {note.pinned && (
                <div className="flex items-center text-orange-600 text-sm mb-2">
                  <span className="mr-1">📌</span>
                  Pinned
                </div>
              )}
              
              <h3 className="font-semibold text-lg mb-3">{note.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{note.content}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {note.tags.map((tag, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Created on: {note.createdDate}</span>
                <div className="flex space-x-2">
                  <Link
                    to={`/note/${note.id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    View Details
                  </Link>
                  <Link
                    to={`/note/${note.id}/edit`}
                    className="text-green-600 hover:text-green-800"
                  >
                    Edit
                  </Link>
                  <button className="text-red-600 hover:text-red-800">Delete</button>
                  <button className="text-orange-600 hover:text-orange-800">Unpublish</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Note Modal */}
      {showCreateModal && (
        <CreateNoteModal
          onClose={() => setShowCreateModal(false)}
          onCreateNote={handleCreateNote}
        />
      )}
    </div>
  );
};

export default Dashboard;