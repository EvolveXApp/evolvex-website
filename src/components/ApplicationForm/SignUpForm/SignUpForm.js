import React, { Component } from "react";
import "./form.scss";
import ViewResourcesForm from "../ViewResourcesForm";

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

export default class SignUpForm extends Component {
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

  handleAttachment = (e) => {
    const target = e.target;
    this.setState((prevState) => {
      return {
        values: {
          ...prevState.values,
          [target.name]: target.files[0],
        },
      };
    });

    // this.setState({ [e.target.name]: e.target.files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let fieldValues = [
      "Name",
      "Email",
      "Phone",
      "Profession",
      "Portfolio",
      "Linkedin",
      "Resume",
      "CoverLetter",
    ];

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
    const { Resume, CoverLetter } = this.state.values;
    const { error } = this.state;
    const { formName } = this.props;

    let resumeName = Resume ? (
      <label htmlFor="files" id="label-resume" className="buttons-attachment">
        <p className="labels">{Resume.name}</p>
      </label>
    ) : (
      <label id="label-resume" htmlFor="files" className="buttons">
        <p className="labels">Resume</p>
      </label>
    );
    let coverLetter = CoverLetter ? (
      <label htmlFor="cover-letter" className="buttons-attachment">
        <p className="labels">{CoverLetter.name}</p>
      </label>
    ) : (
      <label htmlFor="cover-letter" className="buttons">
        <p className="labels">Cover Letter</p>{" "}
      </label>
    );

    const isFormNotSubmitted = this.state.isFormNotSubmitted;
    if (isFormNotSubmitted) {
      return (
        <div className="form-wrapper">
          <form
            className="form"
            name={formName}
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="form-name" value="apply" />
            <input type="hidden" name="bot-field" />

            <div className="form-container">
              <div>
                <input
                  className="fields"
                  type="text"
                  placeholder="Name"
                  name="Name"
                  onChange={this.handleChange}
                />

                <input
                  className="fields"
                  type="text"
                  placeholder="Email"
                  name="Email"
                  onChange={this.handleChange}
                />
                <input
                  className="fields"
                  type="text"
                  placeholder="Phone"
                  name="Phone"
                  onChange={this.handleChange}
                />

                <input
                  className="fields"
                  type="text"
                  placeholder="Profession"
                  name="Profession"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <input
                  className="fields"
                  type="text"
                  placeholder="Portfolio"
                  name="Portfolio"
                  onChange={this.handleChange}
                />
                <input
                  className="fields"
                  type="text"
                  placeholder="LinkedIn"
                  name="Linkedin"
                  onChange={this.handleChange}
                />

                {resumeName}

                <input
                  id="files"
                  style={{ visibility: "hidden" }}
                  type="file"
                  name="Resume"
                  onChange={this.handleAttachment}
                />

                {coverLetter}

                <input
                  id="cover-letter"
                  style={{ visibility: "hidden" }}
                  type="file"
                  name="CoverLetter"
                  onChange={this.handleAttachment}
                />
              </div>
            </div>
            <div className="error-field">{error && error}</div>

            <div className="submit-button-container">
              <input type="submit" className="submitButton" value="Submit" />
            </div>
          </form>
        </div>
      );
    } else {
      return <ViewResourcesForm />;
    }
  }
}
