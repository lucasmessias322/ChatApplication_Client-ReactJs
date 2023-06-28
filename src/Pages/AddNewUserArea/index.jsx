import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../services/apiService";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";

export default function AddNewUserArea({}) {
  const [users, setUsers] = useState();
  const [conversations, setConversations] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    getUsers(token)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <FlexContainerInLine>
        <Link to="/chats">
          <BsArrowLeft color="#445b69" size={25} />
        </Link>

        <span>Adicone um novo contato...</span>
      </FlexContainerInLine>
      <SearchbarContainer>
        <form action="">
          <input type="text" placeholder="Search or start a new chat" />
        </form>
      </SearchbarContainer>
      <SearchResultContainer>
        {users?.map((item, i) => (
          <Link to={`/privatechat/${item._id}`}>
            <ContactItem key={i}>
              <div className="imageAndText">
                <img
                  src={
                    item.profilepicture
                      ? item.profilepicture
                      : "/assets/userplaceholder.jpg"
                  }
                  className="Chatprofileimg"
                />
                <div className="texts">
                  <span>{item.name}</span>
                </div>
              </div>
            </ContactItem>
          </Link>
        ))}
      </SearchResultContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const FlexContainerInLine = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 0.1px solid #445b69;

  span {
    padding: 0px 15px;
  }
`;

const SearchbarContainer = styled.div`
  width: 100%;
  padding: 10px;

  form {
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      padding: 15px;
      border: none;
      background-color: #202c33;
      width: 100%;
      outline: none;
      border-radius: 10px;
      color: white;
    }
  }
`;

const SearchResultContainer = styled.ul``;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  padding-top: 10px;

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
