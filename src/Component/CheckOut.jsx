import React, { useState, useEffect } from "react";
import { GetUsers } from "../server/UserAPI";

export default function BuyItems(props) {
  const [UserData, setUserData] = useState("");
  let RedeemCode = (
    <div className="d-flex justify-content-between align-items-center my-2">
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
                <form class="row g-3 mt-2 justify-content-between">
                  <div class="col-auto w-75">
                    <input
                      type="text"
                      class="form-control"
                      id="inputRedeemCode"
                      placeholder="Enter 16-digit gift card number"
                      required
                    />
                  </div>
                  <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3">
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
      setUserData(
        await GetUsers(props.data.UserLogin.LoginData.state.username)
      );
    }
  };

  useEffect(() => {
    GetUserData();
  }, [props]);

  console.log(props);

  const PaymentMethodSelecter = (e) => {
    // document
    //   .getElementsByClassName("SelectedPayment")[0]
    //   .classList.remove("SelectedPayment");
    // document.getElementsByClassName(
    //   "SelectedPayment"
    // ).listGroupRadio.checked = false;
    // e.target.setAttribute("checked", "");
    // e.target.classList.add("SelectedPayment");
    document.getElementById("SelectedPayment").setAttribute("checked","true")
    console.log(e.target);
  };
  return (
    <>
      <div className="d-flex mt-4 mx-5">
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
              <ul class="list-group me-4 " style={{ width: "330px" }}>
                <li class="list-group-item">
                  <input
                    class="form-check-input me-1 SelectedPayment"
                    type="radio"
                    name="listGroupRadio"
                    value=""
                    id="firstRadio "
                    onClick={(e) => PaymentMethodSelecter(e)}
                  />
                  <label class="form-check-label" for="firstRadio">
                    UPI
                  </label>
                </li>
                <li class="list-group-item">
                  <input
                    class="form-check-input me-1"
                    type="radio"
                    name="listGroupRadio"
                    value=""
                    id="secondRadio"
                    onClick={(e) => PaymentMethodSelecter(e)}
                  />
                  <label class="form-check-label" for="secondRadio">
                    Credit/Debit Card
                  </label>
                </li>
                <li class="list-group-item">
                  <input
                    class="form-check-input me-1"
                    type="radio"
                    name="listGroupRadio"
                    value=""
                    id="thirdRadio"
                    onClick={(e) => PaymentMethodSelecter(e)}
                  />
                  <label class="form-check-label" for="thirdRadio">
                    Net Banking
                  </label>
                </li>
                <li class="list-group-item">
                  <input
                    class="form-check-input me-1"
                    type="radio"
                    name="listGroupRadio"
                    value=""
                    id="fourRadio"
                    onClick={(e) => PaymentMethodSelecter(e)}
                  />
                  <label class="form-check-label" for="fourRadio">
                    Wallets
                  </label>
                </li>
                <li class="list-group-item">
                  <input
                    class="form-check-input me-1"
                    type="radio"
                    name="listGroupRadio"
                    value=""
                    id="fivethRadio"
                    onClick={(e) => PaymentMethodSelecter(e)}
                  />
                  <label class="form-check-label" for="fivethRadio">
                    Case on Delivery(COD)
                  </label>
                </li>
              </ul>
              <div className=" container border rounded p-2 ">
                <span>Pay Using Credit Or Debit Cards</span>
                <div class="row">
                  <div class="col-12">
                    <input
                      type="text"
                      class="form-control my-2"
                      placeholder="Card Number"
                      aria-label="Card Number"
                    />
                  </div>
                  <div class="col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="MM/YY"
                      aria-label="MM/YY"
                    />
                  </div>
                  <div class="col-5 d-flex align-items-center ">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="CVV"
                      aria-label="CVV"
                    />
                    <i class="bi bi-credit-card-2-back-fill fs-3 mx-4"></i>
                  </div>
                  <div class="col-12">
                    <input
                      type="text"
                      class="form-control my-2"
                      placeholder="Name on the Card"
                      aria-label="Name on the Card"
                    />
                  </div>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-outline-primary">
                    PLACE ORDER
                  </button>
                </div>
                <div className="text-center">
                  <p style={{ fontSize: "small" }} className="text-success">
                    <i class="bi bi-shield-fill-check "></i> 100% Payment
                    Protection, Easy Return Policy
                  </p>
                  <p className="mb-1">
                    <span>
                      {" "}
                      <i class="bi bi-credit-card-2-back-fill fs-2 mx-1"></i>
                    </span>
                    <span>
                      {" "}
                      <i class="bi bi-credit-card-2-back-fill fs-2 mx-1"></i>
                    </span>
                    <span>
                      {" "}
                      <i class="bi bi-credit-card-2-back-fill fs-2 mx-1"></i>
                    </span>
                    <span>
                      {" "}
                      <i class="bi bi-credit-card-2-back-fill fs-2 mx-1"></i>
                    </span>
                    <span>
                      {" "}
                      <i class="bi bi-credit-card-2-back-fill fs-2 mx-1"></i>
                    </span>
                    <span>
                      {" "}
                      <i class="bi bi-credit-card-2-back-fill fs-2 mx-1"></i>
                    </span>
                  </p>
                  <p style={{ fontSize: "x-small" }} className="">
                    By placing this order, you agree to Mamaearth's{" "}
                    <span className="link-offset-2">Terms and Condition</span>{" "}
                    and <span className="link-offset-2">Privacy Policy</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container"></div>
      </div>
    </>
  );
}
