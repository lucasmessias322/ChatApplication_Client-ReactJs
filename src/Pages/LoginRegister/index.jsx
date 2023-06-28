import React, { useState, useContext, useEffect } from "react";

import styled from "styled-components";
import InputComponent from "../../components/InputComponent";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { postLogin, postRegister } from "../../services/apiService";

export default function LoginRegister() {
  const [login, setLogin] = useState(true);

  return (
    <Container>
      <FormContainer>
        <Header>
          <h2>ChatApp</h2>
        </Header>
        {login ? (
          <Login setLogin={setLogin} />
        ) : (
          <Register setLogin={setLogin} />
        )}
      </FormContainer>
    </Container>
  );
}

function Login({ setLogin }) {
  const [values, setValues] = useState({ username: "", password: "" });
  const { token, setToken, setCurrentUserData } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(e) {
    setLoading(true);
    e.preventDefault();

    postLogin(values)
      .then((response) => {
        setToken(response.data.token);
        setCurrentUserData(response.data.currentUser);
        console.log(response);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });

    if (token) {
      setToken(token);
      return navigate("/chats");
    }
    setValues({ username: "", password: "" });
  }

  useEffect(() => {
    if (token) {
      navigate("/chats");
    }
  }, [token]);

  return (
    <form onSubmit={onSubmit}>
      <div className="formGrup">
        <InputComponent
          type="text"
          User
          placeholder="User name"
          onChange={(e) => setValues({ ...values, username: e.target.value })}
          value={values.username}
        />
        <InputComponent
          type="text"
          Password
          placeholder="password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
          value={values.password}
        />
        <Button>{loading ? "Carregando..." : "Sign in"}</Button>

        <h4>
          Não possui uma conta?
          <span onClick={() => setLogin(false)}> Registre-se</span>
        </h4>
      </div>
    </form>
  );
}

function Register({ setLogin }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { token, setToken, setCurrentUserData } = useContext(AuthContext);
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  async function onSubmit(e) {
    setLoading(true);
    e.preventDefault();

    postRegister(values)
      .then((response) => {
        setToken(response.data.token);
        setCurrentUserData(response.data.currentUser);
        console.log(response);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        // toast("Erro ao se registrar: " + error);
        console.log(error);
      });

    if (token) {
      setToken(token);
      return navigate("/chats");
    }
    setValues({
      name: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  }

  useEffect(() => {
    if (token) {
      navigate("/chats");
    }
  }, [token]);

  return (
    <form onSubmit={onSubmit}>
      <div className="formGrup">
        <InputComponent
          type="text"
          User
          placeholder="Seu nome e sobrenome..."
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          value={values.name}
          required
        />
        <InputComponent
          type="text"
          User
          placeholder="User name"
          onChange={(e) => setValues({ ...values, username: e.target.value })}
          value={values.username}
          required
        />
        <InputComponent
          type="text"
          Email
          placeholder="Email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          value={values.email}
          required
        />
        <InputComponent
          type="text"
          Password
          placeholder="password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
          value={values.password}
        />
        <InputComponent
          type="text"
          Password
          placeholder="password"
          onChange={(e) =>
            setValues({ ...values, confirmpassword: e.target.value })
          }
          value={values.confirmpassword}
          required
        />
        <Button>Sign in</Button>

        <h4>
          Ja possui uma conta?
          <span onClick={() => setLogin(true)}> Faça login</span>
        </h4>
      </div>
    </form>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* display: flex;
  align-items: center; */
`;

const Header = styled.div`
  width: 100%;
  padding: 15px 10px;
  text-align: center;
  background-color: #202c33;
`;

const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid #202c33;

  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  h4 {
    margin-top: 30px;
    padding: 20px 0px;
    text-align: center;

    span {
      cursor: pointer;
      color: #80adc9;
    }
  }

  form {
    width: 100%;
    padding: 5px 10px;
    max-width: 400px;
    margin: 0 auto;
    text-align: center;

    div.formGrup {
      margin: 20px 0px;
    }
  }
`;

const Button = styled.button`
  background-color: #202c33;
  padding: 10px 20px;
  outline: none;
  border: none;
  color: white;
  font-size: 18px;
  border-radius: 5px;
  margin: 20px 0px;
  width: 100%;
  cursor: pointer;
`;
