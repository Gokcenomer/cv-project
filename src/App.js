// import Header from "./components/Header";
// import Footer from "./components/Footer";
import GeneralInformation from "./components/GeneralInformation";
import PracticalExperience from "./components/PracticalExperience";
import EducationalExperience from "./components/EducationalExperience";
// import uniqid from "uniqid";

import "./styles/style.css";

import React, { useState } from "react";

const App = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
    companyName: "",
    mainTask: "",
    positionTitle: "",
    dateFrom: "",
    dateTo: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    setIsSubmitted(true);
  };
  const handleEdit = () => {
    setIsSubmitted(false);
  };
  return isSubmitted ? (
    <div>
      <GeneralInformation
        name={formValues.name}
        email={formValues.email}
        phoneNumber={formValues.phoneNumber}
      />
      <PracticalExperience
        schoolName={formValues.schoolName}
        titleOfStudy={formValues.titleOfStudy}
        dateOfStudy={formValues.dateOfStudy}
      />
      <EducationalExperience
        companyName={formValues.companyName}
        mainTask={formValues.mainTask}
        positionTitle={formValues.positionTitle}
        dateFrom={formValues.dateFrom}
        dateTo={formValues.dateTo}
      />
      <button onClick={handleEdit}>Edit</button>
    </div>
  ) : (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleInputChange}
          value={formValues.name}
        />

        <input
          name="email"
          type="text"
          placeholder="Email"
          onChange={handleInputChange}
          value={formValues.email}
        />

        <input
          name="phoneNumber"
          type="text"
          placeholder="PhoneNumber"
          onChange={handleInputChange}
          value={formValues.phoneNumber}
        />
        <input
          name="schoolName"
          type="text"
          placeholder="School Name"
          onChange={handleInputChange}
          value={formValues.schoolName}
        />
        <input
          name="titleOfStudy"
          type="text"
          placeholder="Title Of Study"
          onChange={handleInputChange}
          value={formValues.titleOfStudy}
        />
        <input
          name="dateOfStudy"
          type="text"
          placeholder="Date Of Study"
          onChange={handleInputChange}
          value={formValues.dateOfStudy}
        />
        <input
          name="companyName"
          type="text"
          placeholder="Company Name"
          onChange={handleInputChange}
          value={formValues.companyName}
        />
        <input
          name="mainTask"
          type="text"
          placeholder="Main Task"
          onChange={handleInputChange}
          value={formValues.mainTask}
        />
        <input
          name="positionTitle"
          type="text"
          placeholder="Position Title"
          onChange={handleInputChange}
          value={formValues.positionTitle}
        />
        <input
          name="dateFrom"
          type="text"
          placeholder="Date From"
          onChange={handleInputChange}
          value={formValues.dateFrom}
        />
        <input
          name="dateTo"
          type="text"
          placeholder="Date To"
          onChange={handleInputChange}
          value={formValues.dateTo}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
