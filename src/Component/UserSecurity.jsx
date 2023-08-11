import React, { useEffect, useState } from "react";
import { GetUsers } from "../server/UserAPI";
import { InputEditEnableAndDisable } from "../Function/InputEditEnableAndDisable";

const LoginSecurity = (props) => {
  console.log("Security", props.data);

  const [LoginAndSecurityData, setLoginAndSecurityData] = useState({
    Email: "",
    UserName: "",
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
  });

  async function GetUsersSort() {
    const ResData = await GetUsers(
      props.data.UserLogin.LoginData.state.username
    );
    setLoginAndSecurityData({
      ...LoginAndSecurityData,
      UserName: ResData.username,
      Email: ResData.email,
      PhoneNumber: ResData.phone,
      FirstName: ResData.name.firstname,
      LastName: ResData.name.lastname,
    });
  }

  useEffect(() => {
    GetUsersSort();
  }, []);
  return (
    <>
      <h2 className="text-center">Login & Security </h2>
      <div className="container">
        <form className="row g-3 w-50 m-auto">
          <div className="col-12 input-group">
            <input
              type="text"
              className="form-control "
              placeholder="UserName"
              aria-label=" username"
              value={LoginAndSecurityData.UserName}
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
              placeholder="Email"
              aria-label="Email"
              value={LoginAndSecurityData.Email}
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
              placeholder="First Name"
              aria-label="First Name"
              value={LoginAndSecurityData.FirstName}
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
              placeholder="Last Name"
              aria-label="Last Name"
              value={LoginAndSecurityData.LastName}
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

          <div className="col-12 input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              aria-label="Phone Number"
              value={LoginAndSecurityData.PhoneNumber}
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
        </form>
      </div>
    </>
  );
};

export default LoginSecurity;
