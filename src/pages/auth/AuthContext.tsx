import type { ReactNode } from "react";
import { createContext, useState } from "react";
import { isAuthenticated } from "../../helpers/auth";

interface AuthContextType {
  isUserAuthenticated: boolean;
  updateAuthentication: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isUserAuthenticated, setIsUserAuthenticated] =
    useState<boolean>(isAuthenticated());

  const updateAuthentication = (): void => {
    setIsUserAuthenticated(isAuthenticated());
  };

  return (
    <AuthContext.Provider value={{ isUserAuthenticated, updateAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};
