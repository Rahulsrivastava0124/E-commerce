import React from "react";
import offers from "../Svg/offers.svg";
import trackOrder from "../Svg/trackOrder.svg";
import APPSTORE from "../Svg/images/APPSTORE.webp";
import AppQRCode from "../Svg/images/AppQRCode.webp";
import PLAYSTORE from "../Svg/images/PLAYSTORE.webp";
import logo from "../Svg/images/logo.png";

export default function BrandFeature() {
  return (
    <div className="border rounded mt-5 p-4 bg-warning-subtle h-100">
      <div className="container text-center mt-4">
        <img
          src={logo}
          className="rounded"
          style={{ width: "150px", height: "100px" }}
          alt=""
        />

        <h1 className="fw-bold">
          <span className="text-primary ">On</span>
          <span className="text-warning ">Market</span>
        </h1>
      </div>
      <div className="d-flex flex-wrap justify-content-center mt-4 align-items-center">
        <img
          src={AppQRCode}
          alt=""
          style={{ width: "150px", height: "150px" }}
        />
        <div className="px-4 ">
          <h6 className="mb-3">Download the app to Track you Order and get</h6>
          <h6>notification on offers and delivery</h6>
          <div className="d-flex mt-3">
            <img
              src={PLAYSTORE}
              alt=""
              className="me-2"
              style={{ width: "100px", height: "30px" }}
            />
            <img
              src={APPSTORE}
              alt=""
              style={{ width: "100px", height: "30px" }}
            />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h5>Download Benefits</h5>
        <div className="d-flex justify-content-between align-items-center text-center">
          <div className="px-4">
            <img
              src={trackOrder}
              className=" mb-2"
              style={{ width: "60px", height: "60px" }}
              alt=""
            />
            <p>Get Exciting Offers</p>
          </div>
          <div className="px-4">
            <img
              src={offers}
              className=" mb-2"
              style={{ width: "60px", height: "60px" }}
              alt=""
            />
            <p> Easy To Track Orders</p>
          </div>
          <div className="px-4">
            <img
              src={trackOrder}
              className=" mb-2"
              style={{ width: "60px", height: "60px" }}
              alt=""
            />
            <p>Easy And Fast delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
}
