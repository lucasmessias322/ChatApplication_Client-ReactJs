import styled from "styled-components";

const color1 = "#111b21";
const color2 = "#405765";
const color3 = "#202C33";

export const Container = styled.div`
  background-color: ${color1};
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  background-color: ${color3};
  position: fixed;
  top: 0;
  padding: 10px;
  div {
    margin: 0 auto;
    max-width: 99%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  }
`;

export const ChatContainer = styled.div`
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0.2rem;
    &-thumb {
      background-color: #ffffff39;
      width: 0.1rem;
      border-radius: 1rem;
    }
  }
  .message {
    display: flex;
    align-items: center;
    .content {
      max-width: 90%;
      overflow-wrap: break-word;
      padding: 1rem;
      font-size: 14px;
      border-radius: 10px;
      color: #d1d1d1;
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        max-width: 70%;
      }

      span {
        font-size: 13px;
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

export const MessageItem = styled.li``;

export const FormContainer = styled.div`
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${color3};
  position: fixed;
  bottom: 0px;

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    button {
      background-color: transparent;
      width: 35px;
      height: 35px;
      margin: 0px 10px;
      padding: 4px;
      border-radius: 100%;
      border: none;
      border: 0.5px solid ${color2};
      color: ${color2};
    }

    input {
      background-color: transparent;
      resize: none;
      padding: 15px;
      border-radius: 10px;
      width: 90%;
      height: 25px;
      font-size: 14px;
      border: none;
      outline: none;
      border: 0.5px solid ${color2};
      color: ${color2};
    }
  }
`;
