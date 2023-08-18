import React, { useEffect, useState } from "react";
import { GetUsers, UpdateData } from "../../server/UserAPI";
import { InputEditEnableAndDisable } from "../../Function/InputEditEnableAndDisable";
import { velidateInput } from "../../Function/VelidateInputInLength";
import { useNavigate } from "react-router-dom";

const LoginSecurity = (props) => {
  const navigate = useNavigate();
  const [LoginAndSecurityData, setLoginAndSecurityData] = useState({
    Email: "",
    UserName: "",
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
  });

  const [ResData, setResData] = useState("");

  async function GetUsersSort() {
    const GetResData = await GetUsers(
      props.data.UserLogin.LoginData.state.username
    );
    setResData(GetResData);
    setLoginAndSecurityData({
      ...LoginAndSecurityData,
      UserName: GetResData.username,
      Email: GetResData.email,
      PhoneNumber: GetResData.phone,
      FirstName: GetResData.name.firstname,
      LastName: GetResData.name.lastname,
    });
  }
  console.log(ResData);
  useEffect(() => {
    GetUsersSort();
  }, []);

  const UpdateSecurityData = async (e) => {
    e.preventDefault();
    let resData = ResData;
    resData.username = LoginAndSecurityData.UserName;
    resData.email = LoginAndSecurityData.Email;
    resData.phone = LoginAndSecurityData.PhoneNumber;
    resData.name.firstname = LoginAndSecurityData.FirstName;
    resData.name.lastname = LoginAndSecurityData.LastName;
    const UpdateResData = await UpdateData(resData);
    navigate("/Profile", {
      state: {
        state: "show",
        info: { color: "success", message: "Login data is updated" },
      },
    });
  };

  return (
    <>
      <h2 className="text-center">Login & Security </h2>
      <div className="container">
        <form
          className="row g-3 w-50 m-auto"
          onSubmit={(e) => UpdateSecurityData(e)}
        >
          <label htmlFor="UserName" className="form-label">
            User Name
          </label>
          <div className="col-12 input-group mt-0">
            <input
              type="text"
              id="UserName"
              className="form-control "
              placeholder="UserName"
              aria-label=" username"
              value={LoginAndSecurityData.UserName}
              onChange={(e) => {
                setLoginAndSecurityData({
                  ...LoginAndSecurityData,
                  UserName: e.target.value,
                });
                velidateInput(e.target, 4);
              }}
              disabled
              required
            />

            <button
              className="btn btn-outline-secondary"
              onClick={(e) => InputEditEnableAndDisable(e)}
              type="button"
            >
              <i className="bi bi-pen-fill"></i>
            </button>
          </div>
          <label htmlFor="Email" className="form-label">
            Email
          </label>
          <div className="col-12 input-group mt-0">
            <input
              type="email"
              id="Email"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              value={LoginAndSecurityData.Email}
              onChange={(e) => {
                setLoginAndSecurityData({
                  ...LoginAndSecurityData,
                  Email: e.target.value,
                });
                velidateInput(e.target, 10);
              }}
              disabled
              required
            />
            <button
              className="btn btn-outline-secondary"
              onClick={(e) => InputEditEnableAndDisable(e)}
              type="button"
            >
              <i className="bi bi-pen-fill"></i>
            </button>
          </div>
          <div className="col-md-6 mt-2 " style={{ width: "auto" }}>
            <label htmlFor="FirstName" className="form-label">
              First Name
            </label>
            <div className="input-group me-auto">
              <input
                type="text"
                className="form-control"
                id="FirstName"
                placeholder="First Name"
                aria-label="First Name"
                value={LoginAndSecurityData.FirstName}
                onChange={(e) => {
                  setLoginAndSecurityData({
                    ...LoginAndSecurityData,
                    FirstName: e.target.value,
                  });
                  velidateInput(e.target, 2);
                }}
                disabled
                required
              />
              <button
                className="btn btn-outline-secondary"
                onClick={(e) => InputEditEnableAndDisable(e)}
                type="button"
              >
                <i className="bi bi-pen-fill"></i>
              </button>
            </div>
          </div>
          <div className="col-lg  mt-2 " style={{ width: "auto" }}>
            <label htmlFor="LastName" className="form-label">
              Last Name
            </label>
            <div className="input-group">
              <input
                type="text"
                id="LastName"
                className="form-control"
                placeholder="Last Name"
                aria-label="Last Name"
                value={LoginAndSecurityData.LastName}
                onChange={(e) => {
                  setLoginAndSecurityData({
                    ...LoginAndSecurityData,
                    LastName: e.target.value,
                  });
                  velidateInput(e.target, 2);
                }}
                disabled
                required
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={(e) => InputEditEnableAndDisable(e)}
              >
                <i className="bi bi-pen-fill"></i>
              </button>
            </div>
          </div>
          <label htmlFor="PhoneNumber" className="form-label">
            Phone Number
          </label>
          <div className="col-12 input-group mt-0">
            <input
              type="text"
              id="PhoneNumber"
              className="form-control"
              placeholder="Phone Number"
              aria-label="Phone Number"
              value={LoginAndSecurityData.PhoneNumber}
              onChange={(e) => {
                setLoginAndSecurityData({
                  ...LoginAndSecurityData,
                  PhoneNumber: e.target.value,
                });
                velidateInput(e.target, 12);
              }}
              disabled
              required
            />
            <button
              className="btn btn-outline-secondary"
              onClick={(e) => InputEditEnableAndDisable(e)}
              type="button"
            >
              <i className="bi bi-pen-fill"></i>
            </button>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginSecurity;
