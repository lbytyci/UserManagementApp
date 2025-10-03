import React, { useState, useMemo, useContext } from 'react'; 
import UserList from '../components/UserList';
import SearchBar from '../components/SearchBar';
import AddUserForm from '../components/AddUserForm';
import { UserContext } from '../context/UserContext';

function UserListPage() {
 
  const { users, isLoading, addUser } = useContext(UserContext); 

  
  const [searchTerm, setSearchTerm] = useState('');
  


 
  const handleAddUser = (newUser) => {
  
    addUser(newUser);
  };
  
  
  const filteredUsers = useMemo(() => {
   
    if (!users || !Array.isArray(users)) return []; 
    
    if (!searchTerm) return users;
    const lowerSearchTerm = searchTerm.toLowerCase();

    return users.filter(user => 
      user.name.toLowerCase().includes(lowerSearchTerm) ||
      user.email.toLowerCase().includes(lowerSearchTerm)
    );
  }, [users, searchTerm]); 
  

  if (isLoading) {
    return (
      <div className="pixel-frame screen">
        <p className="user-title">Loading User Data...</p>
      </div>
    );
  }

  return (
    <div className="pixel-frame">
      <div className="screen">
        
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />

        <AddUserForm onAddUser={handleAddUser} />
        
        <p className="user-title">Displaying {filteredUsers.length} Users</p>
        
        <UserList users={filteredUsers} />
      </div>
    </div>
  );
}

export default UserListPage;