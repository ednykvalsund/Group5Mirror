import React from "react";
import Card from "../Card";
import BasicSelect from "../InputDropRow";
import SimpleTextField from "../InputTextRow";
import TextButton from "../TextButton";
import Steppers from "../Progress2";
import { useState, useEffect } from "react";
import { postExcursion } from "../../data";

function CreateExcursion(props) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const currentYear = new Date().getFullYear();
  const years = [];
  for (var i = currentYear; i <= currentYear + 4; i++) {
    years.push(i);
  }

  const [year, setYear] = useState(0);
  const handleYear = (e) => {
    setYear(e.target.value);
  };

  //1. SavesExcursion upon click
  async function SaveExcursion(e) {
    if (value !== "" && year !== 0) {
      return postExcursion(e, value, year); //2. calls postExcursion - returns a promise to the caller (textButton)
    } else {
      alert("Please fill out both destination and year");
    }
  }

  useEffect(() => {}, [postExcursion]);

  return (
    <div className="page-container">
      <h1 className="page-title">{props.title}</h1>
      <div className="card-container">
        <Card>
          <SimpleTextField
            title="Destination"
            value={value}
            onChange={handleChange}
          />

          <BasicSelect
            title="Year"
            options={years}
            value={year}
            handleChange={handleYear}
          />
          <TextButton
            className="green-button"
            label="Next"
            handleClick={SaveExcursion} //The caller takes the async function as a parameter
            link="/add-duties"
            btnSwitch="HandleAndNav"
          ></TextButton>
        </Card>
        <Steppers
          steps={[
            "Create Excursion",
            "Create duties",
            "Create shopping list",
            "Done",
          ]}
          doneSteps={0}
        />
      </div>
    </div>
  );
}

export default CreateExcursion;
