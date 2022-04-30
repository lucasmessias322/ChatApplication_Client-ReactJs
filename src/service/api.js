import axios from "axios";
import React, { useContext } from "react";

export const api = axios.create({
  baseURL: "http://localhost:8081",
});

export const config = (token) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

export function postLogin(email, password) {
  let data = {
    email: email,
    password: password,
  };

  let loginUser = api.post("/auth/login", data);

  return loginUser;
}

export function postRegister(data) {
 const registerUser = api.post("/auth/register", data)
 return registerUser
}

export function getUserdata(userId, config) {
  let userData = api
    .get(`/user/${userId}`, config)
    .then((response) => response.data)
    .catch((error) => console.log(error));

  return userData;
}


