import React from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import * as C from "../../SharesStyles/formStyle";

function Input(props) {
  return (
    <C.InputText>
      <div>
        {props.User ? (
          <FaUser color="white" size={20} />
        ) : props.Password ? (
          <FaLock color="white" size={20} />
        ) : props.Email ? (
          <FaEnvelope color="white" size={20} />
        ) : (
          ""
        )}
      </div>
      {props.children}
    </C.InputText>
  );
}

export default Input;
