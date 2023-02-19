import React from "react";

const EducationalExperience = (props) => {
  return (
    <div>
      <h2>EducationalExperience</h2>
      <p>Company Name: {props.companyName}</p>
      <p>Main Task: {props.mainTask}</p>
      <p>Position Title: {props.positionTitle}</p>
      <p>Date From: {props.dateFrom}</p>
      <p>Date To: {props.dateTo}</p>
      
    </div>
  );
};
export default EducationalExperience;
