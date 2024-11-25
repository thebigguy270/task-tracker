import React, { createContext, useState, useEffect } from 'react';

// Create authentication context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check token on initial load
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  const login = () => {
    localStorage.setItem('authToken', 'your-auth-token');
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
