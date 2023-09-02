import React, { useState, useEffect } from "react";
import { GetUsers } from "../server/UserAPI";
import axisLogo from "../Svg/images/axisLogo.webp";
import hdfcLogo from "../Svg/images/hdfcLogo.webp";
import iciciLogo from "../Svg/images/iciciLogo.webp";
import sbiLogo from "../Svg/images/sbiLogo.webp";
import azpay from "../Svg/images/azpay.webp";
import mobikwik from "../Svg/images/mobikwik.webp";
import phonepe from "../Svg/images/phonepe.webp";
import freecharge from "../Svg/images/freecharge.webp";
import { useLocation } from "react-router-dom";
import OrderSummmeryContainer from "../containers/OrderSummmeryContainer";

export default function BuyItems(props) {
  const location = useLocation();
  const [UserData, setUserData] = useState("");
  const [PaymentMethod, setPaymentMethod] = useState("UPI");
  let PaymentOptionsCommonCode = (
    <div className="text-center mt-2">
      <p style={{ fontSize: "small" }} className="text-success">
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
      <p style={{ fontSize: "x-small" }} className="">
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
    </div>
  );
  const PaymentDiv = {
    UPI: (
      <div className="p-2">
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
            <button className="btn btn-primary container mt-3" disabled>
              PLACE ORDER
            </button>
          </form>
        </div>
        {PaymentOptionsCommonCode}
      </div>
    ),
    CreditDebitCard: (
      <div>
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
            <button type="submit" className="btn btn-outline-primary">
              PLACE ORDER
            </button>
          </div>
        </form>
        {PaymentOptionsCommonCode}
      </div>
    ),
    NetBanking: (
      <div className="p-2">
        <p>Net Banking</p>
        <div className="d-flex my-3">
          <button className="d-flex flex-column p-3 m-1 rounded  btn-outline-light align-items-center w-25 btn">
            <img src={axisLogo} alt="" style={{ width: "30px" }} />
            <span className="text-dark">AXIS</span>
          </button>
          <button className="d-flex flex-column p-3 m-1 rounded  btn-outline-light align-items-center w-25 btn">
            <img src={sbiLogo} alt="" style={{ width: "30px" }} />
            <span className="text-dark">SBI</span>
          </button>
          <button className="d-flex flex-column p-3 m-1 rounded  btn-outline-light align-items-center w-25 btn">
            {" "}
            <img src={hdfcLogo} alt="" style={{ width: "30px" }} />
            <span className="text-dark">HDFC</span>
          </button>
          <button className="d-flex flex-column p-3 m-1 rounded  btn-outline-light align-items-center w-25 btn">
            {" "}
            <img src={iciciLogo} alt="" style={{ width: "30px" }} />
            <span className="text-dark">ICICI</span>
          </button>
        </div>
        <select className="form-select" aria-label="Default select example">
          <option selected>Select Bank</option>
          <option defaultValue="1">SBI </option>
          <option defaultValue="2">HDFC</option>
          <option defaultValue="3">AXIS</option>
          <option defaultValue="4">ICICI</option>
        </select>
        <button className="btn btn-outline-primary mt-4 container">
          PLACE ORDER
        </button>
        {PaymentOptionsCommonCode}
      </div>
    ),
    Wallets: (
      <div>
        <p>Pay Using Online Wallets</p>
        <div className="d-flex my-3 align-items-center">
          <button className="d-flex flex-column p-3 m-1 rounded  btn-outline-light align-items-center w-25 btn">
            <img src={azpay} alt="" style={{ width: "80px" }} />
          </button>
          <button className="d-flex flex-column p-3 m-1 rounded  btn-outline-light align-items-center w-25 btn">
            <img src={freecharge} alt="" style={{ width: "80px" }} />
          </button>
          <button className="d-flex flex-column p-3 m-1 rounded  btn-outline-light align-items-center w-25 btn">
            {" "}
            <img src={phonepe} alt="" style={{ width: "80px" }} />
          </button>
          <button className="d-flex flex-column p-3 m-1 rounded  btn-outline-light align-items-center w-25 btn">
            {" "}
            <img src={mobikwik} alt="" style={{ width: "80px" }} />
          </button>
        </div>
        <button className="btn btn-outline-primary mt-4 container">
          PLACE ORDER
        </button>
        {PaymentOptionsCommonCode}
      </div>
    ),
    COD: (
      <div>
        <p>Cash On Delivery</p>
        <p
          className="border border-success rounded p-2 bg-success-subtle m-0"
          style={{ fontSize: "small" }}
        >
          Do you know you get an Extra 5% Off when you pay online? For
          everyone’s safety, we advise paying online to limit contact and help
          stop the spread of the virus.
        </p>
        <button className="btn btn-outline-primary mt-4 container">
          PLACE ORDER
        </button>
        {PaymentOptionsCommonCode}
      </div>
    ),
  };
  let RedeemCode = (
    <div className="d-flex justify-content-between align-items-center my-2 px-2">
      <span>
        <span className="fw-bold">Redeem gift card</span>
        <p>Gift card value will be deducted from your total amount</p>
      </span>
      <span
        className="btn btn-outline-primary fw-bold"
        style={{ border: "none" }}
        onClick={() =>
          setApply(
            <>
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
                    <button type="submit" className="btn btn-primary mb-3">
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
            </>
          )
        }
      >
        Apply
      </span>
    </div>
  );
  const [Apply, setApply] = useState(RedeemCode);

  const GetUserData = async () => {
    if (Object.keys(props.data.UserLogin.LoginData).length !== 0) {
      // debugger;
      setUserData(
        await GetUsers(props.data.UserLogin.LoginData.state.username)
      );
    }
  };

  useEffect(() => {
    GetUserData();
    document
      .getElementsByClassName("SelectedPayment")[0]
      .setAttribute("checked", "true");
  }, [props]);


  const PaymentMethodSelecter = (e) => {
    document
      .getElementsByClassName("SelectedPayment")[0]
      .removeAttribute("checked");
    document
      .getElementsByClassName("SelectedPayment")[0]
      .classList.remove("SelectedPayment");
    e.target.classList.add("SelectedPayment");
    e.target.setAttribute("checked", "true");
    setPaymentMethod(e.target.attributes[3].nodeValue);
  };

  return (
    <>
      <div className="d-flex mt-4 mx-5 flex-warp">
        <div className="container ms-5" style={{ width: "1900px" }}>
          <h6>
            {" "}
            Hi{" "}
            <span className="text-capitalize">
              {Object.keys(props.data.UserLogin.LoginData).length !== 0
                ? props.data.UserLogin.LoginData.state.username
                : "Geast"}
            </span>
            , Welcome to{" "}
            <span className="">
              <span className="text-primary">On</span>
              <span className="text-warning">Market</span>
            </span>
          </h6>
          <div className="mt-4">
            <h5 className="">Delivery Address</h5>
            {Object.keys(props.data.UserLogin.LoginData).length !== 0 ? (
              <div className="border p-3 mt-3 rounded">
                <div className="d-flex justify-content-between">
                  <span className="text-capitalize fw-bold">
                    {UserData.username}{" "}
                    <span
                      className="text-body-tertiary"
                      style={{ fontSize: "smaller" }}
                    >
                      (default)
                    </span>
                  </span>
                  <span
                    className="bg-success-subtle btn btn-success disabled py-1 text-success"
                    style={{ fontSize: "x-small" }}
                  >
                    {" "}
                    HOME
                  </span>
                </div>
                <span className="mb-0">
                  {UserData.username},{UserData.username},{UserData.username}
                </span>
                <span>{UserData.phone}</span>
              </div>
            ) : null}
            <span className="bg-success-subtle btn btn-success text-success mt-3">
              {Object.keys(props.data.UserLogin.LoginData).length !== 0
                ? "DELIVER TO NEW ADDRESS"
                : "ADD TO ADDRESS"}
            </span>
            <div className="mt-4">
              <h5>Choose payment method</h5>
              <div className="border rounded p-2">{Apply}</div>
            </div>
            <div className=" mt-4 d-flex">
              <ul className="list-group me-4 " style={{ width: "330px" }}>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1 SelectedPayment"
                    type="radio"
                    name="listGroupRadio"
                    value=""
                    id="UPI"
                    onClick={(e) => PaymentMethodSelecter(e)}
                  />
                  <label className="form-check-label" htmlFor="firstRadio">
                    UPI
                  </label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="listGroupRadio"
                    value=""
                    id="CreditDebitCard"
                    onClick={(e) => PaymentMethodSelecter(e)}
                  />
                  <label className="form-check-label" htmlFor="secondRadio">
                    Credit/Debit Card
                  </label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="listGroupRadio"
                    value=""
                    id="NetBanking"
                    onClick={(e) => PaymentMethodSelecter(e)}
                  />
                  <label className="form-check-label" htmlFor="thirdRadio">
                    Net Banking
                  </label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="listGroupRadio"
                    value=""
                    id="Wallets"
                    onClick={(e) => PaymentMethodSelecter(e)}
                  />
                  <label className="form-check-label" htmlFor="fourRadio">
                    Wallets
                  </label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="listGroupRadio"
                    value=""
                    id="COD"
                    onClick={(e) => PaymentMethodSelecter(e)}
                  />
                  <label className="form-check-label" htmlFor="fivethRadio">
                    Case on Delivery(COD)
                  </label>
                </li>
              </ul>
              <div className=" container border rounded p-2 ">
                {PaymentDiv[PaymentMethod]}
              </div>
            </div>
          </div>
        </div>

        <div className="container border rounded p-4 ms-4">
          <OrderSummmeryContainer
            element={location.state===null?props.data.AddToCart:location.state}
          />
        </div>
      </div>
    </>
  );
}
