import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postClientFullService } from "../../services/auth_services";
import SignInImage from '../../assets/signin/momosignin.jpg';

export const Register = () => {
  const navigate = useNavigate();
  const [client, setClient] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleInputChange = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    postClientFullService(client)
      .then((data) => {
        if (!data) {
          alert("There was an error");
          return;
        }
        alert("Client registered successfully")
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error registering the client:", error);
        alert("There was an error registering the client. Please try again.");
      });
  };

  return (
    <div className="container" style={{ marginTop: '80px' }}>
      <div className="row justify-content-center">
        <div className="col-md-6 p-0">
          <div className="card border-0 formbg" id="signupCard">
            <div className="card-body ">
              <h2 className="formheading mb-3">Create your account</h2>
              <img src={SignInImage} className="img-fluid" alt="Signup Image" />
              
              <form onSubmit={handleSubmit} id="signupForm">
                <div className="mb-3 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={client.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={client.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    name="first_name"
                    value={client.first_name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    name="last_name"
                    value={client.last_name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={client.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    name="phone"
                    value={client.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    name="address"
                    value={client.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3 d-flex justify-content-between">
                  <button type="submit" className="btn btn-secondary signupbutton">Sign Up</button>
                  <Link to="/login" className="btn btn-secondary signinbutton">Sign In</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
