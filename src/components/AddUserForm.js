

import React, { useState } from 'react';

function AddUserForm({ onAddUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationError(''); 

    // Validation
    if (!name.trim() || !email.trim()) {
      setValidationError('Name and Email are required.');
      return;
    }

    const newUser = {
      name: name.trim(),
      email: email.trim(),
      
      username: '',
      address: { 
        street: 'N/A', 
        suite: 'N/A', 
        city: 'Local Entry', 
        zipcode: 'N/A' 
      },
      phone: 'N/A',
      website: 'N/A',
      company: { name: 'Local Entry' }
    };

    onAddUser(newUser);

    
    setName('');
    setEmail('');
  };

  return (
    <div style={formContainerStyle}>
      <h3 style={headerStyle}>Add New User (Local)</h3>
      <form onSubmit={handleSubmit} style={formStyle}>
        
        <input
          type="text"
          placeholder="Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        {validationError && (
          <p style={errorStyle}>{validationError}</p>
        )}
        
        <button type="submit" style={buttonStyle}>
          Insert at Top
        </button>
      </form>
    </div>
  );
}


const formContainerStyle = {
  padding: '15px', 
  border: '2px dashed #7892c6', 
  borderRadius: '8px', 
  marginBottom: '20px',
  background: 'rgba(255, 255, 255, 0.1)',
};

const headerStyle = {
  color: '#7892c6', 
  margin: '0 0 10px 0', 
  fontSize: '16px',
  borderBottom: '1px solid #80b486',
  paddingBottom: '5px',
};

const formStyle = { 
  display: 'flex', 
  flexDirection: 'column', 
  gap: '10px' 
};

const inputStyle = {
  padding: '8px',
  border: '2px solid #7892c6',
  borderRadius: '4px',
  background: 'rgba(255, 255, 255, 0.8)',
  color: '#333',
  fontFamily: 'inherit',
};

const buttonStyle = {
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  background: '#80b486',
  color: 'white',
  cursor: 'pointer',
  fontFamily: 'inherit',
  transition: 'background 0.2s',
};

const errorStyle = {
  color: '#7892c6', 
  margin: '0', 
  fontSize: '12px', 
  fontWeight: 'bold'
};

export default AddUserForm;