import React, { useEffect, useState, useContext } from "react";
import io from "socket.io-client";
import * as C from "./style";
import { FaAngleRight, FaSignOutAlt } from "react-icons/fa";
import { AppContext } from "../../Context/Store";

import Message from "../../components/Message";
const SocketUrl = "http://192.168.0.5:8082";
const oldSocket = io();

export default function Chat() {
  const [msg, updateMessege] = useState("");
  const [messages, updateMesseges] = useState([]);
  const { logout, token, currentUserData } = useContext(AppContext);
  const [socket, setSocket] = useState(oldSocket);
  const [myColor, setMyCollor] = useState("");

  const myUserName = JSON.parse(
    localStorage.getItem("currentUserData")
  ).userName;
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
    const Newsocket = io(SocketUrl, {
      auth: { token: token },
    });

    setSocket(Newsocket);
    setMyCollor(generateColor());
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("connect", () =>
        console.log(`[IO] Connect => A new connection has been stablished`)
      );
      socket.on("output-message", (data) => {
        updateMesseges(data);
      });
    }
  }, [socket]);

  useEffect(() => {
    const handleNewMessage = (newMessage) =>
      updateMesseges([...messages, newMessage]);
    const heigthPage = document.body.scrollHeight;
    window.scrollTo(0, heigthPage);

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

  function getCurrentTimeMessage(time) {
    let date;
    if (time) {
      date = new Date(time);
    } else {
      date = new Date();
    }

    return `${date.getHours()}:${date.getMinutes()}`;
  }

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
          <Message
            key={i}
            MsgColor={m.msgColor}
            UserName={m.userName}
            MyUserName={myUserName}
            UserId={m.userId}
            MyId={myId}
            GetTime={getCurrentTimeMessage(m.createdAt)}
            Message={m.msg}
          />
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
