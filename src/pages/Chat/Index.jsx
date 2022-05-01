import React, { useEffect, useState, useContext } from "react";
import io from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
import * as C from "./style";
import { FaAngleRight, FaSignOutAlt } from "react-icons/fa";
import { AppContext } from "../../Context/Store";

import { api } from "../../service/api";

const oldSocket = io("http://localhost:8081");

export default function Chat() {
  const [msg, updateMessege] = useState("");
  const [messages, updateMesseges] = useState([]);
  const { logout, token, currentUserData } = useContext(AppContext);
  const [socket, setSocket] = useState(oldSocket);
  const [myColor, setMyCollor] = useState("");

  const myUserName = JSON.parse(localStorage.getItem("currentUserData")).userName;
  const myId = JSON.parse(localStorage.getItem("currentUserData"))._id;

  function generateColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  useEffect(() => {
    const Newsocket = io("http://localhost:8081", {
      auth: { token: token },
    });

    setSocket(Newsocket);
    setMyCollor(generateColor());
  }, []);

  useEffect(() => {
    if (socket) {
      // socket.auth({ token: "esse token" });
      socket.on("connect", () =>
        console.log(`[IO] Connect => A new connection has been stablished`)
      );
      socket.on("output-message", (data) => {
        updateMesseges(data);
      });
      console.log(
        "this is user id",
        JSON.parse(localStorage.getItem("currentUserData"))._id
      );
    }
  }, [socket]);

  useEffect(() => {
    const handleNewMessage = (newMessage) =>
      updateMesseges([...messages, newMessage]);

    socket.on("chatmessage", handleNewMessage);
    return () => socket.off("chatmessage", handleNewMessage);
  }, [messages, socket]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (msg.trim()) {
      socket.emit("chatmessage", {
        userId: myId,
        userName: myUserName,
        msg: msg,
        msgColor: myColor,
      });
      updateMessege("");
    }
  };

  const handleInputChange = (e) => {
    updateMessege(e.target.value);
  };

  return (
    <C.Container>
      <C.Header>
        <div>
          <h2>Chat</h2>
          <FaSignOutAlt size={20} color="white" onClick={logout} />
        </div>
      </C.Header>
      <br />
      <br />
      <br />
      <C.ChatContainer>
        {messages?.map((m, i) => (
          <div key={i}>
            <div
              className={`message ${m.userId === myId ? "sended" : "recieved"}`}
            >
              <div className="content">
                <p>{m.msg}</p>
                <br />
                <span
                  className="me"
                  style={{
                    color: m.userName === myUserName ? "yellow" : m.msgColor,
                  }}
                >
                  {m.userName === myUserName ? "voce" : m.userName}
                </span>
              </div>
            </div>
          </div>
        ))}
      </C.ChatContainer>
      <br /> <br /> <br /> <br /> <br /> <br />
      <C.FormContainer>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Type a new message here"
            onChange={handleInputChange}
            value={msg}
          ></input>

          <div className="containerButtons">
            <button>
              <FaAngleRight size={25} />
            </button>
          </div>
        </form>
      </C.FormContainer>
    </C.Container>
  );
}
