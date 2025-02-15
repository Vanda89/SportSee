import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router.jsx';
import Header from './components/Header/index.jsx';
import Navbar from './components/NavBar/index.jsx';
import { UserContext } from './contexts/UserContext';
import './style.css';

function App() {
  const [userId, setUserId] = useState(null);
  const [isLinkEnabled, setIsLinkEnabled] = useState(false);

  // Use a Provider to pass the userId and the isLinkEnabled state to all components
  return (
    <React.StrictMode>
      <UserContext.Provider
        value={{ userId, setUserId, isLinkEnabled, setIsLinkEnabled }}
      >
        <BrowserRouter>
          <div className="flex flex-col w-full h-screen xl:overflow-hidden ">
            <Header />
            <div className="flex xl:h-[calc(100%-6rem)]  ">
              <Navbar />
              <Router />
            </div>
          </div>
        </BrowserRouter>
      </UserContext.Provider>
    </React.StrictMode>
  );
}

export default App;
