import React, { useState } from "react";

const LoginSecurity = (props) => {
  console.log("Security", props.data);

  const [LoginAndSecurityData, setLoginAndSecurityData] = useState({
    Email: "",
    UserName: "",
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
  });

  const EditUserInput = (e) => {
    if (e.target.classList.contains("bi-x-lg")) {
      e.target.parentElement.previousSibling.setAttribute("disabled", "");
      e.target.classList.remove("bi-x-lg");
      e.target.classList.add("bi-pen-fill");
    } else if (e.target.classList.contains("btn")) {
      let ItemData=e.target.children[0].classList;
      if (e.target.children[0].classList.contains("bi-pen-fill")) {
        e.target.previousSibling.removeAttribute("disabled");
       ItemData.add("bi-x-lg");
       ItemData.remove("bi-pen-fill");
      } else {
        e.target.previousSibling.setAttribute("disabled", "");
       ItemData.remove("bi-x-lg");
       ItemData.add("bi-pen-fill");
      }
    } else {
      console.log("none");
      if (e.target.classList.contains("bi")) {
        e.target.parentElement.previousSibling.removeAttribute("disabled");
        e.target.classList.add("bi-x-lg");
        e.target.classList.remove("bi-pen-fill");
      } else {
        e.target.previousSibling.removeAttribute("disabled");
        e.target.children[0].classList.add("bi-x-lg");
        e.target.children[0].classList.remove("bi-pen-fill");
      }
    }
  };

  return (
    <>
      <h3 className="text-center">Login & Security </h3>
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
              onClick={(e) => EditUserInput(e)}
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
              onClick={(e) => EditUserInput(e)}
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
              onClick={(e) => EditUserInput(e)}
              type="button"
            >
              <i className="bi bi-pen-fill"></i>
            </button>
          </div>
          <div className="col-md-6 input-group " style={{ width: "auto" }}>
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
              onClick={(e) => EditUserInput(e)}
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
              onClick={(e) => EditUserInput(e)}
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
