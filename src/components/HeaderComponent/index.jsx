import React from "react";
import styled from "styled-components";
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from "react-icons/bs";

export default function HeaderComponent() {
  return (
    <Header>
      <LogoAndMenusContainer>
        <h2>ChatApp</h2>
        <MenuItemsContainer>
          <BsThreeDotsVertical className="icon" size={20} />
        </MenuItemsContainer>
      </LogoAndMenusContainer>
      <OptionsContainer>
        <li>Chats</li>
      </OptionsContainer>
    </Header>
  );
}

const Header = styled.header`
  width: 100%;
  padding: 10px;

  padding-bottom: 0px;
  background-color: #202c33;
`;
const LogoAndMenusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  color: #616d77;

  h2 {
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  align-items: center;

  li {
    padding: 10px;

    font-size: 16px;
    border-bottom: 5px solid #527181;
    list-style: none;
    color: #616d77;
    text-decoration: none;
  }
`;
const MenuItemsContainer = styled.div``;
