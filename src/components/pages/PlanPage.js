import React from "react";
import TextButton from "../TextButton";

function PlanPage() {
  return (
    <div className="page-container">
      <div className="center-container">
        <h1 className="page-title">Let's plan!</h1>
        <h2>Do you wanna create or maintain?</h2>
        <TextButton className="green-button" label="Create" />
        <TextButton className="green-button" label="Maintain" />
      </div>
    </div>
  );
}

export default PlanPage;
