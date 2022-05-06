import React from "react";
import { FaSearch, FaEllipsisV } from "react-icons/fa";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <header>
        <h2>ChatLogo</h2>
        <div className="assetsContainer">
          <FaSearch size={20} className="asset" />
          <FaEllipsisV size={20} className="asset" />
        </div>
      </header>
    </Container>
  );
}

const Container = styled.div`
  background-color: #202c33;
  header {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #405765;


    h2 {
      font-size: 20px;
    }
    div.assetsContainer {
      .asset {
        margin-right: 5px;
      }
    }
  }
`;
