import React from "react";

import { Routes, BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRouter";

import Register from "../pages/Register";
import Login from "../pages/Login";
import DashBoard from "../pages/Chat/Index";
import Contacts from "../pages/Contacts";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/chat"
          element={
            <PrivateRoute redirectTo="/">
              <DashBoard />
            </PrivateRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/">
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
