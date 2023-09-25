import {Link} from 'react-router-dom'

const Success = () => (
  <div className="cont">
    <img src="" alt="logo" />
    <h1 className="heading">Welcome to AdmitKard</h1>
    <p className="para">
      In order to provide you with <br /> a custom experience,
      <br />
      we need to ask you a few questions.
    </p>
    <div>
      <Link to="/home">
        <button type="button">Get Started</button>
      </Link>
      <p className="para">*This will only take 5 min.</p>
    </div>
  </div>
)
export default Success
