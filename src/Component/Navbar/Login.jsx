import React, { useState } from "react";
import LoginLogo from "../../Svg/LoginLogo.svg";
import Signup from "./Signup";
import { LoginAPI } from "../../server/UserAPI";

function Login(props) {
  const [LoginData, setLoginData] = useState({ username: "", password: "" });
  const [Loading, setLoading] = useState(true);

  console.log(props);

  const SubmitLoginForm = async (e) => {
    e.preventDefault();
    setLoading(false);
    // if login is successful then close the modal and redirect to dashboard page else show error message in
    const LoginToken = await LoginAPI(LoginData);
    setLoading(LoginToken.state);
    document.getElementById("CloseLoginButton").click();
    props.addToLoginHandler({ state: LoginToken });
  };

  const checkInput = (data) => {
    if (data.username === "" || data.password === "") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      {/* <!-- Login Modal --> */}
      {/* add signup model data  */}
      {!props.LoginState ? (
        <>
          {" "}
          <div
            className="modal fade"
            id="LoginModalToggle"
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
                    id="CloseLoginButton"
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
                    <form className="me-3 mt-3  container">
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
                          value={LoginData.username}
                          onChange={(e) =>
                            setLoginData({
                              ...LoginData,
                              username: e.target.value,
                            })
                          }
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
                          value={LoginData.password}
                          onChange={(e) =>
                            setLoginData({
                              ...LoginData,
                              password: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className={`btn btn-primary me-2 ${Loading === false ? "disabled" : null
                          } ${checkInput(LoginData) === false ? "disabled" : null
                          }`}
                        // data-bs-dismiss="modal"
                        onClick={(e) => SubmitLoginForm(e)}
                      >
                        {Loading === false ? (
                          <span
                            className="spinner-border spinner-border-sm"
                            aria-hidden="true"
                          ></span>
                        ) : null}
                        Login
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-bs-target="#SignUpModelToggle2"
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
          <Signup />
        </>
      ) : null}
    </>
  );
}

export default Login;
