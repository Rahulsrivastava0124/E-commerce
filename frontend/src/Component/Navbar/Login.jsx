import React, { useEffect, useState } from "react";
import LoginLogo from "../../Svg/LoginLogo.svg";
import Signup from "./Signup";
import { useMutation } from "@apollo/client";
import { LoginUser } from '../../gql/mutation'
import { toast } from "react-toastify";
function Login(props) {
  const [LoginData, setLoginData] = useState({ email: "", password: "" });
  const [Loginuser, { loading, data, error }] = useMutation(LoginUser)
  const SubmitLoginForm = async (e) => {
    e.preventDefault();
    await Loginuser({
      variables: {
        Logindata: LoginData
      }
    })
  };
  useEffect(() => {
    if (data) {
      props.addToLoginHandler({ state: data.data });
      document.getElementById("LoginClosebtn").click();
      toast.success("hello" + " " + data.data.username)
    }
    if (error) {
      toast.error(error.message)
    }
  }, [data, error])


  return (
    <>
      {/* <!-- Login Modal --> */}
      {/* add signup model data  */}
      <div
        className="modal fade"
        id="LoginModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
        z-index="3"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                User Login
              </h1>
              <button
                type="button"
                id="LoginClosebtn"
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
                      value={LoginData.email}
                      onChange={(e) =>
                        setLoginData({ ...LoginData, email: e.target.value })
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
                        setLoginData({ ...LoginData, password: e.target.value })
                      }
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className={`btn btn-primary me-2 ${loading ? "disabled" : null
                      }`}
                    // data-bs-dismiss="modal"
                    onClick={(e) => SubmitLoginForm(e)}
                  >
                    {loading ? (
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
  );
}

export default Login;
