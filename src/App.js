import React from 'react';
import Navbar from './Navbar';
import './input.css';

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <div className="container mx-auto px-4 mt-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to my portfolio website</h1>
        <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet magna felis, at iaculis sapien ultricies eu.</p>
        <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn more</a>
      </div>
    </div>
  );
}

export default App;
