import React, { useEffect, useState } from "react";
import LoginLogo from "../../Svg/LoginLogo.gif";
import Signup from "./Signup";
import { useMutation } from "@apollo/client";
import { LoginUser } from '../../gql/mutation'
import { toast } from "react-toastify";
import BrandName from '../BrandName'

function Login(props) {
  console.log(props);
  const [LoginData, setLoginData] = useState({ email: "", password: "" });
  const [user_login_password_show, setuser_login_password_show] = useState(false)
  const [Loginuser, { loading, data, error }] = useMutation(LoginUser)
  const SubmitLoginForm = async (e) => {
    e.preventDefault();
    if (LoginData.email == "") {
      toast.error("Email is required !")
      return
    } else if (LoginData.password == "") {
      toast.error("password is required !")
      return
    } else {
      await Loginuser({
        variables: {
          Logindata: LoginData
        }
      }).then((data) => {
        document.getElementById("LoginClosebtn").click();
      })
    }

  };
  useEffect(() => {
    if (data) {
      props.addToLoginHandler({ state: data.data });
      toast.success("hello" + " " + data.data.username)
      if (!(document.getAnimations("Login_checkBox").checked)) {
        localStorage.setItem("Token", data.data.token)
      }
      localStorage.setItem("Token", data.data.token)
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
            <div className="modal-body p-0  ">
              <div className="d-flex align-items-center justify-content-between">
                <button className="btn btn-close d-none" data-bs-dismiss="modal" id="LoginClosebtn"></button>
                <div className="w-50 ">
                  <img src={LoginLogo} alt="login logo" style={{ width: "-webkit-fill-available" }} className="rounded-3" />
                </div>
                <div className="bg-body-secondary rounded-end-3 w-100 pe-3">
                  <span className="btn btn-close  position-absolute  p-2 " style={{ right: "0px" }} data-bs-dismiss="modal"></span>
                  <form className="pe-3 pt-3 w-auto px-5 ">
                    <span className="text-primary d-flex justify-content-between align-items-center">
                      <span className="h3">Login</span>
                      <span><BrandName /></span>
                    </span>
                    <div className="mb-3 text-start mt-4">
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
                        required
                        onChange={(e) =>
                          setLoginData({ ...LoginData, email: e.target.value })
                        }
                      />
                      <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div className="mb-2 text-start">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type={user_login_password_show ? "text" : "password"}
                        className="form-control"
                        id="exampleInputPassword1"
                        value={LoginData.password}
                        required
                        onChange={(e) =>
                          setLoginData({ ...LoginData, password: e.target.value })
                        }
                      />
                      <i className={`bi bi-${user_login_password_show ? 'eye-slash' : "eye"} ${user_login_password_show ? 'text-primary' : "text-dark"} text-primary h5`} id="user_login_password_show" onClick={() => setuser_login_password_show(!user_login_password_show)}></i>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="form-check form-switch mb-3">
                        <input className="form-check-input" type="checkbox" style={{ cursor: "pointer" }} role="switch" id="Login_checkBox" />
                        <label className="form-check-label form-text" or="Login_checkBox">Remember me</label>
                      </div>
                      <span className="text-primary form-text" style={{ cursor: "pointer" }}> Forget password ?</span>
                    </div>
                    <div className="d-grid container">
                      {
                        loading ? <button className="btn btn-primary me-2" type="button" disabled>
                          <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                          <span role="status" className="fw-bold">Loading...</span>
                        </button> : <button
                          type="submit"
                          className={`btn btn-primary me-2 fw-bold ${loading || (LoginData.email == "" && LoginData.password == "") ? "disabled" : null
                            }`}
                          onClick={(e) => SubmitLoginForm(e)}
                        >
                          Login
                        </button>
                      }

                    </div>
                    <h6 className="d-flex justify-content-evenly my-3 form-text"><span>Don't have an account?</span><span className="text-primary" style={{ cursor: "pointer" }} data-bs-target="#SignUpModelToggle2"
                      data-bs-toggle="modal" >Sign Up</span>
                    </h6>
                  </form>
                  <div className="d-flex justify-content-evenly py-4 px-5">
                    <button className=" btn btn-outline-primary border border-primary rounded px-4"><i className="bi bi-google  px-2"></i>Google</button>
                    <button className=" btn btn-outline-secondary border border-secondary rounded px-4"><i className="bi bi-apple  px-2"></i>Apple</button>
                  </div>
                </div>
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
