import React, { useEffect, useState } from "react";
import { GetUsers } from "../server/UserAPI";
import { InputEditEnableAndDisable } from "../Function/InputEditEnableAndDisable";
import { UpdateData } from "../server/UserAPI";

const LoginSecurity = (props) => {
  console.log("Security", props.data);

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
    console.log(ResData);
    setLoginAndSecurityData({
      ...LoginAndSecurityData,
      UserName: GetResData.username,
      Email: GetResData.email,
      PhoneNumber: GetResData.phone,
      FirstName: GetResData.name.firstname,
      LastName: GetResData.name.lastname,
    });
  }

  useEffect(() => {
    GetUsersSort();
  }, []);

  const UpdateSecurityData = async (e) => {
    e.preventDefault();
    let resData = ResData.data;
    resData.username = LoginAndSecurityData.UserName;
    resData.email = LoginAndSecurityData.Email;
    resData.phone = LoginAndSecurityData.PhoneNumber;
    resData.name.firstname = LoginAndSecurityData.FirstName;
    resData.name.lastname = LoginAndSecurityData.LastName;
    const UpdateResData = await UpdateData(resData);
    console.log(UpdateResData);
  };

  return (
    <>
      <h2 className="text-center">Login & Security </h2>
      <div className="container">
        <form
          className="row g-3 w-50 m-auto"
          onSubmit={(e) => UpdateSecurityData(e)}
        >
          <div className="col-12 input-group">
            <input
              type="text"
              className="form-control "
              placeholder="UserName"
              aria-label=" username"
              value={LoginAndSecurityData.UserName}
              onChange={(e) =>
                setLoginAndSecurityData({
                  ...LoginAndSecurityData,
                  UserName: e.target.value,
                })
              }
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
              onChange={(e) =>
                setLoginAndSecurityData({
                  ...LoginAndSecurityData,
                  Email: e.target.value,
                })
              }
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
              onChange={(e) =>
                setLoginAndSecurityData({
                  ...LoginAndSecurityData,
                  FirstName: e.target.value,
                })
              }
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
              onChange={(e) =>
                setLoginAndSecurityData({
                  ...LoginAndSecurityData,
                  LastName: e.target.value,
                })
              }
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
              onChange={(e) =>
                setLoginAndSecurityData({
                  ...LoginAndSecurityData,
                  PhoneNumber: e.target.value,
                })
              }
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
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginSecurity;
