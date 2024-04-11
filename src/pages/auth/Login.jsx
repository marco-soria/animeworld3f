import { useState, useContext } from "react";
import { postLoginService } from "../../services/auth_services";
import { Link,useLocation, useNavigate } from "react-router-dom";
import './Login.css';
import SignInImage from '../../assets/signin/momosignin.jpg';
import { AuthContext } from "./AuthContext";

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { updateAuthentication } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    postLoginService(credentials).then((data) => {
      if (!data) {
        alert("Incorrect credentials");
        return;
      }

      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      updateAuthentication();
      const next = location.state?.from || '/store'; // Ruta por defecto o ruta previa
      navigate(next);
    });
  };

  return (
    <div className="container" style={{ marginTop: '80px' }}>
      <div className="row justify-content-center">
        <div className="col-md-6 p-0">
          <div className="card border-0 formbg" id="signupCard">
            <div className="card-body ">
              <h2 className="formheading mb-3">Authentication</h2>
            <img src={SignInImage} className="img-fluid" alt="Signup Image" />
              <form onSubmit={handleSubmit} id="loginForm">
                <div className="mb-3 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={credentials.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={credentials.password}
                    onChange={handleInputChange}
                  />
                </div>
                {/* <div className="mb-3" id="forgotPasswordContainer">
                  <Link to="#" id="forgotPasswordLink" className="lasthover">Forgot your password?</Link>
                </div> */}
                <div className="mb-3 d-none" id="subscribeContainer">
                  <input type="checkbox" className="form-check-input" id="subscribeCheckbox" />
                  <label className="form-check-label" htmlFor="subscribeCheckbox">Subscribe to this website</label>
                </div>
                <div className="mb-3 d-flex justify-content-between">
                  <button type="submit" className="btn btn-secondary signinbutton">Sign In</button>
                  <Link to="/register" className="btn btn-secondary signupbutton">Sign Up</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
