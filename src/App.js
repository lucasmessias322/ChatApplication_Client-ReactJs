import Store from "./Context/Store";
import RoutesComponent from "./routes/routes";

function App() {
  return (
    <Store>
      <RoutesComponent />
    </Store>
  );
}

export default App;
