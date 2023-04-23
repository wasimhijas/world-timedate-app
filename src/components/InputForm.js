import React from "react";
import { useState } from "react";
import { Select } from "antd";
import ButtonComponent from "./ButtonComponent";

const InputForm = ({ onCitySelect }) => {
  const [selectedCity, setSelectedCity] = useState("");

  const handleCitySelect = (value) => {
    setSelectedCity(value);
  };

  const handleSubmit = () => {
    onCitySelect(selectedCity);
  };

  return (
    <form className="input-form-style">
      <Select
        style={{ width: 200, marginRight: 10 }}
        placeholder="Select a city"
        onChange={handleCitySelect}
        value={selectedCity}
      >
        <option value="Bangkok">Bangkok</option>
        <option value="Dubai">Dubai</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Shanghai">Shanghai</option>
        <option value="Tokyo">Tokyo</option>
        <option value="Chicago">Chicago</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Mexico City">Mexico City</option>
        <option value="New York">New York</option>
        <option value="Toronto">Toronto</option>
        <option value="Vancouver">Vancouver</option>
        <option value="Sydney">Sydney</option>
        <option value="Athens">Athens</option>
        <option value="Berlin">Berlin</option>
        <option value="London">London</option>
        <option value="Paris">Paris</option>
        <option value="Rome">Rome</option>
        <option value="Auckland">Auckland</option>
      </Select>

      <ButtonComponent onClick={handleSubmit} />
    </form>
  );
};

export default InputForm;
