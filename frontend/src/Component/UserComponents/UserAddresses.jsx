import React, {useEffect, useState} from "react";
import {useMutation, useQuery} from "@apollo/client";
import {getUser} from "../../gql/Query";
import Loading from "../LoadingStructer/Loading";
import AddressInput from "./Address_input";

const Addresses = (props) => {
    const [AddressData, setAddressData] = useState([]);
    const {loading: getUserLoading, data: getUserData, error: getUserError} = useQuery(getUser, {
        variables: {
            id: props.data.UserLogin.LoginData.state._id
        }
    })

    const [RemoveAddress, {
        loading: removeAddressLoading,
        data: removeAddressData,
        error: removeAddressError
    }] = useMutation()


    const Inputs = {
        name: "",
        street: "",
        country: "",
        type: "",
        select: false,
        state: "",
        city: "",
        number: "",
        zipcode: ""
    }

    const [formData, setFormData] = useState(Inputs);
    const [EditAddressData, setEditAddressData] = useState(false)

    useEffect(() => {
        if (getUserData) {
            setAddressData(getUserData.user.Address)
        }
    }, [getUserData])

    const EditAddress = (data, value) => {
        if (value) {
            setFormData(data);
        } else {
            setFormData(Inputs)
        }
        document.getElementById("AddressInputModal_btn").click();
        setEditAddressData(true)
    }

    return (
        <>  {getUserLoading ? <Loading/> :
            <>
                <AddressInput userData = {props}
                              InputValue = {formData}
                              Edit = {EditAddressData}
                />
                <h2 className = "ms-5 my-4 ">Your Addresses</h2>
                <button
                    className = "d-none"
                    data-bs-toggle = "modal"
                    id = "AddressInputModal_btn"
                    data-bs-target = "#AddressInputModal">
                </button>
                <div className = "container-md d-flex  flex-wrap m-auto">
                    <div className = "dotted_border Address_card bg-body-tertiary mx-3 d-flex justify-content-evenly align-items-center mb-4"
                         onClick = {() => EditAddress(Inputs, false)}>
                        <i className = "bi bi-plus-lg fs-1"></i>
                    </div>
                    {
                        AddressData.map((data, index) => {
                            return (
                                <div className = {`Address_card  border p-3 bg-body-tertiary rounded-3 mx-3 position-relative mb-4 ${data.select ?
                                    "border-success" : null}`}
                                     key = {data._id}>
                                    <div className = "d-flex justify-content-between">
                                        <p className = "fw-bold m-0"> {data.name}</p>
                                        <span className = "badge bg-secondary text-bg-primary">{data.type}</span>
                                    </div>
                                    <p className = "p-0 m-0 ">{data.state}</p>
                                    <p className = "p-0 m-0 ">{data.street},</p>
                                    <p className = "p-0 m-0 ">{data.city},{data.country}{" "}{data.zipcode}</p>
                                    <p className = "p-0 m-0 ">Phone No. :-{data.number}</p>
                                    <div className = "position-absolute d-flex align-items-center bottom-0 end-0">
                                        {data.select ?
                                            <span className = "badge m-2 text-bg-primary span_btn">Active</span> :
                                            <span className = " btn m-2 btn-sm span_btn btn-outline-primary rounded-3 py-0 fw-bold">select</span>}
                                        <span className = "m-2"
                                              onClick = {(e) => EditAddress(data, true)}>
                                                <i className = "bi bi-pencil-square text-primary span_btn"></i></span>
                                        <span className = ""><i className = "bi m-2 bi-trash3 span_btn text-danger"></i>
                                            </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </>}
        </>
    );
};

export default Addresses;
