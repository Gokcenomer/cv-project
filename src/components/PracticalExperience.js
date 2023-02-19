import React from "react";

const PracticalExperience = (props) => {
  return (
    <div>
      <h2>PracticalExperience</h2>
      <p>School Name: {props.schoolName}</p>
      <p>Title Of Study: {props.titleOfStudy}</p>
      <p>Date Of Study: {props.dateOfStudy}</p>
    </div>
  );
};
export default PracticalExperience;
