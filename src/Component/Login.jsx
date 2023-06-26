import React, { useState } from "react";
import LoginLogo from "../Svg/LoginLogo.svg";
import Signup from "./Signup";
import { LoginAPI } from "../server/UserAPI";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const SetUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const SetPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const SubmitLoginForm = (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    console.log( LoginAPI(data));
  };
  return (
    
    <>
      {/* <!-- Login Modal --> */}
      <Signup />
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                User Login
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex">
                <div className="container">
                  <img src={LoginLogo} alt="login logo" />
                </div>
                <form
                  className="me-3 mt-3  container"
                  onSubmit={(e) => SubmitLoginForm(e)}
                >
                  <div className="mb-3 text-start ">
                    <label
                      htmlFor="exampleInputUserName"
                      className="form-label"
                    >
                      User Name
                    </label>
                    <input
                      type="UserName"
                      className="form-control"
                      id="exampleInputUserName"
                      aria-describedby="emailHelp"
                      value={username}
                      onChange={(e) => SetUserNameChange(e)}
                      required
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3 text-start">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={password}
                      onChange={(e) => SetPasswordChange(e)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary me-2"
                    data-bs-dismiss="modal"
                  >
                    Login
                  </button>
                  <button
                    className="btn btn-danger"
                    data-bs-target="#exampleModalToggle2"
                    data-bs-toggle="modal"
                  >
                    Create Account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
