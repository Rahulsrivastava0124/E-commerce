import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { Signin } from "../../gql/mutation.js";
import { toast } from "react-toastify";
import SignupLogo from '../../Svg/GifImages/Signup.gif'
import BrandName from "../BrandName.jsx";


function Signup() {
  const [SigninUser, { loading, data, error }] = useMutation(Signin)
  const [SignupData, setSignupData] = useState({
    Email: "",
    Password: "",
    FirstName: "",
    LastName: "",
  });
  const SubmitSigninForm = (e) => {
    e.preventDefault();

    const userdata = {
      email: SignupData.Email,
      password: SignupData.Password,
      firstName: SignupData.FirstName,
      lastName: SignupData.LastName,
    };
    SigninUser({
      variables:
      {
        signinData: userdata
      }
    })
  }
  useEffect(() => {
    if (data) {
      document.getElementById("SigninLoginBtn").click()
      toast.success(" Account Created Successfull")
    }

    if (error) {
      console.log(error.message);
      toast.error(error.message)
    }
  }, [data, error])
  return (
    <>
      <div
        className="modal fade"
        id="SignUpModelToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content d-flex flex-row ">
            <div className="">
              <img src={SignupLogo} alt="" className="rounded-3" />
            </div>
            <div className="modal-body text-start bg-body-secondary rounded-end-3 px-5">
              <span className="d-flex justify-content-between pb-3 px-5">
                <span className="text-primary h4">Sign Up</span>
                <span><BrandName /></span>
              </span>
              <form className="row g-3 px-5">
                <div className="col-md-6">
                  <label htmlFor="inputFirstName4" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFirstName4"
                    value={SignupData.FirstName}
                    onChange={(e) =>
                      setSignupData({
                        ...SignupData,
                        FirstName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-md-6 ">
                  <label htmlFor="inputLastName4" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLastName4"
                    value={SignupData.LastName}
                    onChange={(e) =>
                      setSignupData({ ...SignupData, LastName: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    value={SignupData.Email}
                    onChange={(e) =>
                      setSignupData({ ...SignupData, Email: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-12 ">
                  <label htmlFor="inputPassword4" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    value={SignupData.Password}
                    onChange={(e) =>
                      setSignupData({ ...SignupData, Password: e.target.value })
                    }
                  />
                </div>
                <div class="form-check px-5 pb-1 ">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label form-text fw-bold" for="flexCheckDefault">
                    I,ve read and agree with Terms of Service and our <br></br>privacy  policy
                  </label>
                </div>
                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className={`btn btn-primary w-100 me-2 ${loading ? "disabled" : null
                      }`}
                    onClick={(e) => SubmitSigninForm(e)}
                  >
                    {loading ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        aria-hidden="true"
                      ></span>
                    ) : null}
                    Signin
                  </button>
                </div>
                <span className="text-center">OR </span>
              </form>

              <div className="d-flex justify-content-evenly py-4 px-5 ">
                <button className=" btn btn-outline-primary border border-primary rounded px-4 w-50"><i className="bi bi-google  px-2"></i>Google</button>
                <button className=" btn btn-outline-secondary border border-secondary rounded px-4 w-50 ms-4"><i className="bi bi-apple  px-2"></i>Apple</button>
              </div>
              <span className="text-center d-flex justify-content-center mb-2  fw-bold">
                <span>
                  Already have an account ?
                </span>
                <span id="SigninLoginBtn"
                  className="text-primary"
                  data-bs-target="#LoginModalToggle"
                  data-bs-toggle="modal"
                  style={{cursor:"pointer"}}
                  >
                  Login
                </span>
              </span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
