import {Component} from 'react'
import {Link} from 'react-router-dom'

class App extends Component {
  state = {
    userInput: '7896781234',
  }

  onChangeUserInput = e => {
    this.setState({userInput: e.target.value})
  }

  render() {
    const {userInput} = this.state
    return (
      <div className="container">
        <img src="" alt="logo" />
        <h1 className="heading">Welcome Back</h1>
        <p className="para">Please sign in to your account</p>
        <div className="phone-no d-flex flex-column">
          <label htmlFor="input">Enter Contact Number</label>
          <input
            id="input"
            type="text"
            className="input"
            value={userInput}
            onChange={this.onChangeUserInput}
          />
        </div>
        <p className="para">
          We Will send you a one time SMS message.
          <br />
          Charges may apply.
        </p>
        <div className="button">
          <Link to="/verify">
            <button className="button" type="button">
              Sign In with OTP
            </button>
          </Link>
        </div>
      </div>
    )
  }
}
export default App
