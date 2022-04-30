import styled from "styled-components";

const color1 = "#0075FF";

export const Container = styled.div`
  background-color: #111b21;
  min-height: 100vh;
  padding: 10px 0px;
  text-align: center;

  h2 {
    color: ${color1};
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  border-top: 0px solid white;
  border-bottom: 0.1px solid white;
  padding: 40px 0px;
  margin: 0 auto;

  img {
    width: 100%;
    padding-bottom: 30px;
  }

  form {
    padding: 0px 15px;
  }
`;

export const InputText = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  margin: 15px auto;

  div {
    background-color: ${color1};
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 10px 15px;
  }
  input {
    width: 100%;
    padding: 5px;
    background-color: #fff;
    border: none;
    outline: none;
    font-size: 17px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 10px;
  font-size: 20px;
  border: none;
  outline: none;
  background-color: ${color1};
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;

export const H4 = styled.h5`
  padding: 10px;
  color: #fff;

  span {
    a {
      color: ${color1};
      cursor: pointer;
    }
  }
`;

export const ButtonNoAcount = styled.button`
  background-color: ${color1};
  margin-top: 15px;
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  outline: none;
  color: white;
  font-size: 15px;
  cursor: pointer;
`;
