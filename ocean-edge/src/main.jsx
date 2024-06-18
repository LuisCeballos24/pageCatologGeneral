import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Footer from './components/footer';
import Navigation from './components/navigation';
import MainContent from './components/mainContent';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-gray-100">
      <Header />
      <Navigation />
      <MainContent />
      <Footer />
    </div>
  </React.StrictMode>
);
  