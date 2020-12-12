import Weather from "./Weather";
import "./styles.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Maps from "./Maps";
import Spinner from "./Spinner";
import RandomImages from "./RandomImages";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Maps</Link>
              </li>
              <li>
                <Link to="/weather">Weather</Link>
              </li>
              <li>
                <Link to="/random">Random</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/weather">
              <Weather />
            </Route>
            <Route path="/random">

              <RandomImages />
            </Route>
            <Route path="/">
              <Maps />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
