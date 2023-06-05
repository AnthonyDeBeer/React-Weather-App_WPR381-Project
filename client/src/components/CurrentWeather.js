import React from "react";
import "../components/CurrentWeather.css";

class CurrentWeather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTemp: "",
      humidity: "",
      wind: "",
      currentDay: "",
      tempMin: "",
      tempMax: "",
      feelsLike: "",
      airPressure: "",
      conditionDescription: "",
      weatherIcon: "",
      cityName: "",
    };
  }

  componentDidMount() {
    // Create array containing days of the week names
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // create date variable
    const date = new Date();

    // gets the day number i.g.(1-7) representing the number of the weekday.
    // then use the number to correlate with the weekday array to display weekday name instead of number.
    let day = weekday[date.getDay()];

    // get the detail from the input field and inport it to zipCode var.
    let el = document.querySelector("input[type='text']");
    if (el.value === "") return;

    let zipCode = el.value;

    // set and fetch url from the server
    const url = `http://localhost:5000/forcasts/${zipCode}/`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // set the varieables to the API data
        this.setState({
          currentTemp: Math.round(data.main.temp) + "°",
          humidity: data.main.humidity + "%",
          wind: data.wind.speed + "km/h",
          currentDay: day,
          tempMin: Math.round(data.main.temp_min) + "°",
          tempMax: Math.round(data.main.temp_max) + "°",
          feelsLike: Math.round(data.main.feels_like) + "°",
          airPressure: data.main.pressure + "hPa",
          conditionDescription: data.weather[0].description,
          weatherIcon: data.weather[0].icon,
          cityName: data.name,
          viewCard: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    // render the weather card design and populate the data
    const CurrentWeather = (
      <div className="curWeatherCard">
        <div className="top-section">
          <div>
            <p className="city">{this.state.cityName}</p>
            <p className="description">{this.state.conditionDescription}</p>
          </div>
          <img
            alt="weather-icon"
            className="weather-icon"
            src={`icons/${this.state.weatherIcon}.png`}
          />
        </div>
        <div className="bottom-section">
          <div className="info">
            <p className="temp">{this.state.currentTemp}</p>
            <div className="rows">
              <span className="week-day">{this.state.currentDay}</span>
              <span className="min-max">
                {this.state.tempMax} / {this.state.tempMin}
              </span>
            </div>
          </div>
          <div className="details">
            <div className="rows">
              <span className="labels">Weather Details</span>
            </div>
            <div className="rows">
              <span className="labels">Feels like:</span>
              <span className="values">{this.state.feelsLike}</span>
            </div>
            <div className="rows">
              <span className="labels">Wind:</span>
              <span className="values">{this.state.wind}</span>
            </div>
            <div className="rows">
              <span className="labels">Humidity:</span>
              <span className="values">{this.state.humidity}</span>
            </div>
            <div className="rows">
              <span className="labels">Air pressure:</span>
              <span className="values">{this.state.airPressure}</span>
            </div>
          </div>
        </div>
      </div>
    );

    // Display the weather card
    return (
      <div>
        <div>{CurrentWeather}</div>
      </div>
    );
  }
}

export default CurrentWeather;
