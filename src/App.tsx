import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SplashScreen from './components/SplashScreen';
import CurtainTransition from './components/CurtainTransition';
import Header from './components/Navigation';
import Footer from './components/Footer';

import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import Gallery from './pages/Gallery';



function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showCurtain, setShowCurtain] = useState(false);
  const [showApp, setShowApp] = useState(false);

  // Handle splash screen timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      setShowCurtain(true);
    }, 3000); // Show splash for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  // When curtain completes, show the main app
  const handleCurtainComplete = () => {
    setShowCurtain(false);
    setShowApp(true);
  };

  if (showSplash) {
    return <SplashScreen/>;
  }

  return (
    <div className="relative">
      {showCurtain && <CurtainTransition isActive={showCurtain} onComplete={handleCurtainComplete} />}

        <Router>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              <Route path="/gallery" element={<Gallery/>} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
    </div>
  );
}

export default App;
