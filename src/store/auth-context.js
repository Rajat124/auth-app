import React, { useContext, useEffect, useState } from "react";

const Auth = React.createContext();

export const AuthContext = () => {
  return useContext(Auth);
};

const Context = (props) => {
  const intialtoken = localStorage.getItem("token");
  const [token, setToken] = useState(intialtoken);

  const usersIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  setTimeout(() => {
    localStorage.removeItem("token");
  }, 30000);

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    isLoggedIn: usersIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <Auth.Provider value={{ contextValue }}>{props.children}</Auth.Provider>
  );
};

export default Context;
