import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="mt-2 px-2">
        <Home />
      </main>
    </div>
  );
};

export default App;
