import Store from "./Context/Store";
import RoutesComponent from "./routes/routes";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Store>
      <RoutesComponent />
    </Store>
  );
}

export default App;
