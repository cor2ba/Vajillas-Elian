import { Route, Switch } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import Productos from "./components/Productos/Productos";
import Contacto from "./components/Contacto/Contacto";
import DondeEstamos from "./components/DondeEstamos/DondeEstamos";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/productos" component={Productos} />
        <Route exact path="/contacto" component={Contacto} />
        <Route exact path="/dondeestamos" component={DondeEstamos} />
      </Switch>
    </div>
  );
}

export default App;
