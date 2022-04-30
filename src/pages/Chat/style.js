import styled from "styled-components";

const color1 = "#111b21";
const color2 = "#405765";
const color3 = "#202C33";

export const Container = styled.div`
  background-color: ${color1};
  /* height: 100vh; */
`;

export const Header = styled.div`
  width: 100%;
  background-color: ${color3};
  position: fixed;
  top: 0;
  div {
    /* padding: 5px 0px; */
    margin: 0 auto;
    max-width: 99%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  }
`;

export const ChatContainer = styled.div`
  /* padding-top: 35px;
  padding-bottom: 50px; */
  background-color: ${color1};
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  height: 100vh;
  justify-content: space-between;
  width: 100vw;

  ul {
    margin: 0;
    padding: 1rem;

    li {
      list-style: none;

      .message {
        color: white;
        border: 1px solid transparent;
        border-radius: 5px;
        display: inline-block;
        list-style: none;
        margin-bottom: 1rem;
        padding: 0.5rem 1rem;
        font-size: 14px;

        span {
          font-size: 13px;
        }
      }
    }

    .message.message--mine {
      background: #405765;
      text-align: right;

      span.me {
        color: #202c33;
      }
    }

    .message.message--other {
      background: #202c33;
    }
  }

  li.list__item--mine {
    text-align: right;
  }
`;

export const FormContainer = styled.div`
  border-top: 0.5px solid ${color2};
  padding: 10px 0px;

  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${color1};
  position: fixed;
  bottom: 0px;

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    button {
      background-color: transparent;
      width: 40px;
      height: 40px;
      margin: 0px 10px;
      padding: 6px;
      border-radius: 100%;
      border: none;
      border: 0.5px solid ${color2};
      color: ${color2};
    }

    input {
      background-color: transparent;
      resize: none;
      padding: 10px;
      border-radius: 10px;
      width: 90%;
      height: 25px;
      font-size: 20px;
      border: none;
      outline: none;
      border: 0.5px solid ${color2};
      color: ${color2};
    }
  }
`;
