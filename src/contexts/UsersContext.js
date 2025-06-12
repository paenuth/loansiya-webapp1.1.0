import React, { createContext, useState } from 'react';

export const UsersContext = createContext({
  users: [],
  addUser: (user) => {},
  updateUser: (user) => {},
});

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, {
      ...user,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user =>
      user.id === updatedUser.id ? {
        ...user,
        ...updatedUser,
        updatedAt: new Date().toISOString()
      } : user
    ));
  };

  return (
    <UsersContext.Provider value={{
      users,
      addUser,
      updateUser,
    }}>
      {children}
    </UsersContext.Provider>
  );
};