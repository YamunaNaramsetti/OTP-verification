import {Link} from 'react-router-dom'

const Verify = () => (
  <div className="verify-cont">
    <p className="otp-para">Please verify Mobile number</p>
    <div className="cont">
      <p className="para">An OTP is sent to +917896781234</p>
    </div>
    <div>
      <p className="para-no">3</p>
      <p className="para-no">6</p>
      <p className="para-no">1</p>
      <p className="para-no">2</p>
    </div>
    <p className="para">Didnt receive the code Resend</p>
    <div>
      <Link to="/success">
        <button className="button" type="button">
          Verify
        </button>
      </Link>
    </div>
  </div>
)
export default Verify
