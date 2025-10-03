import React from 'react';

function SearchBar({ searchTerm, onSearch }) {
  return (
    <div style={{ marginBottom: '15px' }}>
      <input
        type="text"
        placeholder="Search users by name or email..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        
        style={{ 
          padding: '8px', 
          border: '2px solid #7892c6',
          borderRadius: '5px', 
          width: '90%', 
          fontSize: '14px',
          fontFamily: 'inherit',
          color: '#80b486',
          background: 'rgba(255, 255, 255, 0.5)',
        }}
      />
    </div>
  ); 
}

export default SearchBar;