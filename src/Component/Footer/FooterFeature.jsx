import React from "react";
import COD from "../../Svg/images/COD.webp";
import FastDelivery from "../../Svg/images/FastDelivery.webp";
import azpay from "../../Svg/images/azpay.webp";
import mobikwik from "../../Svg/images/mobikwik.webp";
import phonepe from "../../Svg/images/phonepe.webp";
import freecharge from "../../Svg/images/freecharge.webp";

export default function FooterFeature() {
  return (
    <div className="container border rounded p-3 mt-5">
      <div className="d-flex justify-content-around pt-3 ">
        <div className=" text-center ">
          <img
            src={FastDelivery}
            alt=""
            style={{ width: "70px", height: "50px" }}
          />
          <h6 className="my-2">Free Shipping</h6>
          <span className="text-secondary" style={{ fontSize: "smaller" }}>
            {" "}
            On Order Above Rs. 100{" "}
          </span>
        </div>
        <div className=" text-center">
          <img src={COD} alt="" style={{ width: "50px", height: "50px" }} />
          <h6 className="my-2">COD Available</h6>
          <span className="text-secondary" style={{ fontSize: "smaller" }}>
            {" "}
            @ Rs. 40 Per Order{" "}
          </span>
        </div>
        <div className=" text-center">
          <h5>Have Queries or Concerns?</h5>
          <button className="btn btn-outline-primary btn-lg mt-2">
            {" "}
            CONTACT US
          </button>
        </div>
      </div>
      <hr />
      <div>
        <h5>PAYMENT</h5>
        <span style={{ fontSize: "smaller" }} className="text-success">
          {" "}
          <i className="bi bi-shield-fill-check "></i> 100% Payment Protection,
          Easy Return Policy100% Payment Protection, Easy Return Policy
        </span>
        <div className="d-flex my-3 align-items-center">
          <button className="d-flex flex-column p-3 m-1 rounded  btn-outline-light align-items-center w-25 btn">
            <img src={azpay} alt="" style={{ width: "150px" }} />
          </button>
          <button className="d-flex flex-column p-3 m-1 rounded  btn-outline-light align-items-center w-25 btn">
            <img src={freecharge} alt="" style={{ width: "150px" }} />
          </button>
          <button className="d-flex flex-column p-3 m-1 rounded  btn-outline-light align-items-center w-25 btn">
            {" "}
            <img src={phonepe} alt="" style={{ width: "150px" }} />
          </button>
          <button className="d-flex flex-column p-3 m-1 rounded  btn-outline-light align-items-center w-25 btn">
            {" "}
            <img src={mobikwik} alt="" style={{ width: "150px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
