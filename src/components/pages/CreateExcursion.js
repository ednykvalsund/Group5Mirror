import React, { useContext } from "react";
import Card from "../Card";
import BasicSelect from "../InputDropRow";
import SimpleTextField from "../InputTextRow";
import TextButton from "../TextButton";
import Steppers from "../Progress2";
import { useState } from "react";
import Parse from "parse";
import ExcursionContext from "../../ExcursionContext";
import { Link, useNavigate } from "react-router-dom";

function CreateExcursion(props) {
  const navigate = useNavigate();
  const { excursionContext, setExcursionContext } =
    useContext(ExcursionContext);

  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const Excursion = Parse.Object.extend("Excursion");
  const thisExcursion = new Excursion();

  async function SaveExcursion(e) {
    thisExcursion.set("Destination", value);
    thisExcursion.set(
      "Year",
      Number(document.getElementById("Year").textContent)
    );
    e.preventDefault();
    console.log("prevented default");
    try {
      const savedObject = await thisExcursion.save();
      setExcursionContext(savedObject.id); //We successfully sets the context to be the newly created excursion id
      navigate("/add-duties");
    } catch (error) {
      alert(error);
    }
  }

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
            options={["2021", "2022", "2023", "2024"]}
          />
          <TextButton
            className="green-button"
            label="Next"
            handleClick={SaveExcursion}
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
