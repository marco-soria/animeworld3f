import React from 'react';
import './Signin.css'; // Importa los estilos CSS

import SignInImage from '../../assets/signin/momosignin.jpg';
import SignUpImage from '../../assets/signin/momosignup.webp';

function SignInForm() {
  const toggleView = (view) => {
    const signupCard = document.getElementById("signupCard");
    const forgotPasswordContainer = document.getElementById("forgotPasswordContainer");
    const subscribeContainer = document.getElementById("subscribeContainer");

    if (view === 'signin') {
      signupCard.querySelector('img').src = SignInImage;
      forgotPasswordContainer.classList.remove('d-none');
      subscribeContainer.classList.add('d-none');
    } else if (view === 'signup') {
      signupCard.querySelector('img').src = SignUpImage;
      forgotPasswordContainer.classList.add('d-none');
      subscribeContainer.classList.remove('d-none');
    }
  };

  return (
    <div className="container" style={{ marginTop: '80px' }}>
      <div className="row justify-content-center">
        <div className="col-md-6 p-0">
          <div className="card border-0" id="signupCard">
            <div className="card-body formbg">
              <img src={SignInImage} className="img-fluid" alt="Signup Image" />
              <form id="signupForm">
                <div className="mb-3 mt-3">
                  <input type="text" className="form-control" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="mb-3" id="forgotPasswordContainer">
                  <a href="#" id="forgotPasswordLink" className="lasthover">Forgot your password?</a>
                </div>
                <div className="mb-3 d-none" id="subscribeContainer">
                  <input type="checkbox" className="form-check-input" id="subscribeCheckbox" />
                  <label className="form-check-label" htmlFor="subscribeCheckbox">Subscribe to this website</label>
                </div>
                <div className="mb-3 d-flex justify-content-between">
                  <button type="button" className="btn btn-secondary signinbutton" onClick={() => toggleView('signin')}>Sign In</button>
                  <button type="button" className="btn btn-secondary signupbutton" onClick={() => toggleView('signup')}>Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SignInForm };