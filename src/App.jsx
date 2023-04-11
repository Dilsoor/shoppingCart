import "./App.css";
import Cards from "./components/cards/Cards";
import Nav from "./components/Nav/Nav";
import { useGlobalContext } from "./Context";

function App() {
  const { total } = useGlobalContext();
  return (
    <div className="App">
      <Nav />
      <Cards />
      <div className="container" id="total">
        <p className="total-price">Total Price:{total}</p>
      </div>
    </div>
  );
}

export default App;
