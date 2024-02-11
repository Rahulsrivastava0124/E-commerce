import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrderSummmeryContainer from "../../containers/OrderSummmeryContainer";
export const CartCanvas = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header pb-0">
          <h5
            className="offcanvas-title text-primary fw-bold"
            id="offcanvasRightLabel"
          >
            Your Cart 
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <hr />
        <div className="offcanvas-body position-relative bg-body-tertiary">
          <OrderSummmeryContainer element={props.data.AddToCart}  />
          {props.data.AddToCart.length !== 0 ? (
            <button
              className="btn btn-primary container"
              onClick={() => navigate("/CheckOut",{
                state:null
              })}
              data-bs-dismiss="offcanvas"
            >
              {" "}
              Continue
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};
