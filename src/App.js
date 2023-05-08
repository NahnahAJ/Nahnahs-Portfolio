import React from 'react';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import './input.css';

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
