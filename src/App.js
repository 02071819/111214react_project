import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import { DataProvider } from './components/Context'

function App() {
  return (
    <DataProvider>
      <div className="app">
        <Router>
          <Header />
          <Section />
          <Footer />
        </Router>
      </div>
    </DataProvider>
  );

}

export default App;