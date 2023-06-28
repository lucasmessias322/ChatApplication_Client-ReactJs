import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import HeaderComponent from "../../components/HeaderComponent";
import { MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import { getConversations, getUser } from "../../services/apiService";
import { AuthContext } from "../../Context/AuthContext";
import ConversationComponent from "../../components/ConversationComponent";
import { StoreContext } from "../../Context/StoreContext";

export default function ChatPage({}) {
  const [conversations, setConversations] = useState([]);
  const { token, currentUserData } = useContext(AuthContext);
  const { setCurrentChat } = useContext(StoreContext);

  useEffect(() => {
    getConversations({ token, userId: currentUserData._id }).then((res) => {
      setConversations(res);
    });
  }, []);

  return (
    <Container>
      <HeaderComponent />
      <ChatsContainer>
        {conversations?.map((c, i) => (
          <div key={i} onClick={() => setCurrentChat(c)}>
            <ConversationComponent conversation={c} />
          </div>
        ))}
      </ChatsContainer>

      <Link to="/addnewchat">
        <AddNewChatBtn>
          <div>
            <MdMessage size={20} />
          </div>
        </AddNewChatBtn>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const ChatsContainer = styled.ul`
  width: 100%;
`;

// const ConversationItem = styled.li`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 20px;
//   padding-top: 10px;
//   /* border-bottom: 0.1px solid #445b69; */

//   .imageAndText {
//     display: flex;
//     align-items: center;
//     img.Chatprofileimg {
//       width: 50px;
//       height: 50px;
//       border-radius: 100%;
//       object-fit: cover;
//     }

//     div.texts {
//       padding: 10px;
//       span {
//         font-size: 18px;
//         color: #82919e;
//       }

//       p {
//         color: #616d77;
//       }
//     }
//   }
// `;

// const MessageNotfy = styled.span`
//   display: flex;
//   justify-content: center;
//   padding: 5px;
//   border-radius: 100%;
//   color: white;
//   background-color: #36cf36;
// `;

const AddNewChatBtn = styled.div`
  position: fixed;
  bottom: 0;
  padding: 20px 10px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  div {
    width: 40px;
    height: 40px;
    color: white;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00b300;
    border-radius: 100%;
  }
`;
