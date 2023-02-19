// import Header from "./components/Header";
// import Footer from "./components/Footer";
import GeneralInformation from "./components/GeneralInformation";
import PracticalExperience from "./components/PracticalExperience";
import EducationalExperience from "./components/EducationalExperience";
// import uniqid from "uniqid";
import React, { Component } from "react";
import "./styles/style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      isSubmitted: false,
    };
  }
  handleInputChange = (e) => {
    // console.log(e.target.name);

    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isSubmitted: true,
    });
  };
  handleEdit = (e) => {
    e.preventDefault();
    this.setState({
      isSubmitted: false,
    });
  };

  render() {
    const {
      name,
      email,
      phoneNumber,
      schoolName,
      titleOfStudy,
      dateOfStudy,
      companyName,
      mainTask,
      positionTitle,
      dateFrom,
      dateTo,
    } = this.state;
    if (this.state.isSubmitted) {
      return (
        <div>
          <GeneralInformation
            name={name}
            email={email}
            phoneNumber={phoneNumber}
          />
          <PracticalExperience
            schoolName={schoolName}
            titleOfStudy={titleOfStudy}
            dateOfStudy={dateOfStudy}
          />
          <EducationalExperience
            companyName={companyName}
            mainTask={mainTask}
            positionTitle={positionTitle}
            dateFrom={dateFrom}
            dateTo={dateTo}
          />
          <button onClick={this.handleEdit}>Edit</button>
        </div>
      );
    }

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={this.handleInputChange}
            value={name}
          />

          <input
            name="email"
            type="text"
            placeholder="Email"
            onChange={this.handleInputChange}
            value={email}
          />

          <input
            name="phoneNumber"
            type="text"
            placeholder="PhoneNumber"
            onChange={this.handleInputChange}
            value={phoneNumber}
          />
          <input
            name="schoolName"
            type="text"
            placeholder="School Name"
            onChange={this.handleInputChange}
            value={schoolName}
          />
          <input
            name="titleOfStudy"
            type="text"
            placeholder="Title Of Study"
            onChange={this.handleInputChange}
            value={titleOfStudy}
          />
          <input
            name="dateOfStudy"
            type="text"
            placeholder="Date Of Study"
            onChange={this.handleInputChange}
            value={dateOfStudy}
          />
          <input
            name="companyName"
            type="text"
            placeholder="Company Name"
            onChange={this.handleInputChange}
            value={companyName}
          />
          <input
            name="mainTask"
            type="text"
            placeholder="Main Task"
            onChange={this.handleInputChange}
            value={mainTask}
          />
          <input
            name="positionTitle"
            type="text"
            placeholder="Position Title"
            onChange={this.handleInputChange}
            value={positionTitle}
          />
          <input
            name="dateFrom"
            type="text"
            placeholder="Date From"
            onChange={this.handleInputChange}
            value={dateFrom}
          />
          <input
            name="dateTo"
            type="text"
            placeholder="Date To"
            onChange={this.handleInputChange}
            value={dateTo}
          />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default App;
