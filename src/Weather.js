import styles from "./Home.module.css";
import { useState, useEffect } from "react";
function Weather() {
  const [info, setInfo] = useState("");

  function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "c4f094ed9d2fc072ab0a4fde9eb23da9";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInfo(`${data.name} / ${data.weather[0].main}, ${data.main.temp}`);
      });
  }

  function onGeoFail() {
    setInfo("Failed to get your current location");
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);
  }, []);

  return <div className={styles.weather}>{info}</div>;
}
export default Weather;
