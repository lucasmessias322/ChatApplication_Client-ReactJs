import React from "react";
import * as C from "../../SharesStyles/formStyle";
import { Link } from "react-router-dom";

export default function FromComponent({
  children,
  Login,
  OnSubmitForm,
  LinkValue,
  LinkTo,
}) {
  return (
    <C.Container>
      <h2>{Login ? "Login" : "Registro"}</h2>
      <C.FormContainer>
        <form onSubmit={OnSubmitForm}>
          {children}
          <C.ButtonSubmit>{Login ? "Login" : "Registrar-me"}</C.ButtonSubmit>
        </form>
      </C.FormContainer>
      <C.H4>
        {Login ? "Não  possui uma conta?" : "possui uma conta?"}
        <span>
          <Link to={Login ? "/register" : "/"}>
            {Login ? "REGISTRE-ME" : "LOGIN"}
          </Link>
        </span>
      </C.H4>
    </C.Container>
  );
}
