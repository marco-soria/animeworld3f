import React, { createContext, useState } from 'react';
import { postLoginService } from '../../services/auth_services';
import { isAuthenticated } from '../../helpers/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(isAuthenticated());

  const updateAuthentication = () => {
    setIsUserAuthenticated(isAuthenticated());
  };

  return (
    <AuthContext.Provider value={{ isUserAuthenticated, updateAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};