import React, { useState } from "react";
import { SignUpAPI } from "../server/UserAPI.js";

function Signup() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Zip, setZip] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Check, setCheck] = useState("");

  const InputEmail = (e) => {
    setEmail(e.target.value);
  };

  const InputPassword = (e) => {
    setPassword(e.target.value);
  };

  const InputFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const InputLastName = (e) => {
    setLastName(e.target.value);
  };

  const InputAddress = (e) => {
    setAddress(e.target.value);
  };

  const InputCity = (e) => {
    setCity(e.target.value);
  };

  const InputState = (e) => {
    setState(e.target.value);
  };

  const InputZip = (e) => {
    setZip(e.target.value);
  };

  const InputPhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const InputCheck = (e) => {
    setCheck(e.target.checked);
  };

  const SubmitSignUp = (e) => {
    e.preventDefault();

    if (!Check) {
      alert("Please check the terms and conditions");
    }
    const data = {
      email: Email,
      username: FirstName + LastName,
      password: Password,
      name: {
        firstname: FirstName,
        lastname: LastName,
      },
      address: {
        city: City,
        street: State,
        number: 0,
        zipcode: Zip,
        geolocation: {
          lat: "4564654",
          long: "56456456",
        },
      },
      phone: PhoneNumber,
    };

    SignUpAPI(data);
  };

  return (
    <>
      <div
        className="modal fade "
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
                    value={Email}
                    onChange={(e) => InputEmail(e)}
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
                    value={Password}
                    onChange={(e) => InputPassword(e)}
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
                    value={FirstName}
                    onChange={(e) => InputFirstName(e)}
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
                    value={LastName}
                    onChange={(e) => InputLastName(e)}
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
                    value={Address}
                    onChange={(e) => InputAddress(e)}
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
                    value={City}
                    onChange={(e) => InputCity(e)}
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
                    value={State}
                    onChange={(e) => InputState(e)}
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
                    value={Zip}
                    onChange={(e) => InputZip(e)}
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
                    value={PhoneNumber}
                    onChange={(e) => InputPhoneNumber(e)}
                  />
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                      checked={Check}
                      onChange={(e) => InputCheck(e)}
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
