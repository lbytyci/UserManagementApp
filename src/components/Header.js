import React from 'react';
import minimizeImg from '../assets/minimize.png'; 
import closeImg from '../assets/x.png'; 

function Header() {
  

  const handleWindowControl = (action) => {
   
    if (window.electronAPI) {
      if (action === 'minimize') {
        
        window.electronAPI.minimizeWindow();
      } else if (action === 'close') {
       
        window.electronAPI.closeWindow();
      }
    } else {
      console.log(`[Browser Mode] ${action} button clicked.`);
    }
  };

  return (
    <div className="title-bar">
      <div className="drag-region">PersonaDesk</div>
      <div className="window-controls">
       
        <button className="min-btn" title="Minimize" onClick={() => handleWindowControl('minimize')}>
          <img src={minimizeImg} alt="Minimize" />
        </button>
       
        <button className="close-btn" title="Close" onClick={() => handleWindowControl('close')}>
          <img src={closeImg} alt="Close" />
        </button>
      </div>
    </div>
  );
}

export default Header;