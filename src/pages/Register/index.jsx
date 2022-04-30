import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import FromComponent from "../../components/FormComponent";
import { postRegister } from "../../service/api";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [response, setResponse] = useState({ msg: "", userCriado: false });
  const [values, setValues] = useState({
    name: "",
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
      .catch((error) => console.log("Erro ao se registrar: " + error));
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
      <Input User={true}>
        <input
          type="text"
          name="name"
          onChange={onChange}
          value={values.name}
          placeholder="Seu nome"
          require={true}
        />
      </Input>
      <Input Email={true}>
        <input
          type="email"
          name="email"
          onChange={onChange}
          value={values.email}
          placeholder="Seu email"
          require={true}
        />
      </Input>
      <Input Password={true}>
        <input
          Password={true}
          type="text"
          name="password"
          onChange={onChange}
          value={values.password}
          placeholder="Sua senha"
          require={true}
        />
      </Input>
      <Input Password={true}>
        <input
          Password={true}
          type="text"
          name="confirmpassword"
          onChange={onChange}
          value={values.confirmpassword}
          placeholder="Digite sua senha novamente"
          require={true}
        />
      </Input>
    </FromComponent>
  );
}
