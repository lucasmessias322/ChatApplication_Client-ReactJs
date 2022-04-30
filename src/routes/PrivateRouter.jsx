import React, { useContext } from "react";
import { Navigate} from "react-router-dom";
import { AppContext } from "../Context/Store";

const PrivateRoute = ({ children, redirectTo }) => {
  const { token } = useContext(AppContext);
  const isAuthenticated = token;
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
