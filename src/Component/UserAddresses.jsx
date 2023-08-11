import React, { useState, useEffect } from "react";
import { InputEditEnableAndDisable } from "../Function/InputEditEnableAndDisable";
import { GetUsers } from "../server/UserAPI";

const Addresses = (props) => {
  const [AddressData, setAddressData] = useState({
    city: "",
    street: "",
    number: "",
    zipcode: "",
  });

  async function setUserValue() {
    const ResData = await GetUsers(
      props.data.UserLogin.LoginData.state.username
    );
    setAddressData({
      ...AddressData,
      city: ResData.address.city,
      street: ResData.address.street,
      number: ResData.address.number,
      zipcode: ResData.address.zipcode,
    });
  }

  useEffect(() => {
    setUserValue();
  }, []);

  return (
    <>
      <h2 className="text-center">Your Addresses</h2>
      <div className="container">
        <form className="row g-3 w-50 m-auto">
          <div className="col-12 input-group">
            <input
              type="text"
              className="form-control "
              placeholder="city"
              aria-label=" city"
              value={AddressData.city}
              disabled
            />
            <button
              className="btn btn-outline-secondary"
              onClick={(e) => InputEditEnableAndDisable(e)}
              type="button"
            >
              <i className="bi bi-pen-fill"></i>
            </button>
          </div>
          <div className="col-12 input-group">
            <input
              type="text"
              className="form-control"
              placeholder="street"
              aria-label="street"
              value={AddressData.street}
              disabled
            />
            <button
              className="btn btn-outline-secondary"
              onClick={(e) => InputEditEnableAndDisable(e)}
              type="button"
            >
              <i className="bi bi-pen-fill"></i>
            </button>
          </div>

          <div
            className="col-md-6 input-group me-auto"
            style={{ width: "auto" }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="number"
              aria-label="number"
              value={AddressData.number}
              disabled
            />
            <button
              className="btn btn-outline-secondary"
              onClick={(e) => InputEditEnableAndDisable(e)}
              type="button"
            >
              <i className="bi bi-pen-fill"></i>
            </button>
          </div>
          <div className="col-lg input-group " style={{ width: "auto" }}>
            <input
              type="text"
              className="form-control"
              placeholder="zipcode"
              aria-label="zipcode"
              value={AddressData.zipcode}
              disabled
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={(e) => InputEditEnableAndDisable(e)}
            >
              <i className="bi bi-pen-fill"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Addresses;
