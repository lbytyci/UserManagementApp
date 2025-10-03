import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css'; 
import { UserProvider } from './context/UserContext'; 

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router> 
      <UserProvider> 
        <App />
      </UserProvider>
    </Router>
  </React.StrictMode>
);