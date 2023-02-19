import React from "react";

const GeneralInformation = (props) => {
  return (
    <div>
      <h2>GeneralInformation</h2>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>PhoneNumber: {props.phoneNumber}</p>
    </div>
  );
};
export default GeneralInformation;
