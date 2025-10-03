import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserList({ users }) {
  const navigate = useNavigate();
  
 
  if (!users || !Array.isArray(users)) {
    
    return <p style={{ color: '#80b486', textAlign: 'center' }}>Loading user list...</p>;
  }

  
  const listStyle = { 
    maxHeight: '250px', 
    overflowY: 'auto', 
    border: '1px solid #7892c6', 
    borderRadius: '5px', 
    padding: '5px',
    backgroundColor: 'white',
  };

  const listItemStyle = {
    textAlign: 'left',
    padding: '8px',
    margin: '5px 0',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '4px',
    cursor: 'pointer',
    borderLeft: '4px solid #80b486',
    transition: 'background 0.2s',
  };

  return (
    <div style={listStyle}>
      {users.length === 0 ? (
        <p style={{ color: '#80b486' }}>No users found matching the search.</p>
      ) : (
        users.map(user => (
          <div 
            key={user.id} 
            onClick={() => navigate(`/user/${user.id}`)} 
            style={listItemStyle}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
          >
            <strong style={{ color: '#7892c6' }}>{user.name}</strong> 
          
            <span style={{ float: 'right', color: '#7892c6', fontSize: '12px' }}>{user.company?.name || 'N/A'}</span>
            <br/>
            <small style={{ color: '#80b486' }}>{user.email}</small>
          </div>
        ))
      )}
    </div>
  );
}

export default UserList;