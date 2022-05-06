import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import FromComponent from "../../components/FormComponent";
import { postRegister } from "../../service/api";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();
  const [response, setResponse] = useState({ msg: "", userCriado: false });
  const [values, setValues] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    postRegister(values)
      .then((response) => {
        console.log(response.data);
        setResponse(response.data);
      })
      .catch((error) => {
        toast(
          "Erro ao se registrar: " + JSON.stringify(error.response.data.msg)
        );
      });
  }

  useEffect(() => {
    if (response.userCriado) {
      return navigate("/");
    } else {
      if (response.msg !== "") {
        console.log(response.msg);
      }
    }
  }, [response]);

  return (
    <FromComponent Login={false} OnSubmitForm={onSubmit}>
      <ToastContainer />
      <Input User={true}>
        <input
          type="text"
          name="name"
          onChange={onChange}
          value={values.name}
          placeholder="Seu nome e sobrenome"
          required={true}
        />
      </Input>
      <Input User={true}>
        <input
          type="text"
          name="userName"
          onChange={onChange}
          value={values.userName}
          placeholder="nome de usuario exemplo: usuario123"
          required={true}
        />
      </Input>
      <Input Email={true}>
        <input
          type="email"
          name="email"
          onChange={onChange}
          value={values.email}
          placeholder="Seu email"
          required={true}
        />
      </Input>
      <Input Password={true}>
        <input
          type="text"
          name="password"
          onChange={onChange}
          value={values.password}
          placeholder="Sua senha"
          required={true}
        />
      </Input>
      <Input Password={true}>
        <input
          type="password"
          name="confirmpassword"
          onChange={onChange}
          value={values.confirmpassword}
          placeholder="Digite sua senha novamente"
          required={true}
        />
      </Input>
    </FromComponent>
  );
}
