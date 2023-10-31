import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { Signin } from "../../gql/mutation.js";
import { toast } from "react-toastify";



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
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header ">
              <h1
                className="modal-title text-center fs-3"
                id="exampleModalToggleLabel2"
              >
                Signup
              </h1>
              <button
                type="button"
                id="signinCloseBtn"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-start">
              <form className="row g-3">
                <div className="col-md-6">
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
                <div className="col-md-6 ">
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

                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className={`btn btn-primary me-2 ${loading ? "disabled" : null
                      }`}
                    // data-bs-dismiss="modal"
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
              </form>
            </div>
            <div className="modal-footer">
              <button
                id="SigninLoginBtn"
                className="btn btn-danger"
                data-bs-target="#LoginModalToggle"
                data-bs-toggle="modal"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
