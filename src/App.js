import React, { useEffect, useState } from "react";
import Weather from "./Weather";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Maps from "./Maps";
import RandomImages from "./RandomImages";
function App() {
  const [city, setCity] = useState("Kaunas");
  const [geo, setGeo] = useState(null);
  const [model, setModel] = useState(null);

  const handleCity = (value) => setCity(value);
  useEffect(() => {
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=9e716911d5e24e39930bd4ef99a243ef&language=lt&pretty=1`
    )
      .then((res) => res.json())
      .then((data) => setGeo(data));
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=87dff5349bcdb39cdaabd549071c788d"
    )
      .then((res) => res.json())
      .then((data) => setModel(data))
      .catch((err) => console.log(err));
  }, [city]);
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Weather</Link>
              </li>
              <li>
                <Link to="/Maps">Maps</Link>
              </li>
              <li>
                <Link to="/random">Random</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Weather model={model} handleCity={handleCity} city={city} />
            </Route>
            <Route path="/random">
              <RandomImages />
            </Route>
            <Route path="/Maps">
              <Maps city={city} geo={geo} model={model} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
