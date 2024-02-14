import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { getUser } from "../../gql/Query";
import Loading from "../LoadingStructer/Loading";
import AddressInput from "./Address_input";
import { RemoveAddress } from "../../gql/mutation";
import { toast } from "react-toastify";
import NavbarContainer from "../../containers/NavbarContainer";
import Footer from "../Footer/Footer";

const Addresses = (props) => {
    const [AddressData, setAddressData] = useState([]);
    const [RemoveData, setRemoveData] = useState("")
    const { loading: getUserLoading, data: getUserData, error: getUserError } = useQuery(getUser, {
        variables: {
            id: props.data.UserLogin.LoginData.state._id
        }
    })

    const [RemoveAddressData, {
        loading: removeLoading,
        data: removeData,
        error: removeError
    }] = useMutation(RemoveAddress, {
        refetchQueries: [
            getUser, getUser
        ]
    })


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
            if (getUserData != []) {
                setAddressData(getUserData.user.Address)
            }
        }
        if (getUserError) {
            toast.error("get user data error ")
        }
        if (removeError) {
            toast.error("Address remove error")
        }
    }, [getUserData, getUserError, removeError])

    const EditAddress = (data, value) => {
        setEditAddressData(value)
        setFormData(data);
        document.getElementById("AddressInputModal_btn").click();
    }
    const RemoveAddressCard = async (CardId) => {
        await RemoveAddressData({
            variables: {
                removeAddress: {
                    userID: props.data.UserLogin.LoginData.state._id,
                    _id: CardId
                }
            }
        })
        toast.success("Address is deleted successfull")
    }

    return (
        <>
            <NavbarContainer />
            {/* model open button */}
            <span data-bs-toggle="modal" data-bs-target="#RemoveAddressModal" id="RemoveAddressButton"></span>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="RemoveAddressModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog  w-25">
                    <div className="modal-content p-3 d-flex align-items-center">
                        <span style={{ width: "50px", height: "50px" }} className="d-flex align-items-center justify-content-center bg-danger-subtle rounded-circle">
                            <i className="bi bi-exclamation-triangle h3 text-danger"></i>
                        </span>
                        <h5 className="fw-semibold mt-1">Remove Address</h5>
                        <div className="modal-body">
                            Are you sure you want to <span className="text-warning">Remove</span> your <span className="text-warning">Address</span>?
                            <div className="border rounded mt-3 p-2 bg-danger-subtle text-capitalize text-danger-emphasis">
                                <span className="fw-bold">{!RemoveData == "" ? RemoveData.name : null}</span><br />
                                <span>{!RemoveData == "" ? RemoveData.street : null}</span><br />
                                <span>{!RemoveData == "" ? RemoveData.number : null}</span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-around w-75">
                            <button className="btn btn-outline-secondary w-50" data-bs-dismiss="modal" aria-label="Close">Close</button>
                            <button className="btn btn-danger ms-4 w-50 " onClick={() => RemoveAddressCard(RemoveData.uniqueID)} data-bs-dismiss="modal" aria-label="Close" ><i className="bi bi-trash me-2"></i> Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            {getUserLoading ? <Loading /> :
                <>
                    <AddressInput userData={props.data.UserLogin.LoginData.state._id}
                        InputValue={formData}
                        Edit={EditAddressData}
                    />
                    <h2 className="ms-5 my-4 ">Your Addresses</h2>
                    <button
                        className="d-none"
                        data-bs-toggle="modal"
                        id="AddressInputModal_btn"
                        data-bs-target="#AddressInputModal">
                    </button>
                    <div className="container-md d-flex  flex-wrap m-auto">
                        <div className="dotted_border Address_card bg-body-tertiary mx-3 d-flex justify-content-evenly align-items-center mb-4"
                            onClick={() => EditAddress(Inputs, false)}>
                            <i className="bi bi-plus-lg fs-1"></i>
                        </div>
                        {
                            AddressData.map((data, index) => {
                                return (
                                    <div className={`Address_card  border p-3 bg-body-tertiary rounded-3 mx-3 position-relative mb-4 ${data.select ?
                                        "border-success" : null}`}
                                        key={data.uniqueID}>
                                        <div className="d-flex justify-content-between">
                                            <p className="fw-bold m-0"> {data.name}</p>
                                            <span className="badge bg-secondary text-bg-primary">{data.type}</span>
                                        </div>
                                        <p className="p-0 m-0 ">{data.state}</p>
                                        <p className="p-0 m-0 ">{data.street},</p>
                                        <p className="p-0 m-0 ">{data.city},{data.country}{" "}{data.zipcode}</p>
                                        <p className="p-0 m-0 ">Phone No. :-{data.number}</p>
                                        <div className="position-absolute d-flex align-items-center bottom-0 end-0">
                                            {data.select ?
                                                <span className="badge m-2 text-bg-primary span_btn">Active</span> :
                                                <span className=" btn m-2 btn-sm span_btn btn-outline-primary rounded-3 py-0 fw-bold">select</span>}
                                            <span className="m-2"
                                                onClick={(e) => EditAddress(data, true)}>
                                                <i className="bi bi-pencil-square text-primary span_btn"></i>
                                            </span>
                                            <span data-bs-toggle="modal" data-bs-target="#RemoveAddressModal"
                                                onClick={() => setRemoveData(data)}
                                            //onClick={() => RemoveAddressCard(data.uniqueID)}
                                            >
                                                <i className="bi m-2 bi-trash3 span_btn text-danger"></i>
                                            </span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
            }
            <Footer />
        </>
    );
};

export default Addresses;
