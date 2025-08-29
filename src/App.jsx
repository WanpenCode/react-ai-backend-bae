import React, { useState } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const [currentPage, setCurrentPage] = useState('login'); // 'login' หรือ 'signup'

  return (
    <div className="App">
      {currentPage === 'login' ? (
        <Login onSwitchToSignUp={() => setCurrentPage('signup')} />
      ) : (
        <SignUp onSwitchToLogin={() => setCurrentPage('login')} />
      )}
    </div>
  );
}

export default App;