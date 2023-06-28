import React from "react";
import { BrowserRouter, Routes, HashRouter, Route } from "react-router-dom";
import LoginRegister from "./Pages/LoginRegister";
import PrivateRoutes from "./utils/PrivateRoutes";
import CurrentChat from "./Pages/CurrentChat";
import ChatPage from "./Pages/ChatPage";
import AddNewUserArea from "./Pages/AddNewUserArea";

export default function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginRegister />} />

        <Route element={<PrivateRoutes />}>
          <Route exact path="/chats" element={<ChatPage />} />
          <Route exact path="/privatechat/:friendId/:currentchatId" element={<CurrentChat />} />
          <Route exact path="/addnewchat" element={<AddNewUserArea />} />
        </Route>

        <Route
          path="*"
          element={
            <h1 style={{ color: "white", padding: "20px" }}>
              Essa pagina não existe :/
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
