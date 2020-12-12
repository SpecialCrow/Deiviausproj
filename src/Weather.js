import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Spinner from "./Spinner";
export default function Weather(props) {
  const { handleCity, city, model } = props;
  const [text, setText] = useState("");

  if (model == null) {
    return <Spinner />;
  }
  const handleSumbit = (e) => {
    e.preventDefault();
    if (text == "") return;
    // setCity(text);
    handleCity(text);
    setText("");
  };

  return (
    <div>
      <div className="main-weather" id="main">
        <form onSubmit={(e) => handleSumbit(e)}>
          <TextField
            id="outlined-basic"
            label="Enter City"
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
        </form>
        <div className="container" id="container">
          {model != null && model.cod != "404" ? (
            <React.Fragment>
              <div className="weather-heading" id="weather-heading">
                <h1>
                  {model.name} - {model.sys.country}
                </h1>
              </div>
              <p>Weather : {model.weather.map((i) => i.main)}</p>
              <div className="content-wrapper">
                <div className="content">
                  Temperature:{" "}
                  <span id="Temperature">
                    {Math.round(model.main.temp - 273)}
                  </span>
                </div>
                <div className="content">
                  Feels Like:{" "}
                  <span id="FeelLike">
                    {Math.round(model.main.feels_like - 273)}
                  </span>
                </div>
                <div className="content">
                  Clouds: <span id="Clouds">{model.clouds.all}</span>
                </div>
                <div className="content">
                  Wind: <span id="Visibility">{model.wind.speed}</span>
                </div>
                <div className="content">
                  Visibility: <span id="Visibility">{model.visibility}</span>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <div
              className="weather-heading"
              style={{ textTransform: "uppercase" }}
            >
              <h2> {model != null ? model.message : null}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
