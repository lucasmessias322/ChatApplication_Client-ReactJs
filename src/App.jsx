import React from "react";
import RouterComponent from "./RouterComponent";
import { AuthProvider } from "./Context/AuthContext";
import { StoreProvider } from "./Context/StoreContext";

function App() {
  return (
    <AuthProvider>
      <StoreProvider>
        <RouterComponent />
      </StoreProvider>
    </AuthProvider>
  );
}

export default App;
