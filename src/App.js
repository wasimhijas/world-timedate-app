import "./App.css";
import { useState } from "react";
import InputForm from "./components/InputForm";

function App() {
  const [timeDateInfo, settimeDateInfo] = useState(null);

  const handleCitySelect = (city) => {
    fetch(
      `https://msc-time-component-wamh001.azurewebsites.net/api/HttpTrigger1?city=${city}`
    )
      .then((response) => response.json())
      .then((data) => settimeDateInfo(data));
  };

  return (
    <div className="App">
      <header className="heading-style">
        <h1>World Date-Time App</h1>
      </header>
      <InputForm onCitySelect={handleCitySelect} />
      {timeDateInfo && (
        <div className="output-div">
          <p>
            Current date in {timeDateInfo.city}: {timeDateInfo.date}
          </p>
          <p>
            Current time in {timeDateInfo.city}: {timeDateInfo.time}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
