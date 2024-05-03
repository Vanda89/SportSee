import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Router from './Router';
import Navbar from './components/NavBar';
import './index.css';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <div className="flex">
          <Navbar />
          <Router />
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
