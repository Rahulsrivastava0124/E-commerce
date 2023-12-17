import React, { useState, useEffect } from "react";
import { InputEditEnableAndDisable } from "../../Function/InputEditEnableAndDisable";
import { GetUsers, UpdateData } from "../../server/UserAPI";
import { useMutation, useQuery } from "@apollo/client";
import { getUser } from "../../gql/Query";
import Loading from "../LoadingStructer/Loading";
import { UserUpdateAddress } from "../../gql/mutation";
import { toast } from "react-toastify";

const Addresses = (props) => {
  const [AddressData, setAddressData] = useState({
    city: "",
    street: "",
    number: "",
    zipcode: "",
  });

  const { loading: getUserLoading, data: getUserData, error: getUserError } = useQuery(getUser, {
    variables: {
      id: props.data.UserLogin.LoginData.state._id
    }
  })

  const [updateAddress, { loading: AddressDataLoading, data: AddressDataData, error: AddressDataError }] = useMutation(UserUpdateAddress, {
    refetchQueries: [getUser, getUser]
  })

  const UpdateAddress = async (e) => {
    const update = {
      city: AddressData.city,
      street: AddressData.street,
      number: AddressData.number,
      zipcode: AddressData.zipcode,
      _id: props.data.UserLogin.LoginData.state._id,

    }
    updateAddress({
      variables: {
        AddressData: update
      }
    })
  };

  useEffect(() => {
    if (getUserData) {
      setAddressData(getUserData.user.address)
    }
    if (AddressDataData) {
      toast.warning(" Address in updated !")
    }
  }, [getUserData, AddressDataData])



  return (
    <>
      {getUserLoading || AddressDataLoading ? <Loading /> :
        <>
          <h2 className="text-center">Your Addresses</h2>
          <div className="container">
            <form
              className="row g-3 w-50 m-auto"
              onSubmit={(e) => UpdateAddress(e)}
            >
              <label htmlFor="city" className="form-label">
                city
              </label>
              <div className="col-12 input-group mt-0">
                <input
                  type="text"
                  id="city"
                  className="form-control "
                  placeholder="city"
                  aria-label=" city"
                  value={AddressData.city}
                  onChange={(e) =>
                    setAddressData({ ...AddressData, city: e.target.value })
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
              <label htmlFor="street" className="form-label">
                street
              </label>
              <div className="col-12 input-group mt-0">
                <input
                  type="text"
                  id="street"
                  className="form-control"
                  placeholder="street"
                  aria-label="street"
                  value={AddressData.street}
                  onChange={(e) =>
                    setAddressData({ ...AddressData, street: e.target.value })
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
              <div className="col-md-6" style={{ width: "auto" }}>
                <label htmlFor="number" className="form-label">
                  number
                </label>
                <div className="input-group me-auto">
                  <input
                    type="text"
                    id="number"
                    className="form-control"
                    placeholder="number"
                    aria-label="number"
                    value={AddressData.number}
                    onChange={(e) =>
                      setAddressData({ ...AddressData, number: e.target.value })
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
              </div>
              <div className="col-lg input-group " style={{ width: "auto" }}>
                <label htmlFor="zipcode" className="form-label">
                  Zip Code
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    id="zipcode"
                    className="form-control"
                    placeholder="zipcode"
                    aria-label="zipcode"
                    value={AddressData.zipcode}
                    onChange={(e) =>
                      setAddressData({ ...AddressData, zipcode: e.target.value })
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
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </>}
    </>
  );
};

export default Addresses;
