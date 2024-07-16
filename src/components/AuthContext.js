import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("userName");
    if (storedUsername) {
      setUsername(storedUsername);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (username) => {
    sessionStorage.setItem("userName", username);
    setUsername(username);
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem("userName");
    setUsername("");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
