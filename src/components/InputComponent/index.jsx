import React from "react";
import styled from "styled-components";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

export default function InputComponent({ User, Password, Email, ...rest }) {
  return (
    <Container>
      <IconContainer>
        {User && <FaUser color="white" size={20} />}
        {Password && <FaLock color="white" size={20} />}
        {Email && <FaEnvelope color="white" size={20} />}
      </IconContainer>
      <input {...rest} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 10px auto;

  input {
    color: white;
    width: 100%;
    padding: 5px;
    background-color: #2a3942;
    border: none;
    outline: none;
    font-size: 17px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const IconContainer = styled.div`
  background-color: #202c33;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 10px 15px;
`;
