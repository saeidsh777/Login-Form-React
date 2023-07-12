import React from "react";
import "./Form.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNameData: "",
      lastNameData: "",
      emailData: "",

      submitted: false,

      allValid: false,
    };
  }

  formSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });

    if (
      this.state.firstNameData &&
      this.state.lastNameData &&
      this.state.emailData
    ) {
      this.setState({ allValid: true });
    }
    setTimeout(() => {
      this.setState({ allValid: false });
    }, 2000);
  }

  setFirstName(e) {
    this.setState({ firstNameData: e.target.value });
  }

  setLastName(e) {
    this.setState({ lastNameData: e.target.value });
  }

  setEmail(e) {
    this.setState({ emailData: e.target.value });
  }

  render() {
    return (
      <div className="form-container">
        <form
          className="register-form"
          autoComplete="off"
          onSubmit={(e) => this.formSubmit(e)}
        >
          {/* Uncomment the next line to show the success message */}
          {this.state.allValid && (
            <div className="success-message">
              Success! Thank you for registering
            </div>
          )}

          <input
            id="first-name"
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={this.state.firstNameData}
            onChange={(e) => this.setFirstName(e)}
          />
          {/* Uncomment the next line to show the error message */}
          {this.state.submitted && !this.state.firstNameData && (
            <span id="first-name-error">Please enter a first name</span>
          )}

          <input
            id="last-name"
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastNameData}
            onChange={(e) => this.setLastName(e)}
          />
          {/* Uncomment the next line to show the error message */}
          {this.state.submitted && !this.state.lastNameData && (
            <span id="last-name-error">Please enter a last name</span>
          )}
          <input
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.emailData}
            onChange={(e) => this.setEmail(e)}
          />
          {/* Uncomment the next line to show the error message */}
          {this.state.submitted && !this.state.emailData && (
            <span id="email-error">Please enter an email address</span>
          )}
          <button className="form-field" type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}
