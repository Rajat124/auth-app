import React, { useContext, useState } from "react";

const Auth = React.createContext();

export const AuthContext = () => {
  return useContext(Auth);
};

const Context = (props) => {
  const [token, setToken] = useState(null);

  const usersIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };
  const logoutHandler = () => {
    setToken(null);
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
