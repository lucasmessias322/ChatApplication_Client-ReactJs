import axios from "axios";

const localhost = "http://192.168.0.4:8081";

export const BaseUrl = localhost;

const api = axios.create({
  baseURL: BaseUrl,
});

export async function postLogin(data) {
  return api
    .post("/auth/login", data)
    .then((response) => response)
    .catch((error) => console.log(error));
}

export async function postRegister(data) {
  return api
    .post("/auth/register", data)
    .then((response) => response)
    .catch((error) => console.log(error));
}

export async function getUsers(token) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return api
    .get("/api/users", config)
    .then((response) => response)
    .catch((error) => console.log(error));
}

export async function getUser({ token, userId }) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return api
    .get(`/api/user/${userId}`, config)
    .then((response) => response)
    .catch((error) => console.log(error));
}

export async function getMessages({ token, conversationId }) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return api
    .get(`/api/messages/${conversationId}`, config)
    .then((response) => response)
    .catch((error) => console.log(error));
}

export async function postMessage({ token, data }) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await api.post("/api/messages", data, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getConversations({ token, userId }) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await api.get(`/api/conversations/${userId}`, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
