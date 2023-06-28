import React, { createContext, useEffect, useState } from "react";
import useStorage from "../utils/useStorage";
import isTokenExpired from "../utils/verifyToken";

const initialState = {
  token: String,
  currentUserData: Object,
  setCurrentUserData: Function,
  setToken: Function,
  logout: () => {},
};

const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const [token, setToken] = useStorage("token");
  const [currentUserData, setCurrentUserData] = useStorage("currentUserData");

  function updateState(key, value) {
    setState({
      ...state,
      [key]: value,
    });
  }

  const logout = () => {
    // Lógica para desautenticar o usuário e limpar o estado do usuário
    setToken("");
    setCurrentUserData("");
    window.location.href = "/";
  };

  useEffect(() => {
    if (token) {
      const isExpired = isTokenExpired(token);
      if (isExpired) {
        logout();
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        setCurrentUserData,
        currentUserData,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
