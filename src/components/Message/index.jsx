import React from "react";
import styled from "styled-components";

export default function Message({
  MsgColor,
  UserName,
  MyUserName,
  UserId,
  MyId,
  GetTime,
  Message,
}) {
  return (
    <MessageContainer>
      <div className={`message ${UserId === MyId ? "sended" : "recieved"}`}>
        <div className="content">
          {UserName === MyUserName ? (
            ""
          ) : (
            <span
              className="me"
              style={{
                color: UserName === MyUserName ? "white" : MsgColor,
              }}
            >
              {UserName === MyUserName ? "" : UserName}
              <br />
              <br />
            </span>
          )}

          <p>{Message}</p>
          <div className="time">
            <span>{GetTime}</span>
          </div>
        </div>
      </div>
    </MessageContainer>
  );
}

const MessageContainer = styled.div`
  .message {
    display: flex;
    align-items: center;
    .content {
      max-width: 90%;
      overflow-wrap: break-word;
      padding: 1rem;
      font-size: 16px;
      border-radius: 15px;
      color: #d1d1d1;
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        max-width: 70%;
      }

      span {
        font-size: 14px;
      }

      div.time {
        display: flex;
        justify-content: flex-end;
        margin: 5px;
        span {
          color: grey;
          font-size: 12px;
        }
      }
    }
  }
  .sended {
    justify-content: flex-end;
    .content {
      background-color: #405765;
    }
  }
  .recieved {
    justify-content: flex-start;
    .content {
      background-color: #202c33;
    }
  }
`;
