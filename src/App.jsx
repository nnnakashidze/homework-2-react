import Person from "./components/person";
import Product from "./components/product";
const App = () => {
  return (
    <div>
      <Person name="Nini Nakashidze" age={21} hobby="Drawing" />

      <Product name="TelePhone" price={300} category="Electronics" />
    </div>
  );
};
export default App;
