import React, { useContext, useEffect, useState } from "react";
import Input from "../../components/Input";
import FromComponent from "../../components/FormComponent";
import { postLogin } from "../../service/api.js";
import { AppContext } from "../../Context/Store";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const { token, setToken, currentUserData, setCurrentUserData } =
    useContext(AppContext);
  const navigate = useNavigate();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  async function onSubmit(event) {
    event.preventDefault();

    postLogin(values.email, values.password).then((response) => {
      setToken(response.data.token);
      setCurrentUserData(response.data.currentUser);
    }).catch(err => {
      toast("Erro ao fazer Login: "+ JSON.stringify(err.response.data.msg))
    });

    if (token) {
      setToken(token);
      return navigate("/chat");
    }

    setError(error);
    setValues({ email: "", password: "" });
  }

  useEffect(() => {
    if (token) {
      console.log("token é: " + token);
      console.log("currentUserData", currentUserData);
      navigate("/chat");
    }
  }, [token]);

  return (
    <FromComponent Login={true} OnSubmitForm={onSubmit}>
      <ToastContainer/>
      <Input User={true}>
        <input
          type="email"
          name="email"
          onChange={onChange}
          value={values.email}
          required={true}
          placeholder="Digite seu email"
        />
      </Input>
      <Input Password={true}>
        <input
          type="password"
          name="password"
          onChange={onChange}
          value={values.password}
          required={true}
          placeholder="Digite sua senha"
        />
      </Input>
    </FromComponent>
  );
}
