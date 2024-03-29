import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { EditUserAddres, NewAddress } from "../../gql/mutation";
import { getUser } from "../../gql/Query";
import Loading from "../LoadingStructer/Loading";
import { toast } from "react-toastify";


const AddressInput = (props) => {
    console.log(props);
    const [AddressInputData, setAddressInputData] = useState(props.InputValue)

    const [AddAddress, { loading, data, error }] = useMutation(NewAddress, {
        refetchQueries: [getUser, getUser]
    })

    const [EditUserAddress, { loading: EditAddressLoading, data: EditAddressData, error: EditAddressError
    }] = useMutation(EditUserAddres, {
        refetchQueries: [getUser, getUser]
    })
    const EditUserAddressCardData = (e, _id) => {
        e.preventDefault();
        let new_data = AddressInputData
        console.log(new_data)
        EditUserAddress({
            variables: {
                UpdateData: {
                    AddressId: _id,
                    ChangeAddress: AddressInputData
                }
            }
        }).then(() => {
            document.getElementById("AddressInputModal_btn").click();
            toast.success("Updated successfull")
        })
    }

    const UpdateAddress = async (e) => {
        e.preventDefault()
        const update = {
            ...AddressInputData,
            _id: props.userData
        }
        AddAddress({
            variables: {
                AddressData: update
            }
        }).then((data) => {
            toast.warning(" Address in updated !")
            document.getElementById("close_model_btn").click();
            setAddressInputData(props.InputValue);
        })
    };

    useEffect(() => {
        setAddressInputData(props.InputValue)
    }, [props.InputValue]);

    return (
        <>
            <div className="modal fade"
                id="AddressInputModal"
                tabIndex="-1"
                aria-labelledby="AddressInputModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content bg-body-secondary">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5"
                                id="exampleModalLabel">Add Address</h1>
                            <button type="button"
                                id="close_model_btn"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close">

                            </button>
                        </div>
                        <div className="modal-body">
                            {
                                loading ? <Loading /> :
                                    <form onSubmit={(e) => UpdateAddress(e)}>
                                        <div className="row g-3 mb-2 ">
                                            <div className="col form-floating">
                                                <input type="text"
                                                    id="floatingName"
                                                    className="form-control"
                                                    placeholder="Name"
                                                    aria-label="Name"
                                                    value={AddressInputData.name}
                                                    onChange={(e) => setAddressInputData({
                                                        ...AddressInputData,
                                                        name: e.target.value
                                                    })}
                                                />
                                                <label htmlFor="floatingName"> Full Name</label>
                                            </div>
                                            <div className="col form-floating">
                                                <input type="text"
                                                    id="floatingCountry"
                                                    className="form-control"
                                                    placeholder="Country"
                                                    aria-label="Country"
                                                    value={AddressInputData.country}
                                                    onChange={(e) => setAddressInputData({
                                                        ...AddressInputData,
                                                        country: e.target.value
                                                    })}
                                                />
                                                <label htmlFor="floatingCountry">Country</label>
                                            </div>
                                        </div>
                                        <div className="row g-3 mb-2 ">
                                            <div className="col form-floating">
                                                <input type="text"
                                                    id="floatingType"
                                                    className="form-control"
                                                    placeholder="type"
                                                    aria-label="type"
                                                    value={AddressInputData.type}
                                                    onChange={(e) => setAddressInputData({
                                                        ...AddressInputData,
                                                        type: e.target.value
                                                    })}
                                                />
                                                <label htmlFor="floatingType">Type</label>
                                            </div>
                                            <div className="col form-floating">
                                                <input type="text"
                                                    id="floatingState"
                                                    className="form-control"
                                                    placeholder="state"
                                                    aria-label="state"
                                                    value={AddressInputData.state}
                                                    onChange={(e) => setAddressInputData({
                                                        ...AddressInputData,
                                                        state: e.target.value
                                                    })}
                                                />
                                                <label htmlFor="floatingState">State</label>
                                            </div>
                                        </div>
                                        <div className="row g-3 mb-2  ">
                                            <div className="col form-floating">
                                                <input type="text"
                                                    id="floatingCity"
                                                    className="form-control"
                                                    placeholder="city"
                                                    aria-label="city"
                                                    value={AddressInputData.city}
                                                    onChange={(e) => setAddressInputData({
                                                        ...AddressInputData,
                                                        city: e.target.value
                                                    })}
                                                />
                                                <label htmlFor="floatingCity">City</label>
                                            </div>
                                            <div className="col form-floating">
                                                <input type="number"
                                                    id="floatingNumber"
                                                    className="form-control"
                                                    placeholder="number"
                                                    aria-label="number"
                                                    value={AddressInputData.number}
                                                    onChange={(e) => setAddressInputData({
                                                        ...AddressInputData,
                                                        number: e.target.value
                                                    })}
                                                />
                                                <label htmlFor="floatingNumber">Number</label>
                                            </div>
                                            <div className="col form-floating">
                                                <input type="text"
                                                    id="floatingZip-code"
                                                    className="form-control"
                                                    placeholder="zipcode"
                                                    aria-label="zipcode"
                                                    value={AddressInputData.zipcode}
                                                    onChange={(e) => setAddressInputData({
                                                        ...AddressInputData,
                                                        zipcode: e.target.value
                                                    })}
                                                />
                                                <label htmlFor="floatingZip-code">Zip-code</label>
                                            </div>
                                        </div>
                                        <div className="col mb-2  form-floating">
                                            <input type="text"
                                                id="floatingStreet"
                                                className="form-control"
                                                placeholder="street"
                                                aria-label="street"
                                                value={AddressInputData.street}
                                                onChange={(e) => setAddressInputData({
                                                    ...AddressInputData,
                                                    street: e.target.value
                                                })}
                                            />
                                            <label htmlFor="floatingStreet">Street</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input"
                                                type="checkbox"
                                                value={AddressInputData.select}
                                                id="flexCheckdefaultChecked"
                                                onChange={(e) => setAddressInputData({
                                                    ...AddressInputData,
                                                    select: e.target.defaultChecked
                                                })}
                                            />
                                            <label className="form-check-label"
                                                htmlFor="flexCheckdefaultChecked">
                                                Active Address
                                            </label>
                                        </div>
                                        <div className="text-lg-end my-2">
                                            {props.Edit ? <button type="button"
                                                className="btn btn-warning ms-2"
                                                onClick={(e) => EditUserAddressCardData(e, AddressInputData._id)}
                                            >Update
                                            </button> : <button type="submit"
                                                className="btn btn-primary ms-2">Add
                                            </button>}
                                        </div>
                                    </form>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddressInput;