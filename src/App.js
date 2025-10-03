import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Header from './components/Header';       
import FloatingElements from './components/FloatingElements'; 


import UserListPage from './pages/UserListPage';    
import UserDetailPage from './pages/UserDetailPage'; 

function App() {
  return (
   
    <div className="App-Container"> 
      <Header />
      <FloatingElements />
      
     
      <div className="player-container"> 
        <Routes>
      
          <Route path="/" element={<UserListPage />} />
         
          <Route path="/user/:id" element={<UserDetailPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;