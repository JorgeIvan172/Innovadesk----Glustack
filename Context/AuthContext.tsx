// AuthContext.tsx
import React, { createContext, useContext, ReactNode, useState } from 'react';

interface UserData {
  name: string;
  email: string;
  phone: string;
  address: string;
  // Añade otros campos según sea necesario
}

interface AuthContextType {
  userData: UserData | null;
  login: (user: UserData) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  const login = (user: UserData) => {
    setUserData(user);
  };

  const logout = () => {
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
