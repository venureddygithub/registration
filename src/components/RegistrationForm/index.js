import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    errorFirstValue: false,
    errorLastValue: false,
    isSubmitted: true,
  }

  onSubmitForm = event => {
    const {errorFirstValue, errorLastValue} = this.state
    event.preventDefault()
    if (errorFirstValue && errorLastValue) {
      this.setState({isSubmitted: false})
    }
  }

  fistNames = event => {
    this.setState({firstName: event.target.value})
  }

  lastNames = event => {
    this.setState({lastName: event.target.value})
  }

  errorInputValue = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({errorFirstValue: true})
    } else {
      this.setState({errorFirstValue: false})
    }
  }

  errorLastValue = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({errorLastValue: true})
    } else {
      this.setState({errorLastValue: false})
    }
  }

  renderUserName = () => {
    const {firstName} = this.state
    return (
      <>
        <label className="user-name" htmlFor="name">
          FIRST NAME
        </label>

        <input
          id="name"
          className="user-text"
          type="text"
          placeholder="first name"
          value={firstName}
          onChange={this.fistNames}
          onBlur={this.errorInputValue}
        />
      </>
    )
  }

  renderLastName = () => {
    const {lastName} = this.state
    return (
      <>
        <label className="user-name" htmlFor="name">
          LAST NAME
        </label>
        <input
          id="name"
          className="user-text"
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={this.lastNames}
          onBlur={this.errorLastValue}
        />
      </>
    )
  }

  isRegistrationForm = () => {
    const {errorFirstValue, errorLastValue} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Registration Form</h1>
        <form className="form-container" onClick={this.onSubmitForm}>
          <div className="login-container">
            {this.renderUserName()}
            {errorFirstValue && <p className="error-msg">*required</p>}
            {this.renderLastName()}
            {errorLastValue && <p className="error-msg">*required</p>}
            <div className="button-container">
              <button type="button" className="button">
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  renderSubmissionSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isSubmitted} = this.state
    return (
      <div>
        {isSubmitted
          ? this.isRegistrationForm()
          : this.renderSubmissionSuccessView()}
      </div>
    )
  }
}

export default RegistrationForm
