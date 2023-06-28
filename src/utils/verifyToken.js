import jwt_decode from "jwt-decode";

export default function isTokenExpired(token) {
  if (token) {
    const decodedToken = jwt_decode(token);
    const currentTime = Date.now() / 1000; // Obter a data atual em segundos

    if (decodedToken.exp < currentTime) {
      // Token expirado
      return true;
    } else {
      // Token válido
      return false;
    }
  }

  // Caso não haja token
  return true;
}

// // Exemplo de uso
// const token = "seu_token_jwt_aqui";
// const isExpired = isTokenExpired(token);

// if (isExpired) {
//   console.log("Token expirado");
// } else {
//   console.log("Token válido");
// }
