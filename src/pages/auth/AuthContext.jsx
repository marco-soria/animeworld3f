import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isUserAuthenticated, setIsUserAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};