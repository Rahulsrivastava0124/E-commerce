import React, {useState, useEffect} from "react";
import {InputEditEnableAndDisable} from "../../Function/InputEditEnableAndDisable";
import {GetUsers, UpdateData} from "../../server/UserAPI";
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

    useEffect(() => {
        if (getUserData) {
            setAddressData(getUserData.user.Address)
        }
    }, [getUserData])

    return (
        <>
            {getUserLoading ? <Loading/> :
                <>
                    <AddressInput userData = {props}/>
                    <h2 className = "ms-5 my-4 ">Your Addresses</h2>
                    <div className = "container-md d-flex  flex-wrap m-auto">
                        <div className = "dotted_border Address_card bg-body-tertiary mx-3 d-flex justify-content-evenly align-items-center mb-4"
                             data-bs-toggle = "modal"
                             data-bs-target = "#AddressInputModal">
                            <i className = "bi bi-plus-lg fs-1"></i>
                        </div>
                        {
                            AddressData.map((data, index) => {
                                return (
                                    <div className = {`Address_card  border p-3 bg-body-tertiary rounded-3 mx-3 position-relative mb-4 ${data.select ?
                                        "border-success" : null}`}
                                         key = {index}>
                                        <div className = "d-flex justify-content-between">
                                            <p className = "fw-bold m-0"> {data.name}</p>
                                            <span className = "badge bg-secondary text-bg-primary">{data.type}</span>
                                        </div>
                                        <p className = "p-0 m-0 ">{data.state}</p>
                                        <p className = "p-0 m-0 ">{data.street},</p>
                                        <p className = "p-0 m-0 ">{data.city},{data.country}{" "}{data.zipcode}</p>
                                        <p className = "p-0 m-0 ">Phone No. :-{data.number}</p>
                                        <div className = "position-absolute bottom-0 end-0">
                                            {data.select ?
                                                <span className = "badge  text-bg-primary">Active</span> :
                                                <span className = " btn btn-sm mx-3 btn-outline-primary py-0">select</span>}
                                            <button className = "btn">
                                                <i className = "bi bi-pencil-square text-primary"></i></button>
                                            <button className = "btn"><i className = "bi bi-trash3 text-danger"></i>
                                            </button>
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
