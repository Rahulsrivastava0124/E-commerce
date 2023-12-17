import React, { useEffect, useState } from "react";
import { InputEditEnableAndDisable } from "../../Function/InputEditEnableAndDisable";
import { velidateInput } from "../../Function/VelidateInputInLength";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { getUser } from "../../gql/Query";
import Loading from "../LoadingStructer/Loading"
import { UpdatePhone } from "../../gql/mutation";
import { toast } from 'react-toastify'
const LoginSecurity = (props) => {
  const navigate = useNavigate();
  const [LoginAndSecurityData, setLoginAndSecurityData] = useState({
    email: "",
    phone: '',
    firstName: "",
    lastName: ""
  });
  const { loading, data, error } = useQuery(getUser, {
    variables: {
      id: props.data.UserLogin.LoginData.state._id
    }
  })

  if (error) {
    console.log(error.message);
  }
  useEffect(() => {
    if (data) {
      setLoginAndSecurityData(data.user)
    }
  }, [data]);

  const [UpdateUserPhone, { loading: Updateuserloading, error: Updateusererror, data: Updateuserdata }] = useMutation(UpdatePhone, {
    refetchQueries: [getUser, getUser]
  })
  const UpdateSecurityData = async (e) => {
    e.preventDefault();
    if (data.phone !== LoginAndSecurityData.phone) {
      const Updata = {
        _id: props.data.UserLogin.LoginData.state._id,
        phone: LoginAndSecurityData.phone,
        lastName: LoginAndSecurityData.lastName,
        firstName: LoginAndSecurityData.firstName
      }
      UpdateUserPhone({
        variables: {
          updateData: Updata
        }
      })

    }
    if (Updateuserdata) {
      console.log(data);
      toast.warning(" user detail update !")
    }

  };

  return (
    <>

      {loading || Updateuserloading ? <Loading /> : <>
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
                value={LoginAndSecurityData.firstName + LoginAndSecurityData.lastName}
                disabled
                required
              />


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
                value={LoginAndSecurityData.email}
                onChange={(e) => {
                  setLoginAndSecurityData({
                    ...LoginAndSecurityData,
                    email: e.target.value,
                  });
                  velidateInput(e.target, 10);
                }}
                disabled
                required
              />

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
                  value={LoginAndSecurityData.firstName}
                  onChange={(e) => {
                    setLoginAndSecurityData({
                      ...LoginAndSecurityData,
                      firstName: e.target.value,
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
                  value={LoginAndSecurityData.lastName}
                  onChange={(e) => {
                    setLoginAndSecurityData({
                      ...LoginAndSecurityData,
                      lastName: e.target.value,
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
            <label htmlFor="PhoneNumber" className="form-label">
              Phone Number <span className="mx-2 text-danger">{LoginAndSecurityData.phone == 1123456789 ? "Please Add  number" : null}</span>
            </label>
            <div className="col-12 input-group mt-0">
              <input
                type="text"
                id="PhoneNumber"
                className="form-control"
                placeholder="Phone Number"
                aria-label="Phone Number"
                value={LoginAndSecurityData.phone}
                onChange={(e) => {
                  setLoginAndSecurityData({
                    ...LoginAndSecurityData,
                    phone: e.target.value,
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
      }
    </>

  );
};

export default LoginSecurity;
