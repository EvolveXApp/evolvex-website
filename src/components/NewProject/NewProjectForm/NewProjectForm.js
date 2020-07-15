import React, { Component } from "react";
import "./newProjectForm.scss";
import ViewResourcesForm from "../../ApplicationForm/ViewResourcesForm/ViewResourcesForm";

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

class NewProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = { isFormNotSubmitted: true, values: {}, error: "" };
  }

  handleChange = (e) => {
    const target = e.target;
    this.setState((prevState) => {
      return {
        values: {
          ...prevState.values,
          [target.name]: target.value,
        },
      };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let fieldValues = ["Name", "Email", "Phone", "Company-Name"];

    let empty = fieldValues.filter((value) => {
      return !this.state.values[value];
    });

    if (!empty.length) {
      const form = e.target;
      fetch("/", {
        method: "POST",
        body: encode({
          "form-name": form.getAttribute("name"),
          ...this.state.values,
        }),
      })
        .then(() => this.setState({ isFormNotSubmitted: false }))
        .catch((error) => alert(error));
    } else {
      return this.setState({ error: empty[0] + " required" });
    }
  };

  render() {
    const { error } = this.state;
    const { formName } = this.props;

    const isFormNotSubmitted = this.state.isFormNotSubmitted;
    if (isFormNotSubmitted) {
      return (
        <form
          className="new-project-form"
          name={formName}
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <input
            type="hidden"
            name="form-name"
            value="Have a Project in mind?"
          />
          <input type="hidden" name="bot-field" />

          <div className="new-project-form-container">
            {/* <form className="new-project-form">
          <div className="new-project-form-container"> */}
            <div className="text-fields">
              <div>
                <input
                  className="new-project-fields"
                  type="text"
                  placeholder="Name"
                  name="Name"
                  onChange={this.handleChange}
                />

                <input
                  className="new-project-fields"
                  type="text"
                  placeholder="Email"
                  name="Email"
                  onChange={this.handleChange}
                />
                <input
                  className="new-project-fields"
                  type="text"
                  placeholder="Phone"
                  name="Phone"
                  onChange={this.handleChange}
                />

                <input
                  className="new-project-fields"
                  type="text"
                  placeholder="Company Name"
                  name="Company-Name"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="project-resume">
              <p className="text-style"> Project Type</p>
              <select className="new-project-type" defaultValue={"DEFAULT"}>
                <option value="DEFAULT" disabled>
                  Select All That Apply
                </option>
              </select>

              <p className="text-style">Tell Us About Your Project</p>
              <textarea
                className="project-textarea"
                id="w3review"
                rows="8"
                cols="25"
              ></textarea>
            </div>
          </div>
          <div className="error-field">{error && error}</div>

          <div className="submit-button-container">
            <input className="submitButton" type="submit" value="Submit" />
          </div>
        </form>
      );
    } else {
      return <ViewResourcesForm />;
    }
  }
}

export default NewProjectForm;
