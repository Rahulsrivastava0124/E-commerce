import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import success from "../Svg/GifImages/success.gif";

export default function OrderPlaced() {
  const navigate = useNavigate();
  const location = useLocation();
  let price = 0;
  let Delivery = 0;
  location.state.element.forEach((element) => {
    price = price + element.Cart.state.element.price * element.Cart.state.count;
  });
  price >= 100 ? null : (Delivery = 40);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  console.log(location);
  return (
    <div className="d-flex ">
      <div className="w-75 bg-success text-center pt-5 ">
        <img
          src={success}
          alt=""
          className="mb-4 rounded-circle"
          style={{ width: "150px" }}
        />
        <p className="fw-bold fs-5 text-white">Thank You</p>
        <h4 className="text-white">YOUR ORDER IS CONFIRMED</h4>
        <p className="text-white pb-2">
          {" "}
          We will be sending you on email confirmation to example@gmail.com
          shortly
        </p>
        <div className="mx-2 p-3 bg-white mt-2 mb-4 mx-3 rounded">
          <p className="py-2">
            Order #<span className="fw-bold">{location.state.orderId}</span> was
            placed on{" "}
            <span className="fw-bold">
              <span className="ms-1">
                {months[location.state.date.getMonth()]}
              </span>
              <span className="ms-1">{location.state.date.getDate()},</span>
              <span className="ms-1">{location.state.date.getFullYear()}</span>
            </span>{" "}
            and is currenty in progress
          </p>
          <div className="pb-3">
            <button
              className="btn btn-outline-primary mx-2"
              onClick={() => navigate("/Profile/YourOrder")}
            >
              Track Order
            </button>
            <button
              className="btn btn-outline-primary mx-2"
              onClick={() => navigate("/")}
            >
              {" "}
              Shop More
            </button>
          </div>
          <div className="d-flex container justify-content-center position-relative my-3">
            <hr
              className="position-absolute w-75 "
              style={{ border: "3px solid black" }}
            />
            <span className="mx-5 ">
              <i class="bi bi-check-circle-fill fs-3 text-success"></i>
              <p style={{ width: "100px" }} className="fw-bold ">
                ORDER CONFIRMED
              </p>
            </span>
            <span className="mx-5 ">
              <i class="bi bi-check-circle-fill fs-3"></i>
              <p style={{ width: "100px" }} className="fw-bold ">
                START PRODUCTION
              </p>
            </span>
            <span className="mx-5 ">
              <i class="bi bi-check-circle-fill fs-3"></i>
              <p style={{ width: "100px" }} className="fw-bold ">
                QUALITY CHECK
              </p>
            </span>
            <span className="mx-5 ">
              <i class="bi bi-check-circle-fill fs-3"></i>
              <p style={{ width: "100px" }} className="fw-bold ">
                DISPATCHED ITEM{" "}
              </p>
            </span>
            <span className="mx-5 ">
              <i class="bi bi-check-circle-fill fs-3"></i>
              <p style={{ width: "100px" }} className="fw-bold ">
                PRODUCT DELIVERED
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className=" p-4">
        <h5 className="my-3">
          <i class="bi bi-truck"></i> DELIVERY ADDRESS
        </h5>
        <p className="pe-5">
          {" "}
          Bhagabandh,Krishna puri colony ,putki Road, Dhanbad ,Jharkhand 828111
        </p>
        <hr />
        <h5 className="my-3">
          <i class="bi bi-receipt"></i> BELLING ADDRESS
        </h5>
        <p className="pe-5">
          {" "}
          Bhagabandh,Krishna puri colony ,putki Road, Dhanbad ,Jharkhand 828111
        </p>
        <hr />
        <h5 className="my-3">CONTACT DETAILS</h5>
        <h6>Email@gmail.com</h6>
        <h6>+919507981942</h6>
        <hr />
        <h5 className="my-3">
          ORDER SUMMARY ({location.state.element.length})
        </h5>
        <h6 className="d-flex justify-content-between">
          <span>Sub Total</span>
          <span>
            <i class="bi bi-currency-rupee"></i>
            {price.toFixed(2)}
          </span>
        </h6>
        <h6 className="d-flex justify-content-between">
          <span>Delivery</span>
          <span>
            <i class="bi bi-currency-rupee"></i>
            {Delivery}
          </span>
        </h6>
        <hr />
        <h6 className="d-flex justify-content-between">
          <span> Total</span>
          <span>
            <i class="bi bi-currency-rupee"></i>
            {price.toFixed(2) + Delivery}
          </span>
        </h6>
        <div className="text-center">
          <button className="btn btn-outline-secondary">Print </button>
        </div>
      </div>
    </div>
  );
}
