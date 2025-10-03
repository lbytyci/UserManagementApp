import React, { useState } from 'react';

function EditUserForm({ user, onUpdate, onCancel }) {
    
   
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone || '');
    const [website, setWebsite] = useState(user.website || '');
    const [validationError, setValidationError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidationError(''); 

       
        if (!name.trim() || !email.trim()) {
            setValidationError('Name and Email are required.');
            return;
        }

        
        const updatedUser = {
            ...user, 
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            website: website.trim()
        };

        onUpdate(updatedUser); 
    };

   
    const inputStyle = {
        padding: '8px',
        border: '2px solid #7892c6',
        borderRadius: '4px',
        background: 'rgba(255, 255, 255, 0.8)',
        color: '#333',
        fontFamily: 'inherit',
        marginBottom: '10px'
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
    

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ color: '#7892c6', borderBottom: '1px solid #80b486', paddingBottom: '5px' }}>
                Editing User: {user.name}
            </h3>

            <label style={{ color: '#7892c6' }}>Name *</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />

            <label style={{ color: '#7892c6' }}>Email *</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />

            <label style={{ color: '#7892c6' }}>Phone</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} />
            
            <label style={{ color: '#7892c6' }}>Website</label>
            <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} style={inputStyle} />
            
            {validationError && (
                <p style={{ color: '#563e0c89', margin: '0 0 10px 0', fontSize: '12px', fontWeight: 'bold' }}>
                    {validationError}
                </p>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                <button type="submit" style={{ ...buttonStyle, background: '#80b486' }}>Save Changes</button>
                <button type="button" onClick={onCancel} style={{ ...buttonStyle, background: '#7892c6' }}>Cancel</button>
            </div>
        </form>
    );
}


export default EditUserForm;