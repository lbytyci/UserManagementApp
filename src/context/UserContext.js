import React, { createContext, useState, useEffect } from 'react';

const API_URL = "https://jsonplaceholder.typicode.com/users";


export const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

 
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching initial users:", error);
        setIsLoading(false);
      });
  }, []);



  const addUser = (newUser) => {
   
    const tempId = Date.now().toString(); 
    const userWithId = { ...newUser, id: tempId };
    setUsers(prevUsers => [userWithId, ...prevUsers]);
  };

  const deleteUser = (userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id.toString() !== userId.toString()));
  };

  const updateUser = (updatedUser) => {
    setUsers(prevUsers => 
      prevUsers.map(user => 
        user.id.toString() === updatedUser.id.toString() 
          ? updatedUser 
          : user
      )
    );
  };
  
  const findUserById = (userId) => {
      return users.find(u => u.id.toString() === userId.toString());
  };


  const contextValue = {
    users,
    isLoading,
    addUser,
    deleteUser,
    updateUser,
    findUserById,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};