import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

function Auth() {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>MFA Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* <SignUp /> */}
      <LogIn />
    </div>
  );
}

function LogIn() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>
        <div>
          <input
            type="text"
            placeholder="Usernames"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account? Login!
          </span>
          <button className="button info-button">Signup</button>
        </div>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign Up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastName"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Usernames"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="infoInput"
            name="confirmpass"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account? Login!
          </span>
        </div>
        <button className="button info-button">Signup</button>
      </form>
    </div>
  );
}

export default Auth;
