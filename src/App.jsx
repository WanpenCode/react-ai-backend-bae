import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import ViewNote from './components/ViewNote';
import EditNote from './components/EditNote';
import PublicProfile from './components/PublicProfile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/login" 
            element={
              !isAuthenticated ? 
              <Login onLogin={handleLogin} /> : 
              <Navigate to="/dashboard" />
            } 
          />
          <Route 
            path="/signup" 
            element={
              !isAuthenticated ? 
              <SignUp onSignUp={handleLogin} /> : 
              <Navigate to="/dashboard" />
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              isAuthenticated ? 
              <Dashboard user={user} onLogout={handleLogout} /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/note/:id" 
            element={
              isAuthenticated ? 
              <ViewNote user={user} onLogout={handleLogout} /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/note/:id/edit" 
            element={
              isAuthenticated ? 
              <EditNote user={user} onLogout={handleLogout} /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/profile/:email" 
            element={<PublicProfile />} 
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;