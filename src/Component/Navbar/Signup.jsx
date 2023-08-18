import React, { useState } from "react";
import { SignUpAPI } from "../../server/UserAPI.js";

function Signup() {
  const [SignupData, setSignupData] = useState({
    Email: "",
    Password: "",
    FirstName: "",
    LastName: "",
    Address: "",
    City: "",
    State: "",
    Zip: "",
    PhoneNumber: "",
    Check: "",
  });
  const SubmitSignUp = (e) => {
    e.preventDefault();

    if (!SignupData.Check) {
      alert("Please check the terms and conditions");
    }
    const data = {
      email: SignupData.Email,
      username: SignupData.FirstName + SignupData.LastName,
      password: SignupData.Password,
      name: {
        firstname: SignupData.FirstName,
        lastname: SignupData.LastName,
      },
      address: {
        city: SignupData.City,
        street: SignupData.State,
        number: 0,
        zipcode: SignupData.Zip,
        geolocation: {
          lat: "4564654",
          long: "56456456",
        },
      },
      phone: SignupData.PhoneNumber,
    };
    SignUpAPI(data);
  };

  return (
    <>
      <div
        className="modal fade "
        id="SignUpModelToggle2 "
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
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-start">
              <form className="row g-3" onSubmit={(e) => SubmitSignUp(e)}>
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
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                    value={SignupData.Address}
                    onChange={(e) =>
                      setSignupData({ ...SignupData, Address: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCity"
                    value={SignupData.City}
                    onChange={(e) =>
                      setSignupData({ ...SignupData, City: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputState"
                    value={SignupData.State}
                    onChange={(e) =>
                      setSignupData({ ...SignupData, State: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="inputZip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputZip"
                    value={ SignupData.Zip }
                    onChange={(e) =>
                      setSignupData({ ...SignupData, Zip: e.target.value })
                    }
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="inputZip" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="Number"
                    className="form-control"
                    id="inputPhoneNumber"
                    value={SignupData.PhoneNumber}
                    onChange={(e) =>
                      setSignupData({
                        ...SignupData,
                        PhoneNumber: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                      checked={SignupData.Check}
                      onChange={(e) =>
                        setSignupData({ ...SignupData, Check: e.target.value })
                      }
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary "
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
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
