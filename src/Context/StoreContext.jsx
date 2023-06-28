import { createContext, useState } from "react";

const InitialState = {
  currentChat: Object,
  setCurrentChat: Function,
};

const StoreContext = createContext(InitialState);

function StoreProvider({ children }) {
  const [state, setState] = useState(InitialState);

  function updateState(key, value) {
    setState({
      ...state,
      [key]: value,
    });
  }

  return (
    <StoreContext.Provider
      value={{
        currentChat: state.currentChat,
        setCurrentChat: (currentChat) =>
          updateState("currentChat", currentChat),
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export { StoreProvider, StoreContext };
