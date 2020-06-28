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
    this.state = { isFormNotSubmitted: true };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAttachment = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => this.setState({ isFormNotSubmitted: false }))
      .then(() => console.log(this.state, "hello"))

      .catch((error) => alert(error));
  };

  render() {
    const isFormNotSubmitted = this.state.isFormNotSubmitted;
    if (isFormNotSubmitted) {
      return (
        <div className="form-wrapper">
          <form
            className="form"
            name="apply"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="form-name" value="apply" />
            <input name="bot-field" />
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

                <input
                  className="buttons"
                  type="file"
                  name="resume"
                  onChange={this.handleAttachment}
                />

                <input
                  className="buttons"
                  type="file"
                  name="cover_letter"
                  onChange={this.handleAttachment}
                />
              </div>
            </div>
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
