import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Card from './Card.jsx'; // Ensuring the .jsx extension is there
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Navbar />

      {/* --- ABOUT SECTION (Linked to Navbar) --- */}
      <section id="about" className="about-section">
        <h2>About This Web</h2>
        <p>
           This web is the GOAT(Greatest Of All Time) web ever created. This is a masterpiece, an art. 
        </p>
      </section>
      
      {/* --- NEW CARD CONTENT --- */}
      <main className="main-content">
        <Card 
          title="Best Web in 2026" 
          description="Wow this is the best website i ever seen! -someone" 
        />
        <Card 
          title="Most fun website" 
          description="This website is so much fun to explore. -some kid in the playground" 
        />
        <Card 
          title="Most beautiful website" 
          description="This is litterally a masterpiece of web design. -an art critic" 
        />
      </main>

      <Footer />
    </div>
  );
};

export default Home;