import React from "react";
import CurrentWeather from "./CurrentWeather";

import "../components/MainContent.css";

class MainContent extends React.Component {
  constructor(props) {
    super(props);

    // Create the state/variables where you will store the values from the API
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
      viewCard: false,
    };

    this.handleClick = this.handleClick.bind(this);
    // Hide the weather card
    this.weatherCard = null;
  }

  // button onclick event handler
  handleClick(event) {
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

    // Log the zipcode in the console for testing.
    console.log(zipCode);

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
        this.weatherCard = <CurrentWeather />;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="Input-container">
          <input
            className="input-field"
            type="text"
            name="search"
            placeholder="Search for location"
          />
          <button
            className="button"
            type="button"
            name="button"
            value="getWeather"
            onClick={this.handleClick}
          >
            Get Weather
          </button>
        </div>
        <div>{this.state.viewCard ? this.weatherCard : ""}</div>
      </div>
    );
  }
}

export default MainContent;
