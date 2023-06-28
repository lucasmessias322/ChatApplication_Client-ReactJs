// import React, { useContext, useEffect, useState } from "react";
// import styled from "styled-components";
// import { IoSend } from "react-icons/io5";
// import { BsEmojiLaughingFill, BsArrowLeft } from "react-icons/bs";
// import io from "socket.io-client";
// import { BaseUrl, getUser, getMessages } from "../../services/apiService";
// import { Link, useParams } from "react-router-dom";
// import { AuthContext } from "../../Context/AuthContext";

// export default function CurrentChat() {
//   const { token, currentUserData } = useContext(AuthContext);
//   const [messageInput, setMessageInput] = useState("");
//   const [userData, setUserdata] = useState([]);
//   const [messages, setMessages] = useState([]);

//   const username = useParams().username;

//   const socket = io.connect(BaseUrl, {
//     auth: {
//       token: `Bearer ${token}`,
//     },
//   });

//   const sendMessage = () => {
//     if (messageInput.trim() !== "") {
//       const message = {
//         sender: currentUserData._id,
//         recipient: userData._id,
//         content: messageInput,
//         isSender: true,
//       };
//       setMessageInput("");
//       socket.emit("send_message", message, () => {
//         setMessages((prevMessages) => [...prevMessages, message]);
//       });
//     }
//   };

//   useEffect(() => {
//     getUser({ token, username }).then((res) => {
//       setUserdata(res.data);
//     });
//   }, []);

//   useEffect(() => {
//     if (userData._id) {
//       getMessages({
//         token,
//         userAId: currentUserData._id,
//         userBId: userData._id,
//       }).then((res) => {
//         setMessages(res.data);
//       });
//     }
//   }, [userData]);

//   useEffect(() => {
//     const receivedMessageHandler = (message) => {
//       const receivedMessage = {
//         ...message,
//         isSender: false,
//       };

//       setMessages((prevMessages) => prevMessages.concat(receivedMessage));
//     };

//     socket.on("received_message", receivedMessageHandler);

//     return () => {
//       socket.off("received_message", receivedMessageHandler);
//     };
//   }, [socket]);

//   function handleSubmit(e) {
//     e.preventDefault();

//     sendMessage();
//   }

//   return (
//     <Container>
//       <Header>
//         <ContactProfileAndName>
//           <Link to="/chats">
//             <BsArrowLeft color="#445b69" size={25} />
//           </Link>
//           <AvatarImage
//             src={
//               userData.profilepicture
//                 ? userData.profilepicture
//                 : "/assets/userplaceholder.jpg"
//             }
//           />
//           <h4>{userData.username}</h4>
//         </ContactProfileAndName>
//       </Header>

//       <ChatContainer>
//         <MessagesContainer>
//           {messages
//             ?.slice(0)
//             .reverse() /* Reverses the array to display messages in descending order */
//             .map((message, index) => (
//               <MessageBubble
//                 key={index}
//                 isSender={message.sender === currentUserData._id}
//               >
//                 <MessageText>{message.content}</MessageText>
//               </MessageBubble>
//             ))}
//         </MessagesContainer>
//       </ChatContainer>

//       <ChatInputBar>
//         <form onSubmit={handleSubmit}>
//           <BsEmojiLaughingFill className="formitem" size={25} color="#445b69" />
//           <input
//             type="text"
//             value={messageInput}
//             onChange={(e) => setMessageInput(e.target.value)}
//           />
//           <button>
//             <IoSend className="formitem" size={25} color="#445b69" />
//           </button>
//         </form>
//       </ChatInputBar>
//     </Container>
//   );
// }

// // Estilos e demais componentes...

// const Container = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   background-color: #0b141a;
// `;

// const Header = styled.div`
//   padding: 10px 20px;
//   background-color: #202c33;
// `;

// const ContactProfileAndName = styled.div`
//   display: flex;
//   align-items: center;

//   h4 {
//     color: white;
//     font-size: 17px;
//     margin: 0px 10px;
//   }
// `;

// const AvatarImage = styled.img`
//   width: 35px;
//   height: 35px;
//   border-radius: 100%;
//   border: 0.1px solid #445b69;
// `;

// const ChatContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 86vh;
// `;

// const ChatInputBar = styled.div`
//   width: 100%;
//   position: fixed;
//   bottom: 0;
//   padding: 10px;
//   padding-bottom: 15px;
//   border-top: 0.1px solid #445b69;
//   background-color: #202c33;

//   form {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;

//     input {
//       width: 100%;
//       padding: 10px;
//       border: 0;
//       border-radius: 5px;
//       outline: none;
//       font-size: 20px;
//       background-color: #2a3942;
//       color: white;
//     }
//     .formitem {
//       margin: 0px 5px;
//     }

//     button {
//       border: 0;
//       padding: 0px;
//       border-radius: 5px;
//       background-color: transparent;
//       color: white;
//     }
//   }
// `;

// const MessagesContainer = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-direction: column-reverse;
//   overflow-y: auto;
// `;

// const MessageBubble = styled.div`
//   display: inline-block;
//   width: fit-content;
//   max-width: 70%;
//   margin-bottom: 8px;
//   padding: 8px 12px;
//   border-radius: 20px;
//   background-color: #dcf8c6;

//   ${({ isSender }) =>
//     isSender &&
//     `
//     align-self: flex-end;
//     background-color: #E1F0FF;
//   `}
// `;

// const MessageText = styled.p`
//   margin: 0;
//   font-size: 14px;
//   color: #333333;
// `;

import React, { useContext, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { IoSend } from "react-icons/io5";
import { BsEmojiLaughingFill, BsArrowLeft } from "react-icons/bs";
import io from "socket.io-client";
import {
  BaseUrl,
  getUser,
  getMessages,
  getConversations,
} from "../../services/apiService";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { StoreContext } from "../../Context/StoreContext";

export default function CurrentChat() {
  const { token, currentUserData } = useContext(AuthContext);
  const { currentChat } = useContext(StoreContext);
  const [messageInput, setMessageInput] = useState("");
  const [userData, setUserdata] = useState([]);
  const [messages, setMessages] = useState([]);

  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef();

  const friendId = useParams().friendId;
  const currentChatId = useParams().currentchatId;

  useEffect(() => {
    socket.current = io.connect(BaseUrl);
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      messages?.includes(arrivalMessage.sender) &&
      setMessages((prevMessages) => [...prevMessages, messages]);
  }, [arrivalMessage]);

  useEffect(() => {
    socket.current.emit("addUser", userData._id);
    socket.current.on("getUsers", (users) => {
      console.log(users);
    });
  }, []);

  useEffect(() => {
    getUser({ token, userId: friendId }).then((res) => {
      setUserdata(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    if (userData._id) {
      getMessages({
        token,
        conversationId: currentChatId,
      }).then((res) => {
        setMessages(res.data);
      });
    }
  }, [userData, currentChat]);

  // const sendMessage = () => {
  //   if (messageInput.trim() !== "") {
  //     const message = {
  //       sender: currentUserData._id,
  //       recipient: userData._id,
  //       content: messageInput,
  //       isSender: true,
  //     };
  //     setMessageInput("");
  //     socket.emit("send_message", message, () => {
  //       setMessages((prevMessages) => [...prevMessages, message]);
  //     });
  //   }
  // };

  // useEffect(() => {
  //   const receivedMessageHandler = (message) => {
  //     const receivedMessage = {
  //       ...message,
  //       isSender: false,
  //     };

  //     setMessages((prevMessages) => prevMessages.concat(receivedMessage));
  //   };

  //   socket.on("received_message", receivedMessageHandler);

  //   return () => {
  //     socket.off("received_message", receivedMessageHandler);
  //   };
  // }, [socket]);

  function handleSubmit(e) {
    e.preventDefault();
    socket.current.emit("sendMessage", {
      senderId: currentUserData._id,
      receiverId: userData._id,
      text: messageInput,
    });
  }

  return (
    <Container>
      <Header>
        <ContactProfileAndName>
          <Link to="/chats">
            <BsArrowLeft color="#445b69" size={25} />
          </Link>
          <AvatarImage
            src={
              userData?.profilepicture
                ? userData.profilepicture
                : "/assets/userplaceholder.jpg"
            }
          />
          <h4>{userData.username}</h4>
        </ContactProfileAndName>
      </Header>

      <ChatContainer>
        <MessagesContainer>
          {messages
            ?.slice(0)
            .reverse() /* Reverses the array to display messages in descending order */
            .map((message, index) => (
              <MessageBubble
                key={index}
                isSender={message.sender === currentUserData._id}
              >
                <MessageText>{message.text}</MessageText>
              </MessageBubble>
            ))}
        </MessagesContainer>
      </ChatContainer>

      <ChatInputBar>
        <form onSubmit={handleSubmit}>
          <BsEmojiLaughingFill className="formitem" size={25} color="#445b69" />
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <button>
            <IoSend className="formitem" size={25} color="#445b69" />
          </button>
        </form>
      </ChatInputBar>
    </Container>
  );
}

// Estilos e demais componentes...

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #0b141a;
`;

const Header = styled.div`
  padding: 10px 20px;
  background-color: #202c33;
`;

const ContactProfileAndName = styled.div`
  display: flex;
  align-items: center;

  h4 {
    color: white;
    font-size: 17px;
    margin: 0px 10px;
  }
`;

const AvatarImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  border: 0.1px solid #445b69;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 86vh;
`;

const ChatInputBar = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 10px;
  padding-bottom: 15px;
  border-top: 0.1px solid #445b69;
  background-color: #202c33;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    input {
      width: 100%;
      padding: 10px;
      border: 0;
      border-radius: 5px;
      outline: none;
      font-size: 20px;
      background-color: #2a3942;
      color: white;
    }
    .formitem {
      margin: 0px 5px;
    }

    button {
      border: 0;
      padding: 0px;
      border-radius: 5px;
      background-color: transparent;
      color: white;
    }
  }
`;

const MessagesContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
`;

const MessageBubble = styled.div`
  display: inline-block;
  width: fit-content;
  max-width: 70%;
  margin-bottom: 8px;
  padding: 8px 12px;
  border-radius: 20px;
  background-color: #dcf8c6;

  ${({ isSender }) =>
    isSender &&
    `
    align-self: flex-end;
    background-color: #E1F0FF;
  `}
`;

const MessageText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #333333;
`;
