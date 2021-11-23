import React from "react";
import Steppers from "../Progress2";
import Card from "../Card";
import SimpleTextField from "../InputTextRow";
import ItemCard from "../ItemCard";
import IconButtons from "../IconButtons";
import TextButton from "../TextButton";
import Parse from "parse";

function AddDuties(props) {
  const duties = ["Duty 1", "Duty 2"];

  const Duty = Parse.Object.extend("Duty");
  const duty = new Duty();
  //const DutyPointer = duty.set("excursionID", <YE46CEmnds>);

  //duty.set("excursionID", "YE46CEmnds");
  duty.set("title", "empty dishwasher");

  async function addDuty(e) {
    e.preventDefault();
    console.log("Prevented default");

    try {
      const savedDuty = await duty.save();
      alert("success");
    } catch (error) {
      alert(error);
    }
  }

  // async function addDuty(e) {
  //   e.preventDefault();
  //   try {
  //     //Create new duty instance
  //     const newDuty = new Parse.Object("Duty");
  //     //Defining attributes for duty object
  //     newDuty.set("title", "testtest");
  //     await newDuty.save();
  //   } catch (error) {
  //     console.log("Could not save duty to database:");
  //   }
  // }

  // duty.set("date", Date.now());
  // const savedDuty = await duty.save();

  return (
    <>
      <div className="page-container">
        <h1 className="page-title">{props.title}</h1>
        <div className="card-container-add-duties">
          <Card>
            <div className="card-textfields-container">
              <SimpleTextField title="Duty name">
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
        //link="/shopping-list"
        handleClick={addDuty}
      />
    </>
  );
}

export default AddDuties;
