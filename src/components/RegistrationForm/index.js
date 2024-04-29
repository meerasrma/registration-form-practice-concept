// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameError: false,
    showLastNameError: false,
    isSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    const isValidFirstName = firstName === ''
    this.setState({showFirstNameError: isValidFirstName})
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    const isValidLastName = lastName === ''
    this.setState({showLastNameError: isValidLastName})
  }

  renderFirstName = () => {
    const {firstName, showFirstNameError} = this.state
    return (
      <>
        <label htmlFor="first-name" className="input-label">
          FIRST NAME
        </label>
        <input
          type="text"
          className="input"
          id="first-name"
          placeholder="First name"
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
        {showFirstNameError ? this.errorMessage() : ''}
      </>
    )
  }

  errorMessage = () => <p className="error-msg">Required</p>

  renderLastName = () => {
    const {lastName, showLastNameError} = this.state
    return (
      <>
        <label htmlFor="last-name" className="input-label">
          LAST NAME
        </label>
        <input
          type="text"
          className="input"
          id="last-name"
          placeholder="Last name"
          value={lastName}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
        {showLastNameError ? this.errorMessage() : ''}
      </>
    )
  }

  onSubmitForm = () => {
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({
        isSubmitted: false,
        showFirstNameError: true,
        showLastNameError: true,
      })
    } else if (firstName === '') {
      this.setState({
        isSubmitted: false,
        showFirstNameError: true,
      })
    } else if (lastName === '') {
      this.setState({isSubmitted: false, showLastNameError: true})
    } else if (firstName !== '' && lastName !== '') {
      this.setState({
        isSubmitted: true,
        showFirstNameError: false,
        showLastNameError: false,
      })
    }
  }

  renderFormContainer = () => {
    const {showFirstNameError, showLastNameError} = this.state
    console.log(showFirstNameError, showLastNameError)
    return (
      <>
        <div className="form-container">
          <div className="input-container">{this.renderFirstName()}</div>
          <div className="input-container">{this.renderLastName()}</div>
          <button
            type="submit"
            className="button submit-button"
            onClick={this.onSubmitForm}
          >
            Submit
          </button>
        </div>
      </>
    )
  }

  onClickAnotherResponse = () => {
    this.setState({isSubmitted: false, firstName: '', lastName: ''})
  }

  renderSubmittedSuccessfully = () => (
    <div className="submit-successfully-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="success-image"
        />
      </div>
      <p className="desc">Submitted Successfully</p>
      <button
        type="button"
        className="button"
        onClick={this.onClickAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmitted, firstName, lastName} = this.state
    console.log(firstName, lastName)
    return (
      <div className="registration-form-application">
        <div className="registration-form-container">
          <h1 className="form-heading">Registration</h1>
          {isSubmitted
            ? this.renderSubmittedSuccessfully()
            : this.renderFormContainer()}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
