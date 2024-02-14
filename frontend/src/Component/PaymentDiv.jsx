import React from 'react'
import axisLogo from "../Svg/images/axisLogo.webp";
import hdfcLogo from "../Svg/images/hdfcLogo.webp";
import iciciLogo from "../Svg/images/iciciLogo.webp";
import sbiLogo from "../Svg/images/sbiLogo.webp";
import azpay from "../Svg/images/azpay.webp";
import mobikwik from "../Svg/images/mobikwik.webp";
import phonepe from "../Svg/images/phonepe.webp";
import freecharge from "../Svg/images/freecharge.webp";
import { useNavigate } from 'react-router-dom'


export default function PaymentDiv({ Payment, OrderData,AddToOrderList }) {

    const navigate = useNavigate();

    let PaymentOptionsCommonCode = (<div className="text-center mt-2 ">
        <p style={{ fontSize: "small" }}
            className="text-success">
            <i className="bi bi-shield-fill-check "></i> 100% Payment Protection,
            Easy Return Policy
        </p>
        <p className="mb-1">
            <span>
                {" "}
                <i className="bi bi-credit-card-2-back-fill fs-2 mx-1"></i>
            </span>
            <span>
                {" "}
                <i className="bi bi-credit-card-2-back-fill fs-2 mx-1"></i>
            </span>
            <span>
                {" "}
                <i className="bi bi-credit-card-2-back-fill fs-2 mx-1"></i>
            </span>
            <span>
                {" "}
                <i className="bi bi-credit-card-2-back-fill fs-2 mx-1"></i>
            </span>
            <span>
                {" "}
                <i className="bi bi-credit-card-2-back-fill fs-2 mx-1"></i>
            </span>
            <span>
                {" "}
                <i className="bi bi-credit-card-2-back-fill fs-2 mx-1"></i>
            </span>
        </p>
        <p style={{ fontSize: "x-small" }}
            className="">
            By placing this order, you agree to Mamaearth's{" "}
            <span className="link-offset-2 text-decoration-underline">
                Terms and Condition
            </span>{" "}
            and{" "}
            <span className="link-offset-2 text-decoration-underline">
                Privacy Policy
            </span>
            .
        </p>
    </div>);

    const PaymentDiv = {
        UPI: (<div className="p-2 ">
            <h6 className="mb-2">Pay through UPI QR</h6>
            <p>
                Pay using Google Pay, Phone Pe, Paytm and other UPI app from your
                phone.
            </p>
            <span className="fs-5">
                <i className="bi bi-paypal  p-1"></i>
                <i className="bi bi-credit-card-2-front p-1"></i>
                <i className="bi bi-stripe p-1"></i>
                <i className="bi bi-alipay p-1"></i>
            </span>
            <button className="btn btn-outline-primary container my-3">
                GENERATE QR CODE
            </button>
            <hr />
            <div className="mt-3">
                <h6>Pay using UPI ID</h6>
                <p className="mb-">Enter UPI ID (Google Pay, BHIM & more)</p>
                <form action="">
                    <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="Enter your UPI ID"
                        required
                    />
                    <button className="btn btn-primary container mt-3"
                        disabled>
                        PLACE ORDER
                    </button>
                </form>
            </div>
            {PaymentOptionsCommonCode}
        </div>),
        CreditDebitCard: (<div>
            <span>Pay Using Credit Or Debit Cards</span>
            <form action="">
                <div className="row">
                    <div className="col-12">
                        <input
                            type="text"
                            className="form-control my-2"
                            placeholder="Card Number"
                            aria-label="Card Number"
                            required
                        />
                    </div>
                    <div className="col-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="MM/YY"
                            aria-label="MM/YY"
                            required
                        />
                    </div>
                    <div className="col-5 d-flex align-items-center ">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="CVV"
                            aria-label="CVV"
                            required
                        />
                        <i className="bi bi-credit-card-2-back-fill fs-3 mx-4"></i>
                    </div>
                    <div className="col-12">
                        <input
                            type="text"
                            className="form-control my-2"
                            placeholder="Name on the Card"
                            aria-label="Name on the Card"
                            required
                        />
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit"
                        className="btn btn-outline-primary">
                        PLACE ORDER
                    </button>
                </div>
            </form>
            {PaymentOptionsCommonCode}
        </div>),
        NetBanking: (<div className="p-2">
            <p>Net Banking</p>
            <div className="d-flex my-3">
                <button
                    className="d-flex flex-column p-3 m-1 rounded  btn-outline-light align-items-center w-25 btn">
                    <img src={axisLogo}
                        alt=""
                        style={{ width: "30px" }} />
                    <span className="text-dark">AXIS</span>
                </button>
                <button
                    className="d-flex flex-column p-3 m-1 rounded  btn-outline-light align-items-center w-25 btn">
                    <img src={sbiLogo}
                        alt=""
                        style={{ width: "30px" }} />
                    <span className="text-dark">SBI</span>
                </button>
                <button
                    className="d-flex flex-column p-3 m-1 rounded  btn-outline-light align-items-center w-25 btn">
                    {" "}
                    <img src={hdfcLogo}
                        alt=""
                        style={{ width: "30px" }} />
                    <span className="text-dark">HDFC</span>
                </button>
                <button
                    className="d-flex flex-column p-3 m-1 rounded  btn-outline-light align-items-center w-25 btn">
                    {" "}
                    <img src={iciciLogo}
                        alt=""
                        style={{ width: "30px" }} />
                    <span className="text-dark">ICICI</span>
                </button>
            </div>
            <select className="form-select"
                aria-label="Default select example">
                <option selected>Select Bank</option>
                <option defaultValue="1">SBI</option>
                <option defaultValue="2">HDFC</option>
                <option defaultValue="3">AXIS</option>
                <option defaultValue="4">ICICI</option>
            </select>
            <button className="btn btn-outline-primary mt-4 container">
                PLACE ORDER
            </button>
            {PaymentOptionsCommonCode}
        </div>),
        Wallets: (<div>
            <p>Pay Using Online Wallets</p>
            <div className="d-flex my-3 align-items-center">
                <button
                    className="d-flex flex-column p-3 m-1 rounded  btn-outline-light align-items-center w-25 btn">
                    <img src={azpay}
                        alt=""
                        style={{ width: "80px" }} />
                </button>
                <button
                    className="d-flex flex-column p-3 m-1 rounded  btn-outline-light align-items-center w-25 btn">
                    <img src={freecharge}
                        alt=""
                        style={{ width: "80px" }} />
                </button>
                <button
                    className="d-flex flex-column p-3 m-1 rounded  btn-outline-light align-items-center w-25 btn">
                    {" "}
                    <img src={phonepe}
                        alt=""
                        style={{ width: "80px" }} />
                </button>
                <button
                    className="d-flex flex-column p-3 m-1 rounded  btn-outline-light align-items-center w-25 btn">
                    {" "}
                    <img src={mobikwik}
                        alt=""
                        style={{ width: "80px" }} />
                </button>
            </div>
            <button className="btn btn-outline-primary mt-4 container">
                PLACE ORDER
            </button>
            {PaymentOptionsCommonCode}
        </div>), COD: (<div>
            <p>Cash On Delivery</p>
            <p
                className="border border-success rounded p-2 bg-success-subtle m-0"
                style={{ fontSize: "small" }}
            >
                Do you know you get an Extra 5% Off when you pay online? For
                everyone’s safety, we advise paying online to limit contact and help
                stop the spread of the virus.
            </p>
            <button
                className="btn btn-outline-primary mt-4 container"
                onClick={() => OrderItems(OrderData)}
            >
                PLACE ORDER
            </button>
            {PaymentOptionsCommonCode}
        </div>),
    };

    const OrderItems = (element) => {
        console.log(element);
        let date = new Date();
        let orderId = Math.trunc(Math.random() * 1000000000);
        AddToOrderList({
            state: {
                element, date, orderId,
            },
        });
        navigate("./OrderPlaced", { state: { element, date, orderId } });
    };

    return (
        <>
            {PaymentDiv[Payment]}
        </>
    )
}
