import { React, useState } from "react";
import Steppers from "../Progress2";
import Card from "../Card";
import SimpleTextField from "../InputTextRow";
import ItemCard from "../ItemCard";
import IconButtons from "../IconButtons";
import TextButton from "../TextButton";
import Parse from "parse";
import { CreateExcursion, savedExc } from "./CreateExcursion";
import { Alert } from "@mui/material";

//https://docs.parseplatform.org/js/guide/

var pointerobj = {
  __type: "Pointer",
  className: "Excursion",
  objectId: "4RMfEI9hrk",
};

function AddDuties(props) {
  const duties = ["Duty 1", "Duty 2"];
  //const [exc, setExc] = useState("");

  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const Duty = Parse.Object.extend("Duty");
  const duty = new Duty();

  async function createDuty(e) {
    duty.set("title", value);
    duty.set("excursionID", pointerobj); //Needs to be the object
    e.preventDefault();
    //console.log(savedObject);
    console.log("prevented default");

    try {
      const savedObject = await duty.save();
      alert("succes");
      //window.location.href = '/shopping-list';
    } catch (error) {
      alert(error);
    }
  }

  /*
  const [duty, setDuty] = useState("");
  const [excursionRead, setExcursionRead] = useState([]);
  const readExcursion = async function () {
    const parseQuery = new Parse.Query(excursionRead);
  };
  const createDutyObject = async function () {
    const dutyValue = duty;
  };
  */

  /*
  const readExcursion = async function () {
    const parseQuery = new Parse.Query("Excursion");
    try {
      let readExcursion = await parseQuery.find();
      setExc(readExcursion);
      return true;
    } catch (error) {
      Alert.alert("Error!");
      return false;
    }
  };
  */

  return (
    <>
      <div className="page-container">
        <h1 className="page-title">{props.title}</h1>
        <div className="card-container-add-duties">
          <Card>
            <div className="card-textfields-container">
              <SimpleTextField
                title="Test"
                value={value}
                onChange={handleChange}
              >
                <IconButtons add />
              </SimpleTextField>

              {duties.map((duty) => (
                <ItemCard item={duty}></ItemCard>
              ))}
            </div>
          </Card>
        </div>
        <br />
      </div>
      <div className="steppers-container">
        <Steppers
          steps={[
            "Create Excursion",
            "Create duties",
            "Create shopping list",
            "Done",
          ]}
          doneSteps={1}
        />
      </div>
      <TextButton
        label="Next"
        className="green-button-right"
        link="/shopping-list"
        handleClick={createDuty}
      />
    </>
  );
}

export default AddDuties;
