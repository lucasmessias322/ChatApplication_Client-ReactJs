import React from "react";
import styled from "styled-components";

export default function ListOfContacts() {
  return (
    <Container>
      <ul>
        <li>
          <img src="/546691 (1).png" />
          <div className="textsContainer">
            <h3>Fulano de ciclano</h3>
            <span>Ultima menssagen</span>
          </div>
        </li>
        <li>
          <img src="/546691 (1).png" />
          <div className="textsContainer">
            <h3>Fulano de ciclano</h3>
            <span>Ultima menssagen</span>
          </div>
        </li>
        <li>
          <img src="/546691 (1).png" />
          <div className="textsContainer">
            <h3>Fulano de ciclano</h3>
            <span>Ultima menssagen</span>
          </div>
        </li>
      </ul>
    </Container>
  );
}

const colors = {
  color1: "#202c33",
  color2: "#405765",
};

const Container = styled.div`
  ul {
    margin: 0;
    display: flex;
    flex-direction: column;
    padding: 10px 0px;

    li {
      padding: 15px 10px;
      display: flex;
      margin-bottom: 5px;
      border-bottom: 0.5px solid ${colors.color1};
      align-items: center;

      img {
        border-radius: 100%;
        width: 50px;
        height: 50px;
        object-fit: cover;
      }
      .textsContainer {
        padding-left: 10px;
        flex-direction: column;

        h3 {
          color: #fff;
        }
        span {
          color: ${colors.color2};
        }
      }
    }
  }
`;
