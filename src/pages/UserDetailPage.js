import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import EditUserForm from '../components/EditUserForm';
const API_URL = "https://jsonplaceholder.typicode.com/users";

function UserDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { deleteUser, findUserById, updateUser } = useContext(UserContext);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setIsLoading(true);


    if (isNaN(parseInt(id))) {
      const localUser = findUserById(id);
      if (localUser) {
        setUser(localUser);
      } else {
        setUser(null);
      }
      setIsLoading(false);
      return;
    }


    fetch(`${API_URL}/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.id) {
          setUser(data);
        } else {
          setUser(null);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching user details:", error);
        setUser(null);
        setIsLoading(false);
      });
  }, [id, findUserById]);

  useEffect(() => {
    if (!isEditing) {
      const contextUser = findUserById(id);
      if (contextUser && contextUser !== user) {
        setUser(contextUser);
      }
    }
  }, [id, findUserById, isEditing, user]);

  const handleUpdate = (updatedUser) => {
    updateUser(updatedUser);
    setUser(updatedUser);
    setIsEditing(false);
  };


  const handleDelete = () => {
    deleteUser(id);
    navigate('/');
  };


  if (isLoading) {
    return <p className="user-title">Fetching User Details...</p>;
  }

  if (!user) {
    return (
      <div className="pixel-frame screen">
        <p style={{ color: 'red' }}>User not found.</p>
        <button onClick={() => navigate('/')} style={backButtonStyle}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="pixel-frame screen" style={{ textAlign: 'left', padding: '15px' }}>

      {isEditing ? (

        <EditUserForm
          user={user}
          onUpdate={handleUpdate}
          onCancel={() => setIsEditing(false)}
        />
      ) : (

        <>
          <h2 style={headerStyle}>
            {user.name} Details
          </h2>

          <p style={detailItemStyle}>**Email:** {user.email ?? 'N/A'}</p>
          <p style={detailItemStyle}>**Phone:** {user.phone ?? 'N/A'}</p>
          <p style={detailItemStyle}>**Website:** {user.website ?? 'N/A'}</p>
          <p style={detailItemStyle}>
            **Address:** {user.address?.street ?? 'N/A'}, {user.address?.suite ?? 'N/A'}, {user.address?.city ?? 'N/A'}, {user.address?.zipcode ?? 'N/A'}
          </p>
          <p style={detailItemStyle}>**Company:** {user.company?.name ?? 'N/A'}</p>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', gap: '10px' }}>
            <button onClick={() => navigate('/')} style={{ ...backButtonStyle, background: '#8764199b' }}>
              Go Back
            </button>

            <button onClick={() => setIsEditing(true)} style={{ ...backButtonStyle, background: '#7892c6' }}>
              Edit User
            </button>

            <button onClick={handleDelete} style={{ ...backButtonStyle, background: '#bb5b5bff' }}>
              Delete User
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const headerStyle = {

  color: '#7892c6',
  borderBottom: '2px solid #80b486',
  paddingBottom: '5px',
  fontSize: '18px'
};



const detailItemStyle = {

  color: '#7892c6',
  margin: '8px 0',
  fontSize: '14px',
  lineHeight: '1.4'
};



const backButtonStyle = {

  marginTop: '20px',
  padding: '10px 15px',
  border: '2px solid #7892c6',
  background: '#80b486;',
  color: 'white',
  cursor: 'pointer',
  fontFamily: 'inherit',
  borderRadius: '4px',
};

export default UserDetailPage;