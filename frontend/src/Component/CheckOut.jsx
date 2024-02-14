import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import OrderSummmeryContainer from "../containers/OrderSummmeryContainer";
import { useLazyQuery } from "@apollo/client";
import { getUser } from "../gql/Query";
import NavbarContainer from "../containers/NavbarContainer";
import Footer from "./Footer/Footer";
import PaymentType from "./PaymentType";
import AddressInput from "./UserComponents/Address_input";

export default function BuyItems(props) {

    const location = useLocation();
    const [GetUser_Data, { loading, data, error }] = useLazyQuery(getUser);

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

    let RedeemCode = (
        <div className="d-flex justify-content-between align-items-center  px-2 ">
            <span>
                <span className="fw-bold">Redeem gift card</span>
                <p>Gift card value will be deducted from your total amount</p>
            </span>
            <span
                className="btn btn-outline-primary fw-bold shadow "
                style={{ border: "none" }}
                onClick={() => setApply(<>
                    <span className="d-flex justify-content-between align-items-center">
                        <h6>
                            Add{" "}
                            <span className="">
                                <span className="text-primary">On</span>
                                <span className="text-warning">Market</span>
                            </span>{" "}
                            gift card
                        </h6>{" "}
                        <i
                            className="bi bi-x-circle-fill fs-4 "
                            onClick={() => setApply(RedeemCode)}
                        ></i>
                    </span>
                    <div className=" me-5 mt-1">
                        <span style={{ fontSize: "smaller" }}>
                            Gift card value will be deducted from your total amount. You
                            can redeem partial amount from your gift card.
                        </span>

                        <form className="row g-3 mt-2">
                            <div className="col-auto w-75">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputRedeemCode"
                                    placeholder="Enter 16-digit gift card number"
                                    required
                                />
                            </div>
                            <div className="col-auto">
                                <button type="submit"
                                    className="btn btn-primary mb-3">
                                    Apply
                                </button>
                            </div>
                        </form>
                        <h6 className="">Terms & Conditions</h6>
                        <ul style={{ fontSize: "smaller" }}>
                            <li>
                                Gift card cannot be clubbed in with other promotional
                                coupons and offers.
                            </li>
                            <li>
                                Orders are not subject to cancellation that are placed with
                                gift card.
                            </li>
                        </ul>
                    </div>
                </>)}
            >
                Apply
            </span>
        </div>);
    const [Apply, setApply] = useState(RedeemCode);


    useEffect(() => {
        if (props.data.UserLogin.LoginData.state) {
            GetUser_Data({
                variables: {
                    id: props.data.UserLogin.LoginData.state._id
                }
            })
        }
    }, [props]);


    return (
        <>
            <NavbarContainer />
            <div className="d-flex mt-4 mx-5 flex-warp">
                <div className="container ms-5"
                    style={{ width: "1900px" }}>
                    <h6>
                        {" "}
                        Hi{" "}
                        <span className="text-capitalize">
                            {Object.keys(props.data.UserLogin.LoginData).length !== 0 ? props.data.UserLogin.LoginData.state.username : "Geast"}
                        </span>
                        , Welcome to{" "}
                        <span className="">
                            <span className="text-primary">On</span>
                            <span className="text-warning">Market</span>
                        </span>
                    </h6>
                    <div className="mt-4">
                        {!loading && data ? (
                            <>
                                <h5 className="mb-4">Delivery Address</h5>
                                <div className="border  mt-2  rounded " >
                                    <ul className="list-group d-flex flex-wrap flex-row" style={{ width: "735px", height: "180px", overflowY: "scroll" }}>
                                        {
                                            data.user.Address.map(({ _id, select, street, city, zipcode, state, country, number, type, name }, index) => {
                                                return (
                                                    <li className="list-group-item m-2 border rounded" key={_id} style={{ width: "340px" }}>
                                                        <input className="form-check-input "
                                                            type="radio"
                                                            name="listGroupRadio"
                                                            value="true"
                                                            id={`Radio${index}`}
                                                            defaultChecked />
                                                        <label className="form-check-label Check_out_Address'_list"
                                                            htmlFor={`Radio${index}`}

                                                        >
                                                            <div className="">
                                                                <div className="d-flex justify-content-between ">
                                                                    <span className="text-capitalize fw-bold">
                                                                        {name}
                                                                        <span
                                                                            className="text-body-tertiary ms-2"
                                                                            style={{ fontSize: "smaller" }}
                                                                        >
                                                                            {select ? "(default)" : null}
                                                                        </span>
                                                                    </span><span className="bg-success-subtle btn btn-success disabled py-1 text-success"
                                                                        style={{ fontSize: "x-small" }}>
                                                                        {type}
                                                                    </span></div>
                                                                <span className="mb-0">
                                                                    <span>
                                                                        {street}{" , "}{city},{zipcode}
                                                                    </span><br />
                                                                    <span>
                                                                        {state}{" , "}{country}
                                                                    </span>
                                                                </span><br /><span>{number}</span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                )
                                            })
                                        }

                                        <AddressInput userData={props.data.UserLogin.LoginData.state._id}
                                            InputValue={Inputs}
                                            Edit={false} />

                                        <li className="list-group-item m-2 border rounded d-flex justify-content-center align-items-center border-success bg-success-subtle" style={{ width: "340px" }} data-bs-toggle="modal" id="AddressInputModal_btn"
                                            data-bs-target="#AddressInputModal">
                                            <i className="bi bi-plus-square-dotted h1 text-primary"></i>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        ) : !data ? <h6>Login to see your existing offers <span className="text-primary" data-bs-target="#LoginModalToggle" data-bs-toggle="modal"  style={{cursor:"pointer"}}> Login</span> </h6> : "loading"}<br />
                        <div>
                            <div className="border rounded p-3 shadow">{Apply}</div>
                        </div>
                        {<PaymentType Order_data={props.data.AddToCart} Order_Store_fn={props.AddToOrderList} />}
                    </div>
                </div>

                <div className="container border rounded p-4 ms-4 h-100 mt-5 shadow">
                    <OrderSummmeryContainer
                        element={location.state === null ? props.data.AddToCart : location.state}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}
