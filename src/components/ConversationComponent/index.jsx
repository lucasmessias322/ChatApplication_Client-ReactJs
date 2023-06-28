import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import { getConversations, getUser } from "../../services/apiService";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";

export default function ConversationComponent({ conversation }) {
  const { token, currentUserData } = useContext(AuthContext);
  const [userdata, setUserdata] = useState([]);
  const [friendId, setFriendId] = useState("");

  useEffect(() => {
    const frID = conversation.members.find((m) => m !== currentUserData._id);
    setFriendId(frID);
  }, []);

  useEffect(() => {
    // console.log(conversation);
    if (friendId) {
      getUser({ token, userId: friendId }).then((res) => {
        setUserdata(res.data);
        //   console.log(res.data);
      });
    }
  }, [conversation, friendId]);
  return (
    <Link to={`/privatechat/${friendId}/${conversation._id}`}>
      <ConversationItem>
        <div className="imageAndText">
          <img
            src="/assets/userplaceholder.jpg"
            alt=""
            className="Chatprofileimg"
          />
          <div className="texts">
            <span>{userdata?.name}</span>
            <p>lastmess</p>
          </div>
        </div>
        <MessageNotfy>12</MessageNotfy>
      </ConversationItem>
    </Link>
  );
}

const ConversationItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  padding-top: 10px;
  /* border-bottom: 0.1px solid #445b69; */

  .imageAndText {
    display: flex;
    align-items: center;
    img.Chatprofileimg {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      object-fit: cover;
    }

    div.texts {
      padding: 10px;
      span {
        font-size: 18px;
        color: #82919e;
      }

      p {
        color: #616d77;
      }
    }
  }
`;
const MessageNotfy = styled.span`
  display: flex;
  justify-content: center;
  padding: 5px;
  border-radius: 100%;
  color: white;
  background-color: #36cf36;
`;
